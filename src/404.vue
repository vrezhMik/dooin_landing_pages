<!-- src/404.vue -->
<template>
  <div>
    <HeaderComponent />
    <main>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <a href="/">Back to Home</a>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import FooterComponent from './components/FooterComponent.vue'
import HeaderComponent from './components/HeaderComponent.vue'
</script>

<style scoped>
main {
  text-align: center;
  padding: 2rem;
}
</style>
