<template>
  <section id="services" class="bg-[#e5e7eb] text-[var(--color-foreground)] py-20 px-4 sm:px-8 font-mono border-t border-black/10">
    <div class="max-w-6xl mx-auto text-center">
      <!-- Heading -->
      <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight mb-3">
        My <span class="text-[var(--color-accent)]">Services</span>
      </h2>
      <div class="w-20 h-1 bg-[var(--color-accent)]/70 mx-auto mb-6 rounded-full"></div>

      <p class="text-[var(--color-muted-foreground)]/90 text-lg max-w-2xl mx-auto mb-12">
        I offer professional development services from frontend to backend, creating scalable, maintainable, and visually stunning web experiences.
      </p>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Example Card -->
        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">Web Development</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            Build responsive, high-performance websites with modern frameworks like Vue, React, and Node.js.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">Backend & API Development</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            Design and implement robust backend systems and RESTful APIs with database optimization.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">UI/UX Design</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            Create intuitive and visually appealing interfaces that enhance user experience.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">Full-Stack Applications</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            End-to-end application development, from frontend design to backend logic.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">E-Commerce Solutions</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            Develop online stores with payment gateway integration and smooth checkout flows.
          </p>
        </div>

        <div class="bg-white p-6 rounded-xl shadow-md border border-black/5 hover:shadow-lg transition-transform transform hover:-translate-y-1">
          <h3 class="text-xl font-semibold mb-2 text-[var(--color-card-text)] text-center">Technical Consulting</h3>
          <p class="text-sm text-[var(--color-muted-foreground)] text-center">
            Architecture consulting, project planning, and team guidance for scalable projects.
          </p>
        </div>
      </div>
    </div>
  </section>

</template>


<script setup>

const html = 'img/skills/html5.png';
const css = 'img/skills/css3.svg';
const bootstrap = 'img/skills/bootstrap.png';
const tailwind = 'img/skills/tailwind.png';
const javascript = 'img/skills/js.webp';
const jquery = 'img/skills/jquery.png';
const vueJs = 'img/skills/vue-js.png';
const inertiaJs = 'img/skills/inertiajs.png';
const php = 'img/skills/php.png';
const laravel = 'img/skills/laravel.png';
const mysql = 'img/skills/mysql.png';
const redis = 'img/skills/redis.png';
const nodeJs = 'img/skills/node-js.png';
const git = 'img/skills/git.png';
const webSocket = 'img/skills/websocket.svg';
const aws = 'img/skills/amazon-s3.png';
const api = 'img/skills/api.png';



</script>
