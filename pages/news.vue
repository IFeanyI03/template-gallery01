<template>
  <div class="page-news">
    <!-- Master Hero Header -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>NEWS.</span>
            <span>BLOG.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>NEWS.</span>
            <span>BLOG.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>PROGRAM: NEWS & BLOG</div>
              <div>PUBLICATIONS: {{ filteredArticles.length }} RECENT RELEASES</div>
              <div>EDITIONS: A.V.A. EDITIONS • BERLIN</div>
            </div>
            <p class="curatorial-statement">
              Curatorial essays, artist interviews, catalogue announcements, and international press reviews.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>A.V.A. CONTEMPORARY</div>
            <div>RECENT ARTICLES & REVIEWS</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Filter Bar & Articles Matrix -->
    <section class="news-container">
      <!-- Category Filter Bar -->
      <div class="filter-bar">
        <span class="filter-label mono-label">FILTER CATEGORY:</span>
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

      <!-- Articles Grid -->
      <div class="articles-grid">
        <article
          v-for="article in filteredArticles"
          :key="article.id"
          class="article-card"
        >
          <div class="card-top">
            <span class="article-cat mono-label">{{ article.category }}</span>
            <span class="article-time mono-subtle">{{ article.readingTime }}</span>
          </div>

          <div class="card-body">
            <span class="article-date mono-subtle">{{ article.date }}</span>
            <h2 class="article-title">{{ article.title }}</h2>
            <div class="article-author mono-label">
              <span>{{ article.author }}</span>
              <span class="author-role mono-subtle">// {{ article.authorRole }}</span>
            </div>
            <p class="article-excerpt">
              {{ article.excerpt }}
            </p>
          </div>

          <div class="card-footer">
            <div class="tags-row">
              <span v-for="(tag, idx) in article.tags" :key="idx" class="tag-chip mono-subtle">
                {{ tag }}
              </span>
            </div>
            <button class="read-btn mono-label" @click="openArticle(article)">
              <span>READ ARTICLE</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </article>
      </div>
    </section>

    <!-- Interactive Article Reader Modal -->
    <Teleport to="body">
      <div
        v-if="selectedArticle"
        class="reader-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Article Reader"
        @click.self="selectedArticle = null"
      >
        <div class="reader-container">
          <div class="reader-header">
            <div class="reader-meta mono-label">
              <span>{{ selectedArticle.category }} // {{ selectedArticle.date }}</span>
              <span>READING TIME: {{ selectedArticle.readingTime }}</span>
            </div>
            <button class="reader-close-btn mono-label" @click="selectedArticle = null">
              <span>✕ CLOSE</span>
            </button>
          </div>

          <div class="reader-content">
            <h2 class="reader-title">{{ selectedArticle.title }}</h2>
            <div class="reader-byline mono-label">
              <span>AUTHOR: {{ selectedArticle.author }}</span>
              <span class="byline-role mono-subtle">({{ selectedArticle.authorRole }})</span>
            </div>

            <div class="reader-body">
              <p
                v-for="(para, idx) in selectedArticle.bodyParagraphs"
                :key="idx"
                class="reader-para"
              >
                {{ para }}
              </p>
            </div>

            <div v-if="selectedArticle.citation" class="reader-citation">
              <span class="mono-label cite-label">// CITATION REFERENCE</span>
              <code class="cite-text mono-subtle">{{ selectedArticle.citation }}</code>
            </div>
          </div>

          <div class="reader-footer">
            <NuxtLink
              :to="`/contact?type=publication&id=${selectedArticle.id}&title=${encodeURIComponent(selectedArticle.title)}`"
              class="reader-inquire-btn mono-label"
              @click="selectedArticle = null"
            >
              <span>INQUIRE ABOUT PUBLICATION</span>
              <span>→</span>
            </NuxtLink>
            <button class="reader-back-btn mono-label" @click="selectedArticle = null">
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useNewsData, type NewsArticle } from '~/composables/useNews'

useHead({
  title: 'News & Blog — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Curatorial essays, artist monographs, permanent collection acquisitions, and press reviews from A.V.A. Contemporary Gallery.'
    }
  ]
})

const { articles } = useNewsData()

const categories = ['ALL', 'BLOG', 'PUBLICATIONS', 'PRESS', 'ACQUISITIONS']
const activeCategory = ref('ALL')

const filteredArticles = computed(() => {
  if (activeCategory.value === 'ALL') return articles
  return articles.filter((a) => a.category === activeCategory.value)
})

const selectedArticle = ref<NewsArticle | null>(null)

const openArticle = (article: NewsArticle) => {
  selectedArticle.value = article
}

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && selectedArticle.value) {
    selectedArticle.value = null
  }
}

onMounted(() => {
  if (process.client) {
    window.addEventListener('keydown', handleKeyDown)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('keydown', handleKeyDown)
  }
})
</script>

<style scoped>
.page-news {
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

/* News Container */
.news-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 32px;
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

/* Articles Grid */
.articles-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.article-card {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
  padding: 36px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
  transition: background-color 0.2s ease;
}

.article-card:hover {
  background-color: #f4f4f4;
}

.card-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.article-cat {
  padding: 3px 8px;
  background: var(--color-ink);
  color: var(--bg-canvas);
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.article-date {
  color: var(--color-ink-muted);
}

.article-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(1.4rem, 2vw, 2rem);
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.article-author {
  color: var(--accent-purple);
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.author-role {
  color: var(--color-ink-muted);
}

.article-excerpt {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-ink-muted);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border-grid);
  padding-top: 20px;
  flex-wrap: wrap;
  gap: 16px;
}

.tags-row {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}

.tag-chip {
  padding: 2px 6px;
  border: 1px solid var(--color-border-grid);
  background: rgba(0, 0, 0, 0.02);
}

.read-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  border: 1px solid var(--color-ink);
  color: var(--color-ink);
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.read-btn:hover {
  background: var(--color-ink);
  color: var(--bg-canvas);
}

.btn-arrow {
  transition: transform 0.2s ease;
}

.read-btn:hover .btn-arrow {
  transform: translateX(3px);
}

/* Reader Modal Overlay */
.reader-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

.reader-container {
  width: 100%;
  max-width: 900px;
  max-height: 85vh;
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
  display: flex;
  flex-direction: column;
}

.reader-header {
  padding: 20px 32px;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid var(--color-border-grid);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.reader-meta {
  display: flex;
  gap: 20px;
}

.reader-close-btn {
  background: transparent;
  border: 1px solid var(--color-ink);
  padding: 6px 14px;
  cursor: pointer;
}

.reader-close-btn:hover {
  background: var(--color-ink);
  color: var(--bg-canvas);
}

.reader-content {
  padding: 40px 32px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.reader-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: clamp(2rem, 3.2vw, 2.8rem);
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.reader-byline {
  display: flex;
  gap: 8px;
  border-bottom: 1px solid var(--color-border-grid);
  padding-bottom: 16px;
}

.reader-body {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.reader-para {
  font-family: var(--font-serif);
  font-size: 18px;
  line-height: 1.65;
  color: var(--color-ink);
}

.reader-citation {
  background: rgba(0, 0, 0, 0.03);
  border-left: 3px solid var(--accent-purple);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cite-text {
  font-size: 11px;
  line-height: 1.6;
}

.reader-footer {
  padding: 20px 32px;
  border-top: 1px solid var(--color-border-grid);
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.02);
}

.reader-inquire-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: var(--color-ink);
  color: var(--bg-canvas);
  transition: opacity 0.2s ease;
}

.reader-inquire-btn:hover {
  opacity: 0.85;
}

.reader-back-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--color-ink-muted);
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .news-container {
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
  .articles-grid {
    grid-template-columns: 1fr;
  }
  .reader-overlay {
    padding: 16px;
  }
  .reader-content {
    padding: 24px 16px;
  }
}
</style>
