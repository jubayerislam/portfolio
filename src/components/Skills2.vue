<template>
  <section class="bg-background text-foreground py-20 px-4 sm:px-8">
    <div class="max-w-6xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold">My Skills & Technologies</h2>
        <p class="text-muted-foreground/70 mt-2">
          Tools and technologies I use to build scalable and modern web applications
        </p>
      </div>

      <!-- Skills Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

        <!-- Skill Item -->

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="html" alt="html" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">HTML 5</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="css" alt="css" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">CSS 3</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="bootstrap" alt="bootstrap" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Bootstrap 5</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="tailwind" alt="Tailwind" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Tailwind CSS</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="javascript" alt="JS" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">JavaScript</span>
        </div>


        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="jquery" alt="Jquery" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Jquery</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="vueJs" alt="Vue.js" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Vue.js</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="inertiaJs" alt="inertiaJs" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Inertia Js</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="php" alt="PHP" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">PHP</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="laravel" alt="Laravel" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Laravel</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="mysql" alt="mysql" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">MySQL</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="redis" alt="redis" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Redis</span>
        </div>

        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="nodeJs" alt="Node.js" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Node.js</span>
        </div>


        <div
            class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="git" alt="git" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Git</span>
        </div>

        <div class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="webSocket" alt="Web Socket" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">WebSockets</span>
        </div>

        <div class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="webSocket" alt="Web Socket" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">WebSockets</span>
        </div>

        <div class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="aws" alt="Amazon-s3" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">Amazon-s3</span>
        </div>

        <div class="flex flex-col items-center justify-center bg-accent/10 rounded-lg p-4 hover:scale-105 transition-transform duration-300 shadow-sm">
          <img :src="api" alt="Web Socket" class="w-12 h-12 mb-2"/>
          <span class="text-sm font-medium text-accent">API</span>
        </div>

        <!-- Add more skills as needed -->

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
