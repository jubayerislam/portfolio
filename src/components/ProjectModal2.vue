<template>
  <transition name="modal-fade">
    <div
        v-if="isOpen"
        class="fixed inset-0 bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 z-50"
    >
      <div
          class="relative bg-background/95 border border-border/60 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto ring-1 ring-accent/10"
          @click.stop
      >
        <!-- Close Button -->
        <button
            @click="closeModal"
            class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted/50 transition-all duration-300 z-10"
        >
          ✕
        </button>

        <!-- Content -->
        <div class="p-8 sm:p-12">
          <!-- Header -->
          <header class="mb-10 text-center animate-fade-in">
            <h2 class="text-4xl sm:text-5xl font-bold text-foreground mb-3">
              {{ project.title }}
            </h2>
            <p class="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto">
              {{ project.description }}
            </p>
          </header>

          <!-- Project Preview -->
          <div
              class="w-full aspect-video bg-gradient-to-br from-accent/15 to-muted/10 rounded-2xl mb-10 overflow-hidden relative flex items-center justify-center group"
          >
            <div class="text-center transition-transform duration-500 group-hover:scale-105">
              <div class="text-6xl mb-4">📊</div>
              <p class="text-muted-foreground">Project Showcase</p>
            </div>
          </div>

          <!-- Challenge & Solution -->
          <section class="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <h3 class="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
                Challenge
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                The client needed a real-time data processing platform that scaled dynamically with minimal latency.
              </p>
            </div>
            <div>
              <h3 class="text-sm uppercase tracking-widest text-accent font-semibold mb-3">
                Solution
              </h3>
              <p class="text-muted-foreground leading-relaxed">
                Built a WebSocket + Redis + PostgreSQL architecture achieving sub-100ms responses under peak load.
              </p>
            </div>
          </section>

          <!-- Results -->
          <section
              class="bg-muted/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-12 border border-border/50"
          >
            <h3 class="text-sm uppercase tracking-widest text-accent mb-6 font-semibold">
              Results
            </h3>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div>
                <div class="text-3xl font-bold text-accent mb-1">+60%</div>
                <p class="text-sm text-muted-foreground">Performance Gain</p>
              </div>
              <div>
                <div class="text-3xl font-bold text-accent mb-1">99.9%</div>
                <p class="text-sm text-muted-foreground">Uptime</p>
              </div>
              <div>
                <div class="text-3xl font-bold text-accent mb-1">10K+</div>
                <p class="text-sm text-muted-foreground">Active Users</p>
              </div>
            </div>
          </section>

          <!-- Tech Stack -->
          <section class="mb-12">
            <h3 class="text-sm uppercase tracking-widest text-accent mb-4 font-semibold">
              Tech Stack
            </h3>
            <div class="flex flex-wrap gap-3">
              <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent font-medium"
              >
                {{ tech }}
              </span>
            </div>
          </section>

          <!-- CTA Buttons -->
          <footer class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
                href="#"
                target="_blank"
                class="px-8 py-3 bg-accent text-background rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 text-center"
            >
              🔗 View Live Project
            </a>
            <a
                href="#"
                target="_blank"
                class="px-8 py-3 border border-border rounded-xl font-semibold hover:bg-muted/40 transition-all duration-300 text-center"
            >
              💻 View Source Code
            </a>
          </footer>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  isOpen: Boolean,
  project: {
    type: Object,
    default: () => ({
      title: '',
      description: '',
      tech: []
    })
  }
})

const emit = defineEmits(['close'])
const closeModal = () => emit('close')
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}
</style>
