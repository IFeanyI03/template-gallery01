<template>
  <div class="page-exhibitions">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>EXHIBI.</span>
            <span>TIONS.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>EXHIBI.</span>
            <span>TIONS.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>PROGRAM: EXHIBITIONS 2022—2025</div>
              <div>LOCATIONS: BERLIN • LONDON • TOKYO • REYKJAVIK</div>
              <div>ADMISSION: OPEN TO THE PUBLIC</div>
            </div>
            <p class="curatorial-statement">
              An ongoing program of solo surveys, thematic group presentations, and architectural installations exploring light, perception, and contemporary form.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>CURRENT & RECENT SURVEYS</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Exhibitions Matrix Grid -->
    <section class="exhibitions-container">
      <div class="grid-wrapper">
        <div class="exhibitions-grid">
          <article
            v-for="ex in exhibitions"
            :key="ex.id"
            :class="['exhibition-card', { 'is-current': ex.isCurrent }]"
          >
            <div class="card-top">
              <span class="ex-number mono-label">{{ ex.number }}</span>
              <span class="ex-status-badge mono-label" :class="{ active: ex.isCurrent }">
                <span class="badge-dot"></span>
                {{ ex.status }}
              </span>
            </div>

            <div class="card-body">
              <NuxtLink :to="`/exhibitions/${ex.id}`" class="ex-title-link">
                <h2 class="ex-title">{{ ex.title }}</h2>
              </NuxtLink>
              <p class="ex-desc">{{ ex.description }}</p>

              <div class="ex-tags">
                <span v-for="(tag, idx) in ex.tags" :key="idx" class="tag-chip mono-subtle">
                  {{ tag }}
                </span>
              </div>
            </div>

            <div class="card-footer">
              <div class="footer-meta mono-label">
                <div>VENUE: {{ ex.venue }}</div>
                <div>LOCATION: {{ ex.city }}</div>
                <div>DATES: {{ ex.timeline }}</div>
                <div>CURATED BY: {{ ex.curator }}</div>
              </div>

              <NuxtLink :to="`/exhibitions/${ex.id}`" class="ex-action-btn mono-label">
                <span>VIEW EXHIBITION</span>
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
import { useExhibitionsData } from '~/composables/useExhibitions'

useHead({
  title: 'Exhibitions — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Current and upcoming contemporary art exhibitions at A.V.A. Contemporary Gallery.'
    }
  ]
})

const { exhibitions } = useExhibitionsData()
</script>

<style scoped>
.page-exhibitions {
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

/* Matrix Grid */
.exhibitions-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.grid-wrapper {
  background-color: var(--color-border-grid);
  border: 1px solid var(--color-border-grid);
}

.exhibitions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
}

.exhibition-card {
  background-color: var(--bg-canvas);
  padding: 40px;
  min-height: 480px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: background-color 0.25s ease;
  position: relative;
}

.exhibition-card:hover {
  background-color: #f2f2f2;
}

.exhibition-card.is-current {
  border-top: 3px solid var(--color-ink);
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.ex-status-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  border: 1px solid var(--color-border-grid);
  background: rgba(0, 0, 0, 0.03);
}

.ex-status-badge.active {
  border-color: var(--color-ink);
  color: #ffffff;
  background: var(--color-ink);
}

.badge-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #9ca3af;
}

.ex-status-badge.active .badge-dot {
  background: #ffffff;
  box-shadow: none;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 40px 0;
}

.ex-title-link {
  color: inherit;
  text-decoration: none;
}

.ex-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 3.5vw, 3.2rem);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--color-ink);
  transition: opacity 0.2s ease;
}

.ex-title:hover {
  opacity: 0.7;
}

.ex-desc {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 18px;
  line-height: 1.5;
  color: var(--color-ink-muted);
  max-width: 520px;
}

.ex-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-top: 8px;
}

.tag-chip {
  padding: 3px 8px;
  border: 1px solid var(--color-border-grid);
  background: rgba(0, 0, 0, 0.02);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 20px;
  border-top: 1px solid var(--color-border-grid);
  padding-top: 24px;
}

.footer-meta {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.ex-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: var(--color-ink);
  color: var(--bg-canvas);
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.ex-action-btn:hover {
  opacity: 0.85;
  transform: translateX(4px);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.ex-action-btn:hover .btn-arrow {
  transform: translateX(3px);
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .exhibitions-container {
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
  .exhibitions-grid {
    grid-template-columns: 1fr;
  }
}
</style>
