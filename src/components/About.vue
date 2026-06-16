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
            mx-auto mt-4 text-left sm:text-justify">
          I’m Md. Jubayer Islam, a results-driven Full-Stack Software Engineer specializing in building scalable web architectures, secure payment integrations, and responsive user interfaces. With a strong foundation in PHP/Laravel and Vue.js/Inertia.js, I bridge the gap between robust back-end systems and clean, intuitive front-end experiences. I am dedicated to writing clean, maintainable code, optimizing database performance, and delivering production-ready applications that drive business value.
        </p>
      </div>


      <!-- Highlights / Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

        <!-- Card Component -->
        <template v-for="item in [
        { title: 'Clean Code', text: 'Writing maintainable, well-structured, and efficient code that scales.' },
        { title: 'UX Focused', text: 'Engineering intuitive, visually appealing user interfaces that maximize engagement.' },
        { title: 'Problem Solver', text: 'Analyzing complex technical issues and implementing optimal solutions.' },
        { title: 'API Integration', text: 'Integrating secure payment gateways, third-party services, and REST APIs.' },
        { title: 'Backend & Database', text: 'Designing optimized database schemas, caching layers, and high-performance server architectures.' },
        { title: 'Team Player', text: 'Collaborating effectively with cross-functional teams and clients globally to deliver projects.' }]">
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