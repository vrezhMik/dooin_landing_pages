<script lang="ts" setup>
import { ref } from 'vue'
import { useLanguageStore } from '@/stores/store'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')

const selectedIndex = ref(0)
const content = {
  title: {
    name_eng: 'What Makes Dooin Special',
    name_de: 'Was macht Dooin besonders?',
  },
  buttons: [
    { button_eng: 'Direct', button_de: 'Direkt' },
    { button_eng: 'Trusted', button_de: 'Vertrauenswürdig' },
    { button_eng: 'Nearby', button_de: 'In der Nähe' },
    { button_eng: 'Fast', button_de: 'Schnell' },
    { button_eng: 'Free', button_de: 'Kostenlos' },
  ],
  data: [
    {
      title_eng: 'Peer-to-Peer Connections',
      title_de: 'Direkte Vernetzung',
      content_eng: 'Directly connect with people who can help you—no middlemen.',
      content_de:
        'Erhalte direkte Unterstützung von den passenden Fachkräften – ohne Dritte dazwischen.',
    },
    {
      title_eng: 'Real Reviews, More Trust',
      title_de: 'Echte Bewertunden, mehr Vertrauen',
      content_eng: 'Check real reviews from others and feel confident in your decision.',
      content_de: 'Vertrau auf echte Bewertunden und entscheide mit Sicherheit.',
    },
    {
      title_eng: 'Quick and Nearby',
      title_de: 'Schnell und in deiner Nähe',
      content_eng: 'Post your task and find the best match for help right in your area.',
      content_de: 'Poste deine Aufgabe und entdecke den besten Helfer in deiner Region.',
    },
    {
      title_eng: 'Set Up in Seconds',
      title_de: 'In Sekunden startklar',
      content_eng: 'Register and det started in just 3 clicks, it is that easy.',
      content_de: 'Registriere dich und leg in nur 3 Klicks los – so einfach ist das.',
    },
    {
      title_eng: 'No Hidden Fees',
      title_de: 'Keine versteckten debühren',
      content_eng: 'Use our platform for free - no subscriptions, no commissions.',
      content_de: 'Nutze unsere Plattform kostenlos – keine Abos, keine Provisionen.',
    },
  ],
}
</script>

<template>
  <div class="features container" id="product">
    <div class="features-info">
      <div class="features-info--description">
        <h2>{{ isEnglish ? content.title.name_eng : content.title.name_de }}</h2>
      </div>
      <div class="features-info--menu flex">
        <button
          v-for="(button, key) in content.buttons"
          :key="key"
          @click="selectedIndex = key"
          :class="{ active: selectedIndex === key }"
        >
          {{ isEnglish ? button.button_eng : button.button_de }}
        </button>
      </div>
    </div>

    <div class="features-block flex" v-if="content.data[selectedIndex]" :key="selectedIndex">
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>
            {{
              isEnglish
                ? content.data[selectedIndex].title_eng
                : content.data[selectedIndex].title_de
            }}
          </h3>
        </div>
        <div class="features-block--content-description">
          <p>
            {{
              isEnglish
                ? content.data[selectedIndex].content_eng
                : content.data[selectedIndex].content_de
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use './../styles/variables' as variables;
.features {
  // margin-top: 50px;
  // margin-bottom: 100px;
  background-color: variables.$text-invert;
  border-radius: 30px;
  padding: 32px;
  &-info {
    max-width: 100%;
    margin: 0 auto;
    text-align: center;
    color: variables.$text-secondary;

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
        font-size: 2.25rem;
      }
      margin-bottom: 2.4rem;
    }
    &--menu {
      column-gap: 0.8rem;
      justify-content: center;
      align-items: center;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
      margin-bottom: 64px;
      button {
        min-width: 130px;
        width: 100%;
        font-size: 1rem;
        color: variables.$text-invert;
        border: 1px solid transparent;
        padding: 1rem;
        background-color: variables.$primary-color;
        border-radius: 15px;
        text-transform: capitalize;
        font-weight: 900;
        &:hover {
          color: variables.$subcolor-light;
        }
      }
    }
  }
  &-block {
    max-height: 550px;
    column-gap: 2.4rem;
    justify-content: center;
    text-align: center;
    &--imade {
      max-width: 480px;
      height: 100%;
      img {
        height: 100%;
        border-radius: 30px;
        width: 100%;
      }
    }
    &--content {
      flex-direction: column;
      justify-content: center;
      row-gap: 0.8rem;
      color: variables.$text-secondary;
      &-title {
        h3 {
          font-size: 3rem;
          font-weight: 500;
        }
      }
      &-description {
        font-size: 2rem;
        font-weight: 200;
        min-height: 100px;
      }
    }
  }
}

@media (max-width: 470px) {
  .features {
    &-info {
      max-width: 90%;
      &--description {
        h2 {
          font-size: 1.8rem;
        }
      }
      &--menu {
        flex-wrap: wrap;
        row-gap: 20px;
        button {
          width: 70%;
        }
      }
    }
    &-block {
      height: 250px;
      align-items: center;
      column-gap: 1rem;
      &--imade {
        width: 50%;
        height: 50%;
        img {
          object-fit: cover;
        }
      }
      &--content {
        width: 80%;
        &-title {
          h3 {
            font-size: 2rem;
          }
        }
        &-description {
          font-size: 1.1rem;
        }
      }
    }
  }
}

.active {
  color: variables.$subcolor-light !important;
}
</style>
