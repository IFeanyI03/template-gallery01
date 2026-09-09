<template>
  <div v-if="artwork" class="page-artwork">
    <!-- Master Hero Header (Matches same style as all pages) -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ART.</span>
            <span>WORK.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ART.</span>
            <span>WORK.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>{{ artwork.artist.toUpperCase() }}</div>
              <div>“{{ artwork.title.toUpperCase() }}” ({{ artwork.year }})</div>
              <div>CATALOGUE: {{ artwork.accessionCode }}</div>
            </div>
            <p class="curatorial-statement">
              {{ artwork.description }}
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>STATUS: {{ artwork.status }}</div>
            <div>{{ artwork.dimensions }}</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Main Artwork Stage & List Specifications -->
    <section class="artwork-presentation-section">
      <div class="presentation-inner">
        <!-- Navigation Breadcrumb -->
        <div class="subpage-breadcrumb mono-label">
          <NuxtLink to="/archive" class="breadcrumb-back">
            <span>← BACK TO COLLECTION</span>
          </NuxtLink>
          <div class="breadcrumb-meta">
            <span>{{ artwork.accessionCode }}</span>
            <span class="sep">·</span>
            <span class="status-indicator" :class="{ alert: artwork.status === 'AVAILABLE' }">
              {{ artwork.status }}
            </span>
          </div>
        </div>

        <!-- Artwork Visual Showcase -->
        <div class="visual-stage" :class="{ 'is-dark': artwork.isDark }">
          <div
            v-if="artwork.orbColor && !artwork.isDark"
            class="ambient-orb"
            :style="{ backgroundColor: artwork.orbColor }"
            aria-hidden="true"
          ></div>

          <div class="visual-frame">
            <img
              :src="artwork.imageSrc"
              :alt="`${artwork.title} by ${artwork.artist}`"
              class="artwork-main-img"
            />
          </div>

          <div class="visual-bar">
            <div class="artwork-caption mono-subtle">
              <span class="caption-artist">{{ artwork.artist }}</span>
              <span class="caption-title">“{{ artwork.title }}” ({{ artwork.year }})</span>
              <span class="caption-medium">{{ artwork.medium }}</span>
            </div>
            <button class="fullscreen-btn mono-label" @click="showLightbox = true">
              <span>VIEW FULLSCREEN ⊕</span>
            </button>
          </div>
        </div>

        <!-- Artwork Details as a Clean Structured List -->
        <div class="specifications-list-block">
          <div class="list-section-header mono-label">
            <span>CATALOGUE SPECIFICATIONS</span>
            <span>ACCESSION: {{ artwork.accessionCode }}</span>
          </div>

          <ul class="data-spec-list mono-label">
            <li class="spec-row">
              <span class="row-term">ARTIST</span>
              <span class="row-value">
                <NuxtLink :to="`/artists/${artwork.artistId}`" class="link-inline">
                  {{ artwork.artist }} →
                </NuxtLink>
              </span>
            </li>
            <li class="spec-row">
              <span class="row-term">TITLE & YEAR</span>
              <span class="row-value font-display-bold">{{ artwork.title }} ({{ artwork.year }})</span>
            </li>
            <li class="spec-row">
              <span class="row-term">MEDIUM</span>
              <span class="row-value">{{ artwork.medium }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">DIMENSIONS</span>
              <span class="row-value">{{ artwork.dimensions }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">FRAMING</span>
              <span class="row-value">{{ artwork.specifications.framing }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">EDITION</span>
              <span class="row-value">{{ artwork.edition }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">CURRENT STATUS</span>
              <span class="row-value status-tag" :class="{ available: artwork.status === 'AVAILABLE' }">
                {{ artwork.status }}
              </span>
            </li>
            <li class="spec-row">
              <span class="row-term">LOCATION</span>
              <span class="row-value">{{ artwork.location || artwork.vaultLocation }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">CONDITION</span>
              <span class="row-value">{{ artwork.conditionReport }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">CATALOGUE RAISONNÉ</span>
              <span class="row-value">{{ artwork.catalogueRaisonnéRef }}</span>
            </li>
          </ul>

          <!-- Inquire CTA Bar -->
          <div class="inquiry-action-bar">
            <NuxtLink :to="inquiryLink" class="inquire-primary-btn mono-label">
              <span>INQUIRE ABOUT THIS ARTWORK</span>
              <span class="btn-arrow">→</span>
            </NuxtLink>
            <span class="inquire-note mono-subtle">
              Direct contact with gallery directors regarding pricing, availability, and institutional loans. Ref: {{ artwork.accessionCode }}.
            </span>
          </div>
        </div>

        <!-- Curatorial Notes Section -->
        <div class="curatorial-notes-block">
          <div class="list-section-header mono-label">
            <span>CURATOR'S NOTE</span>
            <span>EXHIBITION ESSAY</span>
          </div>
          <div class="notes-content">
            <p class="notes-text">
              {{ artwork.curatorNotes }}
            </p>
          </div>
        </div>

        <!-- Exhibition Presentations as a List -->
        <div v-if="artwork.exhibitions.length > 0" class="exhibitions-list-block">
          <div class="list-section-header mono-label">
            <span>EXHIBITION PRESENTATIONS</span>
            <span>{{ artwork.exhibitions.length }} RECORDED</span>
          </div>

          <ul class="line-items-list">
            <li
              v-for="exh in artwork.exhibitions"
              :key="exh.id"
              class="line-item"
            >
              <div class="item-meta mono-subtle">{{ exh.period }}</div>
              <div class="item-title-group">
                <span class="item-title-text">{{ exh.title }}</span>
                <span class="item-venue mono-subtle">{{ exh.venue }}</span>
              </div>
              <NuxtLink :to="`/exhibitions/${exh.id}`" class="item-action-link mono-label">
                <span>VIEW EXHIBITION →</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Provenance History as a List -->
        <div v-if="artwork.provenance.length > 0" class="provenance-list-block">
          <div class="list-section-header mono-label">
            <span>PROVENANCE</span>
            <span>DOCUMENTED RECORDS</span>
          </div>

          <ul class="line-items-list">
            <li
              v-for="(prov, idx) in artwork.provenance"
              :key="idx"
              class="line-item"
            >
              <div class="item-meta mono-subtle">{{ prov.year }}</div>
              <div class="item-title-group">
                <span class="item-title-text">{{ prov.event }}</span>
                <span class="item-venue mono-subtle">{{ prov.location }}</span>
              </div>
            </li>
          </ul>
        </div>

        <!-- Represented Artist Summary Row -->
        <div class="artist-summary-block">
          <div class="list-section-header mono-label">
            <span>REPRESENTED ARTIST</span>
            <span>STUDIO ARCHIVE</span>
          </div>
          <div class="artist-summary-row">
            <div class="artist-meta-left">
              <h2 class="artist-name-bold">{{ artwork.artist }}</h2>
              <div class="artist-disc mono-subtle">{{ artwork.artistDiscipline }}</div>
            </div>
            <NuxtLink :to="`/artists/${artwork.artistId}`" class="artist-profile-btn mono-label">
              <span>VIEW ARTIST PROFILE</span>
              <span class="btn-arrow">→</span>
            </NuxtLink>
          </div>
        </div>

        <!-- Sequential Artwork Traversal Nav -->
        <div class="traversal-nav-row">
          <NuxtLink
            v-if="prevArtwork"
            :to="`/artworks/${prevArtwork.id}`"
            class="traversal-nav-item prev mono-label"
          >
            <span>← PREVIOUS: {{ prevArtwork.title }}</span>
          </NuxtLink>
          <span v-else class="traversal-disabled mono-label">
            <span>← FIRST WORK</span>
          </span>

          <NuxtLink
            v-if="nextArtwork"
            :to="`/artworks/${nextArtwork.id}`"
            class="traversal-nav-item next mono-label"
          >
            <span>NEXT: {{ nextArtwork.title }} →</span>
          </NuxtLink>
          <span v-else class="traversal-disabled mono-label">
            <span>FINAL WORK →</span>
          </span>
        </div>
      </div>
    </section>

    <!-- Fullscreen Lightbox Modal -->
    <Teleport to="body">
      <div
        v-if="showLightbox"
        class="lightbox-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Fullscreen artwork view"
        @click.self="showLightbox = false"
      >
        <div class="lightbox-dialog">
          <div class="lightbox-header mono-label">
            <div class="lightbox-meta-info">
              <span>{{ artwork.accessionCode }}</span>
              <span>{{ artwork.title }} ({{ artwork.year }})</span>
              <span>{{ artwork.dimensions }}</span>
            </div>
            <button class="lightbox-close-btn mono-label" @click="showLightbox = false">
              <span>✕ CLOSE</span>
            </button>
          </div>

          <div class="lightbox-stage">
            <img
              :src="artwork.imageSrc"
              :alt="`${artwork.title} by ${artwork.artist}`"
              class="lightbox-img"
            />
          </div>

          <div class="lightbox-footer mono-subtle">
            <span>{{ artwork.artist }} · {{ artwork.medium }}</span>
            <span>CLICK OUTSIDE OR PRESS ESC TO CLOSE</span>
          </div>
        </div>
      </div>
    </Teleport>
  </div>

  <!-- Fallback if not found -->
  <div v-else class="page-not-found">
    <div class="not-found-inner">
      <span class="mono-label alert-text">// ARTWORK NOT FOUND</span>
      <h1 class="hero-title-sharp">
        <span>ARTWORK</span>
        <span>NOT FOUND.</span>
      </h1>
      <p class="curatorial-statement">
        The requested artwork does not correspond to any catalogued work in the collection.
      </p>
      <NuxtLink to="/archive" class="inquire-primary-btn mono-label">
        <span>← RETURN TO COLLECTION</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { useArtworksData } from '~/composables/useArtworks'

const route = useRoute()
const artworkId = computed(() => route.params.id as string)
const { artworks, getArtworkById } = useArtworksData()

const artwork = computed(() => getArtworkById(artworkId.value))

const showLightbox = ref(false)

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && showLightbox.value) {
    showLightbox.value = false
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleKeyDown)
  }
})

const currentIndex = computed(() => {
  if (!artwork.value) return -1
  return artworks.findIndex((a) => a.id === artwork.value?.id)
})

const prevArtwork = computed(() => {
  if (currentIndex.value <= 0) return null
  return artworks[currentIndex.value - 1]
})

const nextArtwork = computed(() => {
  if (currentIndex.value < 0 || currentIndex.value >= artworks.length - 1) return null
  return artworks[currentIndex.value + 1]
})

const inquiryLink = computed(() => {
  if (!artwork.value) return '/contact'
  const params = new URLSearchParams({
    type: 'artwork',
    id: artwork.value.id,
    ref: artwork.value.accessionCode,
    title: artwork.value.title,
    artist: artwork.value.artist
  })
  return `/contact?${params.toString()}`
})

useHead(() => {
  if (!artwork.value) {
    return { title: 'Artwork Not Found — A.V.A.' }
  }
  return {
    title: `${artwork.value.title} by ${artwork.value.artist} — A.V.A. Contemporary Gallery`,
    meta: [
      {
        name: 'description',
        content: `${artwork.value.title} (${artwork.value.year}) by ${artwork.value.artist}. ${artwork.value.medium}, ${artwork.value.dimensions}.`
      }
    ]
  }
})
</script>

<style scoped>
.page-artwork {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

/* Page Hero — Identical to other pages */
.page-hero {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 160px 40px 0;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
  min-height: 280px;
}

.hero-title-container {
  grid-column: 1 / span 8;
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.hero-title-blur,
.hero-title-sharp {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(4rem, 10vw, 10.5rem);
  line-height: 0.9;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
}

.hero-title-blur {
  position: absolute;
  top: 0;
  left: 0;
  color: var(--accent-purple);
  filter: blur(12.5px);
  opacity: 0.6;
  pointer-events: none;
}

.hero-title-sharp {
  position: relative;
  color: var(--color-ink);
}

.hero-meta-col {
  grid-column: 10 / span 3;
  border-left: 1px solid var(--color-border-grid);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.meta-top {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.meta-gallery {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.curatorial-statement {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

.meta-bottom {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* Presentation Container */
.artwork-presentation-section {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px 100px;
}

.presentation-inner {
  display: flex;
  flex-direction: column;
  gap: 64px;
}

/* Subpage Breadcrumb */
.subpage-breadcrumb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--color-border-grid);
}

.breadcrumb-back {
  color: var(--color-ink);
  transition: opacity 0.2s ease;
}

.breadcrumb-back:hover {
  opacity: 0.6;
}

.breadcrumb-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-ink-muted);
}

.status-indicator {
  color: #10b981;
}

.status-indicator.alert {
  color: #ef4444;
}

/* Visual Showcase */
.visual-stage {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background: #f3f2ee;
  border: 1px solid var(--color-border-grid);
  overflow: hidden;
}

.visual-stage.is-dark {
  background: #0d0d0d;
  border-color: #222;
}

.ambient-orb {
  position: absolute;
  width: 320px;
  height: 320px;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.25;
  pointer-events: none;
  top: 10%;
  right: 15%;
}

.visual-frame {
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.artwork-main-img {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
}

.visual-bar {
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid var(--color-border-grid);
}

.artwork-caption {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
}

.caption-artist {
  font-weight: 700;
  color: var(--color-ink);
}

.caption-title {
  color: var(--color-ink-muted);
}

.caption-medium {
  color: var(--color-ink-muted);
}

.fullscreen-btn {
  background: transparent;
  border: 1px solid var(--color-border-grid);
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--color-ink);
  white-space: nowrap;
}

.fullscreen-btn:hover {
  background: var(--color-ink);
  color: var(--color-ink-light);
}

/* Specifications List Block */
.specifications-list-block,
.curatorial-notes-block,
.exhibitions-list-block,
.provenance-list-block,
.artist-summary-block {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.list-section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 2px solid var(--color-ink);
  font-weight: 700;
}

.data-spec-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.row-term {
  color: var(--color-ink-muted);
  white-space: nowrap;
  min-width: 200px;
}

.row-value {
  text-align: right;
  color: var(--color-ink);
}

.font-display-bold {
  font-family: var(--font-display);
  font-weight: 900;
  letter-spacing: -0.01em;
}

.link-inline {
  color: var(--color-link-blue);
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.link-inline:hover {
  opacity: 0.6;
}

.status-tag {
  color: #10b981;
}

.status-tag.available {
  color: #ef4444;
}

/* Inquire Action Bar */
.inquiry-action-bar {
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-top: 32px;
}

.inquire-primary-btn {
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 24px;
  background: var(--color-ink);
  color: var(--color-ink-light);
  font-weight: 700;
  transition: opacity 0.2s ease;
}

.inquire-primary-btn:hover {
  opacity: 0.85;
}

.btn-arrow {
  font-size: 16px;
}

.inquire-note {
  color: var(--color-ink-muted);
}

/* Curatorial Notes */
.notes-content {
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border-grid);
}

.notes-text {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.7;
  color: var(--color-ink);
}

/* Line Items List (Exhibitions & Provenance) */
.line-items-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.line-item {
  display: grid;
  grid-template-columns: 200px 1fr auto;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.item-meta {
  color: var(--color-ink-muted);
}

.item-title-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.item-title-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--color-ink);
}

.item-venue {
  color: var(--color-ink-muted);
}

.item-action-link {
  color: var(--color-link-blue);
  text-decoration: underline;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}

.item-action-link:hover {
  opacity: 0.6;
}

/* Represented Artist Summary */
.artist-summary-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.artist-name-bold {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  margin: 0 0 4px;
}

.artist-disc {
  color: var(--color-ink-muted);
}

.artist-profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  border: 1px solid var(--color-ink);
  color: var(--color-ink);
  transition: all 0.2s ease;
  white-space: nowrap;
}

.artist-profile-btn:hover {
  background: var(--color-ink);
  color: var(--color-ink-light);
}

/* Traversal Row */
.traversal-nav-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  border-top: 1px solid var(--color-border-grid);
}

.traversal-nav-item {
  color: var(--color-link-blue);
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.traversal-nav-item:hover {
  opacity: 0.6;
}

.traversal-disabled {
  color: var(--color-ink-muted);
  opacity: 0.5;
}

/* Lightbox Modal */
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.lightbox-dialog {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 95vw;
  max-height: 95vh;
}

.lightbox-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
}

.lightbox-meta-info {
  display: flex;
  gap: 20px;
}

.lightbox-close-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.4);
  color: #fff;
  padding: 6px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.lightbox-close-btn:hover {
  background: #fff;
  color: #000;
}

.lightbox-stage {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 80vh;
}

.lightbox-img {
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
}

.lightbox-footer {
  display: flex;
  justify-content: space-between;
  color: #888;
}

/* Not Found */
.page-not-found {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 40px;
}

.not-found-inner {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 600px;
}

.alert-text {
  color: #ef4444;
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .hero-grid {
    grid-template-columns: 1fr;
  }
  .hero-meta-col {
    grid-column: 1 / -1;
    border-left: none;
    border-top: 1px solid var(--color-border-grid);
    padding-left: 0;
    padding-top: 20px;
  }
  .artwork-presentation-section {
    padding: 0 24px 60px;
  }
  .line-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
  .spec-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
  .row-value {
    text-align: left;
  }
  .artist-summary-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
