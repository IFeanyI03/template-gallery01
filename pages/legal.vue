<template>
  <div class="page-legal">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>LEGAL.</span>
            <span>RIGHTS.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>LEGAL.</span>
            <span>RIGHTS.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>GALLERY: A.V.A. CONTEMPORARY</div>
              <div>COPYRIGHT: ALL RIGHTS RESERVED</div>
              <div>PRIVACY: VISITOR CONFIDENTIALITY</div>
            </div>
            <p class="curatorial-statement">
              Copyright terms, artist attribution standards, and visitor privacy policies governing the gallery and collection.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>BERLIN • LONDON • TOKYO</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Legal Clauses Grid -->
    <section class="legal-container">
      <div class="grid-wrapper">
        <div class="clauses-grid">
          <article class="clause-card">
            <span class="mono-label clause-num">01 // ARTIST COPYRIGHT & PROVENANCE</span>
            <h2 class="clause-title">Authorship & Provenance</h2>
            <p class="clause-text">
              All artworks, images, and texts presented by A.V.A. are protected by international copyright laws and remain the intellectual property of their respective artists, estates, and authors. Works are authenticated and catalogued under professional museum and gallery standards.
            </p>
          </article>

          <article class="clause-card">
            <span class="mono-label clause-num">02 // RESEARCH & SCHOLARLY ACCESS</span>
            <h2 class="clause-title">Educational & Curatorial Use</h2>
            <p class="clause-text">
              Exhibition materials and images may be referenced for non-commercial scholarly research, museum publications, and educational study, provided full attribution is given to the artist and A.V.A. Contemporary Gallery.
            </p>
          </article>

          <article class="clause-card">
            <span class="mono-label clause-num">03 // VISITOR CONFIDENTIALITY</span>
            <h2 class="clause-title">Privacy & Correspondence</h2>
            <p class="clause-text">
              We respect visitor privacy. This website contains no commercial tracking scripts or third-party marketing beacons. All correspondence, acquisition inquiries, and collector details are held in strict confidence.
            </p>
          </article>

          <article class="clause-card">
            <span class="mono-label clause-num">04 // EXHIBITION VISITING ADVISORY</span>
            <h2 class="clause-title">Light Sensitivity Notice</h2>
            <p class="clause-text">
              Certain light installations incorporate intense illumination, strobing elements, or darkened exhibition spaces. Visitors with light sensitivities or photosensitive conditions are advised to speak with gallery staff upon arrival.
            </p>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Legal & Rights — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Copyright policies, artist attribution, and visitor privacy at A.V.A. Contemporary Gallery.'
    }
  ]
})
</script>

<style scoped>
.page-legal {
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

.meta-bottom {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Legal Container */
.legal-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.grid-wrapper {
  border: 1px solid var(--color-border-grid);
  background-color: var(--color-border-grid);
}

.clauses-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
}

.clause-card {
  background-color: var(--bg-canvas);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-height: 240px;
}

.clause-num {
  color: var(--color-ink-muted);
  font-size: 10px;
  letter-spacing: 0.2em;
}

.clause-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  letter-spacing: -0.02em;
}

.clause-text {
  font-family: var(--font-serif);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-ink-muted);
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

  .legal-container {
    padding: 0 24px;
  }

  .clauses-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-legal {
    gap: 48px;
  }

  .page-hero {
    padding: 100px 16px 0;
  }

  .legal-container {
    padding: 0 16px;
  }

  .clause-card {
    padding: 24px;
  }
}
</style>
