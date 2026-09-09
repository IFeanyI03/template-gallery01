<template>
  <div class="site-container">
    <!-- Navigation Header -->
    <AppHeader />

    <!-- Main Content Area with Dynamic Route Page -->
    <main id="main-content" class="main-content">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '~/components/AppHeader.vue'
import AppFooter from '~/components/AppFooter.vue'
</script>

<style scoped>
.site-container {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  position: relative;
  z-index: 1;
  flex: 1 0 auto;
  width: 100%;
}
</style>
