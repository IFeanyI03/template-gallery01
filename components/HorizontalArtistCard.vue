<template>
  <div
    class="horizontal-artist-card"
    id="card-artists-showcase"
    :class="{ 'is-hovered': isHovered }"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <!-- Top Metadata Header -->
    <header class="card-header">
      <div class="header-left">
        <span class="card-tag">05 // REPRESENTED ARTISTS</span>
        <div class="slide-dots" aria-hidden="true">
          <span
            v-for="(a, idx) in artists"
            :key="idx"
            class="slide-dot"
            :class="{ 'is-active': idx === currentIndex }"
            @click.stop="setSlide(idx)"
          ></span>
        </div>
      </div>
      <span class="view-tag mono-subtle">
        <template v-if="isHovered">ALL ARTISTS (06) →</template>
        <template v-else>ROSTER // 06 →</template>
      </span>
    </header>

    <!-- Center Stage: Horizontal Carousel Track -->
    <div class="card-visual-stage">
      <!-- Ambient Orb -->
      <div
        class="ambient-orb"
        :style="orbStyle"
        aria-hidden="true"
      ></div>

      <!-- Horizontal Carousel Viewport -->
      <div class="carousel-viewport">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="artist in artistsWithImages"
            :key="artist.id"
            class="artist-slide"
          >
            <!-- Blown-out artwork image background that reveals on hover -->
            <div class="image-wrapper">
              <img
                :src="artist.imageSrc"
                :alt="artist.name"
                class="texture-img"
                loading="lazy"
              />
              <div class="slide-scrim"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Metadata Footer -->
    <footer class="card-footer">
      <div class="card-title-group">
        <div class="card-title">
          <span v-for="(line, idx) in currentArtistTitle" :key="idx" class="title-line">{{ line }}</span>
        </div>
        <button
          type="button"
          class="card-action-btn mono-label"
          @click.stop="goToAllArtists"
        >
          <span>View all artists</span>
          <span class="btn-arrow">→</span>
        </button>
      </div>

      <div class="card-meta">
        <span class="meta-line">{{ currentArtist?.discipline?.toUpperCase() }}</span>
        <span class="meta-line">{{ currentArtist?.studioLocation?.toUpperCase() }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { useArtistsData } from '~/composables/useArtists'

const router = useRouter()
const { artists } = useArtistsData()

const currentIndex = ref(0)
const isHovered = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

// Map each artist to a signature collection image for full-card presence
const artistImages: Record<string, string> = {
  'dr-elena-voss': '/images/diffusion_state.png',
  'kaelen-rhys': '/images/kinetic_artifact.png',
  'v01d-system': '/images/fluid_dynamics.png',
  'talia-chen': '/images/fluid_dynamics.png',
  'marcus-vane': '/images/vector_grid.png',
  'aura-labs': '/images/thermal_imprint.png'
}

const artistsWithImages = computed(() =>
  artists.map((artist, index) => ({
    ...artist,
    index,
    imageSrc: artistImages[artist.id] || '/images/diffusion_state.png'
  }))
)

const currentArtist = computed(() => {
  if (!artists || artists.length === 0) return null
  return artists[currentIndex.value] || artists[0]
})

const currentArtistTitle = computed(() => {
  if (!currentArtist.value) return ['ARTIST', '']
  const parts = currentArtist.value.name.trim().split(' ')
  if (parts.length > 1) {
    return [parts[0].toUpperCase(), parts.slice(1).join(' ').toUpperCase()]
  }
  return [parts[0].toUpperCase(), '']
})

const startTimer = () => {
  stopTimer()
  if (artists.length <= 1) return
  timer = setInterval(() => {
    if (!isHovered.value) {
      currentIndex.value = (currentIndex.value + 1) % artists.length
    }
  }, 5500)
}

const stopTimer = () => {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

const setSlide = (idx: number) => {
  currentIndex.value = idx
}

const handleMouseEnter = () => {
  isHovered.value = true
  stopTimer()
}

const handleMouseLeave = () => {
  isHovered.value = false
  startTimer()
}

const goToAllArtists = () => {
  router.push('/artists')
}

const handleClick = () => {
  if (currentArtist.value) {
    router.push(`/artists/${currentArtist.value.id}`)
  } else {
    router.push('/artists')
  }
}

const orbStyle = computed(() => {
  const style: Record<string, string> = {
    backgroundColor: '#3b2d54',
    top: '20px',
    left: '20px'
  }
  if (isHovered.value) {
    const offsetX = (mouseX.value - 0.5) * 30
    const offsetY = (mouseY.value - 0.5) * 30
    style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.15)`
    style.opacity = '0.15'
  }
  return style
})

onMounted(() => {
  startTimer()
})

onBeforeUnmount(() => {
  stopTimer()
})
</script>

<style scoped>
.horizontal-artist-card {
  position: relative;
  height: 600px;
  padding: 40px;
  background-color: var(--bg-dark);
  color: var(--color-ink-light);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

/* Header */
.card-header {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}

.card-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink-light);
}

.slide-dots {
  display: flex;
  gap: 4px;
}

.slide-dot {
  width: 14px;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.slide-dot.is-active {
  width: 24px;
  background-color: var(--color-ink-light);
}

.view-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.15em;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.horizontal-artist-card:hover .view-tag {
  opacity: 1;
  transform: translateX(2px);
}

/* Stage & Carousel */
.card-visual-stage {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 2;
}

.ambient-orb {
  position: absolute;
  width: 280px;
  height: 280px;
  border-radius: 50%;
  filter: blur(40px);
  opacity: 0.3;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.carousel-viewport {
  position: absolute;
  inset: 0;
  overflow: hidden;
  z-index: 2;
}

.carousel-track {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}

.artist-slide {
  position: relative;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  flex: 0 0 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background-color: #0d0d0d;
}

/* SIGNATURE BLOWN-OUT BLUR EFFECT:
   Blown out by default, filling 100% of the box.
   Smoothly reveals the true crystal-clear original image on hover! */
.texture-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(30px) saturate(1.4) brightness(0.65);
  transform: scale(1.08);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.35s ease;
  opacity: 0.85;
}

.horizontal-artist-card:hover .texture-img {
  filter: blur(0px) saturate(1) brightness(0.85);
  transform: scale(1.01);
  opacity: 0.98;
}

.slide-scrim {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%);
  pointer-events: none;
}

.card-title-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.card-action-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  padding: 7px 14px;
  border-radius: 0;
  background: transparent;
  color: var(--color-ink-light);
  border: 1px solid rgba(255, 255, 255, 0.4);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s ease;
  user-select: none;
}

.card-action-btn:hover {
  background-color: var(--color-ink-light);
  color: var(--bg-dark);
  border-color: var(--color-ink-light);
}

.card-action-btn .btn-arrow {
  transition: transform 0.2s ease;
}

.card-action-btn:hover .btn-arrow {
  transform: translateX(4px);
}

/* Footer */
.card-footer {
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
}

.card-title {
  display: flex;
  flex-direction: column;
}

.card-title .title-line {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 28px;
  line-height: 0.92;
  letter-spacing: -0.02em;
  color: var(--color-ink-light);
}

.card-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  text-align: right;
  gap: 2px;
}

.card-meta .meta-line {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink-light);
}

/* Corner accent */
.horizontal-artist-card::after {
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 4px;
  height: 4px;
  background-color: var(--color-border-dark);
}

@media (max-width: 960px) {
  .horizontal-artist-card {
    height: 520px;
    padding: 30px;
  }
  .artist-content-stage {
    padding: 0 24px;
  }
}

@media (max-width: 640px) {
  .horizontal-artist-card {
    height: 440px;
    padding: 24px;
  }
  .artist-content-stage {
    padding: 0 16px;
  }
  .card-title .title-line {
    font-size: 24px;
  }
  .artist-statement {
    display: none;
  }
}
</style>
