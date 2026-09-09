# A.V.A. — Contemporary Art Gallery Documentation

Welcome to the documentation for **A.V.A. Contemporary Gallery**. This directory contains specifications for all pages, routes, inquiry parameters, and data composables.

---

## Documentation Modules

1. [Artworks & Collection (`/artworks/:id`)](./artworks.md)
   - Catalogued artworks, mediums, dimensions, editions, framing specifications, lightbox view, and exhibition history.
2. [Represented Artists (`/artists`, `/artists/:id`)](./artists.md)
   - Represented artists roster, studio locations (Berlin, London, Tokyo, Singapore, Zürich, Reykjavik), artist statements, biographies, and selected works.
3. [Exhibitions Program (`/exhibitions`, `/exhibitions/:id`)](./exhibitions.md)
   - Exhibition timeline, curatorial essays, participating artists, press reviews, and checklists.
4. [Gallery Inquiries (`/contact`)](./contact-and-inquiries.md)
   - Context-aware inquiry pre-population (`type`, `id`, `ref`, `title`, `artist`, `booth`) for acquisitions, loans, and VIP fair passes.
5. [Art Fairs & Biennales (`/art-fairs`)](./art-fairs.md)
   - International art fairs (Art Basel, Frieze London, Venice Biennale, The Armory Show), booth presentations, and featured artists.
6. [News & Blog (`/news`)](./news.md)
   - Curatorial essays, exhibition catalogues, monographs, museum acquisitions, and press reviews.
7. [Programmatic Data Composables (`composables/`)](./data-composables.md)
   - TypeScript composables: `useArtworksData()`, `useArtistsData()`, `useExhibitionsData()`, `useNewsData()`, and `useArtFairsData()`.

For the single master reference, see [ENDPOINTS.md](../../ENDPOINTS.md) in the project root.
