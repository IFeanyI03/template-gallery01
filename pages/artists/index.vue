<template>
  <div class="page-artists">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ARTI.</span>
            <span>STS.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ARTI.</span>
            <span>STS.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>PROGRAM: REPRESENTED ARTISTS</div>
              <div>LOCATIONS: BERLIN • LONDON • TOKYO • ZÜRICH</div>
              <div>PRACTICE: LIGHT, SCULPTURE, PAINTING & MOVING IMAGE</div>
            </div>
            <p class="curatorial-statement">
              Representing international artists whose works engage with light, spatial volume, and the evolving languages of contemporary art.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>ESTABLISHED 2020</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Artists Grid -->
    <section class="artists-container">
      <div class="grid-wrapper">
        <div class="artists-grid">
          <article
            v-for="artist in artists"
            :key="artist.id"
            class="artist-card"
          >
            <div class="card-header">
              <span class="mono-label">{{ artist.studioLocation }}</span>
              <span class="artist-status mono-subtle">{{ artist.representationStatus }}</span>
            </div>

            <div class="card-body">
              <NuxtLink :to="`/artists/${artist.id}`" class="artist-title-link">
                <h2 class="artist-name">{{ artist.name }}</h2>
              </NuxtLink>
              <div class="artist-medium mono-subtle">{{ artist.discipline }}</div>
              <p class="artist-focus">{{ artist.focus }}</p>
            </div>

            <div class="card-footer">
              <div class="footer-meta mono-subtle">
                <div>STUDIO: {{ artist.studioLocation }}</div>
                <div>SELECTED WORKS: {{ artist.works.length > 0 ? artist.works.map(w => w.title).join(', ') : 'Inquire with gallery' }}</div>
              </div>
              <NuxtLink :to="`/artists/${artist.id}`" class="artist-btn mono-label">
                <span>VIEW ARTIST</span>
                <span class="btn-arrow">→</span>
              </NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useArtistsData } from '~/composables/useArtists'

useHead({
  title: 'Artists — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Represented artists and international practitioners at A.V.A. Contemporary Gallery.'
    }
  ]
})

const { artists } = useArtistsData()
</script>

<style scoped>
.page-artists {
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

.curatorial-statement {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

/* Artists Grid */
.artists-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.grid-wrapper {
  background-color: var(--color-border-grid);
  border: 1px solid var(--color-border-grid);
}

.artists-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
}

.artist-card {
  background-color: var(--bg-canvas);
  padding: 40px;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.25s ease;
}

.artist-card:hover {
  background-color: #f4f4f4;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.artist-status {
  padding: 2px 8px;
  border: 1px solid var(--color-border-grid);
  font-size: 8px;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 28px 0;
}

.artist-title-link {
  color: inherit;
  text-decoration: none;
}

.artist-name {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 28px;
  line-height: 1.1;
  letter-spacing: -0.02em;
  color: var(--color-ink);
  transition: opacity 0.2s ease;
}

.artist-name:hover {
  opacity: 0.7;
}

.artist-medium {
  color: var(--accent-purple);
  font-weight: 700;
}

.artist-focus {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

.card-footer {
  border-top: 1px solid var(--color-border-grid);
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.artist-btn {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  border: 1px solid var(--color-ink);
  color: var(--color-ink);
  background: transparent;
  transition: all 0.2s ease;
  text-decoration: none;
}

.artist-btn:hover {
  background-color: var(--color-ink);
  color: var(--bg-canvas);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.artist-btn:hover .btn-arrow {
  transform: translateX(4px);
}

@media (max-width: 1100px) {
  .artists-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .artists-container {
    padding: 0 24px;
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
}

@media (max-width: 768px) {
  .artists-grid {
    grid-template-columns: 1fr;
  }
}
</style>
