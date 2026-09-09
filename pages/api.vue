<template>
  <div class="page-api">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>COLL.</span>
            <span>API.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>OPEN.</span>
            <span>API.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>BASE URL: https://api.ava-archive.org/v1</div>
              <div>PROTOCOL: REST + LINKED OPEN DATA (JSON-LD)</div>
              <div>AUTH: OPEN ACCESS / CITATION TOKEN</div>
            </div>
            <p class="curatorial-statement">
              Programmatic access to the permanent collection, represented artists, exhibition checklists, catalogue raisonné records, and museum display specifications.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>RATE LIMIT: 1000 REQ/MIN</div>
            <div>STATUS: OPEN COLLECTIONS API</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- API Reference Grid -->
    <section class="api-container">
      <!-- Category Filter Bar -->
      <div class="filter-bar">
        <span class="filter-label mono-label">FILTER MODULES:</span>
        <div class="filter-tags">
          <button
            v-for="mod in modules"
            :key="mod"
            :class="['filter-btn mono-label', { active: activeModule === mod }]"
            @click="activeModule = mod"
          >
            {{ mod }}
          </button>
        </div>
      </div>

      <div class="endpoints-stack">
        <!-- Endpoint 01: List Artworks -->
        <article v-if="matchesModule('ARTWORKS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/artworks</code>
            <span class="ep-desc mono-subtle">// LIST ALL CATALOGUED ARTWORKS</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Returns an indexed array of all permanent and archived artworks, accompanied by mediums, dimensions, editions, and current collection status.
            </p>
            <div class="ep-params">
              <span class="param-title mono-label">QUERY PARAMETERS:</span>
              <ul class="param-list mono-subtle">
                <li><code>category</code> (string, optional) — Filter by <code>DIFFUSION</code>, <code>KINETIC</code>, <code>THERMAL</code>, <code>VECTOR</code>, <code>EXPERIMENTAL</code>, <code>FLUID</code></li>
                <li><code>status</code> (string, optional) — Filter by <code>PERMANENT COLLECTION</code>, <code>AVAILABLE</code>, <code>ON LOAN</code>, <code>PRIVATE COLLECTION</code></li>
              </ul>
            </div>
            <div class="code-block">
              <div class="code-header mono-subtle">
                <span>SAMPLE CURL REQUEST</span>
                <button class="copy-btn mono-label" @click="copySnippet('curl-artifacts')">
                  {{ copiedId === 'curl-artifacts' ? 'COPIED ✓' : 'COPY cURL' }}
                </button>
              </div>
              <pre class="code-pre mono-subtle"><code>curl -X GET "https://api.ava-archive.org/v1/artworks?category=DIFFUSION" \
     -H "Accept: application/json"</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 02: Artwork Details & Specifications -->
        <article v-if="matchesModule('ARTWORKS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/artworks/{id}</code>
            <span class="ep-desc mono-subtle">// RETRIEVE ARTWORK DETAILS & SPECIFICATIONS</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Query complete catalogue raisonné reference, condition report, framing directives, lighting requirements, and exhibition provenance for a single artwork identifier (e.g. <code>diffusion-state</code>).
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">SAMPLE JSON RESPONSE</div>
              <pre class="code-pre mono-subtle"><code>{
  "id": "diffusion-state",
  "accessionCode": "AVA-2024-001",
  "title": "DIFFUSION STATE",
  "subtitle": "Luminescent Panel",
  "artist": "Elena Voss",
  "year": "2024",
  "medium": "Generative code & phosphor luminescence on 4K archival display panel",
  "dimensions": "180 × 120 cm (70.8 × 47.2 in)",
  "edition": "Edition of 3 + 2 Artist Proofs",
  "status": "PERMANENT COLLECTION",
  "specifications": {
    "framing": "Brutalist brushed black anodized aluminium shadowbox",
    "displaySpecs": "Calibrated OLED 4K panel, 120Hz refresh",
    "colorTemp": "6500K museum daylight spectrum"
  }
}</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 03: Artists Directory -->
        <article v-if="matchesModule('ARTISTS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/artists</code>
            <span class="ep-desc mono-subtle">// DIRECTORY OF REPRESENTED ARTISTS & ESTATES</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Returns all represented artists and estates, studio locations (Berlin, London, Tokyo, Singapore, Zürich, Reykjavik), and artistic disciplines.
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">
                <span>SAMPLE CURL REQUEST</span>
                <button class="copy-btn mono-label" @click="copySnippet('curl-artists')">
                  {{ copiedId === 'curl-artists' ? 'COPIED ✓' : 'COPY cURL' }}
                </button>
              </div>
              <pre class="code-pre mono-subtle"><code>curl -X GET "https://api.ava-archive.org/v1/artists" \
     -H "Accept: application/json"</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 04: Artist Monograph -->
        <article v-if="matchesModule('ARTISTS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/artists/{id}</code>
            <span class="ep-desc mono-subtle">// ARTIST MONOGRAPH & EXHIBITIONS HISTORY</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Retrieves the complete biographical monograph, artist statement, catalogued artworks, solo & group exhibition history, and published monographs.
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">SAMPLE RESPONSE SUMMARY</div>
              <pre class="code-pre mono-subtle"><code>{
  "id": "dr-elena-voss",
  "name": "Elena Voss",
  "studioLocation": "Berlin, Germany",
  "discipline": "GENERATIVE LUMINESCENCE & OPTICAL ART",
  "representationStatus": "REPRESENTED ARTIST",
  "statement": "Visual memory is not an indelible recording; it is an electrochemical decay curve...",
  "worksCount": 2,
  "publicationsCount": 3
}</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 05: Exhibitions Program -->
        <article v-if="matchesModule('EXHIBITIONS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/exhibitions</code>
            <span class="ep-desc mono-subtle">// CURATORIAL EXHIBITION PROGRAM</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Fetches all exhibition series (<code>phos-gene</code>, <code>synthetic-noise</code>, <code>retinal-persistence</code>, <code>vector-collapse</code>) with status filtering and timeline metrics.
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">
                <span>SAMPLE CURL REQUEST</span>
                <button class="copy-btn mono-label" @click="copySnippet('curl-exhibitions')">
                  {{ copiedId === 'curl-exhibitions' ? 'COPIED ✓' : 'COPY cURL' }}
                </button>
              </div>
              <pre class="code-pre mono-subtle"><code>curl -X GET "https://api.ava-archive.org/v1/exhibitions?status=CURRENT" \
     -H "Accept: application/json"</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 06: Dedicated Exhibition Presentation -->
        <article v-if="matchesModule('EXHIBITIONS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/exhibitions/{id}</code>
            <span class="ep-desc mono-subtle">// EXHIBITION GALLERY SPECIFICATIONS & CHECKLIST</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Returns gallery specifications (area, ceiling height, lighting specs, climate controls), participating artists, curated artwork checklist, and critical press reviews.
            </p>
          </div>
        </article>

        <!-- Endpoint 07: Curatorial & Acquisitions Inquiries -->
        <article v-if="matchesModule('INQUIRIES')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-post mono-label">POST</span>
            <code class="ep-path mono-label">/v1/inquiries</code>
            <span class="ep-desc mono-subtle">// CURATORIAL & ACQUISITIONS INQUIRY SUBMISSION</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Submits a formal curatorial inquiry, acquisition request, or exhibition loan submission to the A.V.A. curatorial board.
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">SAMPLE POST JSON BODY</div>
              <pre class="code-pre mono-subtle"><code>{
  "name": "Elena Rostova",
  "email": "curator@institution.org",
  "classification": "CURATORIAL",
  "message": "[INQUIRY REGARDING: AVA-2024-001 DIFFUSION STATE]\n\nRequesting artwork availability, framing specifications, and exhibition details."
}</code></pre>
            </div>
          </div>
        </article>

        <!-- Endpoint 08: Deep Linking Contract -->
        <article v-if="matchesModule('INQUIRIES')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/contact?type={type}&id={id}&ref={ref}&title={title}</code>
            <span class="ep-desc mono-subtle">// INQUIRY DEEP LINK CONTRACT</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Direct client URL contract that automatically mounts the Inquiry Context Banner, pre-selects the classification dropdown, and populates the message field.
            </p>
            <div class="ep-params">
              <span class="param-title mono-label">SUPPORTED QUERY PARAMETERS:</span>
              <ul class="param-list mono-subtle">
                <li><code>type</code>: <code>artwork</code> | <code>exhibition</code> | <code>artist</code> | <code>art-fair</code> | <code>publication</code></li>
                <li><code>id</code>: Unique record slug (e.g. <code>diffusion-state</code>)</li>
                <li><code>ref</code>: Accession code or reference (e.g. <code>AVA-2024-001</code>)</li>
                <li><code>title</code>: Entity title</li>
                <li><code>artist</code>: Artist name</li>
                <li><code>booth</code>: Sector / booth designation</li>
              </ul>
            </div>
          </div>
        </article>

        <!-- Endpoint 09: Art Fairs & Biennales -->
        <article v-if="matchesModule('ART_FAIRS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/art-fairs</code>
            <span class="ep-desc mono-subtle">// INTERNATIONAL ART FAIRS & BIENNALES</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Returns international art fair presentations (Art Basel, Frieze London, Venice Biennale, The Armory Show), booth sectors, and featured gallery artists.
            </p>
          </div>
        </article>

        <!-- Endpoint 10: News, Blog & Publications -->
        <article v-if="matchesModule('NEWS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/news</code>
            <span class="ep-desc mono-subtle">// CURATORIAL BLOG POSTS & MONOGRAPHS</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Access the complete corpus of curatorial essays, artist monographs, permanent collection acquisitions, and critical press publications.
            </p>
          </div>
        </article>

        <!-- Endpoint 11: Gallery Locations & Visitor Information -->
        <article v-if="matchesModule('LOCATIONS')" class="endpoint-card">
          <div class="ep-header">
            <span class="ep-method method-get mono-label">GET</span>
            <code class="ep-path mono-label">/v1/locations</code>
            <span class="ep-desc mono-subtle">// GALLERY SPACES, HOURS & VISITOR INFORMATION</span>
          </div>
          <div class="ep-body">
            <p class="ep-detail">
              Fetches international gallery locations (Berlin, London, Tokyo, Reykjavik), opening hours, on-view exhibitions, admission details, and accessibility guidance.
            </p>
            <div class="code-block">
              <div class="code-header mono-subtle">
                <span>SAMPLE CURL REQUEST</span>
                <button class="copy-btn mono-label" @click="copySnippet('curl-status')">
                  {{ copiedId === 'curl-status' ? 'COPIED ✓' : 'COPY cURL' }}
                </button>
              </div>
              <pre class="code-pre mono-subtle"><code>curl -X GET "https://api.ava-archive.org/v1/locations" \
     -H "Accept: application/json"</code></pre>
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

useHead({
  title: 'Open Collections API — A.V.A. Digital Archive',
  meta: [
    {
      name: 'description',
      content: 'Complete programmatic Linked Open Data API specifications, cURL snippets, and schemas for the A.V.A. collection.'
    }
  ]
})

const modules = ['ALL', 'ARTWORKS', 'ARTISTS', 'EXHIBITIONS', 'INQUIRIES', 'ART_FAIRS', 'NEWS', 'LOCATIONS']
const activeModule = ref('ALL')

const matchesModule = (mod: string) => {
  if (activeModule.value === 'ALL') return true
  return activeModule.value === mod
}

const copiedId = ref<string | null>(null)

const copySnippet = (id: string) => {
  copiedId.value = id
  if (process.client && navigator.clipboard) {
    let text = ''
    if (id === 'curl-artifacts') {
      text = 'curl -X GET "https://api.ava-archive.org/v1/artworks?category=DIFFUSION" -H "Accept: application/json"'
    } else if (id === 'curl-artists') {
      text = 'curl -X GET "https://api.ava-archive.org/v1/artists" -H "Accept: application/json"'
    } else if (id === 'curl-exhibitions') {
      text = 'curl -X GET "https://api.ava-archive.org/v1/exhibitions?status=CURRENT" -H "Accept: application/json"'
    } else if (id === 'curl-status') {
      text = 'curl -X GET "https://api.ava-archive.org/v1/status" -H "Accept: application/json"'
    }
    navigator.clipboard.writeText(text)
  }
  setTimeout(() => {
    if (copiedId.value === id) {
      copiedId.value = null
    }
  }, 2000)
}
</script>

<style scoped>
.page-api {
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

/* API Endpoints */
.api-container {
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

.endpoints-stack {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.endpoint-card {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
}

.ep-header {
  padding: 20px 24px;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid var(--color-border-grid);
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}

.ep-method {
  padding: 3px 8px;
  color: var(--bg-canvas);
  font-weight: 700;
}

.method-get {
  background-color: var(--color-ink);
}

.method-post {
  background-color: #059669;
}

.ep-path {
  font-size: 13px;
  font-weight: 700;
  color: var(--color-ink);
}

.ep-desc {
  color: var(--color-ink-muted);
}

.ep-body {
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.ep-detail {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 17px;
  line-height: 1.5;
  color: var(--color-ink-muted);
  max-width: 760px;
}

.ep-params {
  background: rgba(0, 0, 0, 0.02);
  border-left: 2px solid var(--color-ink);
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.param-title {
  color: var(--color-ink);
  font-size: 9px;
}

.param-list {
  list-style: square inside;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.code-block {
  background-color: var(--bg-dark);
  color: var(--color-ink-light);
  border: 1px solid var(--color-border-grid);
}

.code-header {
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.06);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: #888;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copy-btn {
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: #fff;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 9px;
  transition: all 0.2s ease;
}

.copy-btn:hover {
  background: #fff;
  color: #000;
}

.code-pre {
  padding: 20px 16px;
  overflow-x: auto;
  line-height: 1.6;
  color: #ddd;
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .api-container {
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
