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

const artistsData: ArtistDetail[] = [
  {
    id: 'dr-elena-voss',
    name: 'Elena Voss',
    studioLocation: 'Berlin, Germany',
    discipline: 'Light & Optical Art',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Explores human visual perception, optical afterimages, and the lingering resonance of light in space.',
    statement: 'I am interested in what remains after light strikes the eye—the slow fade of an image in the mind, where physical vision and memory overlap.',
    fullBio: [
      'Elena Voss (b. 1983, Munich) is known for minimalist light installations and luminous wall works that examine human perception, optical sensation, and memory.',
      'Voss studied fine art at the Universität der Künste Berlin before completing postgraduate research in the physics of luminescence. Her installations and light works have been exhibited across Europe and North America, including major presentations in Berlin, Paris, London, and New York.',
      'Her works are represented in prominent public and private collections internationally, including the permanent collection of A.V.A., the Centre Pompidou media arts collection, and private holdings in Zurich and Tokyo.'
    ],
    works: [
      {
        id: 'diffusion-state',
        number: '01',
        title: 'Diffusion State',
        subtitle: 'Luminescent Panel',
        category: 'DIFFUSION',
        year: '2024',
        medium: 'Phosphor pigment and custom light program on aluminium panel',
        dimensions: '180 × 120 cm (70 ⅞ × 47 ¼ in)',
        imageSrc: '/images/diffusion_state.png',
        status: 'PERMANENT COLLECTION'
      },
      {
        id: 'thermal-imprint',
        number: '03',
        title: 'Thermal Imprint',
        subtitle: 'Pigment & Lenticular',
        category: 'THERMAL',
        year: '2023',
        medium: 'Pigment print and lenticular acrylic in artist frame',
        dimensions: '160 × 100 cm (63 × 39 ⅜ in)',
        imageSrc: '/images/thermal_imprint.png',
        status: 'PERMANENT COLLECTION'
      }
    ],
    exhibitions: [
      { id: 'phos-gene', year: '2024', title: 'Phos Gene', venue: 'A.V.A. Berlin', city: 'Berlin', dates: 'OCT 2024 — PRESENT', type: 'SOLO EXHIBITION' },
      { id: 'retinal-persistence', year: '2023', title: 'Retinal Persistence', venue: 'Tribeca Project Space', city: 'New York', dates: 'MAY 2023 — AUG 2023', type: 'SOLO EXHIBITION' }
    ],
    publications: [
      'Elena Voss: Light and Memory (Hatje Cantz, 2024)',
      'Elena Voss: Selected Works 2018–2023 (A.V.A. Editions, 2023)',
      'Perception and Duration in Contemporary Light Art (Art Journal, 2022)'
    ]
  },
  {
    id: 'kaelen-rhys',
    name: 'Kaelen Rhys',
    studioLocation: 'London, United Kingdom',
    discipline: 'Kinetic Sculpture & Moving Image',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Investigates mechanical balance, spatial rhythm, and the subtle friction between geometry and movement.',
    statement: 'Motion reveals the architecture of space. I search for quiet moments where geometric precision begins to breathe.',
    fullBio: [
      'Kaelen Rhys (b. 1989, London) creates kinetic wall sculptures and animated line drawings that investigate rhythm, mechanical balance, and spatial tension.',
      'A graduate of the Slade School of Fine Art in London, Rhys combines structural mechanics with subtle, continuous movement that responds gently to environmental vibrations.',
      'Rhys has presented solo projects at Frieze London and completed site-specific architectural commissions in Berlin and Tokyo. Represented by A.V.A. since 2022.'
    ],
    works: [
      {
        id: 'kinetic-artifact',
        number: '02',
        title: 'Kinetic Study',
        subtitle: 'Chroma Shift',
        category: 'KINETIC',
        year: '2024',
        medium: 'Motorized aluminium elements and custom motion program',
        dimensions: '200 × 140 cm (78 ¾ × 55 ⅛ in)',
        imageSrc: '/images/kinetic_artifact.png',
        status: 'AVAILABLE'
      }
    ],
    exhibitions: [
      { id: 'phos-gene', year: '2024', title: 'Phos Gene', venue: 'A.V.A. Berlin', city: 'Berlin', dates: 'OCT 2024 — PRESENT', type: 'GROUP EXHIBITION' },
      { id: 'synthetic-noise', year: '2023', title: 'Synthetic Noise', venue: 'A.V.A. Project Space', city: 'Tokyo', dates: 'NOV 2023 — FEB 2024', type: 'SOLO EXHIBITION' }
    ],
    publications: [
      'Kaelen Rhys: Kinetic Structures (Mousse Publishing, 2024)',
      'Forms in Movement (A.V.A. Exhibition Catalogue, 2023)'
    ]
  },
  {
    id: 'v01d-system',
    name: 'Sora Sato',
    studioLocation: 'Tokyo, Japan',
    discipline: 'Media Art & Screenprint',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Repetition, subtle signal interference, and the delicate material presence of electronic screens.',
    statement: 'Every screen carries its own quiet imperfection. When an electronic image breaks, its physical surface becomes visible.',
    fullBio: [
      'Sora Sato (b. 1986, Tokyo) explores the relationship between traditional Japanese printmaking and moving image technologies. Working from his studio in Minato-ku, Sato creates layered works that pair hand-pulled monochrome screenprints with subtle video projections.',
      'His installations have been exhibited at the Museum of Contemporary Art Tokyo, the NTT InterCommunication Center (ICC), and international media art exhibitions across Asia and Europe.',
      'Sato’s works are included in notable private collections in Tokyo, Singapore, and Berlin.'
    ],
    works: [
      {
        id: 'system-override',
        number: '05',
        title: 'System Override',
        subtitle: 'Screenprint & Video',
        category: 'MEDIA ART',
        year: '2024',
        medium: 'Screenprint on linen and synchronized single-channel video',
        dimensions: '160 × 120 cm (63 × 47 ¼ in)',
        imageSrc: '/images/fluid_dynamics.png',
        status: 'PRIVATE COLLECTION'
      }
    ],
    exhibitions: [
      { id: 'synthetic-noise', year: '2023', title: 'Synthetic Noise', venue: 'A.V.A. Project Space', city: 'Tokyo', dates: 'NOV 2023 — FEB 2024', type: 'GROUP EXHIBITION' },
      { id: 'phos-gene', year: '2024', title: 'Phos Gene', venue: 'A.V.A. Berlin', city: 'Berlin', dates: 'OCT 2024 — PRESENT', type: 'GROUP EXHIBITION' }
    ],
    publications: [
      'Sora Sato: Surface and Signal (Tokyo Art Press, 2024)'
    ]
  },
  {
    id: 'talia-chen',
    name: 'Talia Chen',
    studioLocation: 'Singapore',
    discipline: 'Painting & Video Installation',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Fluidity, mountain mist, and the intersection of classical East Asian ink traditions with contemporary projection.',
    statement: 'Water has no fixed geometry. Painting with motion allows us to explore atmosphere, mist, and current as living materials.',
    fullBio: [
      'Talia Chen (b. 1991, Singapore) works across painting, video, and ink on silk, bridging East Asian landscape traditions with contemporary media.',
      'Trained at LASALLE College of the Arts in Singapore and the École des Beaux-Arts in Paris, Chen creates large-scale video projections and mineral pigment works that evoke shifting mist, river currents, and mountain terrains.',
      'Her works have been shown at the Singapore Art Museum, the Centre d’Art Contemporain Genève, and institutions throughout Southeast Asia and Europe.'
    ],
    works: [
      {
        id: 'fluid-dynamics',
        number: '06',
        title: 'Fluid Dynamics',
        subtitle: 'Mineral Pigment on Silk',
        category: 'PAINTING',
        year: '2024',
        medium: 'Mineral pigment, ink on handwoven silk, and synchronized projection',
        dimensions: '240 × 180 cm (94 ½ × 70 ⅞ in)',
        imageSrc: '/images/fluid_dynamics.png',
        status: 'AVAILABLE'
      }
    ],
    exhibitions: [
      { id: 'phos-gene', year: '2024', title: 'Phos Gene', venue: 'A.V.A. Berlin', city: 'Berlin', dates: 'OCT 2024 — PRESENT', type: 'GROUP EXHIBITION' }
    ],
    publications: [
      'Talia Chen: Liquid Topographies (Singapore Art Museum Press, 2024)',
      'Currents and Mist: New Works (A.V.A. Editions, 2023)'
    ]
  },
  {
    id: 'marcus-vane',
    name: 'Marcus Vane',
    studioLocation: 'Zürich, Switzerland',
    discipline: 'Sculpture & Architectural Relief',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Precision-milled metal, architectural wireframes, and the spatial dialogue between solid form and void.',
    statement: 'A line in space creates two worlds—the space it occupies and the quiet openness it frames.',
    fullBio: [
      'Marcus Vane (b. 1978, Zürich) is a Swiss sculptor whose practice investigates the architectural line as both physical construct and spatial boundary.',
      'Trained in architecture at ETH Zürich before dedicating himself to sculpture, Vane produces precision-milled aluminium wall reliefs and suspended steel compositions that respond directly to natural light and the volumes of exhibition rooms.',
      'His works have been exhibited at the Kunsthaus Zürich, the Venice Architecture Biennale, and the Swiss Institute in New York.'
    ],
    works: [
      {
        id: 'vector-grid',
        number: '04',
        title: 'Vector Grid',
        subtitle: 'Wall Relief',
        category: 'SCULPTURE',
        year: '2023',
        medium: 'Anodized aluminium, stainless steel wire, and spatial shadow projection',
        dimensions: '150 × 150 cm (59 × 59 in)',
        imageSrc: '/images/vector_grid.png',
        status: 'PERMANENT COLLECTION'
      }
    ],
    exhibitions: [
      { id: 'vector-collapse', year: '2022', title: 'Vector Collapse', venue: 'A.V.A. Project Space', city: 'Reykjavik', dates: 'DEC 2022 — MAR 2023', type: 'SOLO EXHIBITION' },
      { id: 'phos-gene', year: '2024', title: 'Phos Gene', venue: 'A.V.A. Berlin', city: 'Berlin', dates: 'OCT 2024 — PRESENT', type: 'GROUP EXHIBITION' }
    ],
    publications: [
      'Marcus Vane: Spatial Coordinates (Birkhäuser, 2023)',
      'The Architectural Line (A.V.A. Monograph, 2022)'
    ]
  },
  {
    id: 'aura-labs',
    name: 'Linnea Dahl',
    studioLocation: 'Reykjavik, Iceland',
    discipline: 'Environmental Installation & Sculpture',
    representationStatus: 'REPRESENTED ARTIST',
    focus: 'Natural light, acoustic resonance, and materials drawn from Nordic volcanic landscapes.',
    statement: 'Light in the north changes continuously. My work is an invitation to slow down and listen to the landscape.',
    fullBio: [
      'Linnea Dahl (b. 1976, Reykjavik) creates quiet, site-specific installations and sculptures utilizing basalt, cast volcanic glass, and ambient light.',
      'Educated at the Iceland University of the Arts and the Royal Institute of Art in Stockholm, Dahl’s work investigates duration, seasonal daylight, and geological time.',
      'Her installations have been presented at the Reykjavik Art Museum, the Nordic Pavilion, and museums across Scandinavia.'
    ],
    works: [],
    exhibitions: [
      { id: 'vector-collapse', year: '2022', title: 'Vector Collapse', venue: 'A.V.A. Project Space', city: 'Reykjavik', dates: 'DEC 2022 — MAR 2023', type: 'GROUP EXHIBITION' }
    ],
    publications: [
      'Linnea Dahl: Northern Light (Reykjavik Art Museum Press, 2024)',
      'Geological Memory in Contemporary Sculpture (Nordic Art Review, 2023)'
    ]
  }
]

export const useArtistsData = () => {
  const artists = artistsData

  const getArtistById = (id: string): ArtistDetail | undefined => {
    if (!id) return undefined
    const cleanId = id.toLowerCase().trim()
    return artists.find(
      (a) =>
        a.id.toLowerCase() === cleanId ||
        a.name.toLowerCase() === cleanId
    )
  }

  return {
    artists,
    getArtistById
  }
}
