# SEO image alt text

Editable alt-text maps for content images across the site.  
SEO can update strings here without touching React components.

Decorative full-bleed heroes, logos, video posters, and preloaders stay `alt=""` on purpose.

## How to edit

1. Open the relevant `*ImageAlts.ts` file below.
2. Find the image path key (or filename for VIP Tour destinations).
3. Replace the string with unique, descriptive alt text (~80–125 characters).
4. Describe what is visible; include place/product names naturally.
5. Do **not** keyword-stuff.

## Files

| File | Powers | Notes |
|---|---|---|
| [`vipTourImageAlts.ts`](vipTourImageAlts.ts) | VIP Tour destination cards, heroes, galleries, lightbox | Nested by destination id → `01.webp`, `02.webp`, … |
| [`onassisImageAlts.ts`](onassisImageAlts.ts) | Christina O / Onassis category galleries, island tiles, category cards | Keys are public URL paths |
| [`yachtCharterImageAlts.ts`](yachtCharterImageAlts.ts) | Yacht fleet cards + Luxury Sky / Coral III galleries | |
| [`astrealProjectImageAlts.ts`](astrealProjectImageAlts.ts) | Astreal project detail galleries + lightbox | |
| [`luxuryCarsImageAlts.ts`](luxuryCarsImageAlts.ts) | Super & luxury car detail galleries | Cards already have `imageAlt` in data |
| [`fishingScubaImageAlts.ts`](fishingScubaImageAlts.ts) | Fishing / scuba detail galleries | Experience blocks use `imageAlt` in data |
| [`limousineImageAlts.ts`](limousineImageAlts.ts) | Chrysler + Lincoln limousine galleries | |
| [`vipSecurityImageAlts.ts`](vipSecurityImageAlts.ts) | VIP Security story images | |
| [`storageGalleryImageAlts.ts`](storageGalleryImageAlts.ts) | Storage2Rent parallax / gallery strip | Spotlight & tips already have alts in data |
| [`serviceCoverImageAlts.ts`](serviceCoverImageAlts.ts) | Homepage / VIP service covers, wedding packages & highlight tiles | |

Helpers:

- [`resolveImageAlts.ts`](resolveImageAlts.ts) — shared path→alt utilities
- Each map exports `get…ImageAlt(src, fallback)` used by page components

## Image files on disk

Almost all site photos live under:

`public/images/`

VIP Tour destinations specifically:

`public/images/services/vip-service/vip-limousine-location/{destination-id}/`

## Writing good alt text

- Unique per image within a gallery
- Natural English describing the photo
- Place/product name when helpful (e.g. Lefkara, Christina O, Astron Nova)
- Avoid stuffing (“VIP limousine Cyprus VIP tour Cyprus…”)
- Leave decorative heroes empty unless marketing explicitly wants a named hero alt

## Already handled outside these maps

Some areas already store alts in their data files (prefer editing there if present):

- Pool category / lining / service **detail** galleries — `src/data/poolGardenPage.ts`
- Air services — `src/data/airServicesPage.ts`
- Storage tips & spotlight — `src/data/storageUsefulTipsContent.ts`, `storagePageImages.ts`
- VIP Tour vehicles — `src/data/vipTourIntro.ts`
- Super luxury **card** covers — `src/data/superLuxuryCarsPage.ts` (`imageAlt`)
