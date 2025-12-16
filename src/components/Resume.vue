<template>
  <section id="resume" class="bg-[var(--color-background)] text-[var(--color-foreground)] py-20 sm:py-32 px-4 sm:px-8 font-mono border-t border-white/10">
    <div class="max-w-6xl mx-auto">

      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 class="text-4xl sm:text-6xl font-extrabold tracking-tight">
          My Professional <span class="text-[var(--color-accent)]">Journey</span>
        </h2>
        <p class="text-[var(--color-foreground)]/80 mt-3 text-lg max-w-2xl mx-auto">
          A timeline of my work experience, educational background, and achievements.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">

        <!-- Experience -->
        <div class="space-y-8">
          <h3 class="text-3xl font-semibold mb-4">Work Experience</h3>

          <div class="space-y-6">

            <!-- Item -->
            <div class="border-l-2 border-[var(--color-accent)] pl-6 relative">
              <span class="absolute -left-[6px] top-1 w-3 h-3"></span>

              <h4 class="font-bold text-xl">Senior Full-Stack Developer</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Tech Company Inc. — 2020 • Present</p>

              <p class="text-[var(--color-muted-foreground)]/90 mt-3 leading-relaxed text-base">
                Lead developer responsible for architecting scalable web apps using Vue.js, Node.js,
                TailwindCSS, and Laravel. Managed a team of 4 developers to deliver large-scale projects.
              </p>
            </div>

            <!-- Item -->
            <div class="border-l-2 border-[var(--color-accent)] pl-6 relative">
              <span class="absolute -left-[6px] top-1 w-3 h-3"></span>

              <h4 class="font-bold text-xl">Full-Stack Developer</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Web Solutions Ltd. — 2016 • 2020</p>

              <p class="text-[var(--color-muted-foreground)]/90 mt-3 leading-relaxed text-base">
                Built custom web applications and internal tools while collaborating closely with UI/UX
                teams and project managers to streamline development workflows.
              </p>
            </div>

          </div>
        </div>

        <!-- Education -->
        <div class="space-y-8">
          <h3 class="text-3xl font-semibold mb-4">Education & Certifications</h3>

          <div class="space-y-6">

            <!-- Item -->
            <div class="border-l-2 border-[var(--color-accent)] pl-6 relative">
              <span class="absolute -left-[6px] top-1 w-3 h-3"></span>

              <h4 class="font-bold text-xl">B.Sc in Computer Science</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">University Name — 2012 • 2016</p>

              <p class="text-[var(--color-muted-foreground)]/90 mt-3 leading-relaxed text-base">
                Specialized in software engineering, data structures, algorithms, and full-stack web development.
              </p>
            </div>

            <!-- Example certification -->
            <div class="border-l-2 border-[var(--color-accent)] pl-6 relative">
              <span class="absolute -left-[6px] top-1 w-3 h-3"></span>

              <h4 class="font-bold text-xl">Professional Web Developer Certification</h4>
              <p class="text-[var(--color-muted-foreground)] text-sm italic">Online Certification — 2018</p>

              <p class="text-[var(--color-muted-foreground)]/90 mt-3 leading-relaxed text-base">
                Completed advanced courses on modern JavaScript, REST API development, and cloud deployment.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>


</template>
<script setup>

</script>

