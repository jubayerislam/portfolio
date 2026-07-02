<template>
  <div>
    <!-- Floating Launcher Button -->
    <button
      v-if="!isOpen"
      @click="toggleTerminal"
      class="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 hover:bg-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer border border-cyan-400/30"
      aria-label="Open AI Terminal"
      id="ai-terminal-launcher"
    >
      <span class="font-mono text-xl font-bold">&gt;_</span>
    </button>

    <!-- Terminal Window -->
    <div
      v-if="isOpen"
      class="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[450px] h-[520px] rounded-2xl bg-[#0d0e15] border border-slate-800 shadow-2xl flex flex-col overflow-hidden font-mono text-slate-300"
    >
      <!-- Title Bar -->
      <div class="h-12 bg-[#12131e] px-4 flex items-center justify-between border-b border-slate-800/80 select-none">
        <div class="flex items-center space-x-2">
          <div @click="toggleTerminal" class="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400 transition-colors"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div class="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span class="text-sm font-semibold text-slate-400">&gt;_ Echo Terminal</span>
        <button
          @click="toggleTerminal"
          class="text-slate-500 hover:text-slate-300 cursor-pointer text-lg font-bold"
        >
          &times;
        </button>
      </div>

      <!-- Terminal Body / Chat History -->
      <div
        ref="chatHistoryContainer"
        class="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col scrollbar-thin scrollbar-thumb-slate-800"
      >
        <!-- Welcome Screen (Visible when chat is empty) -->
        <div v-if="messages.length === 0" class="flex flex-col h-full justify-between py-2">
          <!-- Welcome Message -->
          <div class="rounded-xl border border-slate-800/60 bg-[#12131e]/50 p-4 mb-4">
            <h3 class="text-cyan-400 font-bold flex items-center mb-1">
              <span class="mr-2">✨</span> Welcome to Echo Terminal
            </h3>
            <p class="text-xs text-slate-400">Type a message or pick a suggestion below:</p>
          </div>

          <!-- Suggestions Grid -->
          <div class="grid grid-cols-1 gap-3 my-auto">
            <button
              v-for="(suggestion, index) in suggestions"
              :key="index"
              @click="selectSuggestion(suggestion)"
              class="w-full text-left p-3 rounded-xl border border-cyan-500/20 bg-cyan-950/5 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400/50 transition-all duration-300 text-xs flex items-center cursor-pointer font-semibold"
            >
              <span class="mr-2">✨</span> {{ suggestion }}
            </button>
          </div>
        </div>

        <!-- Chat History -->
        <div v-else class="space-y-4">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            :class="['flex flex-col', msg.role === 'user' ? 'items-end' : 'items-start']"
          >
            <!-- User Prompt Style -->
            <div v-if="msg.role === 'user'" class="bg-slate-800/80 border border-slate-700/50 text-slate-100 rounded-xl px-4 py-2 max-w-[85%] text-sm break-words">
              {{ msg.content }}
            </div>

            <!-- Bot Response Style -->
            <div v-else class="bg-[#12131e]/80 border border-slate-800 text-slate-300 rounded-xl px-4 py-2 max-w-[85%] text-sm break-words whitespace-pre-line prose prose-invert prose-xs">
              {{ msg.content }}
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isLoading" class="flex items-center space-x-2 bg-[#12131e]/80 border border-slate-800 rounded-xl px-4 py-2 max-w-[85%]">
            <span class="text-xs text-slate-400">Echo is thinking</span>
            <div class="flex space-x-1">
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 0ms"></div>
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 150ms"></div>
              <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style="animation-delay: 300ms"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Input Section -->
      <div class="p-3 bg-[#12131e] border-t border-slate-800/80 flex flex-col space-y-1.5">
        <div class="relative flex items-center">
          <textarea
            v-model="inputMessage"
            @keydown.enter.exact.prevent="sendMessage"
            rows="1"
            placeholder="Type your message here.."
            class="w-full bg-[#0d0e15] border border-slate-800 focus:border-cyan-500 focus:outline-none rounded-xl py-2.5 pl-4 pr-12 text-sm text-slate-200 placeholder-slate-500 resize-none font-mono scrollbar-none"
            style="min-height: 42px; max-height: 120px;"
          ></textarea>
          <button
            @click="sendMessage"
            :disabled="!inputMessage.trim() || isLoading"
            class="absolute right-2.5 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-800 disabled:text-slate-600 text-white transition-all cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-4 h-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
            </svg>
          </button>
        </div>
        <div class="flex justify-between items-center text-[10px] text-slate-500 px-1 select-none">
          <span>Press Enter to send</span>
          <span>Shift+Enter for newline</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, nextTick, watch } from 'vue'

const isOpen = ref(false)
const inputMessage = ref('')
const isLoading = ref(false)
const messages = ref([])
const chatHistoryContainer = ref(null)

const suggestions = [
  "What skills does Jaber have?",
  "What projects has Jaber built?",
  "What is Jaber's experience?",
  "Can you tell me about Jaber?"
]

const toggleTerminal = () => {
  isOpen.value = !isOpen.value
}

const selectSuggestion = (text) => {
  inputMessage.value = text
  sendMessage()
}

const scrollToBottom = async () => {
  await nextTick()
  if (chatHistoryContainer.value) {
    chatHistoryContainer.value.scrollTop = chatHistoryContainer.value.scrollHeight
  }
}

watch(messages, () => {
  scrollToBottom()
}, { deep: true })

const sendMessage = async () => {
  const query = inputMessage.value.trim()
  if (!query || isLoading.value) return

  // Add user message to history
  messages.value.push({ role: 'user', content: query })
  inputMessage.value = ''
  isLoading.value = true

  // Get active history for context payload (up to last 6 messages)
  const historyPayload = messages.value.slice(-6, -1)

  try {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: query,
        history: historyPayload
      })
    })

    if (!res.ok) {
      throw new Error('API request failed')
    }

    const data = await res.json()
    if (data.reply) {
      messages.value.push({ role: 'bot', content: data.reply })
    } else {
      messages.value.push({ role: 'bot', content: '⚠️ Error: AI model returned an empty response.' })
    }
  } catch (err) {
    console.error('Error fetching chat response:', err)
    messages.value.push({
      role: 'bot',
      content: '⚠️ Connection error. Please make sure GEMINI_API_KEY is configured in your environment variables.'
    })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
/* Scroller style customisation */
.scrollbar-thin::-webkit-scrollbar {
  width: 4px;
}
.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}
.scrollbar-thin::-webkit-scrollbar-thumb {
  background: #1e293b;
  border-radius: 4px;
}
.scrollbar-thin::-webkit-scrollbar-thumb:hover {
  background: #334155;
}
.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
