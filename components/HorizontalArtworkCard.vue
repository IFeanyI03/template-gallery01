<template>
  <div
    class="horizontal-card"
    :id="cardId"
    :class="{ 'is-hovered': isHovered }"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @click="handleClick"
  >
    <!-- Top Metadata Header -->
    <header class="card-header">
      <div class="header-left">
        <span class="card-tag">{{ number }}</span>
        <div class="slide-dots" aria-hidden="true">
          <span
            v-for="(w, idx) in artworks"
            :key="idx"
            class="slide-dot"
            :class="{ 'is-active': idx === currentIndex }"
            @click.stop="setSlide(idx)"
          ></span>
        </div>
      </div>
      <span class="work-link-tag mono-subtle">
        <template v-if="isHovered">REVEALED // COLLECTION →</template>
        <template v-else>ALL ARTWORKS →</template>
      </span>
    </header>

    <!-- Center Stage: Horizontal Sliding Viewport -->
    <div class="card-visual-stage">
      <!-- Ambient Orb -->
      <div
        v-if="orbColor"
        class="ambient-orb"
        :style="orbStyle"
        aria-hidden="true"
      ></div>

      <!-- Horizontal Carousel Track -->
      <div class="carousel-viewport">
        <div
          class="carousel-track"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="work in artworks"
            :key="work.id"
            class="carousel-slide"
          >
            <!-- Clean Artwork Slide Image (Matches First Row) -->
            <div class="image-wrapper">
              <img
                :src="work.imageSrc"
                :alt="work.title"
                class="texture-img"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Metadata Footer -->
    <footer class="card-footer">
      <div class="card-title-group">
        <div class="card-title">
          <span v-for="(line, idx) in currentTitle" :key="idx" class="title-line">{{ line }}</span>
        </div>
        <button
          type="button"
          class="card-action-btn mono-label"
          @click.stop="goToAllArtworks"
        >
          <span>View all artworks</span>
          <span class="btn-arrow">→</span>
        </button>
      </div>

      <div class="card-meta">
        <span class="meta-line">{{ currentMeta[0] }}</span>
        <span class="meta-line">{{ currentMeta[1] }}</span>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import type { ArtworkDetail } from '~/composables/useArtworks'

interface OrbPos {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface Props {
  cardId?: string
  number: string
  artworks: ArtworkDetail[]
  intervalMs?: number
  orbColor?: string
  orbPosition?: OrbPos
}

const props = withDefaults(defineProps<Props>(), {
  intervalMs: 5000,
  orbColor: '#D4A017'
})

const router = useRouter()
const currentIndex = ref(0)
const isHovered = ref(false)
const mouseX = ref(0)
const mouseY = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const currentArtwork = computed(() => {
  if (!props.artworks || props.artworks.length === 0) return null
  return props.artworks[currentIndex.value] || props.artworks[0]
})

const currentTitle = computed(() => {
  if (!currentArtwork.value) return ['ARTWORK', '']
  const parts = currentArtwork.value.title.toUpperCase().split(' ')
  if (parts.length > 1) {
    return [parts[0], parts.slice(1).join(' ')]
  }
  return [parts[0], '']
})

const currentMeta = computed(() => {
  if (!currentArtwork.value) return ['', '']
  const med = currentArtwork.value.medium.split(',')[0].toUpperCase()
  return [
    `${currentArtwork.value.year} · ${med}`,
    currentArtwork.value.dimensions.split('(')[0].trim().toUpperCase()
  ]
})

const startTimer = () => {
  stopTimer()
  if (props.artworks.length <= 1) return
  timer = setInterval(() => {
    if (!isHovered.value) {
      currentIndex.value = (currentIndex.value + 1) % props.artworks.length
    }
  }, props.intervalMs)
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

const goToAllArtworks = () => {
  router.push('/archive')
}

const handleClick = () => {
  if (currentArtwork.value) {
    router.push(`/artworks/${currentArtwork.value.id}`)
  } else {
    router.push('/archive')
  }
}

const orbStyle = computed(() => {
  if (!props.orbColor) return {}
  const style: Record<string, string> = {
    backgroundColor: props.orbColor
  }
  if (props.orbPosition?.top) style.top = props.orbPosition.top
  if (props.orbPosition?.bottom) style.bottom = props.orbPosition.bottom
  if (props.orbPosition?.left) style.left = props.orbPosition.left
  if (props.orbPosition?.right) style.right = props.orbPosition.right

  if (isHovered.value) {
    const offsetX = (mouseX.value - 0.5) * 30
    const offsetY = (mouseY.value - 0.5) * 30
    style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.15)`
    style.opacity = '0.2'
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
.horizontal-card {
  position: relative;
  height: 600px;
  padding: 40px;
  background-color: var(--bg-canvas);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
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
  color: var(--color-ink);
}

.slide-dots {
  display: flex;
  gap: 4px;
}

.slide-dot {
  width: 14px;
  height: 2px;
  background-color: rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  cursor: pointer;
}

.slide-dot.is-active {
  width: 24px;
  background-color: var(--color-ink);
}

.work-link-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.15em;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.horizontal-card:hover .work-link-tag {
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
  width: 240px;
  height: 240px;
  border-radius: 50%;
  filter: blur(35px);
  opacity: 0.35;
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

.carousel-slide {
  position: relative;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  flex: 0 0 100%;
  overflow: hidden;
}

.image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

/* SIGNATURE BLOWN-OUT BLUR EFFECT:
   Heavily blown out by default, filling 100% of the box.
   Smoothly reveals the true crystal-clear original image on hover! */
.texture-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  filter: blur(28px) saturate(1.4) brightness(1.08);
  transform: scale(1.08);
  transition: filter 0.5s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.6s cubic-bezier(0.16, 1, 0.3, 1),
              opacity 0.35s ease;
  opacity: 0.92;
}

.horizontal-card:hover .texture-img {
  filter: blur(0px) saturate(1) brightness(1);
  transform: scale(1.01);
  opacity: 1;
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
  color: var(--color-ink);
  border: 1px solid rgba(0, 0, 0, 0.45);
  cursor: pointer;
  pointer-events: auto;
  transition: all 0.2s ease;
  user-select: none;
}

.card-action-btn:hover {
  background-color: var(--color-ink);
  color: var(--bg-canvas);
  border-color: var(--color-ink);
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
  color: var(--color-ink);
  transition: color 0.3s ease;
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
  color: var(--color-ink);
  transition: color 0.3s ease;
}

/* Corner accent */
.horizontal-card::after {
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 4px;
  height: 4px;
  background-color: var(--color-border-grid);
}

@media (max-width: 960px) {
  .horizontal-card {
    height: 520px;
    padding: 30px;
  }
}

@media (max-width: 640px) {
  .horizontal-card {
    height: 440px;
    padding: 24px;
  }
  .card-title .title-line {
    font-size: 24px;
  }
}
</style>
