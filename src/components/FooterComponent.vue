<script lang="ts" setup>
import { useLanguageStore } from '@/stores/store'
import InstagramIcon from './Icons/InstagramIcon.vue'
import LinkedinIcon from './Icons/LinkedinIcon.vue'
import { computed } from 'vue'

const languageStore = useLanguageStore()

const isEnglish = computed(() => languageStore.language === 'eng')
const menuData = [
  { href: '#product', name: 'product', name_de: 'rodukt' },
  { href: '#about', name: 'about', name_de: 'Über uns' },
]
</script>

<template>
  <footer class="sora">
    <div class="footer-content container">
      <div class="row footer-content--info flex">
        <div class="footer-content--info-company flex">
          <a href="/"><span class="green">D</span>ooin</a>
          <p>
            {{
              isEnglish
                ? 'Everything is secure, direct, and fair. Pay through the platform or get paid.'
                : 'Alles ist sicher, direkt und fair. Bezahle über die Plattform oder lass Dich bezahlen.'
            }}
          </p>
        </div>
        <div class="footer-content--info-links flex">
          <div class="footer-content--info-links-menu menu-column">
            <h2>Product</h2>
            <nav>
              <a :href="menu.href" v-for="menu in menuData" :class="['row']">{{
                isEnglish ? menu.name : menu.name_de
              }}</a>
            </nav>
          </div>
          <div class="footer-content--info-links-social menu-column">
            <h2>Follow Us</h2>
            <nav>
              <a href="#" :class="['row', 'social-icon']">
                <InstagramIcon />
              </a>
              <a href="" :class="['row', 'social-icon']"><LinkedinIcon /></a>
            </nav>
          </div>
        </div>
      </div>
      <div class="row footer-content--copyright flex">
        <p>Made by Dooin</p>
        <div class="footer-content--copyright-links flex">
          <a href="">Privacy and Policy</a>
          <a href="">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use './../styles/variables' as variables;

footer {
  background: variables.$dark-background;
  padding: 50px 0;
  color: #fff;
  .footer-content {
    &--info {
      justify-content: space-between;
      border-bottom: 1px solid #fff;
      padding-bottom: 30px;
      margin-bottom: 20px;
      &-company {
        flex-direction: column;
        row-gap: 30px;
        a {
          color: #fff;
          font-size: 2rem;
        }
        p {
          font-size: 0.9rem;
        }
      }
      &-links {
        column-gap: 40px;
        nav {
          a {
            max-width: 32px;
            max-height: 32px;
            svg {
              path {
                fill: #fff;
              }
            }
          }
        }
      }
    }
    &--copyright {
      justify-content: space-between;
      p {
        font-size: 0.9rem;
      }
      &-links {
        column-gap: 15px;
        a {
          font-size: 0.9rem;
          color: #fff;
          &:hover {
            color: variables.$primary-color;
          }
        }
      }
    }
  }
}

.menu-column {
  h2 {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
  nav {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    a {
      color: #fff;
      font-size: 0.9rem;
      &:hover {
        color: variables.$primary-color;
      }
    }
  }
}

@media (max-width: 470px) {
  footer {
    .footer-content {
      &--info {
        flex-direction: column;
        &-company {
          p {
            margin-bottom: 15px;
          }
        }
        &-links {
          flex-direction: column;
          row-gap: 5px;
        }
      }
    }
  }

  .menu-column {
    display: flex;
    align-items: center;
    column-gap: 15px;
    h2 {
      margin: 0;
      font-size: 1rem;
    }
    nav {
      flex-direction: row;
      align-items: center;
      column-gap: 10px;
      gap: 50px;
      min-width: 200px;
      a {
        min-width: 100px;
      }
    }
  }
  .social-icon {
    width: 32px !important;
    height: 32px !important;
  }
}
</style>
