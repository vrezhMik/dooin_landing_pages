<script lang="ts" setup>
import Button from './ButtonComponent.vue'
import HamburgerIcon from './Icons/HamburgerIcon.vue'
import VueScrollTo from 'vue-scrollto'
import { ref, onMounted, onUnmounted } from 'vue'
import { useLanguageStore } from '@/stores/store'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')
const chnageLanguage = (lang: 'eng' | 'de') => {
  languageStore.setLanguage(lang)
}

const menuData = [
  { href: '#product', name_eng: 'Product', name_de: 'Produkt' },
  { href: '#about', name_eng: 'About', name_de: 'Über uns' },
]

const button_title = {
  title_eng: 'Get Started',
  title_de: 'Beginnen',
}

const isMobile = ref(window.innerWidth < 1000)
const hamburgerMenuStatus = ref(false)
const isVisible = ref(false)

const updateWidth = () => {
  isMobile.value = window.innerWidth < 1000
}

const toggleHamburgeMenu = () => {
  hamburgerMenuStatus.value = !hamburgerMenuStatus.value
}

const scrollToSection = (target: string) => {
  setTimeout(() => {
    const element = document.querySelector(target)
    const offset = window.innerWidth > 768 ? -80 : -230

    if (element) {
      VueScrollTo.scrollTo(target, 1000, { easing: 'ease-in-out', offset: offset })
    } else {
      console.warn(`Element ${target} not found on the page.`)
    }

    hamburgerMenuStatus.value = false
  }, 100)
}

const onBeforeEnter = () => {
  isVisible.value = true
}

const onBeforeLeave = () => {
  isVisible.value = false
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWidth)
})
</script>

<template>
  <header :class="['sora']">
    <div :class="['row', 'flex', 'container']">
      <nav :class="['header-menu', 'flex']">
        <a href="#" @click.prevent="scrollToSection('#home')"><span class="green">D</span>ooin</a>
        <a
          v-for="menu in menuData"
          :key="menu.name_eng"
          href="#"
          @click.prevent="scrollToSection(menu.href)"
          v-if="!isMobile"
        >
          {{ isEnglish ? menu.name_eng : menu.name_de }}
        </a>
      </nav>
      <div class="header-controll flex">
        <div class="header-lang-menu flex">
          <button @click="chnageLanguage('eng')">eng</button>
          <button @click="chnageLanguage('de')">ge</button>
        </div>
        <Button
          :name="isEnglish ? button_title.title_eng : button_title.title_de"
          v-if="!isMobile"
        />
        <button v-if="isMobile" :class="['hamburger-button']" @click="toggleHamburgeMenu">
          <HamburgerIcon />
        </button>
      </div>
    </div>

    <transition name="menu-fade" @before-enter="onBeforeEnter" @before-leave="onBeforeLeave">
      <div
        v-show="hamburgerMenuStatus || isVisible"
        v-if="isMobile"
        :class="['row', 'hamburger-menu']"
      >
        <nav class="flex">
          <a
            v-for="menu in menuData"
            :key="menu.name_eng"
            href="#"
            @click.prevent="scrollToSection(menu.href)"
            class="row"
          >
            {{ isEnglish ? menu.name_eng : menu.name_de }}
          </a>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped lang="scss">
@use './../styles/variables' as variables;
header {
  border-bottom: 1px solid variables.$primary-grey;
  z-index: 9999;
  padding: 10px 0 10px 0;
  position: sticky;
  top: 0;
  background-color: variables.$theme-color;
  div {
    justify-content: space-between;
    align-items: center;
    column-gap: 30%;
    .header-menu {
      align-items: center;
      width: 30%;
      column-gap: 30px;
      a {
        font-size: 14px;
        color: variables.$primary-black;
        transition: 0.2s ease;
        font-weight: 400;
        &:first-child {
          font-size: 1.6rem;
          font-weight: 600;
        }
        &:hover,
        span {
          transition: 0.2s ease;
        }
      }
    }
  }
}

.hamburger-button {
  width: 30px;
  height: 30px;
}

.header-lang-menu {
  button {
    font-size: 1rem;
    color: #0f424c;
  }
}

.hamburger-menu {
  position: relative;
  nav {
    flex-direction: column;
    align-items: center;
    a {
      padding: 32px 0px;
      border-bottom: 1px solid variables.$primary-grey;
      text-align: center;
      text-transform: capitalize;
      color: variables.$primary-color;
      &:last-child {
        border: none;
      }
    }
  }
}

.show-menu {
  animation: show-menu-animation 0.5s forwards;
}

.hide-menu {
  animation: hide-menu-animation 0.5s forwards;
}

@keyframes show-menu-animation {
  0% {
    top: -1000px;
  }
  100% {
    top: 0px;
  }
}

@keyframes hide-menu-animation {
  0% {
    top: 0px;
  }
  100% {
    top: -1000px;
    display: none;
  }
}

@media (max-width: 1000px) {
  header {
    padding: 10px 0;
    border: none;
  }
}
</style>
