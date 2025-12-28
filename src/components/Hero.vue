<template>

  <section id="hero"
           class="pt-32 pb-16 md:pt-40 md:pb-20 lg:pt-48 lg:pb-32 flex items-center justify-center
                bg-gradient-to-b text-[var(--color-foreground)] px-4 sm:px-8 font-mono relative overflow-hidden">

    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">

      <!-- LEFT SIDE -->
      <div class="text-center md:text-left space-y-6 md:flex-1 md:w-[70%]">

        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Md. <span class="text-[var(--color-accent)]">Jubayer Islam</span>
        </h1>

        <p class="text-xl text-[var(--color-muted-foreground)]/90 font-light">
          Creative Technologist & Software Engineer
        </p>

        <p class="text-base sm:text-lg text-[var(--color-muted-foreground)]/70 max-w-lg leading-relaxed mx-auto md:mx-0">
          Architect of high-performance, visually clean, stunning web experiences that deliver results.
        </p>


        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start pt-6">
          <button @click.prevent="scrollToSection('work')"
              class="px-8 py-3 bg-[var(--color-button-accent)] text-[var(--color-button-text)] rounded-lg font-medium hover:scale-[1.03] shadow-sm transition-all duration-300 cursor-pointer">
            View My Work
          </button>
          <a href="/resume/Jubayer_Islam_CV.pdf" download
             class="px-8 py-3 border border-accent/30 rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 cursor-pointer">
            Download CV
          </a>
        </div>

        <!-- STATS -->
        <div class="grid grid-cols-3 gap-6 text-center md:text-left pt-8 md:pt-12">
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] mb-1">10+</div>
            <p class="text-xs sm:text-sm text-[var(--color-muted-foreground)] uppercase tracking-wide">Projects
              Completed</p>
          </div>

          <div>
            <div class="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] mb-1">4 yrs</div>
            <p class="text-xs sm:text-sm text-[var(--color-muted-foreground)] uppercase tracking-wide">Experience</p>
          </div>

          <div>
            <div class="text-3xl sm:text-4xl font-bold text-[var(--color-accent)] mb-1">30+</div>
            <p class="text-xs sm:text-sm text-[var(--color-muted-foreground)] uppercase tracking-wide">Happy Clients</p>
          </div>
        </div>

      </div>

      <!-- RIGHT SIDE IMAGE -->
      <div class="flex justify-center md:justify-end md:w-[30%]">
        <div
            class="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full
               bg-gradient-to-tr from-[var(--color-accent)]/30 to-[var(--color-accent)]/10
               border border-[var(--color-accent)]/20 flex items-center justify-center
               overflow-hidden shadow-lg shadow-[var(--color-accent)]/10 animate-float">

          <img
              :src="profileImage"
              alt="Jubayer Islam"
              class="w-full h-full rounded-full object-cover
                 transform hover:scale-105 transition-transform duration-500"/>

          <div
              class="absolute inset-0 rounded-full bg-[var(--color-accent)]/10 blur-3xl animate-pulse opacity-60"></div>
        </div>
      </div>

    </div>
  </section>

</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import Lenis from 'lenis'

const profileImage = 'img/jubayer-profile.png'

// Use ref to make lenis reactive
const lenis = ref(null)

// Initialize Lenis
const initLenis = () => {
  lenis.value = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
  })

  function raf(time) {
    lenis.value?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

// Scroll function
function scrollToSection(id) {
  if (!lenis.value) {
    console.error('Lenis is not initialized')
    return
  }

  const target = document.getElementById(id)
  if (target) {
    lenis.value.scrollTo(target, {
      offset: 0,
      duration: 1.2,
    })
  }
}

// Lifecycle hooks
onMounted(() => {
  initLenis()
})

onUnmounted(() => {
  if (lenis.value) {
    lenis.value.destroy()
  }
})
</script>

<style scoped>

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
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

.animate-fadeUp {
  animation: fadeUp 0.8s ease-out forwards;
}

</style>
