export interface NewsArticle {
  id: string
  title: string
  category: 'BLOG' | 'ESSAYS' | 'PUBLICATIONS' | 'ACQUISITIONS' | 'PRESS'
  date: string
  author: string
  authorRole: string
  readingTime: string
  excerpt: string
  bodyParagraphs: string[]
  citation?: string
  tags: string[]
}

const newsArticlesData: NewsArticle[] = [
  {
    id: 'retinal-persistence-monograph',
    title: 'The Lingering Eye: Duration and Memory in Contemporary Light Art',
    category: 'BLOG',
    date: 'November 02, 2024',
    author: 'Elena Voss',
    authorRole: 'Artist, Berlin',
    readingTime: '6 MIN READ',
    excerpt: 'An essay considering the optical afterimage not as a physiological accident, but as a quiet medium where vision, time, and memory meet.',
    bodyParagraphs: [
      'In traditional painting, light is represented through pigment, shadow, and ground. In light-based installation, light itself is the material. Yet an equally vital part of the work occurs after the viewer looks away—in the subtle afterglow that remains imprinted upon the eye.',
      'When light recedes, the human eye continues to process the sensation for several seconds. This retinal memory is not a defect of vision; it is an intimate space where physical perception dissolves into cognitive reflection.',
      'By composing works that cycle through subtle shifts in intensity and color, we invite the viewer to experience seeing as an active, living process rather than passive consumption.'
    ],
    citation: 'Voss, E. (2024). "The Lingering Eye." A.V.A. Curatorial Journal, Vol. 4, pp. 12–28.',
    tags: ['CURATORIAL ESSAY', 'LIGHT ART', 'PERCEPTION']
  },
  {
    id: 'elena-voss-monograph-2024',
    title: 'New Publication: Elena Voss — Selected Works 2018–2024',
    category: 'PUBLICATIONS',
    date: 'October 18, 2024',
    author: 'A.V.A. Editions & Hatje Cantz',
    authorRole: 'Editorial Office, Berlin',
    readingTime: '4 MIN READ',
    excerpt: 'Announcing a comprehensive 240-page hardcover monograph documenting Elena Voss’s major installations, with essays by leading curators and critics.',
    bodyParagraphs: [
      'A.V.A. Editions, in collaboration with Hatje Cantz, is pleased to announce the release of “Elena Voss: Selected Works 2018–2024”, the first comprehensive monograph dedicated to the artist’s luminous wall works and architectural installations.',
      'Featuring newly commissioned essays by international curators, high-resolution photographic plates of recent exhibitions in Berlin, Paris, and New York, and full documentation of the artist’s material studies, the publication provides essential insight into one of the most compelling voices in contemporary light practice.',
      'Now available through the gallery bookshop and international distributors. Special collector’s editions accompanied by a signed print are available upon inquiry.'
    ],
    citation: 'Elena Voss: Selected Works 2018–2024. Berlin: Hatje Cantz & A.V.A. Editions, 2024. ISBN 978-3-7757-5420-1.',
    tags: ['MONOGRAPH', 'PUBLICATION', 'CATALOGUE']
  },
  {
    id: 'acquisition-system-override',
    title: 'Acquisition: Sora Sato’s “System Override” Enters Permanent Collection',
    category: 'ACQUISITIONS',
    date: 'September 28, 2024',
    author: 'A.V.A. Acquisitions Committee',
    authorRole: 'Curatorial Board',
    readingTime: '4 MIN READ',
    excerpt: 'The gallery announces the formal acquisition of Sora Sato’s monumental screenprint and single-channel video installation for the permanent collection.',
    bodyParagraphs: [
      'The A.V.A. Acquisitions Committee has confirmed the acquisition of “System Override” (2024) by Tokyo-based artist Sora Sato. The work pairs a hand-pulled monochrome screenprint on unbleached linen with a subtle, synchronized video projection.',
      'Bridging classical Japanese print traditions with contemporary moving image, Sato explores the quiet breakdowns and visual textures that arise within digital reproduction.',
      'The work enters the gallery’s permanent collection and is currently on view in the exhibition “Phos Gene” at A.V.A. Berlin through March 2025.'
    ],
    citation: 'A.V.A. Collection Record AVA-2024-005. Permanent Collection, Berlin.',
    tags: ['ACQUISITIONS', 'PERMANENT COLLECTION', 'MEDIA ART']
  },
  {
    id: 'artforum-press-feature',
    title: 'Artforum Review: “Phos Gene” at A.V.A. Berlin',
    category: 'PRESS',
    date: 'August 14, 2024',
    author: 'Julian Fischer',
    authorRole: 'Contributing Critic, Artforum International',
    readingTime: '5 MIN READ',
    excerpt: 'Critic Julian Fischer reviews the inaugural group survey “Phos Gene”, highlighting its contemplative spatial choreography and nuanced engagement with light.',
    bodyParagraphs: [
      '“In an era saturated with hurried visual stimuli, ‘Phos Gene’ offers an uncompromising alternative: an exhibition that demands quiet patience and rewards prolonged observation.”',
      'Fischer praises the spatial interplay between the gallery’s architectural proportions and the luminous works of Elena Voss and Talia Chen, noting that the exhibition treats light not as spectacle, but as an intimate material experience.',
      '“A beautifully conceived survey that demonstrates how contemporary light and sculpture can command both monumental presence and contemplative stillness.”'
    ],
    citation: 'Fischer, J. (2024). "Phos Gene: Review." Artforum International, Vol. 63, No. 3, pp. 64–68.',
    tags: ['ARTFORUM', 'EXHIBITION REVIEW', 'CRITIQUE']
  },
  {
    id: 'talia-chen-liquid-landscape',
    title: 'Talia Chen on Liquid Landscape and Moving Light',
    category: 'BLOG',
    date: 'July 12, 2024',
    author: 'Talia Chen',
    authorRole: 'Artist, Singapore',
    readingTime: '5 MIN READ',
    excerpt: 'An artist reflection by Talia Chen on the relationship between East Asian ink painting traditions, mountain mist, and moving light projection.',
    bodyParagraphs: [
      'In traditional Chinese landscape painting, blank space is as significant as the ink stroke itself. Mist and water are not painted as solid objects, but suggested through unpainted silk and gradual washes.',
      'When working with moving light projected onto raw silk, this relationship between presence and void becomes dynamic. The projection does not cover the textile; rather, it sinks into the weave of the fabric, responding to the mineral pigments ground by hand.',
      'Water in motion reminds us that landscape is never static. It is a continuous current of atmosphere, temperature, and breath.'
    ],
    citation: 'Chen, T. (2024). "Currents and Mist: Notes on Textile and Light." A.V.A. Editions, Berlin.',
    tags: ['ARTIST ESSAY', 'PAINTING', 'LANDSCAPE']
  }
]

export const useNewsData = () => {
  const articles = newsArticlesData
  return {
    articles
  }
}
