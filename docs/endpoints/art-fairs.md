# Endpoint: Art Fairs & Biennales

## Overview
* **URL**: `/art-fairs`
* **HTTP Method**: `GET`
* **Nuxt Page File**: [`pages/art-fairs.vue`](file:///Users/ifeany/Desktop/projects/side/pages/art-fairs.vue)
* **Data Composable**: [`composables/useArtFairs.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtFairs.ts)

---

## Content & Presentations

The `/art-fairs` route catalogues international art fair presentations, curated gallery booths, and biennial exhibitions representing gallery artists.

### Catalogued Art Fairs & Biennales

| ID | Fair | Dates | Presentation Title | Booth / Sector | Venue & City | Featured Artists |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `art-basel-2025` | Art Basel | Jun 19 — 22, 2025 | "The Luminous Surface" | Booth K14, Galleries Sector | Messe Basel, Basel | Elena Voss, Marcus Vane |
| `frieze-london-2025` | Frieze London | Oct 15 — 19, 2025 | "Kinetic Studies" | Booth F08, Focus Sector | The Regent’s Park, London | Kaelen Rhys |
| `venice-biennale-2026` | Venice Biennale Collateral | May 9 — Nov 22, 2026 | "Thresholds of Light" | Spazio Cannaregio | Fondamenta Cannaregio, Venice | Elena Voss, Talia Chen, Marcus Vane |
| `the-armory-show-2025` | The Armory Show | Sep 5 — 7, 2025 | "Fluid Landscapes" | Platform Sector | Javits Center, New York | Talia Chen |

---

## Response Data Structure (`ArtFairPresentation`)

```typescript
export interface ArtFairPresentation {
  id: string
  fair: string
  dates: string
  presentationTitle: string
  boothSector: string
  venue: string
  city: string
  featuredArtists: string[]
  description: string
  badge: string
}
```

---

## User Actions & Deep Linking

* **`INQUIRE ABOUT FAIR →`**:
  - Directs curators, collectors, and press to the gallery inquiry desk with fair and booth details:
  ```http
  GET /contact?type=art-fair&id={item.id}&title={encodeURIComponent(item.fair)}&booth={encodeURIComponent(item.boothSector)}
  ```
