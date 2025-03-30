import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('language', () => {
  const language = ref<'eng' | 'de'>('de')
  const setLanguage = (lang: 'eng' | 'de') => {
    language.value = lang
  }
  return { language, setLanguage }
})
