<template>
  <header
      class="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-background/90 via-background/80 to-background/90 backdrop-blur-md font-mono">


    <div class="max-w-7xl mx-auto flex items-center justify-between h-20 px-6 sm:px-8 lg:px-12">

      <!-- Logo -->
      <!-- Simplified Logo -->
      <div class="flex items-center gap-3 group cursor-pointer">
        <div class="flex flex-col items-start -space-y-2 transition-all group-hover:scale-[1.03]">
          <span class="text-[11px] font-light tracking-[0.25em] text-muted-foreground uppercase">Developer</span>
          <span class="text-2xl font-medium tracking-tight text-foreground group-hover:text-accent">Jubayer</span>
        </div>
      </div>


      <!-- Desktop Navigation -->
      <nav class="hidden md:flex items-center gap-10">
        <a
            v-for="item in navItems"
            :key="item"
            :href="`#${item.toLowerCase()}`"
            class="relative text-sm text-muted-foreground hover:text-accent transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-accent hover:after:w-full after:transition-all after:duration-300"
        >
          {{ item }}
        </a>
      </nav>

      <!-- CTA + Mobile Menu Toggle -->
      <div class="flex items-center gap-4">
        <button
            class="hidden sm:inline-block px-4 py-2 text-sm font-medium text-background bg-accent rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300"
        >
          Get Started
        </button>

        <!-- Mobile Toggle -->
        <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
        >
          <svg
              class="w-6 h-6 text-foreground"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
          >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
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
          class="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-md px-6 py-4 font-mono">
        <div class="flex flex-col gap-3">
          <a
              v-for="item in navItems"
              :key="item"
              :href="`#${item.toLowerCase()}`"
              @click="mobileMenuOpen = false"
              class="text-sm font-light text-muted-foreground hover:text-accent transition-colors py-2">
            {{ item }}
          </a>
          <button
              class="w-full px-4 py-2.5 text-sm font-medium text-background bg-accent rounded-lg hover:shadow-lg hover:shadow-accent/30 transition-all duration-300 mt-2">
            Get Started
          </button>
        </div>
      </nav>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const navItems = ['Work', 'About', 'Services', 'Contact']
</script>