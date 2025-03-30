<script setup>
import { ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useLanguageStore } from '@/stores/store'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')

const selectedIndex = ref(0)

const content = {
  title: {
    title_eng: 'Find or Offer Help – for Any Everyday Task',
    title_de: 'Erhalte die Hilfe, die du brauchst  - schneller durch Dooin!"',
  },
  section: [
    { title_eng: 'Offer a Job', title_de: 'Biete einen Job an' },
    { title_eng: 'Find a Job', title_de: 'Finde einen Job' },
  ],
  content: [
    [
      [
        {
          title_eng: 'Quick Apartment Cleaning',
          title_de: 'Schnelle Reinigung Deiner Wohnung',
          description_eng:
            'u hast keine Zeit, Deine Wohnung zu putzen? Poste einfach die Aufgabe und finde schnell jemanden, der Dir hilft, Deine Wohnung zu reinigen – ob für eine schnelle Reinigung oder eine gründliche Putzaktion.',
          description_de:
            'No time to clean your apartment? Post the task and quickly find someone who can help you clean – whether it’s a quick sweep or a thorough cleaning.',
        },
        {
          title_eng: 'Get Your Shopping Done',
          title_de: 'Einkäufe Erledigen lassen',
          description_eng:
            'Du hast keine Zeit, Deine Wohnung zu putzen? Poste einfach die Aufgabe und finde schnell jemanden, der Dir hilft, Deine Wohnung zu reinigen – ob für eine schnelle Reinigung oder eine gründliche Putzaktion.',
          description_de:
            'No time to clean your apartment? Post the task and quickly find someone who can help you clean – whether it’s a quick sweep or a thorough cleaning.',
        },
        {
          title_eng: 'Volunteer Help for the Community',
          title_de: 'Freiwillige Hilfe für die Nachbarschaft',
          description_eng:
            'Organize volunteer help for neighbors – such as cleaning out, shopping for seniors, or supporting refugee initiatives.',
          description_de:
            'Organisiere ehrenamtliche Hilfe für die Nachbarn – zum Beispiel beim Ausmisten, beim Einkaufen für Senioren oder bei der Unterstützung von Flüchtlingsinitiativen.',
        },
      ],
    ],
    [
      [
        {
          title_eng: 'Do Shopping for Others',
          title_de: 'Einkäufe für andere erledigen',
          description_eng:
            'Have time and enjoy shopping? Help your neighbors with their shopping and earn some money.',
          description_de:
            'Du hast Zeit und Lust, Einkäufe zu erledigen? Hilf Deinen Nachbarn, ihre Einkäufe zu erledigen und verdiene dabei etwas Geld.',
        },
        {
          title_eng: 'Tech Support for Seniors',
          title_de: 'Technischer Support für Senioren',
          description_eng:
            'Assist elderly people with their smartphones or setting up devices. Easy and direct through the app.',
          description_de:
            'Hilf älteren Menschen bei der Nutzung ihrer Smartphones oder beim Einrichten von Geräten. Einfach und direkt über die App.',
        },
        {
          title_eng: 'Help with Moving',
          title_de: 'Hilfe beim Umzug',
          description_eng:
            'Offer your help with moving – whether it’s carrying, packing, or transporting. The app connects you directly with people who need your assistance.',
          description_de:
            'Biete Deine Hilfe beim Umzug an – ob beim Tragen, Packen oder Transportieren. Die App verbindet Dich direkt mit Menschen, die Deine Unterstützung brauchen.',
        },
      ],
    ],
  ],
}
</script>

<template>
  <div class="usage container">
    <div class="usage-info">
      <div class="usage-info-title">
        <p></p>
      </div>
      <div class="usage-info--description">
        <h2>{{ isEnglish ? content.title.title_eng : content.title.title_de }}</h2>
      </div>
      <div class="usage-info--menu flex">
        <button
          v-for="(section, key) in content.section"
          :key="key"
          @click="selectedIndex = key"
          :class="{ active: selectedIndex === key }"
        >
          {{ isEnglish ? section.title_eng : section.title_de }}
        </button>
      </div>
    </div>

    <div v-for="(item, key) in content.content[selectedIndex]">
      <Splide
        :options="{
          type: 'loop',
          perPage: 1,
          gap: '1rem',
          autoplay: true,
          arrows: false,
          speed: 500,
          interval: 1500,
        }"
      >
        <SplideSlide v-for="slide in item">
          <div class="usage-block flex">
            <div class="usage-block--image">
              <img src="./../assets/block2.webp" alt="" />
            </div>
            <div class="usage-block--content flex">
              <div class="usage-block--content-title">
                <h3>{{ isEnglish ? slide.title_eng : slide.title_de }}</h3>
              </div>
              <div class="usage-block--content-description">
                <p>
                  {{ isEnglish ? slide.description_eng : slide.description_de }}
                </p>
              </div>
            </div>
          </div></SplideSlide
        >
      </Splide>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;
@import '@splidejs/splide/dist/css/splide.min.css';
.usage {
  // margin-bottom: 100px;
  border: 1px solid #e3e3e3;
  padding: 30px 0;
  border-radius: 30px;
  &-info {
    max-width: 50%;
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
      margin-bottom: 64px;
      button {
        width: 30%;
        font-size: 1rem;
        color: variables.$text-invert;
        border: 1px solid transparent;
        padding: 1rem 0.5rem;
        background-color: variables.$primary-color;
        border-radius: 15px;
        text-transform: capitalize;
        font-weight: 900;
        // transition: 0.4s ease;

        &:hover {
          color: variables.$subcolor-light;
        }
      }
    }
  }

  &-block {
    max-height: 550px;
    padding: 32px;
    column-gap: 2.4rem;
    border-radius: 30px;
    overflow: hidden;
    color: variables.$text-secondary;

    &--image {
      max-width: 480px;
      height: 100%;
      img {
        height: 100%;
        border-radius: 30px;
        width: 100%;
        min-width: 500px;
      }
    }
    &--content {
      flex-direction: column;
      justify-content: center;
      row-gap: 0.8rem;
      &-title {
        h3 {
          font-size: 1.5rem;
          font-weight: 500;
        }
      }
      &-description {
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
}

.image-left {
  flex-direction: row-reverse;
}

@media (max-width: 940px) {
  .usage {
    &-block {
      &--image {
        max-width: 300px;
        img {
          min-width: 300px;
        }
      }
    }
  }
}

@media (max-width: 740px) {
  .usage {
    &-info {
      &--menu {
        margin-bottom: 30px;
        button {
          width: 41%;
        }
      }
    }
    &-block {
      flex-direction: column;
      align-items: center;
      &--image {
        max-width: 250px;
        img {
          min-width: 250px;
        }
      }
      &--content {
        width: 100%;
        text-align: center;
      }
    }
  }
}

@media (max-width: 470px) {
  .usage {
    &-info {
      max-width: 80%;
      &--description {
        h2 {
          font-size: 1.8rem;
        }
      }
      &--menu {
        margin-bottom: 15px;
      }
    }
  }
}

.active {
  color: variables.$subcolor-light !important;
}
</style>
