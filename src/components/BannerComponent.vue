<script lang="ts" setup>
import ThemeButton from './ThemeButton.vue'
import { useLanguageStore } from '@/stores/store'
const languageStore = useLanguageStore()
const isEnglish = (): boolean => {
  return languageStore.language === 'eng'
}
const content = {
  title: {
    name_eng: 'Find Help or Offer Yours',
    name_de: 'Finde Hilfe oder biete Deine an – Schnell, Direkt und Zuverlässig!',
  },
  description: {
    name_eng: 'Earn Money, Exchange Benefits, or Volunteer',
    name_de: 'Verdiene Geld, tausche Vorteile oder hilf ehrenamtlich',
  },
  button_title: {
    name_eng: 'Are You In?',
    name_de: 'Bist Du dabei?',
  },
  button: {
    name_eng: 'Register Now',
    name_de: 'Jetzt Registrieren',
  },
}
</script>

<template>
  <div class="banner container">
    <div class="row">
      <h1 class="banner-title green">
        {{ isEnglish() ? content.title.name_eng : content.title.name_de }}
      </h1>
    </div>
    <div class="row banner-description">
      <p>{{ isEnglish() ? content.description.name_eng : content.description.name_de }}</p>
    </div>
    <div class="row flex banner-buttons">
      <h3>{{ isEnglish() ? content.button_title.name_eng : content.button_title.name_de }}</h3>
      <ThemeButton :name="content.button[isEnglish() ? 'name_eng' : 'name_de']" />
    </div>
    <div class="flex banner-image--container">
      <img src="./../assets/phone.png" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './../styles/variables' as variables;
.banner {
  background: hsla(226, 63%, 95%, 1);
  background: linear-gradient(270deg, hsla(226, 63%, 95%, 1) 0%, #fafafa 100%);
  background: -moz-linear-gradient(270deg, hsla(226, 63%, 95%, 1) 0%, #fafafa 100%);
  background: -webkit-linear-gradient(270deg, hsla(226, 63%, 95%, 1) 0%, #fafafa 100%);
  padding: 76px 76px 32px 76px;
  border-radius: 30px;
  &-title {
    text-align: center;
    font-size: 3.8rem;
    font-weight: 500;
    margin-bottom: 16px;
  }
  &-description {
    font-weight: 300;
    text-align: center;
    width: 70%;
    margin: 0 auto;
    margin-bottom: 32px;
    font-size: 1.4Getrem;
  }
  &-buttons {
    justify-content: center;
    row-gap: 15px;
    flex-direction: column;
    align-items: center;
    column-gap: 12px;
    margin-bottom: 40px;
    color: variables.$background-invert;

    h3 {
      font-size: 30px;
      font-weight: 400;
    }
  }
  &-image--container {
    justify-content: center;
  }
}

@media (max-width: 470px) {
  .banner {
    padding: 30px 25px;

    &-title {
      font-size: 2.3rem;
    }
    &-description {
      font-size: 1rem;
    }
    &-buttons {
      flex-direction: column;
      row-gap: 30px;
    }
  }
}
</style>
