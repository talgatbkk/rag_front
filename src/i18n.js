import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ru from './locales/ru.json'

export default createI18n({
  legacy: false, // Set to false to use Composition API
  locale: 'ru', // Default locale
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
})
