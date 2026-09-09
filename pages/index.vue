<template>
  <div class="page-home">
    <HeroSection />
    <ArtifactGrid />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '~/components/HeroSection.vue'
import ArtifactGrid from '~/components/ArtifactGrid.vue'

useHead({
  title: 'A.V.A. Contemporary Gallery — Phos Gene',
  meta: [
    {
      name: 'description',
      content: 'A contemporary art group exhibition examining light, surface, and spatial perception at A.V.A. Berlin.'
    }
  ]
})
</script>

<style scoped>
.page-home {
  display: flex;
  flex-direction: column;
  gap: 120px;
}

@media (max-width: 960px) {
  .page-home {
    gap: 80px;
  }
}
</style>
