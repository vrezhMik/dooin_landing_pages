<script lang="ts" setup>
import { ref } from 'vue'

const selectedIndex = ref(0)
</script>

<template>
  <div class="features container" id="product">
    <div class="features-info">
      <div class="features-info--title">
        <p></p>
      </div>
      <div class="features-info--description">
        <h2>What Makes Dooin Special</h2>
      </div>
      <div class="features-info--menu flex">
        <button @click="selectedIndex = 0" :class="{ active: selectedIndex === 0 }">Direct</button>
        <button @click="selectedIndex = 1" :class="{ active: selectedIndex === 1 }">Trusted</button>
        <button @click="selectedIndex = 2" :class="{ active: selectedIndex === 2 }">Nearby</button>
        <button @click="selectedIndex = 3" :class="{ active: selectedIndex === 3 }">Fast</button>
        <button @click="selectedIndex = 4" :class="{ active: selectedIndex === 4 }">Free</button>
      </div>
    </div>

    <div class="features-block flex" v-if="selectedIndex === 0">
      <!-- <div class="features-block--image">
        <img src="./../assets/block.webp" alt="" />
      </div> -->
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>Peer-to-Peer Connections</h3>
        </div>
        <div class="features-block--content-description">
          <p>Directly connect with people who can help you—no middlemen.</p>
        </div>
      </div>
    </div>

    <div class="features-block flex" v-if="selectedIndex === 1">
      <!-- <div class="features-block--image">
        <img src="./../assets/block.webp" alt="" />
      </div> -->
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>Real Reviews, More Trust</h3>
        </div>
        <div class="features-block--content-description">
          <p>Check real reviews from others and feel confident in your decision.</p>
        </div>
      </div>
    </div>

    <div class="features-block flex" v-if="selectedIndex === 2">
      <!-- <div class="features-block--image">
        <img src="./../assets/block.webp" alt="" />
      </div> -->
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>Quick and Nearby</h3>
        </div>
        <div class="features-block--content-description">
          <p>Post your task and find the best match for help right in your area.</p>
        </div>
      </div>
    </div>

    <div class="features-block flex" v-if="selectedIndex === 3">
      <!-- <div class="features-block--image">
        <img src="./../assets/block.webp" alt="" />
      </div> -->
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>Set Up in Seconds</h3>
        </div>
        <div class="features-block--content-description">
          <p>Register and get started in just 3 clicks, it is that easy.</p>
        </div>
      </div>
    </div>

    <div class="features-block flex" v-if="selectedIndex === 4">
      <!-- <div class="features-block--image">
        <img src="./../assets/block.webp" alt="" />
      </div> -->
      <div class="features-block--content flex">
        <div class="features-block--content-title">
          <h3>No Hidden Fees</h3>
        </div>
        <div class="features-block--content-description">
          <p>Use our platform for free - no subscriptions, no commissions.</p>
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
        min-width: 100px;
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
    &--image {
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
          width: 30%;
        }
      }
    }
    &-block {
      height: 250px;
      align-items: center;
      column-gap: 1rem;
      &--image {
        width: 50%;
        height: 50%;
        img {
          object-fit: cover;
        }
      }
      &--content {
        width: 40%;
        &-title {
          h3 {
            font-size: 1.25rem;
          }
        }
        &-description {
          font-size: 0.8rem;
        }
      }
    }
  }
}

.active {
  color: variables.$subcolor-light !important;
}
</style>
