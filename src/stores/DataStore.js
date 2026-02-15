import { defineStore } from 'pinia'
import textJson from '@/assets/text.json'

export const useDataStore = defineStore('DataStore', {
  state: () => ({
    language: 'en',
    messages: textJson
  }),
  actions: {
    setLanguage(lang) {
      if (this.messages[lang]) {
        this.language = lang
      }
    },

    t(path) {
      const keys = path.split('.')
      let result = this.currentMessages

      for (const key of keys) {
        result = result?.[key]
        if (!result) return path
      }

      return result
    }
  },

    // --- GETTERS ---
  getters: {
    currentMessages(state) {
      return state.messages[state.language] ?? state.messages.en
    }
  },
})
