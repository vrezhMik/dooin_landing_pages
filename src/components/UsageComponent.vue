<script setup>
import { ref } from 'vue'

const selectedIndex = ref(0)
</script>

<template>
  <div class="usage container">
    <div class="usage-info">
      <div class="usage-info-title">
        <p></p>
      </div>
      <div class="usage-info--description">
        <h2>Find or Offer Help – for Any Everyday Task</h2>
      </div>
      <div class="usage-info--menu flex">
        <button @click="selectedIndex = 0">Offer a Job</button>
        <button @click="selectedIndex = 1">Find a Job</button>
      </div>
    </div>
    <div v-if="selectedIndex == 0">
      <div class="usage-block flex">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Schnelle Reinigung Deiner Wohnung</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              No time to clean your apartment? Post the task and quickly find someone who can help
              you clean – whether it’s a quick sweep or a thorough cleaning.
            </p>
          </div>
        </div>
      </div>
      <div class="usage-block flex image-left">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Einkäufe Erledigen lassen</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              UNeed groceries or other items urgently but don’t have time? Have a tasker do your
              shopping and bring the goods directly to your door."
            </p>
          </div>
        </div>
      </div>
      <div class="usage-block flex">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Freiwillige Hilfe für die Nachbarschaft</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              Organize volunteer help for neighbors – such as cleaning out, shopping for seniors, or
              supporting refugee initiatives."
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="selectedIndex == 1">
      <div class="usage-block flex">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Do Shopping for Others</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              Have time and enjoy shopping? Help your neighbors with their shopping and earn some
              money.
            </p>
          </div>
        </div>
      </div>
      <div class="usage-block flex image-left">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Tech Support for Seniors</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              Assist elderly people with their smartphones or setting up devices. Easy and direct
              through the app.
            </p>
          </div>
        </div>
      </div>
      <div class="usage-block flex">
        <div class="usage-block--image">
          <img src="./../assets/block2.webp" alt="" />
        </div>
        <div class="usage-block--content flex">
          <div class="usage-block--content-title">
            <h3>Help with Moving</h3>
          </div>
          <div class="usage-block--content-description">
            <p>
              Offer your help with moving – whether it’s carrying, packing, or transporting. The app
              connects you directly with people who need your assistance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;
.usage {
  margin-bottom: 100px;
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
        transition: 0.4s ease;

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
        width: 70%;
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
</style>
