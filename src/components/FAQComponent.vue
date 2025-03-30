<script lang="ts" setup>
import { ref } from 'vue'
import PlusIcon from './Icons/PlusIcon.vue'
import { useLanguageStore } from '@/stores/store'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')
const openIndexes = ref<{ [key: number]: boolean }>({})
let openBox = ref<number>(-1)

const toggleAnswer = (index: number) => {
  openIndexes.value[index] = !openIndexes.value[index]
  openBox.value = openBox.value != index ? index : -1
}

const content = {
  title: {
    title_eng: 'Häufig gestellte Fragen ',
    title_de: 'FAQ',
  },
  blocks: [
    {
      question_eng: 'How Does Dooin Work?',
      question_de: 'Wie funktioniert Dooin?',
      answer_eng:
        'You can post tasks or look for tasks to help with. Find the right helper and complete the task.',
      answer_de:
        'Du kannst Aufgaben posten oder nach Aufgaben suchen, bei denen Du helfen möchtest. Finde den passenden Helfer und erledige die Aufgabe.',
    },
    {
      question_eng: 'How Much Does It Cost?',
      question_de: 'Wie viel kostet es?',
      answer_eng: 'Dooin is free! You only pay for the help you get or give.',
      answer_de: 'Dooin ist kostenlos! Du bezahlst nur für die Hilfe, die Du bekommst oder gibst.',
    },
    {
      question_eng: 'Is Dooin Safe?',
      question_de: 'Ist Dooin sicher?',
      answer_eng:
        'Yes! All profiles on Dooin are verified, and you can see real reviews from other users. This way, you can safely find the right person for your task.',
      answer_de:
        'a! Alle Profile auf Dooin werden überprüft, und du kannst echte Bewertungen anderer Nutzer sehen. So kannst du sicher die richtige Person für deine Aufgabe finden.',
    },
    {
      question_eng: 'How Do I Pay for a Completed Task?',
      question_de: 'Wie bezahle ich für eine erledigte Aufgabe?',
      answer_eng:
        'Payment is made directly between the task giver and the helper – you decide how to handle it. Dooin takes no commission or fees.',
      answer_de:
        'Die Bezahlung erfolgt direkt zwischen Auftraggeber und Helfer – ihr vereinbart selbst, wie ihr es handhabt. Dooin nimmt keine Provision oder Gebühren.',
    },
  ],
}
</script>

<template>
  <div class="faq container">
    <div class="faq-info">
      <div class="faq-info--title">
        <h2>{{ isEnglish ? content.title.title_eng : content.title.title_de }}</h2>
      </div>
    </div>

    <div class="faq-block" v-for="(item, key) in content.blocks" :key="key">
      <div class="row faq-block--question flex">
        <div class="faq-block--question-title">
          {{ isEnglish ? item.question_eng : item.question_de }}
        </div>
        <div class="faq-block--question-button">
          <button @click="toggleAnswer(key)" :class="{ openButton: openBox == key }">
            <PlusIcon />
          </button>
        </div>
      </div>
      <div class="row faq-block--answer" :class="{ open: openBox == key }">
        <p>
          {{ isEnglish ? item.answer_eng : item.answer_de }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;

.faq {
  background-image: linear-gradient(180deg, rgba(54, 97, 246, 0.1), #fafafa);
  padding: 4.8rem;
  color: variables.$theme-color-dark;
  border-radius: 30px;
  // margin-bottom: 50px;
  &-info {
    max-width: 50%;
    margin: 0 auto;
    text-align: center;
    color: variables.$text-secondary;

    &--title {
      color: variables.$theme-color-dark;

      h2 {
        font-weight: 500;
        font-size: 2.25rem;
      }
      margin-bottom: 2.4rem;
    }
  }

  &-block {
    padding: 1.6rem;
    margin-top: 1rem;
    border-radius: 1.6rem;
    border: 2px solid variables.$theme-color-dark;
    overflow: hidden;

    &--question {
      justify-content: space-between;
      align-items: center;
      display: flex;
      cursor: pointer;

      &-title {
        font-weight: 600;
        font-size: 18px;
      }

      &-button {
        height: 22.6px;
        width: 22.6px;

        button {
          height: 100%;
          width: 100%;
          border: none;
          background: transparent;
          cursor: pointer;

          svg {
            transition: 0.5s ease;

            height: 100%;
            width: 100%;
          }
        }
      }
    }

    &--answer {
      max-height: 0;
      overflow: hidden;
      font-size: 1rem;
      font-weight: 200;
      opacity: 0;
      padding-top: 0;
      transition:
        max-height 0.3s ease-out,
        opacity 0.3s ease-out,
        padding-top 0.3s ease-out;
    }

    &--answer.open {
      max-height: 200px;
      opacity: 1;
      padding-top: 20px;
      transition:
        max-height 0.3s ease-in,
        opacity 0.3s ease-in,
        padding-top 0.3s ease-in;
    }
  }
}

.openButton {
  svg {
    transform: rotateZ(45deg);
  }
}

@media (max-width: 470px) {
  .faq {
    padding: 2rem;
    &-info {
      max-width: 100%;
      &--title {
        h2 {
          font-size: 1.8rem;
        }
      }
    }

    &-block {
      &--question {
        &-title {
          width: 80%;
          font-size: 1rem;
        }
      }
      &--answer {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
