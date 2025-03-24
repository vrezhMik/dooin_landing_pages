<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import BannerComponent from './BannerComponent.vue'
import FeaturesComponent from './FeaturesComponent.vue'
import UsageComponent from './UsageComponent.vue'
import AboutComponent from './AboutComponent.vue'
import FAQComponent from './FAQComponent.vue'
import InstallationComponent from './InstallationComponent.vue'

// Visibility state (BannerComponent is always visible)
const isVisible = ref({
  banner: true, // Always visible
  features: false,
  about: false,
  usage: false,
  faq: false,
  installation: false,
})

// Section refs
const featuresRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const usageRef = ref<HTMLElement | null>(null)
const faqRef = ref<HTMLElement | null>(null)
const installationRef = ref<HTMLElement | null>(null)

// Observe sections on mount
onMounted(() => {
  const sections = [
    { ref: featuresRef, key: 'features' },
    { ref: aboutRef, key: 'about' },
    { ref: usageRef, key: 'usage' },
    { ref: faqRef, key: 'faq' },
    { ref: installationRef, key: 'installation' },
  ]

  sections.forEach(({ ref, key }) => {
    if (ref.value) {
      console.log(`Observing section: ${key}`) // Debug log
      useIntersectionObserver(
        ref,
        ([{ isIntersecting }]) => {
          console.log(`${key} is intersecting: ${isIntersecting}`) // Debug log
          if (isIntersecting) {
            isVisible.value = { ...isVisible.value, [key]: true }
          }
        },
        {
          threshold: 0.1, // Lower threshold
          rootMargin: '0px 0px -10% 0px', // Smaller buffer zone
        },
      )
    } else {
      console.error(`Ref for ${key} is null`) // Debug log
    }
  })
})
</script>

<template>
  <main class="sora" id="home">
    <!-- BannerComponent is always visible -->
    <section class="show">
      <BannerComponent />
    </section>

    <!-- Sections appear one by one on scroll -->
    <section ref="featuresRef" :class="{ show: isVisible.features }" style="/*min-height: 70vh*/">
      <FeaturesComponent v-if="isVisible.features" />
    </section>

    <section ref="aboutRef" :class="{ show: isVisible.about }" style="/*/*min-height: 70vh*/*/">
      <AboutComponent v-if="isVisible.about" />
    </section>

    <section ref="usageRef" :class="{ show: isVisible.usage }" style="/*min-height: 70vh*/">
      <UsageComponent v-if="isVisible.usage" />
    </section>

    <section ref="faqRef" :class="{ show: isVisible.faq }" style="/*min-height: 70vh*/">
      <FAQComponent v-if="isVisible.faq" />
    </section>

    <section
      ref="installationRef"
      :class="{ show: isVisible.installation }"
      style="min-height: 70vh"
    >
      <InstallationComponent v-if="isVisible.installation" />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 50px;
}

// Initially hidden sections
section {
  margin-bottom: 100px;
  opacity: 0;
  transform: translateY(50px);
  transition:
    opacity 0.8s ease-out,
    transform 0.8s ease-out;
  &:last-child {
    margin-bottom: 0;
  }
}

// Only the currently visible section gets the 'show' class
section.show {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 470px) {
  main {
    margin-top: 10px;
  }
}
</style>
