<template>


  <section
      class="min-h-screen bg-gradient-to-b from-background via-background/95 to-background text-foreground flex items-center justify-center px-4 sm:px-8  pb-20 font-mono relative overflow-hidden">
    <!-- Subtle background gradient or glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.06)_0%,transparent_70%)]"></div>

    <div class="max-w-5xl w-full relative z-10 text-center sm:text-left">


    <!-- Intro Text -->
      <div class="mb-14">
        <h1 class="text-6xl sm:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4">
          Md. <span class="text-accent">Jubayer Islam</span>
        </h1>
        <p class="text-xl text-muted-foreground/90 font-light mb-2">Full-Stack Developer & Creative Engineer</p>
        <p class="text-base sm:text-lg text-muted-foreground/70 max-w-2xl leading-relaxed">
          I build fast, scalable, and visually beautiful web experiences — transforming ideas into products that deliver impact.
        </p>

      </div>

      <!-- CTA Buttons -->
      <div
          class="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-20 sm:mb-24 justify-center sm:justify-start">

        <button class="px-8 py-3 bg-accent text-background rounded-lg font-medium hover:scale-[1.03] hover:shadow-accent/30 shadow-sm transition-all duration-300">
          View My Work
        </button>

        <button class="px-8 py-3 border border-accent/30 rounded-lg font-medium hover:bg-accent/10 transition-all duration-300">
          Get In Touch
        </button>


      </div>

      <!-- Quick Stats -->
      <div
          class="grid grid-cols-3 sm:gap-8 gap-6 text-center sm:text-left animate-fadeIn delay-200"
      >
        <div>
          <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">50+</div>
          <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
            Projects Completed
          </p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">8 yrs</div>
          <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
            Experience
          </p>
        </div>
        <div>
          <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">30+</div>
          <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">
            Happy Clients
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600&display=swap');

.font-mono {
  font-family: 'JetBrains Mono', monospace;
}

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

.animate-fadeIn {
  animation: fadeIn 0.8s ease-out forwards;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeUp { animation: fadeUp 0.8s ease-out forwards; }

</style>
