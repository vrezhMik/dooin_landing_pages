<script lang="ts" setup>
import { ref } from 'vue'
import PlusIcon from './Icons/PlusIcon.vue'

const openIndexes = ref<Record<number, boolean>>({})

const toggleAnswer = (index: number) => {
  openIndexes.value[index] = !openIndexes.value[index]
}
</script>

<template>
  <div class="faq container">
    <div class="faq-info">
      <div class="faq-info--title">
        <h2>Häufig gestellte Fragen</h2>
      </div>
    </div>

    <div class="faq-block">
      <div class="row faq-block--question flex">
        <div class="faq-block--question-title">How Does Dooin Work?</div>
        <div class="faq-block--question-button">
          <button @click="toggleAnswer(1)"><PlusIcon /></button>
        </div>
      </div>
      <div class="row faq-block--answer" :class="{ open: openIndexes[1] }">
        <p>
          You can post tasks or look for tasks to help with. Find the right helper and complete the
          task.
        </p>
      </div>
    </div>

    <div class="faq-block">
      <div class="row faq-block--question flex">
        <div class="faq-block--question-title">How Much Does It Cost?</div>
        <div class="faq-block--question-button">
          <button @click="toggleAnswer(2)"><PlusIcon /></button>
        </div>
      </div>
      <div class="row faq-block--answer" :class="{ open: openIndexes[2] }">
        <p>Dooin is free! You only pay for the help you get or give.</p>
      </div>
    </div>
    <div class="faq-block">
      <div class="row faq-block--question flex">
        <div class="faq-block--question-title">Is Dooin Safe?</div>
        <div class="faq-block--question-button">
          <button @click="toggleAnswer(3)"><PlusIcon /></button>
        </div>
      </div>
      <div class="row faq-block--answer" :class="{ open: openIndexes[3] }">
        <p>
          Yes! All profiles on Dooin are verified, and you can see real reviews from other users.
          This way, you can safely find the right person for your task.
        </p>
      </div>
    </div>
    <div class="faq-block">
      <div class="row faq-block--question flex">
        <div class="faq-block--question-title">How Do I Pay for a Completed Task?</div>
        <div class="faq-block--question-button">
          <button @click="toggleAnswer(4)"><PlusIcon /></button>
        </div>
      </div>
      <div class="row faq-block--answer" :class="{ open: openIndexes[4] }">
        <p>
          Payment is made directly between the task giver and the helper – you decide how to handle
          it. Dooin takes no commission or fees.
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
  margin-bottom: 50px;
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
