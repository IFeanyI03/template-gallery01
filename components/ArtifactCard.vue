<template>
  <component
    :is="targetLink ? NuxtLink : 'article'"
    :to="targetLink"
    :class="['artifact-card', { 'is-dark': isDark, 'is-link': !!targetLink }]"
    :id="cardId"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
    <!-- Top Metadata Header -->
    <header class="card-header">
      <span class="card-tag">{{ number }}</span>
      <span v-if="targetLink" class="work-link-tag mono-subtle">{{ actionLabel || 'VIEW WORK →' }}</span>
    </header>

    <!-- Center Visual Stage -->
    <div class="card-visual-stage">
      <!-- Glow Orb if present -->
      <div
        v-if="orbColor"
        class="ambient-orb"
        :style="orbStyle"
        aria-hidden="true"
      ></div>

      <!-- Texture Image with blur effect -->
      <div v-if="imageSrc" class="image-wrapper">
        <img
          :src="imageSrc"
          :alt="imageAlt || number"
          class="texture-img"
          loading="lazy"
        />
      </div>

      <!-- Center Typography (Card 05 System Override) -->
      <div v-else-if="errText" class="center-type-wrapper">
        <span class="center-type-blur" aria-hidden="true">{{ errText }}</span>
        <span class="center-type-sharp">{{ errText }}</span>
      </div>
    </div>

    <!-- Bottom Metadata Footer -->
    <footer class="card-footer">
      <div class="card-title">
        <span v-for="(line, idx) in title" :key="idx" class="title-line">{{ line }}</span>
      </div>

      <div class="card-meta">
        <span v-for="(item, idx) in meta" :key="idx" class="meta-line">{{ item }}</span>
      </div>
    </footer>
  </component>
</template>

<script setup lang="ts">
import { computed, ref, resolveComponent } from 'vue'

const NuxtLink = resolveComponent('NuxtLink')

interface OrbPos {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

interface Props {
  cardId?: string
  slug?: string
  to?: string
  actionLabel?: string
  number: string
  title: string[]
  meta: string[]
  imageSrc?: string
  imageAlt?: string
  isDark?: boolean
  errText?: string
  orbColor?: string
  orbPosition?: OrbPos
}

const props = withDefaults(defineProps<Props>(), {
  isDark: false
})

const targetLink = computed(() => {
  if (props.to) return props.to
  if (props.slug) return `/artworks/${props.slug}`
  return undefined
})

const mouseX = ref(0)
const mouseY = ref(0)
const isHovered = ref(false)

const handleMouseMove = (e: MouseEvent) => {
  const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
  mouseX.value = (e.clientX - rect.left) / rect.width
  mouseY.value = (e.clientY - rect.top) / rect.height
  isHovered.value = true
}

const handleMouseLeave = () => {
  isHovered.value = false
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
  }

  return style
})
</script>

<style scoped>
.artifact-card {
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
  transition: background-color 0.3s ease, border-color 0.3s ease;
}

.artifact-card.is-link {
  cursor: pointer;
}

.artifact-card.is-dark {
  background-color: var(--bg-dark);
  color: var(--color-ink-light);
}

/* Card Header */
.card-header {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-tag {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-ink);
  transition: color 0.3s ease;
}

.work-link-tag {
  font-family: var(--font-mono);
  font-size: 9px;
  letter-spacing: 0.15em;
  opacity: 0.6;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.artifact-card:hover .work-link-tag {
  opacity: 1;
  transform: translateX(2px);
}

.artifact-card.is-dark .card-tag {
  color: var(--color-ink-light);
}

/* Visual Stage */
.card-visual-stage {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;
}

.ambient-orb {
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  filter: blur(30px);
  opacity: 0.32;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
  pointer-events: none;
  z-index: 1;
}

.artifact-card:hover .ambient-orb {
  opacity: 0.45;
}

.image-wrapper {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;
}

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

.artifact-card:hover .texture-img {
  filter: blur(0px) saturate(1) brightness(1);
  transform: scale(1.01);
  opacity: 1;
}

/* Card 05 Centered Glitch Type */
.center-type-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.center-type-blur,
.center-type-sharp {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 80px;
  line-height: 72px;
  letter-spacing: -0.04em;
  color: var(--color-ink-light);
  user-select: none;
}

.center-type-blur {
  position: absolute;
  filter: blur(2.5px);
  opacity: 0.8;
  animation: glitch-vibe 3s infinite ease-in-out alternate;
}

.center-type-sharp {
  position: relative;
}

@keyframes glitch-vibe {
  0% {
    transform: translate(0, 0);
    opacity: 0.8;
  }
  50% {
    transform: translate(-1px, 1px);
    opacity: 0.9;
  }
  100% {
    transform: translate(1.5px, -1px);
    opacity: 0.7;
  }
}

/* Card Footer */
.card-footer {
  position: relative;
  z-index: 5;
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

.artifact-card.is-dark .card-title .title-line {
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
  color: var(--color-ink);
  transition: color 0.3s ease;
}

.artifact-card.is-dark .card-meta .meta-line {
  color: var(--color-ink-light);
}

/* Corner accent */
.artifact-card::after {
  content: '';
  position: absolute;
  top: 12px;
  right: 12px;
  width: 4px;
  height: 4px;
  background-color: var(--color-border-grid);
  transition: background-color 0.2s ease;
}

.artifact-card.is-dark::after {
  background-color: var(--color-border-dark);
}

@media (max-width: 960px) {
  .artifact-card {
    height: 520px;
    padding: 30px;
  }
}

@media (max-width: 640px) {
  .artifact-card {
    height: 440px;
    padding: 24px;
  }
  .card-title .title-line {
    font-size: 24px;
  }
}
</style>
