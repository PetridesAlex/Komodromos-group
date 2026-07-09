import { prefetchGwHeroVideo } from './gwHeroVideo'

/** Prefetch Global Wings assets before a cross-domain navigation to global-wings.co. */
export function prepareGlobalWingsEntryNavigation() {
  prefetchGwHeroVideo()
}
