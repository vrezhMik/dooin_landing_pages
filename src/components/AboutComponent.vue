<script lang="ts" setup>
import { useLanguageStore } from '@/stores/store'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')

const content = {
  title_eng: 'Achieving More Together – The Idea Behind Dooin',
  title_de: 'Gemeinsam mehr erreichen – die Idee hinter Dooin',
  content_eng:
    "In Germany, there is a strong willingness to help one another. However, we noticed that there was no platform connecting people directly – for the right tasks, at the right time, and in the right place. That's why we created Dooin. A platform that allows everyone to offer or receive help, simply and directly, without any intermediaries. Whether it's volunteer work or paid tasks – Dooin makes both possible.",
  content_de:
    'In Deutschland gibt es eine große Bereitschaft, sich gegenseitig zu helfen. Doch es fehlte uns an einer Plattform, die Menschen direkt miteinander verbindet – für die richtigen Aufgaben, zur richtigen Zeit und am richtigen Ort. Deshalb haben wir Dooin ins Leben gerufen. Eine Plattform, die es jedem ermöglicht, Hilfe anzubieten oder zu erhalten, ganz einfach und direkt, ohne Umwege. Ob ehrenamtliche Arbeit oder bezahlte Aufgaben – Dooin macht beides möglich.',
}
</script>

<template>
  <div class="about" id="about">
    <div class="about-info">
      <div class="about-info--description">
        <h2>{{ isEnglish ? content.title_eng : content.title_de }}</h2>
      </div>
    </div>
    <div class="about-story">
      <p>{{ isEnglish ? content.content_eng : content.content_de }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;

.about {
  background-color: variables.$primary-color;
  padding: 80px 0;
  // margin-bottom: 80px;
  &-info {
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
    color: variables.$text-invert;
    margin-bottom: 30px;
    &--title {
      p {
        text-transform: uppercase;
        font-size: 0.8rem;
        font-weight: 400;
      }
      margin-bottom: 1rem;
    }
    &--description {
      h2 {
        font-weight: 500;
        font-size: 3.3rem;
      }
    }
  }
  &-story {
    p {
      margin: 0 auto;
      color: variables.$text-invert;
      font-size: 1.2rem;
      width: 50%;
      text-align: center;
    }
  }
}

@media (max-width: 740px) {
  .about {
    &-info {
      &--description {
        h2 {
          font-weight: 500;
          font-size: 3rem;
        }
      }
    }
  }
}

@media (max-width: 490px) {
  .about {
    padding-bottom: 30px;
    padding-top: 30px;
    &-info {
      max-width: 80%;
      &--description {
        width: 100%;
        text-align: center;

        h2 {
          font-weight: 500;
          font-size: 1.8rem;
        }
      }
    }
    &-story {
      p {
        width: 90%;
      }
    }
  }
}
</style>
