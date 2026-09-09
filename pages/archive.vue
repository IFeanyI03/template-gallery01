<template>
  <div class="page-archive">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>ARCH.</span>
            <span>IVE.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>ARCH.</span>
            <span>IVE.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>COLLECTION: A.V.A. PERMANENT COLLECTION & INVENTORY</div>
              <div>CATALOGUE: {{ filteredArtworks.length }} WORKS INDEXED</div>
              <div>LOCATIONS: BERLIN • LONDON • TOKYO</div>
            </div>
            <p class="curatorial-statement">
              A curated inventory of works by represented artists, including permanent collection holdings, available pieces, and institutional loans.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>CATALOGUE RAISONNÉ</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Archive Filter & Ledger -->
    <section class="archive-container">
      <!-- Filter Bar -->
      <div class="filter-bar">
        <span class="filter-label mono-label">FILTER BY MEDIUM:</span>
        <div class="filter-tags">
          <button
            v-for="cat in categories"
            :key="cat"
            :class="['filter-btn mono-label', { active: activeCategory === cat }]"
            @click="activeCategory = cat"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Collection Inventory Table -->
      <div class="inventory-wrapper ledger-wrapper">
        <div class="table-scroll">
          <table class="collection-table ledger-table">
            <thead>
              <tr class="mono-label">
                <th>CATALOGUE ID</th>
                <th>ARTWORK & ARTIST</th>
                <th>MEDIUM</th>
                <th>DIMENSIONS</th>
                <th>EDITION</th>
                <th>LOCATION</th>
                <th>STATUS</th>
                <th>VIEW</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in filteredArtworks"
                :key="item.id"
                class="ledger-row"
                @click="navigateToArtwork(item.id)"
              >
                <td class="mono-label col-id">{{ item.accessionCode }}</td>
                <td class="col-name">
                  <NuxtLink :to="`/artworks/${item.id}`" class="name-bold">
                    {{ item.title }}
                  </NuxtLink>
                  <span class="name-sub mono-subtle">{{ item.artist }} ({{ item.year }})</span>
                </td>
                <td class="mono-subtle">{{ item.medium }}</td>
                <td class="mono-label">{{ item.dimensions }}</td>
                <td class="mono-label">{{ item.edition }}</td>
                <td class="mono-subtle">{{ item.location || item.vaultLocation }}</td>
                <td>
                  <span class="status-pill mono-subtle" :class="{ alert: item.status === 'AVAILABLE' }">
                    {{ item.status }}
                  </span>
                </td>
                <td>
                  <NuxtLink :to="`/artworks/${item.id}`" class="view-link mono-label">
                    <span>VIEW →</span>
                  </NuxtLink>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useArtworksData } from '~/composables/useArtworks'

const router = useRouter()

const navigateToArtwork = (id: string) => {
  router.push(`/artworks/${id}`)
}

useHead({
  title: 'Collection & Works — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Permanent collection inventory and catalogue of contemporary artworks, mediums, dimensions, and provenance.'
    }
  ]
})

const categories = ['ALL', 'DIFFUSION', 'KINETIC', 'THERMAL', 'VECTOR', 'EXPERIMENTAL', 'FLUID']
const activeCategory = ref('ALL')

const { artworks } = useArtworksData()

const filteredArtworks = computed(() => {
  if (activeCategory.value === 'ALL') return artworks
  return artworks.filter((item) => item.category.toUpperCase() === activeCategory.value)
})
</script>

<style scoped>
.page-archive {
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

/* Archive Ledger */
.archive-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.filter-bar {
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.filter-tags {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.filter-btn {
  background: transparent;
  border: 1px solid var(--color-border-grid);
  padding: 8px 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--color-ink);
}

.filter-btn:hover {
  background: rgba(0, 0, 0, 0.05);
}

.filter-btn.active {
  background: var(--color-ink);
  color: var(--bg-canvas);
  border-color: var(--color-ink);
}

.ledger-wrapper {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
}

.table-scroll {
  width: 100%;
  overflow-x: auto;
}

.ledger-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.ledger-table th,
.ledger-table td {
  padding: 20px 24px;
  border-bottom: 1px solid var(--color-border-grid);
  vertical-align: middle;
}

.ledger-table th {
  background: rgba(0, 0, 0, 0.03);
  font-weight: 700;
  white-space: nowrap;
}

.ledger-table tbody tr {
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.ledger-table tbody tr:hover {
  background-color: rgba(0, 0, 0, 0.035);
}

.col-name {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.name-bold {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 15px;
  letter-spacing: -0.01em;
  color: inherit;
  transition: opacity 0.2s ease;
}

.name-bold:hover {
  opacity: 0.7;
}

.name-sub {
  color: var(--color-ink-muted);
}

.status-pill {
  display: inline-block;
  padding: 3px 8px;
  border: 1px solid #10b981;
  color: #065f46;
  background: rgba(16, 185, 129, 0.1);
  transition: all 0.2s ease;
}

.status-pill.alert {
  border-color: #ef4444;
  color: #f87171;
  background: rgba(239, 68, 68, 0.15);
}

.view-link {
  color: var(--color-link-blue);
  text-decoration: underline;
  transition: opacity 0.2s ease, color 0.2s ease;
  white-space: nowrap;
}

.view-link:hover {
  opacity: 0.6;
}



@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .archive-container {
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
</style>
