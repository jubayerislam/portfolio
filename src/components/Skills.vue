<template>
  <!-- SKILLS SECTION (NEWLY ADDED) -->
  <section id="skills" class="bg-[var(--color-background)] text-[var(--color-foreground)] py-20 px-4 sm:px-8 font-mono border-t border-white/10">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-5xl font-extrabold tracking-tight">
          My Skills & <span class="text-[var(--color-accent)]">Technologies</span>
        </h2>
        <p class="text-[var(--color-muted-foreground)]/80 mt-3 text-lg max-w-2xl mx-auto">
          Tools and technologies I use to build scalable, modern, and high-performance web applications.
        </p>
      </div>

      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
        <div v-for="skill in skills" :key="skill.name" class="flex flex-col items-center justify-center bg-[var(--color-accent)]/10 rounded-xl p-4 sm:p-6 hover:bg-[var(--color-accent)]/20 hover:scale-[1.03] transition-transform duration-300 shadow-lg border border-[var(--color-accent)]/20 cursor-pointer">
          <img :src="skill.icon" :alt="skill.name" class="w-10 h-10 sm:w-12 sm:h-12 mb-2"/>
          <span class="text-sm font-medium text-foreground text-center mt-2">{{ skill.name }}</span>
        </div>
      </div>

    </div>
  </section>
</template>


<script setup>




// --- Skills Logic (New) ---
const skills = [
  { name: 'HTML 5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS 3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg' },
  { name: 'Inertia.js', icon: 'https://inertiajs.com/img/logo.svg' },
  { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
  { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Amazon S3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg' },
  { name: 'WebSockets', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg' },
  { name: 'REST APIs', icon: 'https://api.iconify.design/vscode-icons/file-type-rest.svg' },
];
// --- End Skills Logic ---

</script>

