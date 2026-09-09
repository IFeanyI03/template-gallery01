# Endpoint: News & Blog

## Overview
* **URL**: `/news`
* **HTTP Method**: `GET`
* **Nuxt Page File**: [`pages/news.vue`](file:///Users/ifeany/Desktop/projects/side/pages/news.vue)
* **Data Composable**: [`composables/useNews.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useNews.ts)

---

## Category Filters
Users can filter articles and publications via tab controls:
* `ALL` (Default, displays complete list)
* `ESSAYS` (Curatorial and artist essays exploring light, space, and contemporary practice)
* `PUBLICATIONS` (Exhibition monographs, catalogues, and limited edition artist books)
* `PRESS` (Critical reviews from international journals including Artforum)
* `ACQUISITIONS` (Permanent collection acquisitions confirmed by the Curatorial Board)

---

## Catalogued Articles

| Article ID | Title | Category | Date | Author / Role |
| :--- | :--- | :--- | :--- | :--- |
| `retinal-persistence-monograph` | The Lingering Eye: Duration and Memory in Contemporary Light Art | `ESSAYS` | Nov 02, 2024 | Elena Voss (Artist, Berlin) |
| `elena-voss-monograph-2024` | New Publication: Elena Voss — Selected Works 2018–2024 | `PUBLICATIONS` | Oct 18, 2024 | A.V.A. Editions & Hatje Cantz |
| `acquisition-system-override` | Acquisition: Sora Sato’s “System Override” Enters Permanent Collection | `ACQUISITIONS` | Sep 28, 2024 | A.V.A. Acquisitions Committee |
| `artforum-press-feature` | Artforum Review: “Phos Gene” at A.V.A. Berlin | `PRESS` | Aug 14, 2024 | Julian Fischer (Artforum) |
| `talia-chen-liquid-landscape` | Talia Chen on Liquid Landscape and Moving Light | `ESSAYS` | Jul 12, 2024 | Talia Chen (Artist, Singapore) |

---

## Response Data Structure (`NewsArticle`)

```typescript
export interface NewsArticle {
  id: string
  title: string
  category: 'ESSAYS' | 'PUBLICATIONS' | 'ACQUISITIONS' | 'PRESS'
  date: string
  author: string
  authorRole: string
  readingTime: string
  excerpt: string
  bodyParagraphs: string[]
  citation?: string
  tags: string[]
}
```

---

## Interactive Article Reader Modal
* Clicking `READ ARTICLE →` on any card opens a reading modal with the full text, author citation, and publication notes.
* Modal includes a direct gallery inquiry CTA:
  ```http
  GET /contact?type=publication&id={article.id}&title={encodeURIComponent(article.title)}
  ```
