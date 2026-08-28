import { useEffect, useRef, type ReactNode } from 'react'
import * as THREE from 'three'

export interface LightspeedProps {
  width?: number | string
  height?: number | string
  speed?: number
  primaryColor?: string
  secondaryColor?: string
  tertiaryColor?: string
  streakCount?: number
  stretchFactor?: number
  intensity?: number
  interactionEnabled?: boolean
  rotation?: number
  fadePower?: number
  opacity?: number
  quality?: 'low' | 'medium' | 'high'
  maxFPS?: number
  pauseWhenOffscreen?: boolean
  className?: string
  children?: ReactNode
  /** Fill the positioned parent (absolute inset); omit inline height to avoid layout blowout */
  fill?: boolean
}

const cn = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(' ')

const hexToRgb = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255,
      }
    : { r: 1, g: 0.4, b: 0.13 }
}

export default function Lightspeed({
  width = '100%',
  height = '100%',
  speed = 1.0,
  primaryColor = '#FF5722',
  secondaryColor = '#2196F3',
  tertiaryColor = '#4CAF50',
  streakCount = 128,
  stretchFactor = 0.05,
  intensity = 1.0,
  interactionEnabled = true,
  rotation = 0,
  fadePower = 2.0,
  opacity = 1.0,
  quality = 'medium',
  maxFPS = 60,
  pauseWhenOffscreen = true,
  className,
  children,
  fill = false,
}: LightspeedProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef<number>(0)
  const startTimeRef = useRef<number>(0)
  const lastFrameTimeRef = useRef<number>(0)
  const compressionTargetRef = useRef<number>(0)
  const compressionCurrentRef = useRef<number>(0)
  const isVisibleRef = useRef<boolean>(true)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const color1 = hexToRgb(primaryColor)
    const color2 = hexToRgb(secondaryColor)
    const color3 = hexToRgb(tertiaryColor)

    const capDimension = (value: number) => Math.min(Math.max(value, 1), 2048)

    const rect = container.getBoundingClientRect()
    const actualWidth = capDimension(rect.width)
    const actualHeight = capDimension(rect.height)

    const qualitySettings = {
      low: { pixelRatio: 1, antialias: false },
      medium: {
        pixelRatio: Math.min(window.devicePixelRatio, 2),
        antialias: true,
      },
      high: {
        pixelRatio: Math.min(window.devicePixelRatio, 3),
        antialias: true,
      },
    } as const
    const settings = qualitySettings[quality]

    const renderer = new THREE.WebGLRenderer({
      antialias: settings.antialias,
      alpha: true,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
    })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(actualWidth, actualHeight, false)
    renderer.setPixelRatio(settings.pixelRatio)
    renderer.domElement.style.width = '100%'
    renderer.domElement.style.height = '100%'
    renderer.domElement.style.display = 'block'
    renderer.domElement.style.position = 'absolute'
    renderer.domElement.style.inset = '0'
    renderer.domElement.style.maxHeight = '100%'
    renderer.domElement.style.pointerEvents = 'none'
    container.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1)

    const pixelRatio = settings.pixelRatio
    const bufferWidth = actualWidth * pixelRatio
    const bufferHeight = actualHeight * pixelRatio

    const uniforms = {
      iTime: { value: 0 },
      iResolution: { value: new THREE.Vector2(bufferWidth, bufferHeight) },
      iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      uCompression: { value: 0 },
      uColor1: { value: new THREE.Vector3(color1.r, color1.g, color1.b) },
      uColor2: { value: new THREE.Vector3(color2.r, color2.g, color2.b) },
      uColor3: { value: new THREE.Vector3(color3.r, color3.g, color3.b) },
      uStreakCount: { value: streakCount },
      uStretchFactor: { value: stretchFactor },
      uIntensity: { value: intensity },
      uSpeed: { value: speed },
      uRotation: { value: rotation },
      uFadePower: { value: fadePower },
      uOpacity: { value: opacity },
    }

    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader: `
        void main() {
          gl_Position = vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        #define PI 3.14159265359

        uniform float iTime;
        uniform vec2 iResolution;
        uniform vec4 iMouse;
        uniform float uCompression;
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        uniform vec3 uColor3;
        uniform float uStreakCount;
        uniform float uStretchFactor;
        uniform float uIntensity;
        uniform float uSpeed;
        uniform float uRotation;
        uniform float uFadePower;
        uniform float uOpacity;

        float computeStreak(vec2 coord, float timeOffset) {
          coord.x = coord.x * uStreakCount;
          float horizontalPos = fract(coord.x);
          float columnIndex = floor(coord.x);
          coord.y *= uStretchFactor;
          float randomOffset = sin(columnIndex * 215.4);
          float speedVariation = cos(columnIndex * 33.1) * 0.3 + 0.7;
          float dynamicTrail = mix(95.0, 35.0, speedVariation);
          float animatedY = fract(coord.y + timeOffset * speedVariation + randomOffset);
          float streakValue = animatedY * dynamicTrail;
          streakValue = 1.0 / streakValue;
          streakValue = smoothstep(0.0, 1.0, streakValue * streakValue);
          streakValue = sin(streakValue * PI) * (speedVariation * 5.0);
          float horizontalFalloff = sin(horizontalPos * PI);
          return streakValue * (horizontalFalloff * horizontalFalloff);
        }

        void main() {
          vec2 uv = (gl_FragCoord.xy - 0.5 * iResolution) / iResolution.y;
          float distFromCenter = length(uv) + 0.1;
          float angle = atan(uv.x, uv.y) / PI + uRotation;
          float radius = 2.5 / distFromCenter;
          vec2 polarCoord = vec2(angle, radius);
          polarCoord.y *= mix(1.0, 0.5, uCompression);

          float animTime = iTime * 0.4 * uSpeed;
          vec3 finalColor = vec3(0.0);
          finalColor += uColor1 * computeStreak(polarCoord, animTime);
          finalColor += uColor2 * computeStreak(polarCoord, animTime + 0.33);
          finalColor += uColor3 * computeStreak(polarCoord, animTime + 0.66);
          finalColor *= uIntensity;
          finalColor *= pow(distFromCenter, uFadePower);
          finalColor *= uOpacity;

          float alpha = max(max(finalColor.r, finalColor.g), finalColor.b);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
    })

    const geometry = new THREE.PlaneGeometry(2, 2)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    const handleMouseMove = (event: MouseEvent) => {
      const box = container.getBoundingClientRect()
      uniforms.iMouse.value.x = event.clientX - box.left
      uniforms.iMouse.value.y = box.height - (event.clientY - box.top)
    }

    const handleMouseDown = () => {
      compressionTargetRef.current = 1
      uniforms.iMouse.value.z = 1
    }

    const handleMouseUp = () => {
      compressionTargetRef.current = 0
      uniforms.iMouse.value.z = 0
    }

    const handleTouchStart = (event: TouchEvent) => {
      if (event.touches.length === 0) return
      const touch = event.touches[0]
      const box = container.getBoundingClientRect()
      uniforms.iMouse.value.x = touch.clientX - box.left
      uniforms.iMouse.value.y = box.height - (touch.clientY - box.top)
      compressionTargetRef.current = 1
      uniforms.iMouse.value.z = 1
    }

    const handleTouchEnd = () => {
      compressionTargetRef.current = 0
      uniforms.iMouse.value.z = 0
    }

    if (interactionEnabled) {
      container.addEventListener('mousemove', handleMouseMove)
      container.addEventListener('mousedown', handleMouseDown)
      container.addEventListener('mouseup', handleMouseUp)
      container.addEventListener('touchstart', handleTouchStart)
      container.addEventListener('touchend', handleTouchEnd)
    }

    let observer: IntersectionObserver | null = null
    if (pauseWhenOffscreen) {
      observer = new IntersectionObserver(
        (entries) => {
          isVisibleRef.current = entries[0]?.isIntersecting ?? true
        },
        { threshold: 0 },
      )
      observer.observe(container)
    }

    const frameInterval = 1000 / maxFPS
    const animate = (currentTime: number) => {
      rafRef.current = requestAnimationFrame(animate)

      if (!startTimeRef.current) {
        startTimeRef.current = currentTime
        lastFrameTimeRef.current = currentTime
      }

      const elapsed = currentTime - lastFrameTimeRef.current
      if (elapsed < frameInterval) return

      lastFrameTimeRef.current = currentTime - (elapsed % frameInterval)
      if (pauseWhenOffscreen && !isVisibleRef.current) return

      uniforms.iTime.value = (currentTime - startTimeRef.current) * 0.001

      const delta = elapsed * 0.001
      compressionCurrentRef.current +=
        (compressionTargetRef.current - compressionCurrentRef.current) * 4 * delta
      uniforms.uCompression.value = compressionCurrentRef.current

      renderer.render(scene, camera)
    }

    rafRef.current = requestAnimationFrame(animate)

    const handleResize = () => {
      const box = container.getBoundingClientRect()
      const newWidth = capDimension(box.width)
      const newHeight = capDimension(box.height)
      renderer.setSize(newWidth, newHeight, false)
      uniforms.iResolution.value.set(newWidth * pixelRatio, newHeight * pixelRatio)
    }

    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(container)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      resizeObserver.disconnect()
      cancelAnimationFrame(rafRef.current)

      if (interactionEnabled) {
        container.removeEventListener('mousemove', handleMouseMove)
        container.removeEventListener('mousedown', handleMouseDown)
        container.removeEventListener('mouseup', handleMouseUp)
        container.removeEventListener('touchstart', handleTouchStart)
        container.removeEventListener('touchend', handleTouchEnd)
      }

      observer?.disconnect()
      geometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [
    primaryColor,
    secondaryColor,
    tertiaryColor,
    streakCount,
    stretchFactor,
    intensity,
    speed,
    rotation,
    fadePower,
    opacity,
    interactionEnabled,
    quality,
    maxFPS,
    pauseWhenOffscreen,
  ])

  const widthStyle = fill ? undefined : typeof width === 'number' ? `${width}px` : width
  const heightStyle = fill ? undefined : typeof height === 'number' ? `${height}px` : height

  return (
    <div
      ref={containerRef}
      className={cn('relative overflow-hidden', fill && 'absolute inset-0 h-full w-full', className)}
      style={
        widthStyle || heightStyle
          ? { width: widthStyle, height: heightStyle }
          : undefined
      }
      aria-hidden={children ? undefined : true}
    >
      {children ? (
        <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
          {children}
        </div>
      ) : null}
    </div>
  )
}
