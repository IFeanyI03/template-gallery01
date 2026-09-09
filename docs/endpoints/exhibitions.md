# Endpoint: Exhibitions Program

## Overview
* **Program Calendar URL**: `/exhibitions`
* **Exhibition Detail URL**: `/exhibitions/:id`
* **HTTP Method**: `GET`
* **Nuxt Page Files**:
  - Calendar: [`pages/exhibitions/index.vue`](file:///Users/ifeany/Desktop/projects/side/pages/exhibitions/index.vue)
  - Exhibition Page: [`pages/exhibitions/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/exhibitions/%5Bid%5D.vue)
* **Data Composable**: [`composables/useExhibitions.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useExhibitions.ts)

---

## Route Parameters (`/exhibitions/:id`)

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Exhibition slug identifier (e.g. `phos-gene`, `synthetic-noise`). |

### Exhibitions Program

| Slug (`:id`) | Exhibition | Title | Status | Venue Location | Timeline |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `phos-gene` | `01` | Phos Gene | `CURRENT` | A.V.A. Berlin (Mitte) | OCT 2024 — MAR 2025 |
| `synthetic-noise` | `02` | Synthetic Noise | `ARCHIVED` | A.V.A. Tokyo (Minami-Aoyama) | NOV 2023 — FEB 2024 |
| `retinal-persistence` | `03` | Retinal Persistence | `ARCHIVED` | Tribeca Project Space (New York) | MAY 2023 — AUG 2023 |
| `vector-collapse` | `04` | Vector Collapse | `ARCHIVED` | A.V.A. Reykjavik | DEC 2022 — MAR 2023 |

---

## Response Data Structure (`ExhibitionDetail`)

```typescript
export interface ExhibitionArtistRef {
  id: string
  name: string
  studioLocation: string
  discipline: string
}

export interface ExhibitionWorkRef {
  id: string
  number: string
  title: string
  subtitle: string
  artist: string
  artistId: string
  category: string
  medium: string
  dimensions: string
  imageSrc: string
}

export interface ExhibitionPressReview {
  source: string
  author: string
  date: string
  quote: string
}

export interface ExhibitionDetail {
  id: string
  number: string
  title: string
  status: 'CURRENT' | 'UPCOMING' | 'ARCHIVED'
  isCurrent: boolean
  timeline: string
  curator: string
  venue: string
  city: string
  description: string
  curatorialEssay: string[]
  tags: string[]
  gallerySpecs: {
    galleryArea: string
    ceilingHeight: string
    lightingSpecs: string
    climateControl: string
    soundAcoustics: string
    admission: string
  }
  participatingArtists: ExhibitionArtistRef[]
  works: ExhibitionWorkRef[]
  pressReviews: ExhibitionPressReview[]
}
```

---

## Interactive Features
1. **Exhibition Status Indicator**:
   - `CURRENT` displays an active status dot; `ARCHIVED` displays an archived exhibition indicator.
2. **Visitor & Gallery Information**:
   - Details opening hours, venue location, free public admission, and guided walkthroughs.
3. **Curatorial Essay**:
   - Curatorial text contextualizing the artists, themes, and works on view.
4. **Participating Artists**:
   - Direct links to the represented artist profiles (`/artists/:id`).
5. **Exhibition Checklist**:
   - Card grid of all artworks presented in the exhibition with navigation to `/artworks/:id`.
6. **Exhibition Inquiry**:
   - Direct link to the inquiry desk:
     ```http
     GET /contact?type=exhibition&id={id}&ref={number}&title={encodeURIComponent(title)}
     ```
