<template>
  <section
      class="min-h-screen py-20 sm:py-24 bg-gradient-to-b from-background via-background/95 to-background
         text-foreground flex items-center justify-center px-4 sm:px-8 font-mono relative overflow-hidden"
  >
    <!-- Background Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,119,198,0.06)_0%,transparent_70%)]"></div>

    <div class="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 lg:gap-16 relative z-10">

      <!-- Left Side -->
      <div class="text-center md:text-left space-y-6 md:flex-1 md:w-[70%]">
        <h1 class="text-5xl sm:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Md. <span class="text-accent">Jubayer Islam</span>
        </h1>

        <p class="text-xl text-muted-foreground/90 font-light">
          Full-Stack Developer & Creative Engineer
        </p>

        <p class="text-base sm:text-lg text-muted-foreground/70 max-w-lg leading-relaxed mx-auto md:mx-0">
          I build fast, scalable, and visually beautiful web experiences — transforming ideas into products that deliver impact.
        </p>

        <!-- Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start pt-6">
          <button class="px-8 py-3 bg-accent text-background rounded-lg font-medium hover:scale-[1.03] hover:shadow-accent/30 shadow-sm transition-all duration-300">
            View My Work
          </button>
          <button class="px-8 py-3 border border-accent/30 rounded-lg font-medium hover:bg-accent/10 transition-all duration-300">
            Get In Touch
          </button>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 text-center md:text-left pt-8 md:pt-12">
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">50+</div>
            <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Projects Completed</p>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">8 yrs</div>
            <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Experience</p>
          </div>
          <div>
            <div class="text-3xl sm:text-4xl font-bold text-accent mb-1">30+</div>
            <p class="text-xs sm:text-sm text-muted-foreground uppercase tracking-wide">Happy Clients</p>
          </div>
        </div>
      </div>

      <!-- Right Side -->
      <div class="flex justify-center md:justify-end md:w-[30%]">
        <div
            class="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-full
               bg-gradient-to-tr from-accent/30 to-accent/10
               border border-accent/20 flex items-center justify-center
               overflow-hidden shadow-lg shadow-accent/10 animate-float"
        >
          <img
              :src="profileImage"
              alt="Jubayer Islam"
              class="w-full h-full rounded-full object-cover transform hover:scale-105 transition-transform duration-500"
          />
          <div class="absolute inset-0 rounded-full bg-accent/10 blur-3xl animate-pulse opacity-60"></div>
        </div>
      </div>

    </div>
  </section>

</template>


<script setup>



const profileImage = 'img/profile.webp';

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
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 4s ease-in-out infinite;
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
