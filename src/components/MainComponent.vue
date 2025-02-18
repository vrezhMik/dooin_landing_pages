<script setup>
import BannerComponent from './BannerComponent.vue'
import FeaturesComponent from './FeaturesComponent.vue'
import UsageComponent from './UsageComponent.vue'
import AboutComponent from './AboutComponent.vue'
import FAQComponent from './FAQComponent.vue'
import InstallationComponent from './InstallationComponent.vue'
</script>

<template>
  <main class="sora" id="home">
    <BannerComponent />
    <FeaturesComponent />
    <AboutComponent />
    <UsageComponent />
    <FAQComponent />
    <InstallationComponent />
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 50px;
}

@media (max-width: 470px) {
  main {
    margin-top: 10px;
  }
}
</style>
