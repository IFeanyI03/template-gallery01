# Endpoint: Artworks & Collection

## Overview
* **URL Pattern**: `/artworks/:id`
* **HTTP Method**: `GET`
* **Nuxt Page File**: [`pages/artworks/[id].vue`](file:///Users/ifeany/Desktop/projects/side/pages/artworks/%5Bid%5D.vue)
* **Data Composable**: [`composables/useArtworks.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtworks.ts)

---

## Route Parameters

| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique artwork slug (e.g. `diffusion-state`) or catalogue code (e.g. `AVA-2024-001`). |

### Catalogued Artworks

| Slug (`:id`) | Catalogue Code | Number / Title | Artist | Medium | Dimensions | Status |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `diffusion-state` | `AVA-2024-001` | `01. Diffusion State` | Elena Voss | Phosphor pigment on aluminium panel | 180 × 120 cm | `PERMANENT COLLECTION` |
| `kinetic-artifact` | `AVA-2024-002` | `02. Kinetic Study` | Kaelen Rhys | Motorized aluminium elements | 200 × 140 cm | `AVAILABLE` |
| `thermal-imprint` | `AVA-2024-003` | `03. Thermal Imprint` | Elena Voss | Pigment print & lenticular acrylic | 160 × 100 cm | `PERMANENT COLLECTION` |
| `vector-grid` | `AVA-2024-004` | `04. Vector Grid` | Marcus Vane | Anodized aluminium & stainless steel | 150 × 150 cm | `PERMANENT COLLECTION` |
| `system-override` | `AVA-2024-005` | `05. System Override` | Sora Sato | Screenprint on linen & single-channel video | 160 × 120 cm | `PRIVATE COLLECTION` |
| `fluid-dynamics` | `AVA-2024-006` | `06. Fluid Dynamics` | Talia Chen | Mineral pigment & ink on raw silk | 240 × 180 cm | `AVAILABLE` |

---

## Response Data Structure (`ArtworkDetail`)

```typescript
export interface ArtworkProvenance {
  year: string
  event: string
  location: string
  catalogueRef?: string
}

export interface ArtworkExhibitionRef {
  id: string
  title: string
  venue: string
  period: string
}

export interface ArtworkDetail {
  id: string
  number: string
  title: string
  subtitle: string
  artist: string
  artistId: string
  artistDiscipline: string
  year: string
  category: string
  medium: string
  dimensions: string
  edition: string
  imageSrc: string
  isDark?: boolean
  orbColor?: string
  status: 'PERMANENT COLLECTION' | 'AVAILABLE' | 'ON LOAN' | 'PRIVATE COLLECTION'
  accessionCode: string
  location: string
  conditionReport: string
  catalogueRaisonnéRef: string
  specifications: {
    dimensionsMetric: string
    dimensionsImperial: string
    framing: string
    displaySpecs: string
    colorTemp: string
    conservationHumidity: string
  }
  description: string
  curatorNotes: string
  provenance: ArtworkProvenance[]
  exhibitions: ArtworkExhibitionRef[]
}
```

---

## Interactive Features
1. **High-Resolution Artwork Lightbox**:
   - Trigger: Click on `VIEW FULLSCREEN ⊕` or the artwork visual.
   - Behavior: Mounts a fullscreen modal overlay presenting high-resolution imagery with artwork captioning.
2. **Artwork Specifications & Framing**:
   - Displays medium, dimensions, edition, framing specifications, and exhibition notes.
3. **Sequential Navigation**:
   - `← PREVIOUS` and `NEXT →` links navigate through the collection in chronological order.
4. **Artwork Acquisition & Inquiries**:
   - Action: `INQUIRE ABOUT THIS ARTWORK →`
   - Navigation:
     ```http
     GET /contact?type=artwork&id={id}&ref={accessionCode}&title={encodeURIComponent(title)}&artist={encodeURIComponent(artist)}
     ```
