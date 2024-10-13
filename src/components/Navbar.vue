<template>
  <nav class="bg-gray-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-10">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <router-link to="/" class="text-white text-lg font-semibold">MyApp</router-link>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <router-link to="/" class="text-gray-300 hover:text-white px-2 py-1 border-r border-gray-600 text-sm font-medium">Home</router-link>
              <router-link to="/about" class="text-gray-300 hover:text-white px-2 py-1 border-r border-gray-600 text-sm font-medium">About</router-link>
              <router-link to="/chat" class="text-gray-300 hover:text-white px-2 py-1 text-sm font-medium">Chat</router-link>
            </div>
          </div>
        </div>
        <div class="-mr-2 flex md:hidden">
          <button @click="toggleMenu" type="button" class="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="md:hidden" :class="{ 'hidden':!menuOpen }">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <router-link to="/" class="text-gray-300 hover:text-white block px-3 py-1 rounded-md text-base font-medium">Home</router-link>
        <router-link to="/about" class="text-gray-300 hover:text-white block px-3 py-1 rounded-md text-base font-medium">About</router-link>
        <router-link to="/chat" class="text-gray-300 hover:text-white block px-3 py-1 rounded-md text-base font-medium">Chat</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
}
</script>

<style scoped>
/* Additional styles for the navbar can go here */
</style>
