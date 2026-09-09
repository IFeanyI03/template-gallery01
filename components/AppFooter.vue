<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <!-- Col 1: Manifesto -->
      <div class="footer-col manifesto-col">
        <div class="col-header">
          <span class="manifesto-label">GALLERY</span>
        </div>
        <blockquote class="manifesto-quote">
          “Dedicated to the presentation and scholarship of international contemporary artists exploring light, perception, and spatial form.”
        </blockquote>
      </div>

      <!-- Col 2: Navigation Links -->
      <div class="footer-col nav-col">
        <div class="col-header">
          <span class="col-title mono-label">NAVIGATION</span>
        </div>
        <ul class="footer-links">
          <li>
            <NuxtLink to="/artists" class="footer-link">Artists</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/exhibitions" class="footer-link">Exhibitions</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/archive" class="footer-link">Collection</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/art-fairs" class="footer-link">Art Fairs & Biennales</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" class="footer-link">News & Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/status" class="footer-link">Visit & Locations</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="footer-link">Contact & Inquiries</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="footer-link">About the Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/legal" class="footer-link">Legal & Provenance</NuxtLink>
          </li>
        </ul>
      </div>

      <!-- Col 3: Edition Info -->
      <div class="footer-col edition-col">
        <div class="col-header align-right">
          <span class="col-title mono-label">GALLERY</span>
        </div>
        <div class="edition-data mono-label align-right">
          <div>A.V.A. CONTEMPORARY</div>
          <div>BERLIN • LONDON • TOKYO</div>
          <div>ESTABLISHED 2020</div>
          <div>&copy; 2024 A.V.A. ALL RIGHTS RESERVED</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component with active NuxtLinks
</script>

<style scoped>
.site-footer {
  width: 100%;
  border-top: 1px solid var(--color-border-grid);
  background-color: var(--bg-canvas);
  margin-top: 120px;
  position: relative;
  z-index: 10;
}

.footer-inner {
  width: 100%;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 80px 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 60px;
}

.footer-col {
  display: flex;
  flex-direction: column;
}

.col-header {
  margin-bottom: 20px;
}

.manifesto-col {
  flex: 1 1 50%;
  max-width: 640px;
}

.manifesto-label {
  font-family: var(--font-display);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.8em;
  text-transform: uppercase;
  color: var(--color-ink);
}

.manifesto-quote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 24px;
  line-height: 1.25;
  color: var(--color-ink);
  letter-spacing: -0.01em;
}

.nav-col {
  flex: 0 0 200px;
}

.col-title {
  letter-spacing: 0.8em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-link {
  font-family: var(--font-mono);
  font-size: 10px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-link-blue);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: opacity 0.2s ease;
  display: inline-block;
}

.footer-link:hover {
  opacity: 0.6;
}

.footer-link.router-link-active {
  font-weight: 700;
}

.edition-col {
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.align-right {
  text-align: right;
  width: 100%;
}

.edition-data {
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--color-ink);
}

@media (max-width: 960px) {
  .site-footer {
    margin-top: 80px;
  }

  .footer-inner {
    flex-direction: column;
    padding: 60px 24px;
    gap: 48px;
  }

  .manifesto-col {
    max-width: 100%;
  }

  .edition-col {
    align-items: flex-start;
  }

  .align-right {
    text-align: left;
  }
}
</style>
