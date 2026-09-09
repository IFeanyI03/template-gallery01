<template>
  <div class="page-visit">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>VISI.</span>
            <span>TORS.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>VISI.</span>
            <span>TORS.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>GALLERY HOURS: TUE — SAT // 11:00 — 18:00</div>
              <div>LOCATIONS: BERLIN • LONDON • TOKYO • REYKJAVIK</div>
              <div>ADMISSION: FREE TO ALL EXHIBITIONS</div>
            </div>
            <p class="curatorial-statement">
              Visitor information, gallery opening hours, current exhibitions on view, and directions across our international spaces.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>STATUS: GALLERIES OPEN TO THE PUBLIC</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Gallery Locations & Visiting Grid -->
    <section class="visit-container">
      <!-- Welcome Banner -->
      <div class="welcome-banner">
        <div class="status-indicator">
          <span class="status-dot"></span>
        </div>
        <div class="status-text">
          <span class="status-heading">ALL GALLERIES OPEN TODAY • CURRENT EXHIBITION: PHOS GENE</span>
          <span class="status-sub mono-label">FREE PUBLIC ADMISSION // CURATORIAL WALKTHROUGHS EVERY SATURDAY AT 14:00</span>
        </div>
      </div>

      <!-- Spaces Grid -->
      <div class="grid-wrapper">
        <div class="spaces-grid">
          <article v-for="space in spaces" :key="space.id" class="space-card">
            <div class="space-header">
              <span class="mono-label">{{ space.id }}</span>
              <span class="space-badge mono-subtle">{{ space.status }}</span>
            </div>

            <div class="space-body">
              <h2 class="space-location">{{ space.location }}</h2>
              <div class="space-address mono-subtle">{{ space.address }}</div>
            </div>

            <div class="space-details mono-label">
              <div class="detail-row">
                <span class="detail-label">HOURS:</span>
                <span class="detail-val">{{ space.hours }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">ON VIEW:</span>
                <span class="detail-val">{{ space.onView }}</span>
              </div>
              <div class="detail-row">
                <span class="detail-label">ADMISSION:</span>
                <span class="detail-val text-emerald">{{ space.admission }}</span>
              </div>
            </div>
          </article>
        </div>
      </div>

      <!-- Visitor Information & Services -->
      <div class="services-wrapper">
        <div class="services-header mono-label">
          <span>VISITOR SERVICES & ACCESS</span>
          <span class="services-badge mono-subtle">INFORMATION</span>
        </div>
        <div class="services-grid">
          <div v-for="(guide, idx) in visitorGuidelines" :key="idx" class="service-item">
            <div class="service-top mono-label">
              <span class="service-num">{{ guide.code }}</span>
              <span class="service-title">{{ guide.title }}</span>
            </div>
            <p class="service-desc">{{ guide.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Visit & Locations — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Visitor hours, gallery locations, and exhibition access for A.V.A. contemporary galleries in Berlin, London, Tokyo, and Reykjavik.'
    }
  ]
})

const spaces = [
  {
    id: 'SPACE 01 // BERLIN',
    location: 'BERLIN MITTE',
    address: 'Linienstraße 144, 10115 Berlin',
    hours: 'Tue — Sat, 11:00 — 18:00',
    onView: 'Phos Gene (Group Survey)',
    admission: 'Free Public Admission',
    status: 'OPEN TODAY'
  },
  {
    id: 'SPACE 02 // LONDON',
    location: 'LONDON MAYFAIR',
    address: '22 Cork Street, London W1S 3NG',
    hours: 'Tue — Sat, 11:00 — 18:00',
    onView: 'Kinetic Studies: Kaelen Rhys',
    admission: 'Free Public Admission',
    status: 'OPEN TODAY'
  },
  {
    id: 'SPACE 03 // TOKYO',
    location: 'TOKYO MINAMI-AOYAMA',
    address: '5-7-22 Minami-Aoyama, Tokyo 107-0062',
    hours: 'Tue — Sat, 11:00 — 18:00',
    onView: 'Sora Sato: Screen & Video',
    admission: 'Free Public Admission',
    status: 'OPEN TODAY'
  },
  {
    id: 'SPACE 04 // REYKJAVIK',
    location: 'REYKJAVIK SPACE',
    address: 'Grandagarður 20, 101 Reykjavík',
    hours: 'Open by Appointment & Events',
    onView: 'Linnea Dahl: Material Archive',
    admission: 'Free by Appointment',
    status: 'BY APPOINTMENT'
  }
]

const visitorGuidelines = [
  { code: '01', title: 'ADMISSION', desc: 'Admission to all exhibitions at A.V.A. is free. Advance tickets or reservations are not required.' },
  { code: '02', title: 'ACCESSIBILITY', desc: 'All gallery spaces, entrances, and visitor restrooms are fully wheelchair and step-free accessible.' },
  { code: '03', title: 'GUIDED TOURS', desc: 'Complimentary curator-led gallery tours take place every Saturday at 14:00 at our Berlin and London spaces.' },
  { code: '04', title: 'PRIVATE VIEWINGS', desc: 'Private viewings for collectors, institutions, and curatorial research may be arranged via contact@ava-gallery.com.' }
]
</script>

<style scoped>
.page-visit {
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
  z-index: 1;
}

.hero-title-sharp {
  position: relative;
  color: var(--color-ink);
  z-index: 2;
}

.hero-meta-col {
  grid-column: 9 / span 4;
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
}

.meta-bottom {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

/* Visit Container */
.visit-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.welcome-banner {
  border: 1px solid var(--color-border-grid);
  background-color: var(--bg-canvas);
  padding: 24px 32px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.status-indicator {
  position: relative;
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #10b981;
}

.status-text {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.status-heading {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 16px;
  letter-spacing: -0.01em;
}

.status-sub {
  color: var(--color-ink-muted);
  font-size: 10px;
}

/* Spaces Grid */
.grid-wrapper {
  border: 1px solid var(--color-border-grid);
  background-color: var(--color-border-grid);
}

.spaces-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
}

.space-card {
  background-color: var(--bg-canvas);
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 32px;
  min-height: 280px;
}

.space-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.space-badge {
  padding: 2px 8px;
  background: rgba(0, 0, 0, 0.04);
  font-size: 9px;
  letter-spacing: 0.1em;
}

.space-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.space-location {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 28px;
  letter-spacing: -0.03em;
}

.space-address {
  font-size: 13px;
  line-height: 1.4;
}

.space-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
  border-top: 1px solid var(--color-border-grid);
  padding-top: 16px;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 12px;
}

.detail-label {
  color: var(--color-ink-muted);
  font-size: 9px;
}

.detail-val {
  font-size: 11px;
  font-weight: 700;
}

.text-emerald {
  color: #059669;
}

/* Visitor Services */
.services-wrapper {
  border: 1px solid var(--color-border-grid);
  background-color: var(--bg-canvas);
}

.services-header {
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid var(--color-border-grid);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  letter-spacing: 0.15em;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
}

.service-item {
  background-color: var(--bg-canvas);
  padding: 28px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-top {
  display: flex;
  align-items: baseline;
  gap: 10px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
}

.service-num {
  color: var(--accent-purple);
}

.service-desc {
  font-family: var(--font-serif);
  font-size: 15px;
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

  .visit-container {
    padding: 0 24px;
  }

  .spaces-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .page-visit {
    gap: 48px;
  }

  .page-hero {
    padding: 100px 16px 0;
  }

  .visit-container {
    padding: 0 16px;
  }

  .space-card {
    padding: 24px;
  }

  .welcome-banner {
    padding: 20px;
  }
}
</style>
