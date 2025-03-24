<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import BannerComponent from './BannerComponent.vue'
import FeaturesComponent from './FeaturesComponent.vue'
import UsageComponent from './UsageComponent.vue'
import AboutComponent from './AboutComponent.vue'
import FAQComponent from './FAQComponent.vue'
import InstallationComponent from './InstallationComponent.vue'

const isVisible = ref({
  banner: true,
  features: false,
  about: false,
  usage: false,
  faq: false,
  installation: false,
})

const featuresRef = ref<HTMLElement | null>(null)
const aboutRef = ref<HTMLElement | null>(null)
const usageRef = ref<HTMLElement | null>(null)
const faqRef = ref<HTMLElement | null>(null)
const installationRef = ref<HTMLElement | null>(null)

function getThreshold() {
  return window.innerWidth > 768 ? 1.0 : 0.1
}
onMounted(() => {
  const threshold = getThreshold()
  const sections = [
    { ref: featuresRef, key: 'features' },
    { ref: aboutRef, key: 'about' },
    { ref: usageRef, key: 'usage' },
    { ref: faqRef, key: 'faq' },
    { ref: installationRef, key: 'installation' },
  ]

  sections.forEach(({ ref, key }) => {
    if (ref.value) {
      useIntersectionObserver(
        ref,
        ([{ isIntersecting }]) => {
          if (isIntersecting) {
            isVisible.value = { ...isVisible.value, [key]: true }
          }
        },
        {
          threshold: key === 'installation' ? 0.01 : threshold,
          rootMargin: key === 'installation' ? '0px 0px 300px 0px' : '0px 0px 0px 0px',
        },
      )
    } else {
      console.error(`Ref for ${key} is null`)
    }
  })
})
</script>

<template>
  <main class="sora" id="home">
    <section class="show" style="min-height: 70vh">
      <BannerComponent />
    </section>

    <section ref="featuresRef" :class="{ show: isVisible.features }" style="min-height: 200px">
      <FeaturesComponent v-if="isVisible.features" />
    </section>

    <section ref="aboutRef" :class="{ show: isVisible.about }" style="min-height: 200px">
      <AboutComponent v-if="isVisible.about" />
    </section>

    <section ref="usageRef" :class="{ show: isVisible.usage }" style="min-height: 200px">
      <UsageComponent v-if="isVisible.usage" />
    </section>

    <section ref="faqRef" :class="{ show: isVisible.faq }" style="min-height: 200px">
      <FAQComponent v-if="isVisible.faq" />
    </section>

    <section
      ref="installationRef"
      :class="{ show: isVisible.installation }"
      style="min-height: auto"
    >
      <InstallationComponent v-if="isVisible.installation" />
    </section>
  </main>
</template>

<style scoped lang="scss">
main {
  margin-top: 50px;
}

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
