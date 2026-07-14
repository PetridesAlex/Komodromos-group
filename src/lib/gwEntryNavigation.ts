import { prefetchGwHeroVideo } from './gwHeroVideo'
import { markGlobalWingsEntryIntent } from './navigationHistory'

/** Prefetch Global Wings assets before a cross-domain navigation to global-wings.co. */
export function prepareGlobalWingsEntryNavigation() {
  markGlobalWingsEntryIntent()
  prefetchGwHeroVideo()
}
