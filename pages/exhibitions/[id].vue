<template>
  <div v-if="exhibition" class="page-exhibition">
    <!-- Master Hero Header (Matches same style as all pages) -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>EXHI.</span>
            <span>BITION.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>EXHI.</span>
            <span>BITION.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>EXHIBITION: {{ exhibition.title.toUpperCase() }}</div>
              <div>DATES: {{ exhibition.timeline }}</div>
              <div>VENUE: {{ exhibition.venue }}</div>
            </div>
            <p class="curatorial-statement">
              {{ exhibition.description }}
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>STATUS: {{ exhibition.status }}</div>
            <div>ADMISSION: FREE PUBLIC ADMISSION</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Main Exhibition Content Section (List & Linear Layout) -->
    <section class="exhibition-content-section">
      <div class="content-inner">
        <!-- Navigation Breadcrumb -->
        <div class="subpage-breadcrumb mono-label">
          <NuxtLink to="/exhibitions" class="breadcrumb-back">
            <span>← BACK TO EXHIBITIONS</span>
          </NuxtLink>
          <div class="breadcrumb-meta">
            <span>EXHIBITION {{ exhibition.number }}</span>
            <span class="sep">·</span>
            <span :class="['status-indicator', { active: exhibition.isCurrent }]">
              {{ exhibition.status }}
            </span>
          </div>
        </div>

        <!-- Exhibition Title & Inquiry Bar -->
        <div class="exhibition-header-bar">
          <div class="exhibition-title-group">
            <h2 class="exhibition-full-title">{{ exhibition.title }}</h2>
            <div class="exhibition-meta-sub mono-subtle">
              {{ exhibition.timeline }} · {{ exhibition.venue }} · {{ exhibition.curator }}
            </div>
          </div>

          <NuxtLink :to="inquiryLink" class="inquire-exhibition-btn mono-label">
            <span>INQUIRE ABOUT EXHIBITION</span>
            <span class="btn-arrow">→</span>
          </NuxtLink>
        </div>

        <!-- Curatorial Overview Block -->
        <div class="exhibition-list-block">
          <div class="list-section-header mono-label">
            <span>CURATORIAL OVERVIEW</span>
            <span>EXHIBITION ESSAY</span>
          </div>
          <div class="essay-text-area">
            <p v-for="(para, idx) in exhibition.curatorialEssay" :key="idx" class="essay-para">
              {{ para }}
            </p>
          </div>
        </div>

        <!-- Visiting & Venue Specifications List -->
        <div class="exhibition-list-block">
          <div class="list-section-header mono-label">
            <span>VISITING & VENUE INFORMATION</span>
            <span>PUBLIC ACCESS</span>
          </div>

          <ul class="data-spec-list mono-label">
            <li class="spec-row">
              <span class="row-term">DATES ON VIEW</span>
              <span class="row-value font-display-bold">{{ exhibition.timeline }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">VENUE</span>
              <span class="row-value">{{ exhibition.venue }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">LOCATION</span>
              <span class="row-value">{{ exhibition.city }}</span>
            </li>
            <li class="spec-row">
              <span class="row-term">GALLERY HOURS</span>
              <span class="row-value">Tuesday — Saturday · 11:00 — 18:00</span>
            </li>
            <li class="spec-row">
              <span class="row-term">ADMISSION</span>
              <span class="row-value text-emerald">Free Public Admission</span>
            </li>
            <li class="spec-row">
              <span class="row-term">CURATORIAL TOURS</span>
              <span class="row-value">Every Saturday at 14:00 (Step-free accessible)</span>
            </li>
            <li class="spec-row">
              <span class="row-term">GALLERY SPACE</span>
              <span class="row-value">{{ exhibition.gallerySpecs.galleryArea }}</span>
            </li>
          </ul>
        </div>

        <!-- Participating Artists List -->
        <div class="exhibition-list-block">
          <div class="list-section-header mono-label">
            <span>PARTICIPATING ARTISTS</span>
            <span>{{ exhibition.participatingArtists.length }} REPRESENTED</span>
          </div>

          <ul class="artists-line-list">
            <li
              v-for="artist in exhibition.participatingArtists"
              :key="artist.id"
              class="artist-line-item"
            >
              <div class="artist-main-cell">
                <span class="artist-name-text">{{ artist.name }}</span>
                <span class="artist-loc-text mono-subtle">{{ artist.studioLocation }}</span>
              </div>
              <div class="artist-disc-cell mono-label">
                {{ artist.discipline }}
              </div>
              <div class="artist-action-cell">
                <NuxtLink :to="`/artists/${artist.id}`" class="action-link mono-label">
                  <span>VIEW ARTIST PROFILE →</span>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>

        <!-- Exhibition Checklist as a List -->
        <div class="exhibition-list-block">
          <div class="list-section-header mono-label">
            <span>EXHIBITION CHECKLIST</span>
            <span>{{ exhibition.works.length }} WORKS ON VIEW</span>
          </div>

          <ul class="works-checklist-list">
            <li
              v-for="work in exhibition.works"
              :key="work.id"
              class="checklist-line-item"
            >
              <div class="work-num-cell mono-label">{{ work.number }}</div>
              <div class="work-thumb-cell">
                <img :src="work.imageSrc" :alt="work.title" class="work-thumb" />
              </div>
              <div class="work-info-cell">
                <span class="work-title-bold">{{ work.title }}</span>
                <span class="work-artist-name mono-label">{{ work.artist }}</span>
                <span class="work-medium-line mono-subtle">{{ work.medium }}</span>
              </div>
              <div class="work-dim-cell mono-label">
                {{ work.dimensions }}
              </div>
              <div class="work-action-cell">
                <NuxtLink :to="`/artworks/${work.id}`" class="action-link mono-label">
                  <span>VIEW WORK →</span>
                </NuxtLink>
              </div>
            </li>
          </ul>
        </div>

        <!-- Selected Press & Reviews as a List -->
        <div v-if="exhibition.pressReviews.length > 0" class="exhibition-list-block">
          <div class="list-section-header mono-label">
            <span>SELECTED PRESS & REVIEWS</span>
            <span>{{ exhibition.pressReviews.length }} CITATIONS</span>
          </div>

          <ul class="reviews-line-list">
            <li
              v-for="(rev, idx) in exhibition.pressReviews"
              :key="idx"
              class="review-line-item"
            >
              <blockquote class="review-blockquote">
                <p class="review-quote-text">“{{ rev.quote }}”</p>
                <footer class="review-cite mono-label">
                  — {{ rev.author }}, <cite>{{ rev.source }}</cite> ({{ rev.date }})
                </footer>
              </blockquote>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>

  <!-- Fallback if not found -->
  <div v-else class="page-not-found">
    <div class="not-found-inner">
      <span class="mono-label alert-text">// EXHIBITION NOT FOUND</span>
      <h1 class="hero-title-sharp">
        <span>EXHIBITION</span>
        <span>NOT FOUND.</span>
      </h1>
      <p class="curatorial-statement">
        The requested exhibition does not exist in the gallery programme.
      </p>
      <NuxtLink to="/exhibitions" class="inquire-exhibition-btn mono-label">
        <span>← RETURN TO EXHIBITIONS</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useExhibitionsData } from '~/composables/useExhibitions'

const route = useRoute()
const exhibitionId = computed(() => route.params.id as string)
const { getExhibitionById } = useExhibitionsData()

const exhibition = computed(() => getExhibitionById(exhibitionId.value))

const inquiryLink = computed(() => {
  if (!exhibition.value) return '/contact'
  const params = new URLSearchParams({
    type: 'exhibition',
    id: exhibition.value.id,
    ref: exhibition.value.venue,
    title: exhibition.value.title
  })
  return `/contact?${params.toString()}`
})

useHead(() => {
  if (!exhibition.value) {
    return { title: 'Exhibition Not Found — A.V.A.' }
  }
  return {
    title: `${exhibition.value.title} — A.V.A. Contemporary Gallery`,
    meta: [
      {
        name: 'description',
        content: `${exhibition.value.title} at ${exhibition.value.venue} (${exhibition.value.timeline}). ${exhibition.value.description}`
      }
    ]
  }
})
</script>

<style scoped>
.page-exhibition {
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

/* Exhibition Content Section */
.exhibition-content-section {
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
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border: 1px solid var(--color-border-grid);
  background: rgba(0, 0, 0, 0.03);
  color: var(--color-ink-muted);
}

.status-indicator.active {
  border-color: var(--color-ink);
  color: #ffffff;
  background: var(--color-ink);
}

/* Exhibition Header Bar */
.exhibition-header-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--color-ink);
  gap: 24px;
}

.exhibition-full-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: -0.03em;
  margin: 0 0 8px;
  color: var(--color-ink);
}

.exhibition-meta-sub {
  color: var(--color-ink-muted);
}

.inquire-exhibition-btn {
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

.inquire-exhibition-btn:hover {
  opacity: 0.85;
}

.btn-arrow {
  font-size: 16px;
}

/* Exhibition List Blocks */
.exhibition-list-block {
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

.essay-text-area {
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-bottom: 1px solid var(--color-border-grid);
}

.essay-para {
  font-family: var(--font-display);
  font-size: 16px;
  line-height: 1.7;
  color: var(--color-ink);
  max-width: 900px;
}

/* Data Spec List */
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
}

.text-emerald {
  color: #10b981;
}

/* Artists Line List */
.artists-line-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.artist-line-item {
  display: grid;
  grid-template-columns: 240px 1fr auto;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.artist-name-text {
  font-family: var(--font-display);
  font-weight: 800;
  font-size: 16px;
  color: var(--color-ink);
  display: block;
}

.artist-loc-text {
  color: var(--color-ink-muted);
}

.artist-disc-cell {
  color: var(--color-ink-muted);
}

.action-link {
  color: var(--color-link-blue);
  text-decoration: underline;
  white-space: nowrap;
  transition: opacity 0.2s ease;
}

.action-link:hover {
  opacity: 0.6;
}

/* Works Checklist List */
.works-checklist-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.checklist-line-item {
  display: grid;
  grid-template-columns: 40px 80px 1fr 180px auto;
  align-items: center;
  padding: 20px 0;
  border-bottom: 1px solid var(--color-border-grid);
  gap: 24px;
}

.work-num-cell {
  color: var(--color-ink-muted);
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

.work-artist-name {
  color: var(--color-ink);
  font-size: 10px;
}

.work-medium-line {
  color: var(--color-ink-muted);
}

.work-dim-cell {
  color: var(--color-ink-muted);
}

/* Reviews Line List */
.reviews-line-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.review-line-item {
  padding: 24px 0;
  border-bottom: 1px solid var(--color-border-grid);
}

.review-blockquote {
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.review-quote-text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-ink);
}

.review-cite {
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
  .exhibition-content-section {
    padding: 0 24px 60px;
  }
  .exhibition-header-bar {
    flex-direction: column;
    align-items: flex-start;
  }
  .checklist-line-item {
    grid-template-columns: 60px 1fr;
    gap: 12px;
  }
  .work-num-cell {
    display: none;
  }
  .work-dim-cell,
  .work-action-cell {
    grid-column: 2;
  }
  .artist-line-item {
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
}
</style>
