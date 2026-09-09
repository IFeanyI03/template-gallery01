<template>
  <div v-if="artist" class="page-artist">
    <!-- Master Hero Header (Matches same style as all pages) -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ART.</span>
            <span>IST.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ART.</span>
            <span>IST.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>ARTIST: {{ artist.name.toUpperCase() }}</div>
              <div>STUDIO: {{ artist.studioLocation }}</div>
              <div>DISCIPLINE: {{ artist.discipline }}</div>
            </div>
            <p class="curatorial-statement">
              {{ artist.focus }}
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>REPRESENTATION: {{ artist.representationStatus }}</div>
            <div>A.V.A. CONTEMPORARY</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Main Artist Content Section (List & Linear Layout) -->
    <section class="artist-content-section">
      <div class="content-inner">
        <!-- Navigation Breadcrumb -->
        <div class="subpage-breadcrumb mono-label">
          <NuxtLink to="/artists" class="breadcrumb-back">
            <span>← BACK TO ARTISTS</span>
          </NuxtLink>
          <div class="breadcrumb-meta">
            <span>{{ artist.studioLocation }}</span>
            <span class="sep">·</span>
            <span class="status-indicator">{{ artist.discipline }}</span>
          </div>
        </div>

        <!-- Artist Profile Summary Bar -->
        <div class="artist-header-bar">
          <div class="artist-title-group">
            <h2 class="artist-full-name">{{ artist.name }}</h2>
            <div class="artist-studio-tag mono-subtle">{{ artist.studioLocation }} · {{ artist.representationStatus }}</div>
          </div>

          <NuxtLink :to="inquiryLink" class="inquire-profile-btn mono-label">
            <span>INQUIRE ABOUT ARTIST</span>
            <span class="btn-arrow">→</span>
          </NuxtLink>
        </div>

        <!-- Biography Section -->
        <div class="profile-list-block">
          <div class="list-section-header mono-label">
            <span>BIOGRAPHY</span>
            <span>CURATORIAL OVERVIEW</span>
          </div>
          <div class="bio-text-area">
            <p v-for="(para, idx) in artist.fullBio" :key="idx" class="bio-para">
              {{ para }}
            </p>
          </div>
        </div>

        <!-- Artist Statement Section -->
        <div class="profile-list-block">
          <div class="list-section-header mono-label">
            <span>ARTIST STATEMENT</span>
            <span>IN THE ARTIST'S WORDS</span>
          </div>
          <div class="statement-text-area">
            <blockquote class="artist-blockquote">
              “{{ artist.statement }}”
            </blockquote>
          </div>
        </div>

        <!-- Works on Record as a List -->
        <div class="profile-list-block">
          <div class="list-section-header mono-label">
            <span>CATALOGUED WORKS IN COLLECTION</span>
            <span>{{ artist.works.length }} WORKS ON RECORD</span>
          </div>

          <ul v-if="artist.works.length > 0" class="works-line-list">
            <li
              v-for="work in artist.works"
              :key="work.id"
              class="work-line-item"
            >
              <div class="work-thumb-cell">
                <img :src="work.imageSrc" :alt="work.title" class="work-thumb" />
              </div>
              <div class="work-info-cell">
                <span class="work-title-bold">{{ work.title }}</span>
                <span class="work-medium-line mono-subtle">{{ work.medium }}</span>
              </div>
              <div class="work-meta-cell mono-label">
                <div>{{ work.year }}</div>
                <div class="mono-subtle">{{ work.dimensions }}</div>
              </div>
              <div class="work-status-cell">
                <span class="status-pill mono-subtle" :class="{ available: work.status === 'AVAILABLE' }">
                  {{ work.status }}
                </span>
              </div>
              <div class="work-action-cell">
                <NuxtLink :to="`/artworks/${work.id}`" class="action-view-link mono-label">
                  <span>VIEW WORK →</span>
                </NuxtLink>
              </div>
            </li>
          </ul>
          <div v-else class="empty-list-notice mono-subtle">
            No catalogued works currently available online. Inquire with gallery directors for studio portfolios.
          </div>
        </div>

        <!-- Exhibitions History as a List -->
        <div v-if="artist.exhibitions.length > 0" class="profile-list-block">
          <div class="list-section-header mono-label">
            <span>EXHIBITION TIMELINE</span>
            <span>{{ artist.exhibitions.length }} EXHIBITIONS RECORDED</span>
          </div>

          <ul class="line-items-list">
            <li
              v-for="exh in artist.exhibitions"
              :key="exh.id"
              class="line-item"
            >
              <div class="item-meta mono-subtle">{{ exh.year }} · {{ exh.city }}</div>
              <div class="item-title-group">
                <div class="item-title-row">
                  <span class="item-title-text">{{ exh.title }}</span>
                  <span class="exh-badge mono-label">{{ exh.type }}</span>
                </div>
                <span class="item-venue mono-subtle">{{ exh.venue }} ({{ exh.dates }})</span>
              </div>
              <NuxtLink :to="`/exhibitions/${exh.id}`" class="item-action-link mono-label">
                <span>VIEW EXHIBITION →</span>
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Selected Publications as a List -->
        <div v-if="artist.publications.length > 0" class="profile-list-block">
          <div class="list-section-header mono-label">
            <span>SELECTED PUBLICATIONS & MONOGRAPHS</span>
            <span>{{ artist.publications.length }} TITLES</span>
          </div>

          <ul class="publications-line-list mono-label">
            <li
              v-for="(pub, idx) in artist.publications"
              :key="idx"
              class="publication-line-item"
            >
              <span class="pub-idx">{{ String(idx + 1).padStart(2, '0') }}.</span>
              <span class="pub-name">{{ pub }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <!-- Fallback if not found -->
  <div v-else class="page-not-found">
    <div class="not-found-inner">
      <span class="mono-label alert-text">// ARTIST RECORD NOT FOUND</span>
      <h1 class="hero-title-sharp">
        <span>ARTIST</span>
        <span>NOT FOUND.</span>
      </h1>
      <p class="curatorial-statement">
        The requested artist profile does not exist in the gallery catalogue.
      </p>
      <NuxtLink to="/artists" class="inquire-profile-btn mono-label">
        <span>← RETURN TO ARTISTS</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useArtistsData } from '~/composables/useArtists'

const route = useRoute()
const artistId = computed(() => route.params.id as string)
const { getArtistById } = useArtistsData()

const artist = computed(() => getArtistById(artistId.value))

const inquiryLink = computed(() => {
  if (!artist.value) return '/contact'
  const params = new URLSearchParams({
    type: 'artist',
    id: artist.value.id,
    ref: artist.value.studioLocation,
    title: artist.value.name,
    artist: artist.value.name
  })
  return `/contact?${params.toString()}`
})

useHead(() => {
  if (!artist.value) {
    return { title: 'Artist Not Found — A.V.A.' }
  }
  return {
    title: `${artist.value.name} — A.V.A. Contemporary Gallery`,
    meta: [
      {
        name: 'description',
        content: `Artist profile, biography, statement, and catalogue of works by ${artist.value.name}.`
      }
    ]
  }
})
</script>

<style scoped>
.page-artist {
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

/* Artist Content Section */
.artist-content-section {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px 100px;
}

.content-inner {
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

/* Artist Header Bar */
.artist-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--color-ink);
  gap: 24px;
}

.artist-full-name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.03em;
  margin: 0 0 8px;
  color: var(--color-ink);
}

.artist-studio-tag {
  color: var(--color-ink-muted);
}

.inquire-profile-btn {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  background: var(--color-ink);
  color: var(--color-ink-light);
  font-weight: 700;
  transition: opacity 0.2s ease;
  white-space: nowrap;
}

.inquire-profile-btn:hover {
  opacity: 0.85;
}

.btn-arrow {
  font-size: 16px;
}

/* Profile List Blocks */
.profile-list-block {
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

.bio-text-area {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid var(--color-border-grid);
}

.bio-para {
  font-family: var(--font-display);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-ink);
  max-width: 900px;
}

.statement-text-area {
  padding: 32px 0;
  border-bottom: 1px solid var(--color-border-grid);
}

.artist-blockquote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  line-height: 1.5;
  color: var(--color-ink);
  margin: 0;
  max-width: 900px;
  border-left: 2px solid var(--color-ink);
  padding-left: 28px;
}

/* Works Line List */
.works-line-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.work-line-item {
  display: grid;
  grid-template-columns: 80px 1fr 180px 160px auto;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.work-thumb-cell {
  width: 80px;
  height: 60px;
  overflow: hidden;
  background: #f0f0f0;
}

.work-thumb {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.work-info-cell {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.work-title-bold {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--color-ink);
}

.work-medium-line {
  color: var(--color-ink-muted);
}

.work-meta-cell {
  display: flex;
  flex-direction: column;
  gap: 2px;
  color: var(--color-ink);
}

.status-pill {
  display: inline-block;
  padding: 3px 8px;
  border: 1px solid #10b981;
  color: #065f46;
  background: rgba(16, 185, 129, 0.1);
}

.status-pill.available {
  border-color: #ef4444;
  color: #f87171;
  background: rgba(239, 68, 68, 0.15);
}

.action-view-link {
  color: var(--color-link-blue);
  text-decoration: underline;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}

.action-view-link:hover {
  opacity: 0.6;
}

/* Exhibitions Line List */
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

.item-title-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.item-title-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--color-ink);
}

.exh-badge {
  font-size: 9px;
  padding: 2px 6px;
  border: 1px solid var(--color-border-grid);
  color: var(--color-ink-muted);
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

/* Publications Line List */
.publications-line-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.publication-line-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-bottom: 1px solid var(--color-border-grid);
  color: var(--color-ink);
}

.pub-idx {
  color: var(--color-ink-muted);
  min-width: 32px;
}

.empty-list-notice {
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border-grid);
  color: var(--color-ink-muted);
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
  .artist-content-section {
    padding: 0 24px 60px;
  }
  .artist-header-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  .work-line-item {
    grid-template-columns: 60px 1fr;
    gap: 12px;
  }
  .work-meta-cell,
  .work-status-cell {
    grid-column: 2;
  }
  .work-action-cell {
    grid-column: 2;
  }
  .line-item {
    grid-template-columns: 1fr;
    gap: 8px;
  }
}
</style>
