<template>
  <div class="page-about">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ABO.</span>
            <span>UT.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ABO.</span>
            <span>UT.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>GALLERY: A.V.A. CONTEMPORARY</div>
              <div>FOUNDED: BERLIN // ESTABLISHED 2020</div>
              <div>PROGRAM: CONTEMPORARY ART & LIGHT</div>
            </div>
            <p class="curatorial-statement">
              “Dedicated to the presentation and scholarship of international contemporary artists working across light, sculpture, painting, and moving image.”
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>BERLIN • LONDON • TOKYO • REYKJAVIK</div>
            <div>STATUS: OPEN TO THE PUBLIC</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Gallery Mission & History -->
    <section class="about-content">
      <div class="articles-grid">
        <article class="about-card">
          <span class="section-num mono-label">01 // ARTISTIC FOCUS</span>
          <h2 class="card-headline">Light, Form and Perception</h2>
          <p class="card-paragraph">
            Founded in Berlin in 2020, A.V.A. represents a dedicated roster of international artists whose practices explore the physical presence of light, spatial volume, and human perception.
          </p>
          <p class="card-paragraph">
            Through ambitious solo surveys, collaborative projects, and museum loans, the gallery presents works that reward unhurried, contemplative viewing and foster dialogue between material traditions and contemporary ideas.
          </p>
        </article>

        <article class="about-card">
          <span class="section-num mono-label">02 // ARCHITECTURAL SPACES</span>
          <h2 class="card-headline">Rooms for Quiet Attention</h2>
          <p class="card-paragraph">
            Our exhibition spaces in Berlin Mitte, London Mayfair, Tokyo Minami-Aoyama, and Reykjavik are conceived with architectural restraint. Generous proportions, natural daylight, and clean geometric planes provide an uncompromised setting for monumental installations.
          </p>
          <p class="card-paragraph">
            Each exhibition is installed in close collaboration with the artists, allowing works to engage directly with the architectural character and daylight of each city.
          </p>
        </article>

        <article class="about-card">
          <span class="section-num mono-label">03 // PUBLISHING & ARCHIVE</span>
          <h2 class="card-headline">A.V.A. Editions & Collection</h2>
          <p class="card-paragraph">
            Through our imprint A.V.A. Editions, we publish comprehensive exhibition catalogues, monographs, and critical essays in partnership with leading international art publishers.
          </p>
          <p class="card-paragraph">
            The gallery also maintains a permanent collection and research archive, documenting artist provenance, historical exhibitions, and conservation records for institutions and collectors.
          </p>
        </article>
      </div>

      <!-- Directory Matrix -->
      <div class="spec-matrix-wrapper">
        <div class="matrix-header mono-label">
          <span>GALLERY OVERVIEW</span>
          <span>A.V.A. CONTEMPORARY</span>
        </div>
        <div class="spec-grid">
          <div class="spec-item">
            <span class="spec-k mono-label">PROGRAM</span>
            <span class="spec-v">CONTEMPORARY LIGHT, SCULPTURE & PAINTING</span>
          </div>
          <div class="spec-item">
            <span class="spec-k mono-label">LOCATIONS</span>
            <span class="spec-v">BERLIN • LONDON • TOKYO • REYKJAVIK</span>
          </div>
          <div class="spec-item">
            <span class="spec-k mono-label">PUBLICATIONS</span>
            <span class="spec-v">A.V.A. EDITIONS // MONOGRAPHS & CATALOGUES</span>
          </div>
          <div class="spec-item">
            <span class="spec-k mono-label">ADMISSION</span>
            <span class="spec-v">FREE PUBLIC ADMISSION TO ALL SPACES</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'About A.V.A. Contemporary Gallery, representing international artists working across light, sculpture, painting, and moving image in Berlin, London, Tokyo, and Reykjavik.'
    }
  ]
})
</script>

<style scoped>
.page-about {
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

/* Content */
.about-content {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
  border: 1px solid var(--color-border-grid);
}

.about-card {
  background-color: var(--bg-canvas);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-height: 420px;
}

.section-num {
  color: var(--accent-purple);
}

.card-headline {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 26px;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.card-paragraph {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.6;
  color: var(--color-ink-muted);
}

/* Specs */
.spec-matrix-wrapper {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
}

.matrix-header {
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid var(--color-border-grid);
  display: flex;
  justify-content: space-between;
}

.spec-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
}

.spec-item {
  background-color: var(--bg-canvas);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.spec-k {
  color: var(--color-ink-muted);
  font-size: 9px;
}

.spec-v {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--color-ink);
}

@media (max-width: 1100px) {
  .articles-grid {
    grid-template-columns: 1fr;
  }
  .spec-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .about-content {
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

@media (max-width: 640px) {
  .spec-grid {
    grid-template-columns: 1fr;
  }
}
</style>
