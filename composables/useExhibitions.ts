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

const exhibitionsData: ExhibitionDetail[] = [
  {
    id: 'phos-gene',
    number: '01',
    title: 'Phos Gene',
    status: 'CURRENT',
    isCurrent: true,
    timeline: 'OCTOBER 12, 2024 — MARCH 15, 2025',
    curator: 'Curated by Elena Voss & The A.V.A. Curatorial Office',
    venue: 'A.V.A. Berlin, Linienstraße 144',
    city: 'Berlin, Germany',
    description: 'An exhibition exploring light, optical afterimages, and visual memory across sculpture, painting, and moving image.',
    curatorialEssay: [
      '“Phos Gene” brings together five international artists whose works investigate the persistence of light within human vision. Centred around the phenomenon of afterimages—the sensations that linger in the eye after encountering intense illumination—the exhibition examines how light alters our perception of space and memory.',
      'Spanning luminous wall sculptures, kinetic elements, and meditative video works, the presentation invites slow, contemplative looking. Each installation responds directly to the architectural qualities of the Berlin gallery, allowing natural daylight and calibrated illumination to converse across the rooms.',
      'Featuring works by Elena Voss, Kaelen Rhys, Talia Chen, Marcus Vane, and Sora Sato, “Phos Gene” marks a thoughtful inquiry into the physical and emotional weight of light in contemporary art.'
    ],
    tags: ['LIGHT INSTALLATION', 'SCULPTURE', 'KINETIC', 'PAINTING', 'MEDIA ART'],
    gallerySpecs: {
      galleryArea: '7,450 sq ft across two exhibition floors',
      ceilingHeight: '4.80 meters',
      lightingSpecs: 'Natural daylight and adjustable museum-grade LED track lighting',
      climateControl: '21°C (70°F), 45–50% RH standard gallery environment',
      soundAcoustics: 'Acoustically softened galleries for quiet viewing',
      admission: 'Free admission • Tuesday — Saturday, 11:00 — 18:00'
    },
    participatingArtists: [
      { id: 'dr-elena-voss', name: 'Elena Voss', studioLocation: 'Berlin, Germany', discipline: 'Light & Optical Art' },
      { id: 'kaelen-rhys', name: 'Kaelen Rhys', studioLocation: 'London, UK', discipline: 'Kinetic Sculpture & Moving Image' },
      { id: 'v01d-system', name: 'Sora Sato', studioLocation: 'Tokyo, Japan', discipline: 'Media Art & Screenprint' },
      { id: 'talia-chen', name: 'Talia Chen', studioLocation: 'Singapore', discipline: 'Painting & Video Installation' },
      { id: 'marcus-vane', name: 'Marcus Vane', studioLocation: 'Zürich, Switzerland', discipline: 'Sculpture & Architectural Relief' }
    ],
    works: [
      { id: 'diffusion-state', number: '01', title: 'Diffusion State', subtitle: 'Luminescent Panel', artist: 'Elena Voss', artistId: 'dr-elena-voss', category: 'DIFFUSION', medium: 'Phosphor pigment and custom light program on aluminium panel', dimensions: '180 × 120 cm', imageSrc: '/images/diffusion_state.png' },
      { id: 'kinetic-artifact', number: '02', title: 'Kinetic Study', subtitle: 'Chroma Shift', artist: 'Kaelen Rhys', artistId: 'kaelen-rhys', category: 'KINETIC', medium: 'Motorized aluminium elements and custom motion program', dimensions: '200 × 140 cm', imageSrc: '/images/kinetic_artifact.png' },
      { id: 'thermal-imprint', number: '03', title: 'Thermal Imprint', subtitle: 'Pigment & Lenticular', artist: 'Elena Voss', artistId: 'dr-elena-voss', category: 'THERMAL', medium: 'Pigment print and lenticular acrylic in artist frame', dimensions: '160 × 100 cm', imageSrc: '/images/thermal_imprint.png' },
      { id: 'vector-grid', number: '04', title: 'Vector Grid', subtitle: 'Wall Relief', artist: 'Marcus Vane', artistId: 'marcus-vane', category: 'SCULPTURE', medium: 'Anodized aluminium, stainless steel wire, and spatial shadow projection', dimensions: '150 × 150 cm', imageSrc: '/images/vector_grid.png' },
      { id: 'system-override', number: '05', title: 'System Override', subtitle: 'Screenprint & Video', artist: 'Sora Sato', artistId: 'v01d-system', category: 'MEDIA ART', medium: 'Screenprint on linen and synchronized single-channel video', dimensions: '160 × 120 cm', imageSrc: '/images/fluid_dynamics.png' },
      { id: 'fluid-dynamics', number: '06', title: 'Fluid Dynamics', subtitle: 'Mineral Pigment on Silk', artist: 'Talia Chen', artistId: 'talia-chen', category: 'PAINTING', medium: 'Mineral pigment, ink on handwoven silk, and synchronized projection', dimensions: '240 × 180 cm', imageSrc: '/images/fluid_dynamics.png' }
    ],
    pressReviews: [
      {
        source: 'Artforum International',
        author: 'Julian Fischer',
        date: 'November 2024',
        quote: '“Phos Gene” creates a quiet, transcendent gallery experience that treats light not merely as illumination, but as physical presence.'
      },
      {
        source: 'The Art Newspaper',
        author: 'Clara Møller',
        date: 'October 2024',
        quote: 'A beautifully paced exhibition where monumental scale and delicate subtlety achieve a rare harmony.'
      }
    ]
  },
  {
    id: 'synthetic-noise',
    number: '02',
    title: 'Synthetic Noise',
    status: 'ARCHIVED',
    isCurrent: false,
    timeline: 'NOVEMBER 2023 — FEBRUARY 2024',
    curator: 'Curated by Kaelen Rhys & Tokyo Gallery Office',
    venue: 'A.V.A. Tokyo, Minami-Aoyama',
    city: 'Tokyo, Japan',
    description: 'An investigation into subtle signal interference, sound, and visual repetition across kinetic sculpture and screenprint.',
    curatorialEssay: [
      '“Synthetic Noise” examined the quiet irregularities that exist within electronic sound and image reproduction. Rather than treating visual or acoustic interference as an error, artists Kaelen Rhys and Sora Sato embraced subtle disruption as an expressive artistic language.',
      'Presenting kinetic wall reliefs alongside hand-pulled screenprints and video installations, the exhibition invited visitors to consider the fragile material reality of contemporary digital media.'
    ],
    tags: ['KINETIC', 'PRINTMAKING', 'SOUND INSTALLATION'],
    gallerySpecs: {
      galleryArea: '5,100 sq ft single-level hall',
      ceilingHeight: '3.60 meters',
      lightingSpecs: 'Low ambient gallery lighting',
      climateControl: '20°C, 50% RH standard',
      soundAcoustics: 'Acoustic treatment for multi-channel sound',
      admission: 'Exhibition concluded • Catalogue available'
    },
    participatingArtists: [
      { id: 'kaelen-rhys', name: 'Kaelen Rhys', studioLocation: 'London, UK', discipline: 'Kinetic Sculpture & Moving Image' },
      { id: 'v01d-system', name: 'Sora Sato', studioLocation: 'Tokyo, Japan', discipline: 'Media Art & Screenprint' }
    ],
    works: [
      { id: 'kinetic-artifact', number: '02', title: 'Kinetic Study', subtitle: 'Chroma Shift', artist: 'Kaelen Rhys', artistId: 'kaelen-rhys', category: 'KINETIC', medium: 'Motorized aluminium elements and custom motion program', dimensions: '200 × 140 cm', imageSrc: '/images/kinetic_artifact.png' },
      { id: 'system-override', number: '05', title: 'System Override', subtitle: 'Screenprint & Video', artist: 'Sora Sato', artistId: 'v01d-system', category: 'MEDIA ART', medium: 'Screenprint on linen and synchronized single-channel video', dimensions: '160 × 120 cm', imageSrc: '/images/fluid_dynamics.png' }
    ],
    pressReviews: [
      {
        source: 'Frieze Magazine',
        author: 'Kenji Takahashi',
        date: 'January 2024',
        quote: 'An elegant survey of how motion and printmaking converge into poetic spatial installations.'
      }
    ]
  },
  {
    id: 'retinal-persistence',
    number: '03',
    title: 'Retinal Persistence',
    status: 'ARCHIVED',
    isCurrent: false,
    timeline: 'MAY 2023 — AUGUST 2023',
    curator: 'Curated by Elena Voss',
    venue: 'Tribeca Project Space, New York',
    city: 'New York, USA',
    description: 'A focused solo survey of Elena Voss’s early luminescent works and studies in optical duration.',
    curatorialEssay: [
      'Held at the Tribeca Project Space in New York, “Retinal Persistence” was a focused solo presentation tracking five years of Elena Voss’s experiments with phosphorescent materials and controlled light.',
      'The exhibition featured early pigment drawings alongside monumental light boxes that slowly cycled through tones of amber, lavender, and deep grey.'
    ],
    tags: ['LIGHT INSTALLATION', 'SOLO SURVEY', 'OPTICAL ART'],
    gallerySpecs: {
      galleryArea: '3,800 sq ft street-level gallery',
      ceilingHeight: '4.20 meters',
      lightingSpecs: 'Dimmed ambient viewing rooms',
      climateControl: '21°C, 45% RH',
      soundAcoustics: 'Quiet viewing environment',
      admission: 'Exhibition concluded • Private collection loans returned'
    },
    participatingArtists: [
      { id: 'dr-elena-voss', name: 'Elena Voss', studioLocation: 'Berlin, Germany', discipline: 'Light & Optical Art' }
    ],
    works: [
      { id: 'diffusion-state', number: '01', title: 'Diffusion State', subtitle: 'Luminescent Panel', artist: 'Elena Voss', artistId: 'dr-elena-voss', category: 'DIFFUSION', medium: 'Phosphor pigment and custom light program on aluminium panel', dimensions: '180 × 120 cm', imageSrc: '/images/diffusion_state.png' },
      { id: 'thermal-imprint', number: '03', title: 'Thermal Imprint', subtitle: 'Pigment & Lenticular', artist: 'Elena Voss', artistId: 'dr-elena-voss', category: 'THERMAL', medium: 'Pigment print and lenticular acrylic in artist frame', dimensions: '160 × 100 cm', imageSrc: '/images/thermal_imprint.png' }
    ],
    pressReviews: [
      {
        source: 'The New York Times',
        author: 'Sarah Jenkins',
        date: 'June 2023',
        quote: 'Voss’s light panels possess an uncanny stillness, holding the viewer’s gaze until the eye begins to see in a new way.'
      }
    ]
  },
  {
    id: 'vector-collapse',
    number: '04',
    title: 'Vector Collapse',
    status: 'ARCHIVED',
    isCurrent: false,
    timeline: 'DECEMBER 2022 — MARCH 2023',
    curator: 'Curated by Marcus Vane & Linnea Dahl',
    venue: 'A.V.A. Project Space, Grandagarður 20',
    city: 'Reykjavik, Iceland',
    description: 'A dialogue between precision-milled architectural sculptures and Nordic volcanic landscape materials.',
    curatorialEssay: [
      'Conceived as a visual conversation between Marcus Vane’s minimalist aluminium wall reliefs and Linnea Dahl’s basalt and cast glass sculptures, “Vector Collapse” contrasted machine-milled precision with geological form.',
      'The exhibition took advantage of Reykjavik’s dramatic winter daylight, with low sunbeams casting sharp angles across the metallic surfaces and through cast volcanic glass elements.'
    ],
    tags: ['SCULPTURE', 'ARCHITECTURAL RELIEF', 'GLASS & BASALT'],
    gallerySpecs: {
      galleryArea: '4,200 sq ft harbour-front space',
      ceilingHeight: '5.20 meters',
      lightingSpecs: 'Natural northern daylight and overhead spots',
      climateControl: '19°C, 45% RH standard',
      soundAcoustics: 'Natural open warehouse acoustics',
      admission: 'Exhibition concluded'
    },
    participatingArtists: [
      { id: 'marcus-vane', name: 'Marcus Vane', studioLocation: 'Zürich, Switzerland', discipline: 'Sculpture & Architectural Relief' },
      { id: 'aura-labs', name: 'Linnea Dahl', studioLocation: 'Reykjavik, Iceland', discipline: 'Environmental Installation & Sculpture' }
    ],
    works: [
      { id: 'vector-grid', number: '04', title: 'Vector Grid', subtitle: 'Wall Relief', artist: 'Marcus Vane', artistId: 'marcus-vane', category: 'SCULPTURE', medium: 'Anodized aluminium, stainless steel wire, and spatial shadow projection', dimensions: '150 × 150 cm', imageSrc: '/images/vector_grid.png' }
    ],
    pressReviews: [
      {
        source: 'Nordic Art Review',
        author: 'Arnar Sigurdsson',
        date: 'January 2023',
        quote: 'A striking interplay of industrial precision and primeval stone in the winter light of Reykjavik.'
      }
    ]
  }
]

export const useExhibitionsData = () => {
  const exhibitions = exhibitionsData

  const getExhibitionById = (id: string): ExhibitionDetail | undefined => {
    if (!id) return undefined
    const cleanId = id.toLowerCase().trim()
    return exhibitions.find(
      (e) =>
        e.id.toLowerCase() === cleanId ||
        e.title.toLowerCase() === cleanId
    )
  }

  const currentExhibition = exhibitions.find((e) => e.isCurrent) || exhibitions[0]

  return {
    exhibitions,
    getExhibitionById,
    currentExhibition
  }
}
