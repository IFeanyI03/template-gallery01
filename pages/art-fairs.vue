<template>
  <div class="page-fairs">
    <!-- Master Hero Header -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ART.</span>
            <span>FAIRS.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ART.</span>
            <span>FAIRS.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>PROGRAM: ART FAIRS & BIENNALES</div>
              <div>CALENDAR: 2025 — 2026</div>
              <div>LOCATIONS: BASEL • LONDON • VENICE • NEW YORK</div>
            </div>
            <p class="curatorial-statement">
              Curated booth presentations, solo surveys, and collateral exhibitions representing gallery artists at international art fairs and biennales.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>VIP PREVIEW INQUIRIES</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Presentations Grid -->
    <section class="fairs-container">
      <div class="fairs-grid">
        <article
          v-for="item in artFairs"
          :key="item.id"
          class="fair-card"
        >
          <div class="card-header">
            <span class="fair-badge mono-label">{{ item.badge }}</span>
            <span class="fair-dates mono-subtle">{{ item.dates }}</span>
          </div>

          <div class="card-body">
            <h2 class="fair-name">{{ item.fair }}</h2>
            <div class="presentation-title mono-label">
              “{{ item.presentationTitle }}”
            </div>
            <p class="fair-desc">
              {{ item.description }}
            </p>

            <div class="artists-tagged mono-label">
              <span class="tagged-label">FEATURED ARTISTS:</span>
              <span class="tagged-names">{{ item.featuredArtists.join(' • ') }}</span>
            </div>
          </div>

          <div class="card-footer">
            <div class="venue-meta mono-subtle">
              <div>VENUE: {{ item.venue }}</div>
              <div>SECTOR: {{ item.boothSector }}</div>
              <div>LOCATION: {{ item.city }}</div>
            </div>

            <NuxtLink
              :to="`/contact?type=art-fair&id=${item.id}&title=${encodeURIComponent(item.fair)}&booth=${encodeURIComponent(item.boothSector)}`"
              class="inquire-btn mono-label"
            >
              <span>INQUIRE ABOUT FAIR</span>
              <span class="btn-arrow">→</span>
            </NuxtLink>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useArtFairsData } from '~/composables/useArtFairs'

useHead({
  title: 'Art Fairs & Biennales — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'International art fair presentations, curated gallery booths, and biennial exhibitions by A.V.A. Contemporary Gallery.'
    }
  ]
})

const { artFairs } = useArtFairsData()
</script>

<style scoped>
.page-fairs {
  display: flex;
  flex-direction: column;
  gap: 80px;
}

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
  font-size: clamp(4.5rem, 11vw, 13.2rem);
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
  opacity: 0.7;
  pointer-events: none;
}

.hero-title-sharp {
  position: relative;
  color: var(--color-ink);
}

.hero-meta-col {
  grid-column: 9 / span 4;
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
  gap: 4px;
}

.curatorial-statement {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

/* Fairs Grid */
.fairs-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.fairs-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.fair-card {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 28px;
  transition: background-color 0.2s ease;
}

.fair-card:hover {
  background-color: #f4f4f4;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.fair-badge {
  padding: 3px 8px;
  background: var(--color-ink);
  color: var(--bg-canvas);
}

.fair-dates {
  color: var(--color-ink-muted);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.fair-name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  line-height: 1.05;
  letter-spacing: -0.02em;
}

.presentation-title {
  color: var(--accent-purple);
  font-size: 11px;
}

.fair-desc {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

.artists-tagged {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 8px;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.tagged-label {
  font-size: 9px;
  color: var(--color-ink-muted);
}

.tagged-names {
  font-size: 11px;
  color: var(--color-ink);
}

.card-footer {
  border-top: 1px solid var(--color-border-grid);
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  flex-wrap: wrap;
}

.venue-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 10px;
}

.inquire-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background-color: var(--color-ink);
  color: var(--bg-canvas);
  text-decoration: none;
  font-size: 10px;
  letter-spacing: 0.15em;
  font-weight: 700;
  transition: opacity 0.2s ease;
}

.inquire-btn:hover {
  opacity: 0.85;
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.inquire-btn:hover .btn-arrow {
  transform: translateX(4px);
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .hero-title-container,
  .hero-meta-col {
    grid-column: 1 / -1;
  }

  .hero-meta-col {
    border-left: none;
    border-top: 1px solid var(--color-border-grid);
    padding-left: 0;
    padding-top: 24px;
  }

  .fairs-container {
    padding: 0 24px;
  }

  .fairs-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-fairs {
    gap: 48px;
  }

  .page-hero {
    padding: 100px 16px 0;
  }

  .fairs-container {
    padding: 0 16px;
  }

  .fair-card {
    padding: 24px;
  }

  .card-footer {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
