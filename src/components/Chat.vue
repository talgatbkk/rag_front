<template>
  <div class="bg-gradient-to-b from-white to-gray-50 shadow-xl rounded-xl max-w-4xl mx-auto mt-5 overflow-hidden">
    <div class="bg-blue-600 text-white px-6 py-4">
      <h1 class="text-xl font-semibold">{{ $t('chat.header') }}</h1>
    </div>
    
    <div 
      ref="chatMessages" 
      class="chat-messages p-6 h-[500px] overflow-y-auto scroll-smooth"
    >
      <div 
        v-for="(message, index) in messages" 
        :key="index" 
        class="flex"
        :class="message.isUser ? 'justify-end' : 'justify-start'"
      >
        <div 
          class="message my-2 max-w-[80%] p-3 rounded-2xl shadow-sm transform transition-all duration-200 hover:shadow-md"
          :class="[
            message.isUser 
              ? 'bg-blue-600 text-white rounded-tr-none' 
              : 'bg-white text-gray-800 rounded-tl-none'
          ]"
        >
          <p class="text-sm md:text-base">{{ message.text }}</p>
          <div 
            class="text-xs opacity-70 mt-1"
            :class="message.isUser ? 'text-blue-100' : 'text-gray-500'"
          >
            {{ message.timestamp }}
          </div>
        </div>
      </div>

      <!-- Typing Indicator -->
      <div v-if="isTyping" class="flex justify-start my-2">
        <div class="bg-white p-4 rounded-2xl shadow-sm">
          <div class="typing-indicator flex space-x-2">
            <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
            <span class="w-3 h-3 bg-gray-400 rounded-full"></span>
          </div>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="flex justify-center my-4">
        <div class="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-sm border border-red-200 shadow-sm">
          {{ error }}
        </div>
      </div>
    </div>

    <div class="input-area p-4 bg-white border-t border-gray-100 shadow-lg">
      <form @submit.prevent="sendMessage" class="flex space-x-3">
        <input 
          type="text" 
          v-model="userInput" 
          :placeholder="$t('chat.placeholder')" 
          :disabled="isTyping"
          class="flex-grow px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          :class="{ 'animate-pulse': isTyping }"
        >
        <button 
          type="submit"
          :disabled="!userInput.trim() || isTyping"
          class="px-6 py-3 bg-blue-600 text-white rounded-xl font-medium transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          <span v-if="!isTyping">{{ $t('chat.send') }}</span>
          <span v-else class="flex items-center space-x-2">
            <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChatPage',
  data() {
    return {
      messages: [],
      userInput: '',
      isTyping: false,
      error: null
    }
  },
  methods: {
    formatTimestamp() {
      const now = new Date();
      return now.toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    },
    addMessage(message, isUser) {
      this.messages.push({ 
        text: message, 
        isUser,
        timestamp: this.formatTimestamp()
      });
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      const chatMessages = this.$refs.chatMessages;
      chatMessages.scrollTo({
        top: chatMessages.scrollHeight,
        behavior: 'smooth'
      });
    },
    async sendMessage() {
      const message = this.userInput.trim();
      if (message && !this.isTyping) {
        this.error = null;
        this.addMessage(message, true);
        this.userInput = '';
        this.isTyping = true;

        try {
          const response = await fetch('http://127.0.0.1:5000/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: message }),
          });

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          this.addMessage(data.response, false);
        } catch (error) {
          console.error('Error:', error);
          if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
            this.error = this.$t('chat.error.network');
          } else if (error.message.includes('HTTP error!')) {
            this.error = this.$t('chat.error.server', { error: error.message });
          } else {
            this.error = this.$t('chat.error.unexpected');
          }
        } finally {
          this.isTyping = false;
        }
      }
    }
  }
}
</script>

<style scoped>
.chat-messages {
  scrollbar-width: thin;
  scrollbar-color: #CBD5E1 #F1F5F9;
}

.chat-messages::-webkit-scrollbar {
  width: 6px;
}

.chat-messages::-webkit-scrollbar-track {
  background: #F1F5F9;
}

.chat-messages::-webkit-scrollbar-thumb {
  background-color: #CBD5E1;
  border-radius: 3px;
}

.typing-indicator span {
  animation: bounce 1.4s infinite ease-in-out both;
}

.typing-indicator span:nth-child(1) {
  animation-delay: -0.32s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: -0.16s;
}

@keyframes bounce {
  0%, 80%, 100% { 
    transform: scale(0);
  } 
  40% { 
    transform: scale(1);
  }
}

.message {
  opacity: 0;
  animation: fadeIn 0.3s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
