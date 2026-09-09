<template>
  <div class="page-contact">
    <!-- Header Section -->
    <section class="page-hero">
      <div class="hero-grid">
        <div class="hero-title-container">
          <div class="hero-title-blur" aria-hidden="true">
            <span>CONT.</span>
            <span>ACT.</span>
          </div>
          <h1 class="hero-title-sharp">
            <span>INQU.</span>
            <span>IRIES.</span>
          </h1>
        </div>

        <aside class="hero-meta-col">
          <div class="meta-top">
            <div class="meta-gallery mono-label">
              <div>GALLERY: A.V.A. CONTEMPORARY</div>
              <div>LOCATIONS: BERLIN • LONDON • TOKYO</div>
              <div>HOURS: TUE — SAT // 11:00 — 18:00</div>
            </div>
            <p class="curatorial-statement">
              We welcome correspondence regarding our represented artists, available works, exhibition loans, and press inquiries.
            </p>
          </div>
          <div class="meta-bottom mono-subtle">
            <div>GENERAL INQUIRIES: CONTACT@AVA-GALLERY.COM</div>
            <div>RESPONSE WITHIN 24–48 HOURS</div>
          </div>
        </aside>
      </div>
    </section>

    <!-- Inquiry Terminal Form -->
    <section class="contact-container">
      <div class="terminal-grid">
        <!-- Form Column -->
        <div class="terminal-form-card">
          <div class="form-header mono-label">
            <span>SEND AN INQUIRY</span>
            <span>GALLERY DIRECTORS</span>
          </div>

          <!-- Inquiry Context Banner (When arrived via deep link) -->
          <div v-if="contextBanner" class="context-banner">
            <div class="context-info mono-label">
              <span class="context-tag">{{ contextBanner.badge }}</span>
              <span class="context-title">{{ contextBanner.title }}</span>
              <span v-if="contextBanner.ref" class="context-ref mono-subtle">({{ contextBanner.ref }})</span>
            </div>
            <button class="context-clear-btn mono-label" @click="clearContext">
              ✕ CLEAR CONTEXT
            </button>
          </div>

          <!-- Success Acknowledgment -->
          <div v-if="dispatched" class="dispatch-success">
            <span class="success-dot"></span>
            <div class="success-text">
              <h3 class="success-title">INQUIRY RECEIVED</h3>
              <div class="ack-code mono-label">
                <span>REFERENCE: {{ ackCode }}</span>
                <span>DATE: {{ ackTimestamp }}</span>
              </div>
              <p class="success-sub mono-label">
                Thank you for your message. A member of our gallery team will respond to your inquiry shortly.
              </p>
            </div>
            <button class="reset-btn mono-label" @click="resetForm">
              SEND ANOTHER INQUIRY →
            </button>
          </div>

          <!-- Form Fields -->
          <form v-else class="dispatch-form" @submit.prevent="handleSubmit">
            <div class="form-field">
              <label for="name" class="field-label mono-label">
                <span>FULL NAME / INSTITUTION</span>
                <span class="field-req">*REQUIRED</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                class="field-input mono-label"
                placeholder="e.g. Elena Rostova or Tate Modern"
                required
              />
            </div>

            <div class="form-field">
              <label for="email" class="field-label mono-label">
                <span>EMAIL ADDRESS</span>
                <span class="field-req">*REQUIRED</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                class="field-input mono-label"
                placeholder="contact@institution.org"
                required
              />
            </div>

            <div class="form-field">
              <label for="classification" class="field-label mono-label">
                <span>INQUIRING ABOUT</span>
              </label>
              <select
                id="classification"
                v-model="form.classification"
                class="field-input field-select mono-label"
              >
                <option value="ACQUISITION">ARTWORK ACQUISITION & PRICING</option>
                <option value="CURATORIAL">EXHIBITION LOAN & CURATORIAL INQUIRY</option>
                <option value="ARTIST">ARTIST REPRESENTATION & COMMISSIONS</option>
                <option value="FAIR_PASS">ART FAIR VIP PREVIEW PASS</option>
                <option value="PRESS">PRESS & EDITORIAL INQUIRIES</option>
                <option value="GENERAL">GENERAL GALLERY INQUIRY</option>
              </select>
            </div>

            <div class="form-field">
              <label for="message" class="field-label mono-label">
                <span>MESSAGE</span>
                <span class="char-count mono-subtle">{{ form.message.length }} / 2048</span>
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="7"
                class="field-input field-textarea mono-label"
                placeholder="Please include any specific artworks, artists, or exhibition details..."
                maxlength="2048"
                required
              ></textarea>
            </div>

            <button type="submit" class="submit-btn mono-label" :disabled="submitting">
              <span>{{ submitting ? 'SENDING INQUIRY...' : 'SEND INQUIRY' }}</span>
              <span class="btn-arrow">→</span>
            </button>
          </form>
        </div>

        <!-- Coordinates & Directory Sidebar -->
        <aside class="sidebar-col">
          <div class="sidebar-card">
            <span class="mono-label side-title">GALLERY DEPARTMENTS</span>
            <div class="directory-list mono-subtle">
              <div class="dir-item">
                <span class="dir-label">DIRECTOR'S OFFICE:</span>
                <span class="dir-val">directors@ava-gallery.com</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">ACQUISITIONS & SALES:</span>
                <span class="dir-val">acquisitions@ava-gallery.com</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">CURATORIAL & LOANS:</span>
                <span class="dir-val">curatorial@ava-gallery.com</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">PRESS & MEDIA:</span>
                <span class="dir-val">press@ava-gallery.com</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card">
            <span class="mono-label side-title">GALLERY SPACES</span>
            <div class="directory-list mono-subtle">
              <div class="dir-item">
                <span class="dir-label">BERLIN MITTE:</span>
                <span class="dir-val">Linienstraße 144, 10115 Berlin</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">LONDON MAYFAIR:</span>
                <span class="dir-val">22 Cork Street, London W1S 3NG</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">TOKYO MINAMI-AOYAMA:</span>
                <span class="dir-val">5-7-22 Minami-Aoyama, Tokyo</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">REYKJAVIK SPACE:</span>
                <span class="dir-val">Grandagarður 20, 101 Reykjavík</span>
              </div>
            </div>
          </div>

          <div class="sidebar-card">
            <span class="mono-label side-title">OPENING HOURS</span>
            <div class="directory-list mono-subtle">
              <div class="dir-item">
                <span class="dir-label">TUESDAY — SATURDAY:</span>
                <span class="dir-val">11:00 — 18:00</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">SUNDAY & MONDAY:</span>
                <span class="dir-val">Closed</span>
              </div>
              <div class="dir-item">
                <span class="dir-label">ADMISSION:</span>
                <span class="dir-val">Free Public Admission</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

useHead({
  title: 'Contact & Inquiries — A.V.A. Contemporary Gallery',
  meta: [
    {
      name: 'description',
      content: 'Direct contact with gallery directors for artwork acquisitions, curatorial exhibition loans, and press inquiries.'
    }
  ]
})

const route = useRoute()
const router = useRouter()

const form = reactive({
  name: '',
  email: '',
  classification: 'CURATORIAL',
  message: ''
})

const contextBanner = ref<{ badge: string; title: string; ref?: string } | null>(null)
const submitting = ref(false)
const dispatched = ref(false)
const ackCode = ref('')
const ackTimestamp = ref('')

onMounted(() => {
  const query = route.query
  const type = (query.type as string)?.toLowerCase()
  const id = query.id as string
  const refCode = query.ref as string
  const title = query.title as string
  const artist = query.artist as string
  const booth = query.booth as string

  if (type) {
    if (type === 'artifact' || type === 'artwork') {
      contextBanner.value = {
        badge: 'CATALOGUED ARTWORK',
        title: title || id || 'ARTWORK INQUIRY',
        ref: refCode
      }
      form.classification = 'ACQUISITION'
      form.message = `[INQUIRY REGARDING ARTWORK: ${refCode ? `${refCode} ` : ''}${title || id}${artist ? ` by ${artist}` : ''}]\n\nI would like to request pricing, availability, and framing details for this artwork.`
    } else if (type === 'exhibition') {
      contextBanner.value = {
        badge: 'EXHIBITION PROGRAM',
        title: title || id || 'EXHIBITION INQUIRY',
        ref: refCode
      }
      form.classification = 'CURATORIAL'
      form.message = `[INQUIRY REGARDING EXHIBITION: ${title || id}]\n\nI would like to inquire regarding curatorial notes, institutional loan availability, or private gallery walkthroughs.`
    } else if (type === 'artist') {
      contextBanner.value = {
        badge: 'REPRESENTED ARTIST',
        title: title || artist || id || 'ARTIST INQUIRY',
        ref: refCode
      }
      form.classification = 'ARTIST'
      form.message = `[INQUIRY REGARDING ARTIST: ${title || artist || id}]\n\nI would like to inquire about available works, upcoming exhibitions, or studio commissions by this artist.`
    } else if (type === 'symposium' || type === 'art-fair') {
      contextBanner.value = {
        badge: 'ART FAIR PRESENTATION',
        title: title || id || 'ART FAIR VIP PASS',
        ref: booth
      }
      form.classification = 'FAIR_PASS'
      form.message = `[INQUIRY REGARDING ART FAIR: ${title || id}${booth ? ` (${booth})` : ''}]\n\nRequesting VIP preview passes, collector preview hours, and the booth presentation catalogue.`
    } else if (type === 'publication') {
      contextBanner.value = {
        badge: 'PUBLICATION & ESSAY',
        title: title || id || 'PUBLICATION INQUIRY',
        ref: id
      }
      form.classification = 'PRESS'
      form.message = `[INQUIRY REGARDING PUBLICATION: ${title || id}]\n\nRequesting press materials, high-resolution publication images, or editorial details.`
    }
  }
})

const clearContext = () => {
  contextBanner.value = null
  form.classification = 'CURATORIAL'
  form.message = ''
  router.replace({ query: {} })
}

const handleSubmit = () => {
  submitting.value = true
  setTimeout(() => {
    submitting.value = false
    dispatched.value = true
    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase()
    ackCode.value = `AVA-INQ-${randomHex}`
    ackTimestamp.value = new Date().toISOString()
  }, 700)
}

const resetForm = () => {
  dispatched.value = false
  form.name = ''
  form.email = ''
  form.message = ''
  clearContext()
}
</script>

<style scoped>
.page-contact {
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

/* Form Container */
.contact-container {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.terminal-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.terminal-form-card {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
}

.form-header {
  padding: 16px 24px;
  background: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid var(--color-border-grid);
  display: flex;
  justify-content: space-between;
}

/* Context Banner */
.context-banner {
  padding: 16px 24px;
  background: rgba(44, 26, 95, 0.08);
  border-bottom: 1px solid var(--accent-purple);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.context-info {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.context-tag {
  padding: 2px 8px;
  background-color: var(--accent-purple);
  color: #fff;
  font-weight: 700;
}

.context-title {
  font-weight: 700;
  color: var(--color-ink);
}

.context-ref {
  color: var(--color-ink-muted);
}

.context-clear-btn {
  background: transparent;
  border: 1px solid var(--color-ink);
  padding: 4px 10px;
  cursor: pointer;
  font-size: 9px;
  transition: all 0.2s ease;
}

.context-clear-btn:hover {
  background: var(--color-ink);
  color: var(--bg-canvas);
}

.dispatch-form {
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.field-label {
  display: flex;
  justify-content: space-between;
  font-size: 10px;
  color: var(--color-ink);
}

.field-req {
  color: var(--accent-pink);
}

.field-input {
  width: 100%;
  padding: 14px 16px;
  background-color: transparent;
  border: 1px solid var(--color-border-grid);
  color: var(--color-ink);
  font-size: 11px;
  letter-spacing: 0.1em;
  transition: border-color 0.2s ease, background-color 0.2s ease;
}

.field-input:focus {
  outline: none;
  border-color: var(--color-ink);
  background: rgba(0, 0, 0, 0.02);
}

.field-select {
  cursor: pointer;
}

.field-textarea {
  resize: vertical;
  min-height: 140px;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  background-color: var(--color-ink);
  color: var(--bg-canvas);
  border: none;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 0.2em;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.submit-btn:hover:not(:disabled) {
  opacity: 0.85;
  transform: translateX(4px);
}

.submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Success */
.dispatch-success {
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}

.success-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
}

.success-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
}

.ack-code {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  color: var(--accent-purple);
  font-weight: 700;
}

.success-sub {
  margin-top: 8px;
  color: var(--color-ink-muted);
}

.reset-btn {
  margin-top: 16px;
  background: transparent;
  border: 1px solid var(--color-ink);
  padding: 10px 20px;
  cursor: pointer;
}

/* Sidebar */
.sidebar-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.sidebar-card {
  background-color: var(--bg-canvas);
  border: 1px solid var(--color-border-grid);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.side-title {
  font-size: 10px;
  border-bottom: 1px solid var(--color-border-grid);
  padding-bottom: 8px;
}

.directory-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.dir-item {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.dir-label {
  color: var(--color-ink-muted);
  font-size: 8px;
}

.dir-val {
  color: var(--color-ink);
}

.pgp-code {
  display: block;
  background: rgba(0, 0, 0, 0.04);
  padding: 12px;
  line-height: 1.6;
  word-break: break-all;
}

@media (max-width: 960px) {
  .page-hero {
    padding: 120px 24px 0;
  }
  .contact-container {
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
  .terminal-grid {
    grid-template-columns: 1fr;
  }
}
</style>
