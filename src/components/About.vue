<template>

  <section id="about"
           class="pt-20 pb-20 sm:pb-24 bg-[var(--color-background)] text-[var(--color-foreground)]
         px-4 sm:px-8 lg:px-12 border-t border-white/10 relative overflow-hidden">

    <div class="max-w-6xl  mx-auto relative z-10 flex flex-col space-y-12">

      <!-- Heading -->
      <div class="text-center">
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono mb-3">
          About <span class="text-[var(--color-accent)]">Me</span>
        </h2>


        <!-- Intro Text -->
        <p class="text-lg sm:text-xl text-[var(--color-muted-foreground)]/90 leading-relaxed
           mx-auto mt-4">
          I’m Md. Jubayer Islam, a Full-Stack Developer passionate about crafting scalable and beautiful
          web experiences. I love turning ideas into functional, user-friendly products with clean code.
        </p>
      </div>


      <!-- Highlights / Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

        <!-- Card Component -->
        <template v-for="item in [
        { title: 'Clean Code', text: 'Writing maintainable and efficient code that scales.' },
        { title: 'UX Focused', text: 'Designing interfaces that are intuitive and visually appealing.' },
        { title: 'Problem Solver', text: 'Tackling challenges efficiently with creative solutions.' },
        { title: 'APIs & Integration', text: 'Seamless integration of third-party APIs and payment gateways.' },
        { title: 'Database & Backend', text: 'Optimized database design & robust backend solutions.' },
        { title: 'Collaboration', text: 'Working effectively with clients and teams worldwide.' }]">
          <div
              class="p-6 bg-[var(--color-card-muted)]/40 rounded-xl border border-[var(--color-accent)]/10
                 shadow-sm hover:shadow-[var(--color-card-accent)]/20
                 transition-all duration-300 transform hover:-translate-y-1">
            <h3 class="text-xl font-bold text-[var(--color-card-text)] mb-2">
              {{ item.title }}
            </h3>
            <p class="text-sm text-[var(--color-muted-foreground)]">
              {{ item.text }}
            </p>
          </div>
        </template>

      </div>

    </div>
  </section>




</template>
<script setup>
</script>