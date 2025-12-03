<template>

  <section id="about" class="pt-20 pb-20 sm:pb-24 bg-[var(--color-background)] text-[var(--color-foreground)] px-4 sm:px-8 lg:px-12 border-t border-white/10">

    <div class="max-w-7xl mx-auto flex flex-col space-y-12">

      <div class="md:text-left text-center">
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight font-mono">
          About <span class="text-[var(--color-accent)]">Me</span>
        </h2>
        <!-- Changed class from bg-[var(--color-accent)]/50 to bg-accent/50 -->
        <div class="w-16 h-1 bg-[var(--color-accent)]/50 mx-auto md:mx-0 mt-3 rounded-full"></div>
      </div>

      <!-- Changed text-[var(--color-muted-foreground)]/90 to text-muted-foreground/90 -->
      <p class="text-lg sm:text-xl text-muted-foreground/90 leading-relaxed mx-auto md:mx-0 max-w-4xl">
        I’m Md. Jubayer Islam, a Full-Stack Developer passionate about crafting scalable and beautiful web experiences.
        I love turning ideas into functional, user-friendly products with clean, maintainable code.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Cards - Changed bg-[var(--card)]/80 to bg-muted/40, and color variables -->
        <div class="p-6 bg-muted/40 rounded-xl border border-[var(--color-accent)]/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">Clean Code</h3>
          <p class="text-sm text-muted-foreground">Writing maintainable and efficient code that scales.</p>
        </div>
        <div class="p-6 bg-muted/40 rounded-xl border border-accent/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">UX Focused</h3>
          <p class="text-sm text-muted-foreground">Designing interfaces that are intuitive and visually appealing.</p>
        </div>
        <div class="p-6 bg-muted/40 rounded-xl border border-[var(--color-accent)]/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">Problem Solver</h3>
          <p class="text-sm text-muted-foreground">Tackling challenges efficiently with creative solutions.</p>
        </div>
        <div class="p-6 bg-muted/40 rounded-xl border border-[var(--color-accent)]/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">APIs & Integration</h3>
          <p class="text-sm text-muted-foreground">Seamless integration of third-party APIs and payment gateways.</p>
        </div>
        <div class="p-6 bg-muted/40 rounded-xl border border-[var(--color-accent)]/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">Database & Backend</h3>
          <p class="text-sm text-muted-foreground">Optimized database design & robust backend solutions.</p>
        </div>
        <div class="p-6 bg-muted/40 rounded-xl border border-[var(--color-accent)]/10 shadow-xl
                              hover:shadow-[var(--color-accent)]/20 transition-all duration-300 transform hover:-translate-y-1">
          <h3 class="text-xl font-bold text-[var(--color-accent)] mb-2">Collaboration</h3>
          <p class="text-sm text-muted-foreground">Working effectively with clients and teams worldwide.</p>
        </div>
      </div>

    </div>
  </section>


</template>
