<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white">
    <!-- Hero Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
      <div class="text-center">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          {{ t('home.hero.welcome') }} <span class="text-blue-600">{{ t('home.hero.companyName') }}</span>
        </h1>
        <p class="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-delay">
          {{ t('home.hero.subtitle') }}
        </p>
        <div class="flex justify-center space-x-4 animate-fade-in-delay-2">
          <router-link 
            to="/tax-declaration" 
            class="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {{ t('home.hero.getStarted') }}
          </router-link>
          <router-link 
            to="/chat" 
            class="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            {{ t('home.hero.tryChat') }}
          </router-link>
        </div>
      </div>
    </div>

    <!-- Features Section -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-icon bg-blue-100 text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('home.features.taxDeclaration.title') }}</h3>
          <p class="text-gray-600">{{ t('home.features.taxDeclaration.description') }}</p>
        </div>

        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="feature-icon bg-green-100 text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('home.features.chatSupport.title') }}</h3>
          <p class="text-gray-600">{{ t('home.features.chatSupport.description') }}</p>
        </div>

        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-icon bg-purple-100 text-purple-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ t('home.features.security.title') }}</h3>
          <p class="text-gray-600">{{ t('home.features.security.description') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.feature-card {
  @apply bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300;
  animation: fadeUp 0.6s ease-out forwards;
  opacity: 0;
}

.feature-card:nth-child(1) { animation-delay: 0.2s; }
.feature-card:nth-child(2) { animation-delay: 0.4s; }
.feature-card:nth-child(3) { animation-delay: 0.6s; }

.feature-icon {
  @apply p-4 rounded-full inline-flex items-center justify-center mb-4;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-fade-in-delay {
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 0.8s ease-out 0.6s forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
