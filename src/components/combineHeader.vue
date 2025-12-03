
<template>
  <header
      class="sticky top-0 z-50 border-b border-white/10
           bg-gradient-to-r from-[var(--color-background)/90]
           via-[var(--color-background)/80]
           to-[var(--color-background)/90]
           backdrop-blur-md font-mono">

    <div class="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">

      <!-- Logo -->
      <div class="flex items-center gap-3 group cursor-pointer">
        <div class="flex flex-col items-start -space-y-2 transition-all group-hover:scale-[1.03]">
          <span class="text-[11px] font-light tracking-[0.25em]
                       text-[var(--color-muted-foreground)] uppercase">
            Developer
          </span>

          <span class="text-2xl font-medium tracking-tight
                       text-[var(--color-foreground)]
                       group-hover:text-[var(--color-accent)]">
            Jubayer
          </span>
        </div>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-10">
        <a
            v-for="item in navItems"
            :key="item"
            :href="`#${item.toLowerCase()}`"
            class="relative text-sm text-[var(--color-muted-foreground)]
                 hover:text-[var(--color-accent)] transition-colors duration-300
                 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px]
                 after:bg-[var(--color-accent)]
                 hover:after:w-full after:transition-all after:duration-300">
          {{ item }}
        </a>
      </nav>

      <!-- CTA + Mobile Toggle + Theme Toggle -->
      <div class="flex items-center gap-4">

        <button
            class="hidden sm:inline-block px-4 py-2 text-sm font-medium
                 text-[var(--color-background)]
                 bg-[var(--color-accent)] rounded-lg
                 hover:shadow-lg hover:shadow-[var(--color-accent)/30]
                 transition-all duration-300">
          Get Started
        </button>

        <!-- Theme Toggle -->
        <button
            @click="toggleTheme"
            class="p-2 rounded-lg hover:bg-[var(--color-muted)] transition">
          <svg v-if="theme !== 'dark'" class="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 3v1m0 16v1m8.66-9H21M3 12H2m15.364-7.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>

          <svg v-else class="w-5 h-5 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
          </svg>
        </button>

        <!-- Mobile Toggle -->
        <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 hover:bg-[var(--color-muted)] rounded-lg transition">
          <svg class="w-6 h-6 text-[var(--color-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>

      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4">

      <nav
          v-if="mobileMenuOpen"
          class="md:hidden border-t border-white/10
               bg-[var(--color-background)/95] backdrop-blur-md
               px-6 py-4 font-mono">
        <div class="flex flex-col gap-3">

          <a
              v-for="item in navItems"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              @click="mobileMenuOpen = false"
              class="text-sm font-light text-[var(--color-muted-foreground)]
                   hover:text-[var(--color-accent)] transition-colors py-2">
            {{ item }}
          </a>

          <button
              class="w-full px-4 py-2.5 text-sm font-medium
                   text-[var(--color-background)]
                   bg-[var(--color-accent)]
                   rounded-lg hover:shadow-lg
                   hover:shadow-[var(--color-accent)/30]
                   transition-all duration-300 mt-2">
            Get Started
          </button>

        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup >
import { ref, onMounted } from 'vue'

const mobileMenuOpen = ref(false)
const theme = ref('light')
const navItems = ['About', 'Work', 'Services', 'Contact']

// Load saved theme
onMounted(() => {
  const saved = localStorage.getItem("theme")
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark")
    theme.value = "dark"
  }
})

const toggleTheme = () => {
  if (theme.value === "dark") {
    document.documentElement.removeAttribute("data-theme")
    theme.value = "light"
    localStorage.setItem("theme", "light")
  } else {
    document.documentElement.setAttribute("data-theme", "dark")
    theme.value = "dark"
    localStorage.setItem("theme", "dark")
  }
}
</script>








