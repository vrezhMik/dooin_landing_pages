import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<'eng' | 'ge'>('ge')
  const setLanguage = (lang: 'eng' | 'ge') => {
    language.value = lang
  }
  return { language, setLanguage }
})
