<template>
  <section class="artifact-section" id="exhibitions" aria-label="Exhibitions and Gallery Program">
    <div class="grid-wrapper">
      <div class="grid-container">
        <!-- ROW 1: THE FIRST THREE BOXES ARE EXHIBITIONS -->

        <!-- 01. EXHIBITION: PHOS GENE (Current · Berlin) -->
        <ArtifactCard
          cardId="card-exhibition-phos-gene"
          to="/exhibitions/phos-gene"
          actionLabel="VIEW EXHIBITION →"
          number="01 // EXHIBITION"
          :title="['PHOS', 'GENE']"
          :meta="['OCT 2024 — MAR 2025', 'A.V.A. BERLIN']"
          imageSrc="/images/diffusion_state.png"
          imageAlt="Phos Gene Exhibition at A.V.A. Berlin"
          orbColor="#D4A017"
          :orbPosition="{ top: '-35px', right: '30px' }"
        />

        <!-- 02. EXHIBITION: SYNTHETIC NOISE (Tokyo) -->
        <ArtifactCard
          cardId="card-exhibition-synthetic-noise"
          to="/exhibitions/synthetic-noise"
          actionLabel="VIEW EXHIBITION →"
          number="02 // EXHIBITION"
          :title="['SYNTHETIC', 'NOISE']"
          :meta="['NOV 2023 — FEB 2024', 'A.V.A. TOKYO']"
          imageSrc="/images/kinetic_artifact.png"
          imageAlt="Synthetic Noise Exhibition at A.V.A. Tokyo"
          orbColor="#2C1A5F"
          :orbPosition="{ bottom: '60px', left: '-50px' }"
        />

        <!-- 03. EXHIBITION: RETINAL PERSISTENCE (New York) -->
        <ArtifactCard
          cardId="card-exhibition-retinal-persistence"
          to="/exhibitions/retinal-persistence"
          actionLabel="VIEW EXHIBITION →"
          number="03 // EXHIBITION"
          :title="['RETINAL', 'PERSISTENCE']"
          :meta="['MAY 2023 — AUG 2023', 'NEW YORK']"
          imageSrc="/images/thermal_imprint.png"
          imageAlt="Retinal Persistence Exhibition in New York"
          orbColor="#E1458A"
          :orbPosition="{ bottom: '80px', right: '10px' }"
        />

        <!-- ROW 2: THE THREE BOXES BELOW IT (FULL-CARD HORIZONTAL SLIDES) -->

        <!-- 04. BOTTOM LEFT: FULL-CARD RANDOM ARTWORKS HORIZONTAL SLIDE -->
        <HorizontalArtworkCard
          cardId="card-random-artworks-left"
          number="04 // RANDOM ARTWORKS"
          :artworks="leftArtworks"
          :intervalMs="5000"
          orbColor="#059669"
          :orbPosition="{ top: '-25px', left: '-30px' }"
        />

        <!-- 05. BOTTOM CENTER: FULL-CARD ARTIST SHOWCASE HORIZONTAL SLIDE -->
        <HorizontalArtistCard />

        <!-- 06. BOTTOM RIGHT: FULL-CARD RANDOM ARTWORKS HORIZONTAL SLIDE -->
        <HorizontalArtworkCard
          cardId="card-random-artworks-right"
          number="06 // RANDOM ARTWORKS"
          :artworks="rightArtworks"
          :intervalMs="6500"
          orbColor="#2563eb"
          :orbPosition="{ bottom: '35px', right: '-35px' }"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import ArtifactCard from './ArtifactCard.vue'
import HorizontalArtistCard from './HorizontalArtistCard.vue'
import HorizontalArtworkCard from './HorizontalArtworkCard.vue'
import { useArtworksData, type ArtworkDetail } from '~/composables/useArtworks'

const { artworks } = useArtworksData()

// Stable initial subsets for clean SSR hydration
const leftArtworks = ref<ArtworkDetail[]>([
  artworks.find(a => a.id === 'diffusion-state') || artworks[0],
  artworks.find(a => a.id === 'vector-grid') || artworks[3],
  artworks.find(a => a.id === 'kinetic-artifact') || artworks[1]
])

const rightArtworks = ref<ArtworkDetail[]>([
  artworks.find(a => a.id === 'thermal-imprint') || artworks[2],
  artworks.find(a => a.id === 'fluid-dynamics') || artworks[5],
  artworks.find(a => a.id === 'system-override') || artworks[4]
])

// On client mount, randomly distribute artworks between Left and Right horizontal carousels
onMounted(() => {
  const shuffled = [...artworks].sort(() => Math.random() - 0.5)
  if (shuffled.length >= 4) {
    const half = Math.ceil(shuffled.length / 2)
    leftArtworks.value = shuffled.slice(0, half)
    rightArtworks.value = shuffled.slice(half)
  }
})
</script>

<style scoped>
.artifact-section {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.grid-wrapper {
  width: 100%;
  background-color: var(--color-border-grid);
  border: 1px solid var(--color-border-grid);
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background-color: var(--color-border-grid);
}

@media (max-width: 1100px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .artifact-section {
    padding: 0 16px;
  }
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
