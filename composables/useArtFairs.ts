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

const artFairsData: ArtFairPresentation[] = [
  {
    id: 'art-basel-2025',
    fair: 'Art Basel',
    dates: 'June 19 — 22, 2025',
    presentationTitle: 'The Luminous Surface: Elena Voss & Marcus Vane',
    boothSector: 'Booth K14, Galleries Sector',
    venue: 'Messe Basel',
    city: 'Basel, Switzerland',
    featuredArtists: ['Elena Voss', 'Marcus Vane'],
    description: 'A dialogue between Elena Voss’s luminescent phosphor panels and Marcus Vane’s precision-milled architectural reliefs, examining the interplay of light and spatial geometry.',
    badge: 'GALLERIES SECTOR'
  },
  {
    id: 'frieze-london-2025',
    fair: 'Frieze London',
    dates: 'October 15 — 19, 2025',
    presentationTitle: 'Kaelen Rhys: Kinetic Studies',
    boothSector: 'Booth F08, Focus Sector',
    venue: 'The Regent’s Park',
    city: 'London, United Kingdom',
    featuredArtists: ['Kaelen Rhys'],
    description: 'A solo presentation of Kaelen Rhys’s motorized aluminium wall sculptures and animated line drawings exploring spatial rhythm and mechanical balance.',
    badge: 'FOCUS SECTOR'
  },
  {
    id: 'venice-biennale-2026',
    fair: 'Venice Biennale Collateral Exhibition',
    dates: 'May 9 — November 22, 2026',
    presentationTitle: 'Thresholds of Light: Contemporary Surveys',
    boothSector: 'Fondamenta Cannaregio',
    venue: 'Spazio Cannaregio',
    city: 'Venice, Italy',
    featuredArtists: ['Elena Voss', 'Talia Chen', 'Marcus Vane'],
    description: 'A curated collateral exhibition presenting large-scale installations, moving image projections, and sculptural reliefs within an historic Venetian space.',
    badge: 'COLLATERAL EXHIBITION'
  },
  {
    id: 'the-armory-show-2025',
    fair: 'The Armory Show',
    dates: 'September 5 — 7, 2025',
    presentationTitle: 'Talia Chen: Fluid Landscapes',
    boothSector: 'Platform Sector',
    venue: 'Javits Center',
    city: 'New York, USA',
    featuredArtists: ['Talia Chen'],
    description: 'A monumental presentation pairing Talia Chen’s large-scale mineral pigment paintings on raw silk with synchronized fluid projections.',
    badge: 'PLATFORM COMMISSION'
  }
]

export const useArtFairsData = () => {
  const artFairs = artFairsData
  return {
    artFairs,
    presentations: artFairs,
    symposia: artFairs
  }
}

export const useSymposiaData = useArtFairsData
