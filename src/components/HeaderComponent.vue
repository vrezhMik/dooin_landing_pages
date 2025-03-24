<script lang="ts" setup>
import Button from './ButtonComponent.vue'
import HamburgerIcon from './Icons/HamburgerIcon.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import VueScrollTo from 'vue-scrollto'

const menuData = [
  { href: '#product', name: 'product' },
  { href: '#about', name: 'about' },
]

const isMobile = ref(window.innerWidth < 1000)
const hamburgerMenuStatus = ref(false)

const updateWidth = () => {
  isMobile.value = window.innerWidth < 1000
}

const toggleHamburgeMenu = () => {
  hamburgerMenuStatus.value = !hamburgerMenuStatus.value
}

const scrollToSection = (target: string) => {
  setTimeout(() => {
    const element = document.querySelector(target)
    if (element) {
      VueScrollTo.scrollTo(target, 1000, { easing: 'ease-in-out', offset: -80 })
    } else {
      console.warn(`Element ${target} not found on the page.`)
    }
    hamburgerMenuStatus.value = false
  }, 100)
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
          :key="menu.name"
          href="#"
          @click.prevent="scrollToSection(menu.href)"
          v-if="!isMobile"
        >
          {{ menu.name }}
        </a>
      </nav>
      <Button name="Get started" v-if="!isMobile"></Button>
      <button v-if="isMobile" :class="['hamburger-button']" @click="toggleHamburgeMenu">
        <HamburgerIcon />
      </button>
    </div>
    <div
      :class="{
        row: true,
        'hamburger-menu': true,
        'show-menu': hamburgerMenuStatus,
        'hide-menu': !hamburgerMenuStatus,
      }"
      v-if="isMobile"
    >
      <nav :class="['flex']">
        <a
          v-for="menu in menuData"
          :key="menu.name"
          href="#"
          @click.prevent="scrollToSection(menu.href)"
          :class="['row']"
        >
          {{ menu.name }}
        </a>
      </nav>
    </div>
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
