<template>
  <nav class="bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link 
              to="/" 
              class="text-white text-xl font-bold tracking-wide hover:text-blue-200 transition-colors duration-200"
            >
              {{ t('nav.appName') }}
            </router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-center space-x-4">
              <router-link 
                v-for="route in routes" 
                :key="route.path"
                :to="route.path"
                class="relative group px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out"
                :class="[
                  $route.path === route.path 
                    ? 'text-white bg-blue-700 rounded-lg shadow-inner' 
                    : 'text-blue-100 hover:text-white'
                ]"
              >
                {{ t(route.translationKey) }}
                <span 
                  class="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                  :class="{ 'scale-x-100': $route.path === route.path }"
                ></span>
              </router-link>
            </div>
          </div>
        </div>
        
        <!-- Language Switcher -->
        <div class="hidden md:flex items-center space-x-4 mr-4">
          <button 
            v-for="locale in availableLocales"
            :key="locale"
            @click="changeLocale(locale)"
            class="px-2 py-1 text-sm rounded-md transition-colors duration-200"
            :class="currentLocale === locale ? 'bg-blue-700 text-white' : 'text-blue-100 hover:text-white'"
          >
            {{ locale.toUpperCase() }}
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex md:hidden">
          <button 
            @click="toggleMenu" 
            type="button" 
            class="inline-flex items-center justify-center p-2 rounded-lg text-blue-100 hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
            :aria-expanded="menuOpen"
          >
            <span class="sr-only">{{ menuOpen ? t('nav.menu.close') : t('nav.menu.open') }}</span>
            <svg 
              class="h-6 w-6 transition-transform duration-200" 
              :class="{ 'rotate-180': menuOpen }"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                v-if="!menuOpen"
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path 
                v-else
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="menuOpen" class="md:hidden bg-blue-700">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            v-for="route in routes" 
            :key="route.path"
            :to="route.path"
            class="block px-3 py-2 rounded-lg text-base font-medium transition-all duration-200"
            :class="[
              $route.path === route.path 
                ? 'text-white bg-blue-800' 
                : 'text-blue-100 hover:text-white hover:bg-blue-600'
            ]"
            @click="menuOpen = false"
          >
            {{ t(route.translationKey) }}
          </router-link>
          
          <!-- Mobile Language Switcher -->
          <div class="flex space-x-2 px-3 py-2">
            <button 
              v-for="locale in availableLocales"
              :key="locale"
              @click="changeLocale(locale)"
              class="px-2 py-1 text-sm rounded-md transition-colors duration-200"
              :class="currentLocale === locale ? 'bg-blue-800 text-white' : 'text-blue-100 hover:text-white'"
            >
              {{ locale.toUpperCase() }}
            </button>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const { t, locale } = useI18n()
const route = useRoute()
const menuOpen = ref(false)

const routes = [
  { path: '/', translationKey: 'nav.home' },
  { path: '/about', translationKey: 'nav.about' },
  { path: '/chat', translationKey: 'nav.chat' },
  { path: '/tax-declaration', translationKey: 'nav.taxDeclaration' }
]

const availableLocales = ['en', 'ru']
const currentLocale = computed(() => locale.value)

const changeLocale = (newLocale) => {
  locale.value = newLocale
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

// Close mobile menu on route change
watch(route, () => {
  menuOpen.value = false
})
</script>

<style scoped>
.router-link-active {
  position: relative;
}

@media (min-width: 768px) {
  .router-link-active::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(1);
    transition: transform 0.2s ease;
  }
}

/* Smooth transition for hover effects */
.router-link-active,
.router-link {
  transition: all 0.2s ease-in-out;
}

/* Custom shadow for active states */
.shadow-inner {
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.1);
}
</style>
