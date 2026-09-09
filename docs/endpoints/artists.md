# Endpoint: Represented Artists

## Overview
* **Artists Roster URL**: `/artists`
* **Artist Profile URL**: `/artists/:id`
* **HTTP Method**: `GET`
* **Nuxt Page Files**:
  - Directory: [`pages/artists/index.vue`](file:///Users/ifeany/Desktop/projects/side/pages/artists/index.vue)
  - Artist Page: [`pages/artists/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/artists/%5Bid%5D.vue)
* **Data Composable**: [`composables/useArtists.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtists.ts)

---

## Route Parameters (`/artists/:id`)

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique artist slug (e.g. `dr-elena-voss`, `kaelen-rhys`). |

### Represented Artists

| Slug (`:id`) | Studio Location | Artist Name | Medium / Discipline | Representation Status |
| :--- | :--- | :--- | :--- | :--- |
| `dr-elena-voss` | Berlin, Germany | Elena Voss | Light & Optical Art | `REPRESENTED ARTIST` |
| `kaelen-rhys` | London, United Kingdom | Kaelen Rhys | Kinetic Sculpture & Moving Image | `REPRESENTED ARTIST` |
| `v01d-system` | Tokyo, Japan | Sora Sato | Media Art & Screenprint | `REPRESENTED ARTIST` |
| `talia-chen` | Singapore | Talia Chen | Painting & Video Installation | `REPRESENTED ARTIST` |
| `marcus-vane` | Zürich, Switzerland | Marcus Vane | Sculpture & Architectural Relief | `REPRESENTED ARTIST` |
| `aura-labs` | Reykjavik, Iceland | Linnea Dahl | Environmental Installation & Sculpture | `REPRESENTED ARTIST` |

---

## Response Data Structure (`ArtistDetail`)

```typescript
export interface ArtistWorkSummary {
  id: string
  number: string
  title: string
  subtitle: string
  category: string
  year: string
  medium: string
  dimensions: string
  imageSrc: string
  status: string
}

export interface ArtistExhibitionRecord {
  id: string
  year: string
  title: string
  venue: string
  city: string
  dates: string
  type: 'SOLO EXHIBITION' | 'GROUP EXHIBITION' | 'BIENNALE PAVILION'
}

export interface ArtistDetail {
  id: string
  name: string
  studioLocation: string
  discipline: string
  representationStatus: 'REPRESENTED ARTIST' | 'GUEST ARTIST' | 'ESTATE / ARCHIVE'
  focus: string
  statement: string
  fullBio: string[]
  works: ArtistWorkSummary[]
  exhibitions: ArtistExhibitionRecord[]
  publications: string[]
}
```

---

## Interactive Features
1. **Selected Works by Artist**:
   - Displays artworks authored by the represented artist with direct navigation to artwork details (`/artworks/:id`).
2. **Exhibition History**:
   - Chronological exhibition timeline of solo shows, group exhibitions, and biennial presentations linked to exhibition pages (`/exhibitions/:id`).
3. **Selected Publications**:
   - Catalogue of artist monographs, exhibition catalogues, and critical essays.
4. **Inquire About Artist**:
   - Direct link to the gallery inquiry desk:
     ```http
     GET /contact?type=artist&id={id}&ref={studioLocation}&title={encodeURIComponent(name)}&artist={encodeURIComponent(name)}
     ```
