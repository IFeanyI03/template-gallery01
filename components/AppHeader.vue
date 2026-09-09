<template>
  <header class="site-header">
    <div class="header-inner">
      <div class="header-brand">
        <NuxtLink to="/" class="brand-title" aria-label="A.V.A. Homepage">A.V.A.</NuxtLink>
      </div>

      <nav class="header-nav" aria-label="Main Navigation">
        <ul class="nav-list">
          <li>
            <NuxtLink to="/exhibitions" class="nav-link">Exhibitions</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/artists" class="nav-link">Artists</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/archive" class="nav-link">Collection</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/art-fairs" class="nav-link">Art Fairs</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/news" class="nav-link">News & Blog</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="nav-link">Contact</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/status" class="nav-link status-link">
              <span class="status-pulse" aria-hidden="true"></span>
              <span>Visit</span>
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
// Header component with active NuxtLink navigation
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--header-height);
  background: rgba(235, 235, 235, 0.85);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--color-border-grid);
  z-index: 100;
  display: flex;
  align-items: center;
}

.header-inner {
  width: 100%;
  max-width: 1920px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.brand-title {
  font-family: var(--font-display);
  font-weight: 900;
  font-size: 24px;
  line-height: 1;
  letter-spacing: -0.04em;
  color: var(--color-ink);
  transition: opacity 0.2s ease;
  display: inline-block;
}

.brand-title:hover {
  opacity: 0.7;
}

.nav-list {
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
}

.nav-link {
  font-family: var(--font-mono);
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-ink);
  transition: color 0.2s ease, opacity 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  position: relative;
  padding: 4px 0;
}

.nav-link:hover {
  opacity: 0.6;
}

/* Active Link State */
.nav-link.router-link-active {
  font-weight: 700;
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-ink);
}

.status-pulse {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #10b981;
  box-shadow: 0 0 8px #10b981;
  animation: pulse-beacon 2s infinite ease-in-out;
}

@keyframes pulse-beacon {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.4);
    opacity: 0.4;
  }
}

@media (max-width: 1100px) {
  .nav-list {
    gap: 18px;
  }
  .nav-link {
    font-size: 9px;
    letter-spacing: 0.1em;
  }
}

@media (max-width: 800px) {
  .header-inner {
    padding: 0 20px;
  }
  .nav-list li:nth-child(4),
  .nav-list li:nth-child(5) {
    display: none;
  }
}

@media (max-width: 640px) {
  .nav-list li:nth-child(2),
  .nav-list li:nth-child(3) {
    display: none;
  }
}
</style>
