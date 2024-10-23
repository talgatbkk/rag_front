<template>
  <div class="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 relative">
    <!-- Background Pattern -->
    <div class="absolute inset-0 z-0 opacity-[0.03] pattern-grid-lg"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-20 animate-fade-in">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">{{ $t('about.header') }}</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          {{ $t('about.mission.description') }}
        </p>
      </div>

      <!-- Mission Section -->
      <div class="bg-white rounded-2xl shadow-lg p-10 mb-16 transform hover:shadow-xl transition-all duration-300 animate-slide-up border border-gray-100">
        <div class="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          <div class="flex-shrink-0">
            <div class="w-32 h-32 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center shadow-inner">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v1m6 11h2m-2 0h-2m-4 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-semibold text-gray-900 mb-6">{{ $t('about.mission.title') }}</h2>
            <p class="text-gray-600 leading-relaxed text-lg">
              {{ $t('about.mission.description') }}
            </p>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <!-- Why Choose Us -->
        <div class="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 animate-slide-up border border-gray-100" style="animation-delay: 0.2s">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">{{ $t('about.whyChooseUs.title') }}</h3>
          <ul class="space-y-6">
            <li v-for="(point, index) in $t('about.whyChooseUs.points', { returnObjects: true })" :key="index" class="flex items-start">
              <svg class="h-6 w-6 text-green-500 mr-4 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="text-gray-600 text-lg">{{ point }}</span>
            </li>
          </ul>
        </div>

        <!-- Our Values -->
        <div class="bg-white rounded-2xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300 animate-slide-up border border-gray-100" style="animation-delay: 0.4s">
          <h3 class="text-2xl font-semibold text-gray-900 mb-6">{{ $t('about.values.title') }}</h3>
          <div class="space-y-6">
            <div class="flex items-start">
              <div class="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <svg class="h-7 w-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-medium text-gray-900 mb-2">{{ $t('about.values.transparency.title') }}</h4>
                <p class="text-gray-600 leading-relaxed">{{ $t('about.values.transparency.description') }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4 shadow-sm">
                <svg class="h-7 w-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h4 class="text-xl font-medium text-gray-900 mb-2">{{ $t('about.values.security.title') }}</h4>
                <p class="text-gray-600 leading-relaxed">{{ $t('about.values.security.description') }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Section -->
      <div class="text-center animate-slide-up bg-white rounded-2xl shadow-lg p-10 border border-gray-100" style="animation-delay: 0.6s">
        <h2 class="text-3xl font-semibold text-gray-900 mb-6">{{ $t('about.contact.title') }}</h2>
        <p class="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
          {{ $t('about.contact.description') }}
        </p>
        <router-link 
          to="/chat" 
          class="inline-flex items-center px-8 py-4 bg-blue-600 text-white rounded-xl font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-lg"
        >
          <svg class="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          {{ $t('about.contact.title') }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

.animate-slide-up {
  opacity: 0;
  animation: slideUp 0.8s ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.pattern-grid-lg {
  background-image: linear-gradient(currentColor 1px, transparent 1px),
    linear-gradient(to right, currentColor 1px, transparent 1px);
  background-size: 100px 100px;
}

/* Hover effects */
.bg-white {
  transition: all 0.3s ease;
}
</style>
