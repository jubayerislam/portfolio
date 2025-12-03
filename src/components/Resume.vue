<template>
  <section id="resume" class="bg-[var(--color-background)] text-[var(--color-foreground)] py-20 sm:py-32 px-4 sm:px-8 font-mono border-t border-white/10">
    <div class="max-w-6xl mx-auto">

      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-6xl font-extrabold tracking-tight">
          My Professional <span class="text-[var(--color-accent)]">Journey</span>
        </h2>
        <p class="text-[var(--color-foreground)]/80 mt-3 text-lg max-w-2xl mx-auto">
          A timeline of my work experience, educational background, and achievements.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">

        <div class="space-y-8">
          <h3 class="text-3xl font-bold text-[var(--color-foreground)] border-b border-white/10 pb-3">
            💼 Work Experience
          </h3>
          <div class="space-y-10">
            <!-- Experience Item 1 -->
            <div class="timeline-item relative pl-6 border-l border-[var(--color-accent)]/30">
              <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]/50"></div>
              <h4 class="font-bold text-xl text-foreground">Senior Full-Stack Developer</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Tech Company Inc. — 2020 - Present</p>
              <p class="text-[var(--color-muted-foreground)]/90 mt-2 leading-relaxed text-base">
                Built scalable web applications using <strong class="text-accent/80">Vue.js, Tailwind CSS, Node.js, and Laravel</strong>. Led a team of 4 developers to deliver high-quality projects on time, focusing on cloud infrastructure optimization (AWS S3).
              </p>
            </div>

            <!-- Experience Item 2 -->
            <div class="timeline-item relative pl-6 border-l border-[var(--color-accent)]/30">
              <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]/50"></div>
              <h4 class="font-bold text-xl text-foreground">Full-Stack Developer</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Web Solutions Ltd. — 2016 - 2020</p>
              <p class="text-[var(--color-muted-foreground)]/90 mt-2 leading-relaxed text-base">
                Developed various web applications and internal tools. Collaborated with designers and project managers to streamline workflow and improve feature deployment cycles.
              </p>
            </div>

          </div>
        </div>

        <div class="space-y-8">
          <h3 class="text-3xl font-bold text-foreground border-b border-white/10 pb-3">
            🎓 Education & Certifications
          </h3>
          <div class="space-y-10">

            <!-- Education Item 1 -->
            <div class="timeline-item relative pl-6 border-l border-[var(--color-accent)]/30">
              <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]/50"></div>
              <h4 class="font-bold text-xl text-[var(--color-foreground)]">B.Sc in Computer Science</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">University Name — 2012 - 2016</p>
              <p class="text-[var(--color-muted-foreground)]/90 mt-2 leading-relaxed text-base">
                Comprehensive study focused on <strong class="text-accent/80">modern web development</strong>, data structures, algorithms, and advanced software engineering principles.
              </p>
            </div>

            <!-- Education Item 2 -->
            <div class="timeline-item relative pl-6 border-l border-[var(--color-accent)]/30">
              <div class="absolute -left-2.5 top-0 w-5 h-5 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-background)]/50"></div>
              <h4 class="font-bold text-xl text-foreground">Specialized Certifications</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Continuous Professional Development</p>
              <ul class="list-disc text-[var(--color-muted-foreground)]/90 mt-2 ml-4 space-y-2 marker:text-accent">
                <li>Vue.js Mastery (Advanced Component Design)</li>
                <li>Tailwind CSS Expert (Utility-First Architecture)</li>
                <li>Laravel Certification (Backend Security & API Design)</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>
<script setup>

</script>

