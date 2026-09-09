<template>
  <section class="hero-section" aria-label="Current Exhibition">
    <div class="hero-grid">
      <!-- Big Display Title with Blur Layer -->
      <div class="hero-title-container">
        <!-- Blurred background glow layer -->
        <div class="hero-title-blur" aria-hidden="true">
          <span class="title-line">PHOS.</span>
          <span class="title-line">GENE.</span>
        </div>
        <!-- Sharp primary text layer -->
        <h1 class="hero-title-sharp">
          <span class="title-line">PHOS.</span>
          <span class="title-line">GENE.</span>
        </h1>
      </div>

      <!-- Right Metadata & Statement Column -->
      <aside class="hero-meta-col">
        <!-- Top Meta Group -->
        <div class="meta-top">
          <div class="meta-gallery mono-label">
            <div>CURRENT EXHIBITION // ON VIEW</div>
            <div>OCTOBER 12, 2024 — MARCH 15, 2025</div>
            <div>BERLIN MITTE · LINIENSTRAßE 144</div>
          </div>

          <p class="curatorial-statement">
            A group exhibition examining the dialogue between light, surface, and human perception across painting, sculpture, and moving image.
          </p>
        </div>

        <!-- Bottom Meta Group -->
        <div class="meta-bottom mono-subtle">
          <div>ARTISTS: ELENA VOSS · SORA SATO · TALIA CHEN · MARCUS VANE · KAELEN RHYS</div>
          <div>HOURS: TUE — SAT · 11:00 — 18:00</div>
          <div>ADMISSION: FREE PUBLIC ADMISSION</div>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup lang="ts">
// HeroSection presenting the current gallery exhibition
</script>

<style scoped>
.hero-section {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 160px 40px 0px;
}

.hero-grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  gap: 20px;
  min-height: 380px;
  align-items: stretch;
}

/* Title Container */
.hero-title-container {
  grid-column: 1 / span 8;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  z-index: 1;
  transition: opacity 0.3s ease;
}

.hero-title-sharp {
  position: relative;
  color: var(--color-ink);
  z-index: 2;
}

.title-line {
  display: block;
}

/* Metadata Column */
.hero-meta-col {
  grid-column: 10 / span 3;
  border-left: 1px solid var(--color-border-grid);
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
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
  font-size: 18px;
  line-height: 1.6;
  color: var(--color-ink-muted);
  max-width: 320px;
}

.meta-bottom {
  display: flex;
  flex-direction: column;
  gap: 2px;
  opacity: 0.9;
}

/* Responsive adjustments */
@media (max-width: 1200px) {
  .hero-title-container {
    grid-column: 1 / span 7;
  }
  .hero-meta-col {
    grid-column: 9 / span 4;
  }
}

@media (max-width: 960px) {
  .hero-section {
    padding: 120px 24px 60px;
  }

  .hero-grid {
    grid-template-columns: 1fr;
    gap: 40px;
    min-height: auto;
  }

  .hero-title-container {
    grid-column: 1 / -1;
  }

  .hero-meta-col {
    grid-column: 1 / -1;
    border-left: none;
    border-top: 1px solid var(--color-border-grid);
    padding-left: 0;
    padding-top: 24px;
    flex-direction: row;
    justify-content: space-between;
  }

  .curatorial-statement {
    max-width: 480px;
  }
}

@media (max-width: 640px) {
  .hero-section {
    padding: 100px 16px 40px;
  }

  .hero-title-blur,
  .hero-title-sharp {
    font-size: clamp(3.2rem, 16vw, 5rem);
  }

  .hero-meta-col {
    flex-direction: column;
    gap: 24px;
  }
}
</style>
