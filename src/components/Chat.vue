<template>
  <div class="container">
    <h1 class="text-center text-primary">Chat Application</h1>
    <div class="chat-messages" ref="chatMessages">
      <div v-for="(message, index) in messages" :key="index" :class="['message', message.isUser ? 'user-message' : 'bot-message']">
        {{ message.text }}
      </div>
      <div v-if="isTyping" class="typing-indicator">
        <span></span><span></span><span></span>
      </div>
    </div>
    <div class="input-area">
      <input type="text" v-model="userInput" @keypress.enter="sendMessage" placeholder="Type your message here...">
      <button @click="sendMessage">Send</button>
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
      isTyping: false
    }
  },
  methods: {
    addMessage(message, isUser) {
      this.messages.push({ text: message, isUser });
      this.$nextTick(() => {
        this.scrollToBottom();
      });
    },
    scrollToBottom() {
      const chatMessages = this.$refs.chatMessages;
      chatMessages.scrollTop = chatMessages.scrollHeight;
    },
    async sendMessage() {
      const message = this.userInput.trim();
      if (message) {
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

          this.isTyping = false;

          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }

          const data = await response.json();
          this.addMessage(data.response, false);
        } catch (error) {
          console.error('Error:', error);
          this.isTyping = false;
          if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
            this.addMessage('Unable to connect to the server. Please check if the backend is running and CORS is properly configured.', false);
          } else if (error.message.includes('HTTP error!')) {
            this.addMessage(`Server error: ${error.message}. Please check your backend logs.`, false);
          } else {
            this.addMessage('An unexpected error occurred. Please try again later.', false);
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.chat-container {
  width: 100%;
  max-width: 600px;
  height: 70vh;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
}

.chat-title {
  text-align: center;
  padding: 15px 0;
  margin: 0;
  background-color: #007bff;
  color: white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 20px;
}

.message {
  margin-bottom: 15px;
  padding: 10px;
  border-radius: 5px;
  max-width: 70%;
}

.user-message {
  background-color: #007bff;
  color: white;
  align-self: flex-end;
  margin-left: auto;
}

.bot-message {
  background-color: #f1f0f0;
  color: black;
  align-self: flex-start;
}

.input-area {
  display: flex;
  padding: 20px;
  border-top: 1px solid #e0e0e0;
}

.input-area input {
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

.input-area button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}

.typing-indicator {
  display: flex;
  padding: 10px;
  background-color: #f1f0f0;
  border-radius: 5px;
  margin-bottom: 15px;
  align-self: flex-start;
}

.typing-indicator span {
  height: 10px;
  width: 10px;
  float: left;
  margin: 0 1px;
  background-color: #9E9EA1;
  display: block;
  border-radius: 50%;
  opacity: 0.4;
}

.typing-indicator span:nth-of-type(1) {
  animation: 1s blink infinite 0.3333s;
}

.typing-indicator span:nth-of-type(2) {
  animation: 1s blink infinite 0.6666s;
}

.typing-indicator span:nth-of-type(3) {
  animation: 1s blink infinite 0.9999s;
}

@keyframes blink {
  50% {
    opacity: 1;
  }
}
</style>
