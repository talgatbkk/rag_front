const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-button');

function addMessage(message, isUser) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(isUser ? 'user-message' : 'bot-message');
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addTypingIndicator() {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.innerHTML = '<span></span><span></span><span></span>';
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return typingIndicator;
}

function removeTypingIndicator(indicator) {
    chatMessages.removeChild(indicator);
}

async function sendMessage() {
    const message = userInput.value.trim();
    if (message) {
        addMessage(message, true);
        userInput.value = '';

        const typingIndicator = addTypingIndicator();

        try {
            const response = await fetch('http://127.0.0.1:5000/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: message }),
            });

            removeTypingIndicator(typingIndicator);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            addMessage(data.response, false);
        } catch (error) {
            console.error('Error:', error);
            removeTypingIndicator(typingIndicator);
            if (error.message.includes('NetworkError') || error.message.includes('Failed to fetch')) {
                addMessage('Unable to connect to the server. Please check if the backend is running and CORS is properly configured.', false);
            } else if (error.message.includes('HTTP error!')) {
                addMessage(`Server error: ${error.message}. Please check your backend logs.`, false);
            } else {
                addMessage('An unexpected error occurred. Please try again later.', false);
            }
        }
    }
}

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});