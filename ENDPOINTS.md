# A.V.A. Contemporary Gallery
# Master Gallery Architecture & Endpoints Reference

**Gallery**: A.V.A. Contemporary Gallery  
**Architecture**: Nuxt 3 File-Based Routing  
**Locations**: Berlin (Mitte) • London (Mayfair) • Tokyo (Minami-Aoyama) • Reykjavik  
**Focus**: International Contemporary Art, Light, Sculpture, Painting & Moving Image  

---

## 1. Global Route Directory & Architecture

| Route Pattern | Component File | Description |
| :--- | :--- | :--- |
| `/` | [`pages/index.vue`](file:///Users/ifeany/Desktop/projects/side/pages/index.vue) | Gallery home and current exhibition on view (`HeroSection` and `ArtifactGrid`). |
| `/artworks/:id` | [`pages/artworks/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/artworks/%5Bid%5D.vue) | Artwork presentation page with high-resolution viewing, specifications, and inquiry desk. |
| `/artists` | [`pages/artists/index.vue`](file:///Users/ifeany/Desktop/projects/side/pages/artists/index.vue) | Directory of represented contemporary artists across international studios. |
| `/artists/:id` | [`pages/artists/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/artists/%5Bid%5D.vue) | Artist profile with biography, artist statement, selected works, and exhibition history. |
| `/exhibitions` | [`pages/exhibitions/index.vue`](file:///Users/ifeany/Desktop/projects/side/pages/exhibitions/index.vue) | Calendar of current, upcoming, and past gallery exhibitions. |
| `/exhibitions/:id` | [`pages/exhibitions/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/exhibitions/%5Bid%5D.vue) | Exhibition detail page with curatorial essay, participating artists, press reviews, and checklist. |
| `/archive` | [`pages/archive.vue`](file:///Users/ifeany/Desktop/projects/side/pages/archive.vue) | Gallery collection inventory and catalogue filterable by medium and availability status. |
| `/art-fairs` | [`pages/art-fairs.vue`](file:///Users/ifeany/Desktop/projects/side/pages/art-fairs.vue) | International art fairs and biennales (Art Basel, Frieze London, Venice Biennale, The Armory Show). |
| `/news` | [`pages/news.vue`](file:///Users/ifeany/Desktop/projects/side/pages/news.vue) | News & blog publications, curatorial essays, museum acquisition announcements, and press reviews. |
| `/status` | [`pages/status.vue`](file:///Users/ifeany/Desktop/projects/side/pages/status.vue) | Visitor information, gallery opening hours, addresses, and accessibility across all spaces. |
| `/contact` | [`pages/contact.vue`](file:///Users/ifeany/Desktop/projects/side/pages/contact.vue) | Gallery inquiries desk with context-aware pre-population for artworks, exhibitions, and artists. |
| `/about` | [`pages/about.vue`](file:///Users/ifeany/Desktop/projects/side/pages/about.vue) | Gallery history, artistic focus, architectural spaces, and A.V.A. Editions publishing. |
| `/legal` | [`pages/legal.vue`](file:///Users/ifeany/Desktop/projects/side/pages/legal.vue) | Rights, provenance standards, artist attribution, and visitor privacy policy. |

---

## 2. Collection & Artworks (`/artworks/:id`)

| Catalogue Code | Slug (`:id`) | Title | Artist | Medium | Dimensions | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `AVA-2024-001` | `diffusion-state` | Diffusion State | Elena Voss | Phosphor pigment on aluminium panel | 180 × 120 cm | `PERMANENT COLLECTION` |
| `AVA-2024-002` | `kinetic-artifact` | Kinetic Study | Kaelen Rhys | Motorized aluminium elements | 200 × 140 cm | `AVAILABLE` |
| `AVA-2024-003` | `thermal-imprint` | Thermal Imprint | Elena Voss | Pigment print & lenticular acrylic | 160 × 100 cm | `PERMANENT COLLECTION` |
| `AVA-2024-004` | `vector-grid` | Vector Grid | Marcus Vane | Anodized aluminium & stainless steel | 150 × 150 cm | `PERMANENT COLLECTION` |
| `AVA-2024-005` | `system-override` | System Override | Sora Sato | Screenprint on linen & single-channel video | 160 × 120 cm | `PRIVATE COLLECTION` |
| `AVA-2024-006` | `fluid-dynamics` | Fluid Dynamics | Talia Chen | Mineral pigment & ink on raw silk | 240 × 180 cm | `AVAILABLE` |

---

## 3. Represented Artists (`/artists/:id`)

| Artist Slug | Studio Base | Artist Name | Discipline | Representation Status |
| :--- | :--- | :--- | :--- | :--- |
| `dr-elena-voss` | Berlin, Germany | Elena Voss | Light & Optical Art | `REPRESENTED ARTIST` |
| `kaelen-rhys` | London, United Kingdom | Kaelen Rhys | Kinetic Sculpture & Moving Image | `REPRESENTED ARTIST` |
| `v01d-system` | Tokyo, Japan | Sora Sato | Media Art & Screenprint | `REPRESENTED ARTIST` |
| `talia-chen` | Singapore | Talia Chen | Painting & Video Installation | `REPRESENTED ARTIST` |
| `marcus-vane` | Zürich, Switzerland | Marcus Vane | Sculpture & Architectural Relief | `REPRESENTED ARTIST` |
| `aura-labs` | Reykjavik, Iceland | Linnea Dahl | Environmental Installation & Sculpture | `REPRESENTED ARTIST` |

---

## 4. Exhibitions Program (`/exhibitions/:id`)

| Series Slug | Number | Title | Status | Venue | Timeline |
| :--- | :--- | :--- | :--- | :--- | :--- |
| `phos-gene` | `01` | Phos Gene | `CURRENT` | A.V.A. Berlin (Mitte) | OCT 2024 — MAR 2025 |
| `synthetic-noise` | `02` | Synthetic Noise | `ARCHIVED` | A.V.A. Tokyo (Minami-Aoyama) | NOV 2023 — FEB 2024 |
| `retinal-persistence` | `03` | Retinal Persistence | `ARCHIVED` | Tribeca Project Space (New York) | MAY 2023 — AUG 2023 |
| `vector-collapse` | `04` | Vector Collapse | `ARCHIVED` | A.V.A. Reykjavik | DEC 2022 — MAR 2023 |

---

## 5. Gallery Inquiries Deep-Linking Contract (`/contact`)

URL pattern:
```http
GET /contact?type={type}&id={id}&ref={ref}&title={title}&artist={artist}&booth={booth}
```

* Supported types:
  - `artwork` -> Pre-selects `ACQUISITION`, pre-populates artwork title, artist, and catalogue reference.
  - `exhibition` -> Pre-selects `CURATORIAL`, pre-populates curatorial loan and exhibition viewing request.
  - `artist` -> Pre-selects `ARTIST`, pre-populates artist representation, acquisition, or studio appointment.
  - `art-fair` -> Pre-selects `FAIR_PASS`, pre-populates VIP preview pass request.
  - `publication` -> Pre-selects `PRESS`, pre-populates press copy or citation request.

---

## 6. Programmatic Data Composables

```typescript
// Collection & Artworks
const { artworks, getArtworkById, getAdjacentArtworks } = useArtworksData()

// Represented Artists
const { artists, getArtistById } = useArtistsData()

// Curatorial Exhibitions Program
const { exhibitions, getExhibitionById } = useExhibitionsData()

// Essays, Monographs & Press
const { articles, getArticleById } = useNewsData()

// Art Fairs & Biennales
const { artFairs } = useArtFairsData()
```
