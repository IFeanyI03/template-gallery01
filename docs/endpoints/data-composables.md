# Programmatic Data Composables API

A.V.A. employs centralized Nuxt 3 composables to deliver reactive, type-safe data access for artworks, represented artists, curatorial exhibitions, publications, and international art fair presentations.

---

## 1. `useArtworksData()`
Located in [`composables/useArtworks.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtworks.ts).

### Exported Functions & Members

```typescript
export const useArtworksData = () => {
  artworks: ArtworkDetail[]
  getArtworkById: (id: string) => ArtworkDetail | undefined
  getAdjacentArtworks: (id: string) => { prev: ArtworkDetail | null; next: ArtworkDetail | null }
}
```

### Methods
* **`getArtworkById(id: string)`**:
  - Resolves an artwork by slug (e.g. `diffusion-state`) or title.
* **`getAdjacentArtworks(id: string)`**:
  - Returns the previous and next artworks in the collection for sequential navigation.

---

## 2. `useArtistsData()`
Located in [`composables/useArtists.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtists.ts).

### Exported Functions & Members

```typescript
export const useArtistsData = () => {
  artists: ArtistDetail[]
  getArtistById: (id: string) => ArtistDetail | undefined
}
```

### Methods
* **`getArtistById(id: string)`**:
  - Resolves a represented artist by slug (e.g. `dr-elena-voss`) or full name.

---

## 3. `useExhibitionsData()`
Located in [`composables/useExhibitions.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useExhibitions.ts).

### Exported Functions & Members

```typescript
export const useExhibitionsData = () => {
  exhibitions: ExhibitionDetail[]
  getExhibitionById: (id: string) => ExhibitionDetail | undefined
}
```

### Methods
* **`getExhibitionById(id: string)`**:
  - Resolves an exhibition by slug (`phos-gene`, `synthetic-noise`, etc.) or title.

---

## 4. `useNewsData()`
Located in [`composables/useNews.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useNews.ts).

### Exported Functions & Members

```typescript
export const useNewsData = () => {
  articles: NewsArticle[]
  getArticleById: (id: string) => NewsArticle | undefined
}
```

---

## 5. `useArtFairsData()` (and `useSymposiaData()`)
Located in [`composables/useArtFairs.ts`](file:///Users/ifeany/Desktop/projects/side/composables/useArtFairs.ts).

### Exported Functions & Members

```typescript
export const useArtFairsData = () => {
  artFairs: ArtFairPresentation[]
  presentations: ArtFairPresentation[]
  symposia: ArtFairPresentation[]
}
```
