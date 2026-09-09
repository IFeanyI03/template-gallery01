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
  vaultLocation?: string
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

const artworksData: ArtworkDetail[] = [
  {
    id: 'diffusion-state',
    number: '01',
    title: 'Diffusion State',
    subtitle: 'Luminescent Panel',
    artist: 'Elena Voss',
    artistId: 'dr-elena-voss',
    artistDiscipline: 'Light & Optical Art',
    year: '2024',
    category: 'DIFFUSION',
    medium: 'Phosphor pigment and custom light program on aluminium panel',
    dimensions: '180 × 120 cm (70 ⅞ × 47 ¼ in)',
    edition: 'Edition of 3 + 2 Artist Proofs',
    imageSrc: '/images/diffusion_state.png',
    orbColor: '#D4A017',
    status: 'PERMANENT COLLECTION',
    accessionCode: 'AVA-2024-001',
    location: 'Gallery Collection Storage, Berlin',
    vaultLocation: 'Gallery Collection Storage, Berlin',
    conditionReport: 'Pristine condition',
    catalogueRaisonnéRef: 'AVA-CR-2024-001',
    specifications: {
      dimensionsMetric: '180 × 120 cm',
      dimensionsImperial: '70 ⅞ × 47 ¼ in',
      framing: 'Brushed black aluminium tray frame',
      displaySpecs: 'Subdued ambient gallery lighting recommended',
      colorTemp: 'Warm neutral ambient balance',
      conservationHumidity: 'Standard museum environment (45–55% RH)'
    },
    description: '“Diffusion State” investigates the delicate threshold where light dissolves into shadow, evoking the optical afterglow experienced when an intense light source recedes. Composed with luminescent pigments that respond subtly to programmed changes in gallery illumination, the work invites prolonged, meditative looking.',
    curatorNotes: 'Accompanied by a certificate of authenticity signed by the artist. First exhibited in the survey “Phos Gene” at A.V.A. Berlin.',
    provenance: [
      { year: '2024', event: 'Acquired directly from the artist’s studio', location: 'Berlin' },
      { year: '2024', event: 'Included in the exhibition “Phos Gene”', location: 'A.V.A. Berlin' }
    ],
    exhibitions: [
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' },
      { id: 'retinal-persistence', title: 'Retinal Persistence', venue: 'Tribeca Project Space, New York', period: 'MAY 2023 — AUG 2023' }
    ]
  },
  {
    id: 'kinetic-artifact',
    number: '02',
    title: 'Kinetic Study',
    subtitle: 'Chroma Shift',
    artist: 'Kaelen Rhys',
    artistId: 'kaelen-rhys',
    artistDiscipline: 'Kinetic Sculpture & Moving Image',
    year: '2024',
    category: 'KINETIC',
    medium: 'Motorized aluminium elements and custom motion program',
    dimensions: '200 × 140 cm (78 ¾ × 55 ⅛ in)',
    edition: 'Unique (1 of 1)',
    imageSrc: '/images/kinetic_artifact.png',
    orbColor: '#2C1A5F',
    status: 'AVAILABLE',
    accessionCode: 'AVA-2024-002',
    location: 'A.V.A. Mayfair Space, London',
    vaultLocation: 'A.V.A. Mayfair Space, London',
    conditionReport: 'Excellent condition',
    catalogueRaisonnéRef: 'AVA-CR-2024-002',
    specifications: {
      dimensionsMetric: '200 × 140 cm',
      dimensionsImperial: '78 ¾ × 55 ⅛ in',
      framing: 'Recessed blackened steel shadowbox',
      displaySpecs: 'Quiet motorized drive, continuous gallery operation',
      colorTemp: 'Directional halogen or LED spotlighting',
      conservationHumidity: 'Standard museum environment'
    },
    description: 'In “Kinetic Study”, Rhys explores physical rhythm and mechanical equilibrium. Slender aluminium rods oscillate in gentle, non-repeating movements, producing overlapping shadows that expand the sculpture across the gallery wall.',
    curatorNotes: 'Includes dedicated silent drive mechanism, artist-designed wall brackets, and signed certificate of authenticity.',
    provenance: [
      { year: '2024', event: 'Consigned by the artist', location: 'London' },
      { year: '2024', event: 'Presented at A.V.A. Berlin', location: 'Berlin' }
    ],
    exhibitions: [
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' },
      { id: 'synthetic-noise', title: 'Synthetic Noise', venue: 'A.V.A. Project Space, Tokyo', period: 'NOV 2023 — FEB 2024' }
    ]
  },
  {
    id: 'thermal-imprint',
    number: '03',
    title: 'Thermal Imprint',
    subtitle: 'Pigment & Lenticular',
    artist: 'Elena Voss',
    artistId: 'dr-elena-voss',
    artistDiscipline: 'Light & Optical Art',
    year: '2023',
    category: 'THERMAL',
    medium: 'Pigment print and lenticular acrylic in artist frame',
    dimensions: '160 × 100 cm (63 × 39 ⅜ in)',
    edition: 'Edition of 5 + 1 Artist Proof',
    imageSrc: '/images/thermal_imprint.png',
    orbColor: '#C84B31',
    status: 'PERMANENT COLLECTION',
    accessionCode: 'AVA-2023-003',
    location: 'Gallery Collection Storage, Berlin',
    vaultLocation: 'Gallery Collection Storage, Berlin',
    conditionReport: 'Pristine condition',
    catalogueRaisonnéRef: 'AVA-CR-2023-003',
    specifications: {
      dimensionsMetric: '160 × 100 cm',
      dimensionsImperial: '63 × 39 ⅜ in',
      framing: 'Solid white oak box frame with museum glass',
      displaySpecs: 'Wall-mounted at 150 cm centreline',
      colorTemp: 'Even wall wash lighting',
      conservationHumidity: '45–50% RH'
    },
    description: 'Drawing upon studies of heat and touch, “Thermal Imprint” visualizes temperature as a chromatic spectrum. As the viewer moves past the work, the lenticular layer shifts gently from deep indigo to warm amber, evoking body warmth fading into cool air.',
    curatorNotes: 'Featured in the monograph “Elena Voss: Selected Works 2018–2023”.',
    provenance: [
      { year: '2023', event: 'Acquired for the A.V.A. Permanent Collection', location: 'Berlin' }
    ],
    exhibitions: [
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' },
      { id: 'retinal-persistence', title: 'Retinal Persistence', venue: 'Tribeca Project Space, New York', period: 'MAY 2023 — AUG 2023' }
    ]
  },
  {
    id: 'vector-grid',
    number: '04',
    title: 'Vector Grid',
    subtitle: 'Wall Relief',
    artist: 'Marcus Vane',
    artistId: 'marcus-vane',
    artistDiscipline: 'Sculpture & Architectural Relief',
    year: '2023',
    category: 'VECTOR',
    medium: 'Anodized aluminium, stainless steel wire, and spatial shadow projection',
    dimensions: '150 × 150 cm (59 × 59 in)',
    edition: 'Unique in series (Edition of 3 unique variants)',
    imageSrc: '/images/vector_grid.png',
    isDark: true,
    status: 'PERMANENT COLLECTION',
    accessionCode: 'AVA-2023-004',
    location: 'Gallery Storage, Zürich',
    vaultLocation: 'Gallery Storage, Zürich',
    conditionReport: 'Flawless condition',
    catalogueRaisonnéRef: 'AVA-CR-2023-004',
    specifications: {
      dimensionsMetric: '150 × 150 cm',
      dimensionsImperial: '59 × 59 in',
      framing: 'Architectural wall standoffs, unframed',
      displaySpecs: 'Single focused overhead spotlight casting sharp drop shadows',
      colorTemp: '4000K neutral gallery spotlight',
      conservationHumidity: 'Standard gallery climate'
    },
    description: '“Vector Grid” pares architectural relief down to essential structural lines. Precision-milled aluminium elements create an open geometric framework that casts delicate shadows onto the wall, transforming throughout the day as ambient light shifts.',
    curatorNotes: 'Exhibited at the Venice Architecture Biennale and Kunsthalle Basel. Direct provenance from the artist’s Zürich studio.',
    provenance: [
      { year: '2023', event: 'Exhibited at Venice Architecture Biennale', location: 'Venice' },
      { year: '2023', event: 'Acquired by A.V.A. Collection', location: 'Zürich' }
    ],
    exhibitions: [
      { id: 'vector-collapse', title: 'Vector Collapse', venue: 'A.V.A. Project Space, Reykjavik', period: 'DEC 2022 — MAR 2023' },
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' }
    ]
  },
  {
    id: 'system-override',
    number: '05',
    title: 'System Override',
    subtitle: 'Screenprint & Video',
    artist: 'Sora Sato',
    artistId: 'v01d-system',
    artistDiscipline: 'Media Art & Screenprint',
    year: '2024',
    category: 'MEDIA ART',
    medium: 'Screenprint on linen and synchronized single-channel video',
    dimensions: '160 × 120 cm (63 × 47 ¼ in)',
    edition: 'Unique work',
    imageSrc: '/images/fluid_dynamics.png',
    orbColor: '#1A365D',
    status: 'PRIVATE COLLECTION',
    accessionCode: 'AVA-2024-005',
    location: 'Private Collection, Tokyo (On Exhibition Loan)',
    vaultLocation: 'Private Collection, Tokyo (On Exhibition Loan)',
    conditionReport: 'Pristine condition',
    catalogueRaisonnéRef: 'AVA-CR-2024-005',
    specifications: {
      dimensionsMetric: '160 × 120 cm',
      dimensionsImperial: '63 × 47 ¼ in',
      framing: 'Blackened ash wood floating frame',
      displaySpecs: 'Synchronized media playback',
      colorTemp: 'Controlled gallery lighting (< 50 lux)',
      conservationHumidity: '50% RH standard'
    },
    description: 'Combining hand-pulled monochrome screenprinting on unbleached linen with subtle, synchronized video projection, Sato reflects on the physical presence of media in contemporary life. Subtle horizontal lines gently drift over the printed fabric, uniting the permanence of ink with the ephemeral glow of light.',
    curatorNotes: 'Courtesy of Private Collection, Tokyo. Loan secured for the duration of “Phos Gene”.',
    provenance: [
      { year: '2024', event: 'Acquired by a Private Collection', location: 'Tokyo' },
      { year: '2024', event: 'On institutional loan to A.V.A.', location: 'Berlin' }
    ],
    exhibitions: [
      { id: 'synthetic-noise', title: 'Synthetic Noise', venue: 'A.V.A. Project Space, Tokyo', period: 'NOV 2023 — FEB 2024' },
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' }
    ]
  },
  {
    id: 'fluid-dynamics',
    number: '06',
    title: 'Fluid Dynamics',
    subtitle: 'Mineral Pigment on Silk',
    artist: 'Talia Chen',
    artistId: 'talia-chen',
    artistDiscipline: 'Painting & Video Installation',
    year: '2024',
    category: 'PAINTING',
    medium: 'Mineral pigment, ink on handwoven silk, and synchronized projection',
    dimensions: '240 × 180 cm (94 ½ × 70 ⅞ in)',
    edition: 'Unique (1 of 1)',
    imageSrc: '/images/fluid_dynamics.png',
    orbColor: '#1A5F7A',
    status: 'AVAILABLE',
    accessionCode: 'AVA-2024-006',
    location: 'A.V.A. Berlin Mitte Space',
    vaultLocation: 'A.V.A. Berlin Mitte Space',
    conditionReport: 'Pristine condition',
    catalogueRaisonnéRef: 'AVA-CR-2024-006',
    specifications: {
      dimensionsMetric: '240 × 180 cm',
      dimensionsImperial: '94 ½ × 70 ⅞ in',
      framing: 'Solid walnut float frame, museum conservation mounting',
      displaySpecs: 'Ultra-quiet overhead projection onto raw silk surface',
      colorTemp: '5000K museum daylight spectrum',
      conservationHumidity: '50% RH'
    },
    description: '“Fluid Dynamics” brings classical Chinese landscape principles into dialogue with moving light. Natural mineral pigments and ink washes on raw silk form the tactile ground for slow, organic water currents projected onto the textile, capturing the quiet majesty of mist and mountain water.',
    curatorNotes: 'Specially commissioned for the gallery’s 2024 program. Inquire with gallery directors for acquisition details and installation specifications.',
    provenance: [
      { year: '2024', event: 'Created for exhibition at A.V.A. Berlin', location: 'Singapore & Berlin' }
    ],
    exhibitions: [
      { id: 'phos-gene', title: 'Phos Gene', venue: 'A.V.A. Berlin', period: 'OCT 2024 — PRESENT' }
    ]
  }
]

export const useArtworksData = () => {
  const artworks = artworksData

  const getArtworkById = (id: string): ArtworkDetail | undefined => {
    if (!id) return undefined
    const cleanId = id.toLowerCase().trim()
    return artworks.find(
      (a) =>
        a.id.toLowerCase() === cleanId ||
        a.title.toLowerCase() === cleanId
    )
  }

  const getAdjacentArtworks = (id: string) => {
    const index = artworks.findIndex((a) => a.id.toLowerCase() === id.toLowerCase().trim())
    if (index === -1) return { prev: null, next: null }
    return {
      prev: index > 0 ? artworks[index - 1] : null,
      next: index < artworks.length - 1 ? artworks[index + 1] : null
    }
  }

  return {
    artworks,
    getArtworkById,
    getAdjacentArtworks
  }
}
