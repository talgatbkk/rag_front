<template>
  <div class="flex justify-center h-screen bg-gray-50">
    <div class="bg-white p-8 rounded-xl shadow-lg w-1/2 mt-10 transform transition-all duration-300 hover:shadow-xl">
      <h1 class="text-3xl font-bold mb-6 text-gray-800 border-b pb-4">{{ $t('taxDeclaration.title') }}</h1>
      <div class="grid gap-6">
        <div class="space-y-2">
          <label for="broker-format" class="text-lg font-medium text-gray-700">{{ $t('taxDeclaration.chooseBroker') }}</label>
          <select 
            id="broker-format" 
            v-model="selectedBroker" 
            :class="[
              'w-full px-4 py-3 rounded-lg border',
              'bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200',
              'transition-all duration-200 ease-in-out',
              'cursor-pointer hover:border-blue-400',
              'text-gray-700'
            ]"
          >
            <option value="" disabled>{{ $t('taxDeclaration.selectBroker') }}</option>
            <option 
              v-for="broker in brokers" 
              :key="broker" 
              :value="broker"
              class="py-2"
            >
              {{ broker }}
            </option>
          </select>
        </div>
        
        <button 
          @click="proceed" 
          :disabled="!selectedBroker || loading"
          :class="[
            'px-6 py-3 rounded-lg font-medium transition-all duration-200',
            'transform hover:scale-[1.02] active:scale-[0.98]',
            loading ? 'bg-blue-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700',
            'text-white shadow-md hover:shadow-lg',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100',
            'flex items-center justify-center space-x-2'
          ]"
        >
          <svg 
            v-if="loading" 
            class="animate-spin h-5 w-5 text-white" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24"
          >
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{{ loading ? $t('taxDeclaration.processing') : $t('taxDeclaration.proceed') }}</span>
        </button>

        <!-- Success Message -->
        <div 
          v-if="showSuccess" 
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <span class="block sm:inline">{{ $t('taxDeclaration.success', { broker: selectedBroker }) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaxDeclaration',
  data() {
    return {
      selectedBroker: '',
      loading: false,
      showSuccess: false,
      brokers: [
        'Freedom Finance',
        'Interactive Brokers',
        'Halyk Finance',
        'BCC Invest',
        'First Heartland Securities'
      ]
    }
  },
  methods: {
    async proceed() {
      if (this.selectedBroker) {
        this.loading = true
        this.showSuccess = false
        
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log('Selected broker:', this.selectedBroker)
          this.showSuccess = true
          
          // Hide success message after 3 seconds
          setTimeout(() => {
            this.showSuccess = false
          }, 3000)
        } catch (error) {
          console.error('Error:', error)
        } finally {
          this.loading = false
        }
      }
    }
  }
}
</script>

<style scoped>
/* Smooth transitions for all interactive elements */
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}

/* Custom scrollbar for select dropdown */
select {
  scrollbar-width: thin;
  scrollbar-color: #94a3b8 #e2e8f0;
}

select::-webkit-scrollbar {
  width: 8px;
}

select::-webkit-scrollbar-track {
  background: #e2e8f0;
  border-radius: 4px;
}

select::-webkit-scrollbar-thumb {
  background-color: #94a3b8;
  border-radius: 4px;
  border: 2px solid #e2e8f0;
}
</style>
