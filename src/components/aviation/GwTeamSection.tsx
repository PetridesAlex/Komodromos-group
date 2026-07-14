import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { Rss } from 'lucide-react'
import GwSectionHeader from './GwSectionHeader'
import { gwSocialLinks, gwTeamMembers, type GwTeamMember } from '../../data/globalWingsPage'

const SOCIAL_ICONS: Record<(typeof gwSocialLinks)[number]['id'], ReactNode> = {
  facebook: (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden>
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  ),
  twitter: (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden>
      <path
        fill="currentColor"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  dribbble: (
    <svg viewBox="0 0 24 24" width="13" height="13" aria-hidden>
      <path
        fill="currentColor"
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm7.568 5.302c1.4 1.787 2.247 4.025 2.247 6.458 0 .31-.02.615-.048.918a9.283 9.283 0 00-2.874-.787 19.64 19.64 0 00-.443-.916 11.228 11.228 0 011.118-6.673zm-2.114-1.403a10.04 10.04 0 00-1.676-2.078 12.015 12.015 0 00-4.778-1.003c-.096.002-.19.008-.285.014A10.043 10.043 0 0117.454 3.9zM12 2.032c1.637 0 3.158.487 4.433 1.323-.09.276-.186.548-.29.816a12.015 12.015 0 00-3.857.615 11.228 11.228 0 00-2.286-2.722A9.956 9.956 0 0112 2.032zM8.012 4.212c.735.893 1.365 1.877 1.872 2.928a11.228 11.228 0 00-4.012 1.003 10.043 10.043 0 012.14-3.931zm-4.38 5.302c.01-.002.02-.003.03-.005 1.5-.25 3.033-.385 4.58-.385.096 0 .19.002.285.004a19.64 19.64 0 01.443.916 9.283 9.283 0 002.874.787c-.048.303-.048.608-.048.918 0 2.433-.847 4.671-2.247 6.458a10.04 10.04 0 01-5.917-8.697zm2.114 11.698a11.228 11.228 0 002.286-2.722 12.015 12.015 0 003.857.615c.104.268.2.54.29.816A9.956 9.956 0 0112 21.968c-1.637 0-3.158-.487-4.433-1.323.09-.276.186-.548.29-.816a12.015 12.015 0 004.012-1.003 11.228 11.228 0 002.286 2.722zm4.38-2.114a10.043 10.043 0 01-2.14 3.931 11.228 11.228 0 004.012-1.003 19.64 19.64 0 01-.443-.916 9.283 9.283 0 00-2.874-.787c.048-.303.048-.608.048-.918 0-2.433.847-4.671 2.247-6.458a10.04 10.04 0 015.917 8.697 11.228 11.228 0 00-2.286 2.722 12.015 12.015 0 00-3.857-.615c-.104-.268-.2-.54-.29-.816z"
      />
    </svg>
  ),
  rss: <Rss aria-hidden size={13} strokeWidth={2} />,
}

function parseRole(role: string) {
  if (!role.includes(' | ')) {
    return { headline: role, credentials: [] as string[] }
  }
  const parts = role.split(' | ').map((p) => p.trim()).filter(Boolean)
  return { headline: parts[0], credentials: parts.slice(1) }
}

function parseBackground(text: string, roleHeadline: string) {
  const experiencePattern = /\d+\s*(?:years?|Years?)\s*(?:experience|Experience)\.?/i
  const items: string[] = []
  let experience: string | undefined
  const roleKey = roleHeadline.toLowerCase().replace(/[^a-z0-9]/g, '')

  for (const rawLine of text.split('\n')) {
    const line = rawLine
      .trim()
      .replace(/^Background:\s*/i, '')
      .replace(/^[-•–—]\s*/, '')
      .trim()

    if (!line || line === '.') continue

    if (experiencePattern.test(line)) {
      experience = line.replace(/\.$/, '')
      continue
    }

    const lineKey = line.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (lineKey && lineKey !== roleKey) {
      if (line.includes(',')) {
        items.push(
          ...line
            .split(',')
            .map((part) => part.trim())
            .filter(Boolean),
        )
      } else {
        items.push(line)
      }
    }
  }

  return { items, experience }
}

function teamInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean)
  const first = parts[0]?.[0] ?? ''
  const last = parts[parts.length - 1]?.[0] ?? ''
  return `${first}${last}`.toUpperCase()
}

function GwTeamPhoto({ member, eager = false }: { member: GwTeamMember; eager?: boolean }) {
  if (member.imageSrc) {
    return (
      <img
        className="gw-team-card__photo"
        src={member.imageSrc}
        alt={member.imageAlt ?? member.name}
        width={640}
        height={800}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable={false}
        style={member.imagePosition ? { objectPosition: member.imagePosition } : undefined}
      />
    )
  }

  return (
    <div className="gw-team-card__photo gw-team-card__photo--fallback" aria-hidden>
      <span className="gw-team-card__initials">{teamInitials(member.name)}</span>
    </div>
  )
}

function GwTeamCard({
  member,
  index,
  reduceMotion,
}: {
  member: GwTeamMember
  index: number
  reduceMotion: boolean | null
}) {
  const { headline, credentials } = parseRole(member.role)
  const { items: backgroundItems, experience } = member.background
    ? parseBackground(member.background, headline)
    : { items: [] as string[], experience: undefined }
  const highlights = [...credentials, ...backgroundItems]

  return (
    <motion.article
      className="gw-team-card"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-48px' }}
      transition={{
        duration: reduceMotion ? 0.01 : 0.6,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="gw-team-card__media">
        <motion.div
          className="gw-team-card__photo-wrap"
          whileHover={reduceMotion ? undefined : { scale: 1.06 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <GwTeamPhoto member={member} eager={index < 2} />
          <div className="gw-team-card__overlay" aria-hidden />
          <div className="gw-team-card__shine" aria-hidden />
        </motion.div>

        <div className="gw-team-card__content">
          <span className="gw-team-card__index" aria-hidden>
            {String(index + 1).padStart(2, '0')}
          </span>

          <div className="gw-team-card__main">
            <h3 className="gw-team-card__name">{member.name}</h3>
            <p className="gw-team-card__role">{headline}</p>
            {experience ? <span className="gw-team-card__experience">{experience}</span> : null}

            {highlights.length > 0 ? (
              <ul className="gw-team-card__highlights" aria-label="Qualifications">
                {highlights.map((item) => (
                  <li key={item} className="gw-team-card__highlight">
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>

          <ul className="gw-team-card__social" aria-label={`Connect with ${member.name}`}>
            {gwSocialLinks.map(({ id, label }) => (
              <li key={id}>
                <a href="#" className={`gw-team-card__social-link gw-team-card__social-link--${id}`} aria-label={label}>
                  {SOCIAL_ICONS[id]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <span className="gw-team-card__accent" aria-hidden />
    </motion.article>
  )
}

export default function GwTeamSection({ sectionId }: { sectionId: string }) {
  const reduceMotion = useReducedMotion()

  return (
    <section id={sectionId} className="gw-section gw-section--team">
      <div className="container">
        <GwSectionHeader
          className="gw-team-section__header"
          eyebrow="Leadership & expertise"
          title="Our Team"
          intro="Experienced aviation professionals dedicated to connecting talent with opportunity worldwide."
        />
      </div>

      <div className="gw-section__bleed gw-team-grid">
        {gwTeamMembers.map((member, i) => (
          <GwTeamCard key={member.name} member={member} index={i} reduceMotion={reduceMotion} />
        ))}
      </div>
    </section>
  )
}
