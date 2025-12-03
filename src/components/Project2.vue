<template>
  <section class="py-20 px-4 sm:px-8 lg:px-8">

    <div class="max-w-6xl mx-auto">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl font-mono sm:text-5xl font-bold text-foreground mb-4">Portfolio Highlights</h2>
        <p class="text-muted-foreground text-lg font-mono">
          A curated selection of projects that reflect my passion for crafting clean, functional, and impactful digital experiences.
        </p>


      </div>



      <!-- Filter Buttons -->
      <div class="flex gap-3 mb-12 flex-wrap">


        <div class="flex gap-3 mb-12 flex-wrap font-mono">
          <button
              v-for="tag in filterTags"
              :key="tag"
              @click="selectedTag = selectedTag === tag ? null : tag"
              :class="[
                'px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
                selectedTag === tag
                  ? 'bg-accent text-background shadow-md shadow-accent/40'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              ]"
          >
            {{ tag }}
          </button>
        </div>


      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 font-mono">
        <div
            v-for="project in filteredProjects"
            :key="project.id"
            @click="openModal(project)"
            class="group cursor-pointer">
          <!-- Project Card -->

          <div
              class="relative rounded-xl overflow-hidden mb-4 aspect-video bg-gradient-to-br from-muted to-muted/50 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2"
          >
            <!-- Project Image -->
            <img
                :src="project.image"
                alt="Project Image"
                class="absolute inset-0 w-full h-full object-cover"
            />

            <!-- Stronger Overlay Gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-6"
            >
              <div>
                <h3 class="text-xl font-semibold text-white drop-shadow-md mb-1">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-gray-200 drop-shadow">{{ project.category }}</p>
              </div>
            </div>
          </div>



          <!-- Project Info -->
          <div class="space-y-2 font-mono">
            <p class="text-muted-foreground text-sm line-clamp-2 text-gray-600">
              {{ project.description }}
            </p>
            <div class="flex gap-2 flex-wrap">
      <span
          v-for="tech in project.tech"
          :key="tech"
          class="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full group-hover:bg-gray-200 transition-all duration-300">
        {{ tech }}
      </span>

            </div>
          </div>
        </div>
      </div>


    </div>

    <!-- Project Modal -->
    <transition name="modal-fade">
      <div
          v-if="isModalOpen"
          class="fixed inset-0 bg-background/80 backdrop-blur-xl flex items-center justify-center p-4 z-50"
      >
        <div
            class="relative bg-background/95 border border-border/60 rounded-3xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto ring-1 ring-accent/10"
            @click.stop
        >
          <!-- Close Button -->
          <button
              @click="closeModal"
              class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-muted/50 transition-all duration-300 z-10"
          >
            ✕
          </button>

          <!-- Content -->
          <div class="p-8 sm:p-12">
            <!-- Header -->
            <header class="mb-10 text-center animate-fade-in">
              <h2 class="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                {{ activeProject.title }}
              </h2>
              <p
                  class="text-lg sm:text-xl text-muted-foreground/80 leading-relaxed max-w-2xl mx-auto"
              >
                {{ activeProject.description }}
              </p>
            </header>

            <!-- Project Preview -->
            <div
                class="w-full aspect-video bg-gradient-to-br from-accent/15 to-muted/10 rounded-2xl mb-10 overflow-hidden relative flex items-center justify-center group"
            >
              <div class="text-center transition-transform duration-500 group-hover:scale-105">
                <div class="text-6xl mb-4">📊</div>
                <p class="text-muted-foreground">Project Showcase</p>
              </div>
            </div>

            <!-- Challenge & Solution -->
            <section class="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3
                    class="text-sm uppercase tracking-widest text-accent font-semibold mb-3"
                >
                  Challenge
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  The client needed a scalable and performant platform to manage complex workflows efficiently.
                </p>
              </div>
              <div>
                <h3
                    class="text-sm uppercase tracking-widest text-accent font-semibold mb-3"
                >
                  Solution
                </h3>
                <p class="text-muted-foreground leading-relaxed">
                  Built a modular architecture using Vue 3, Node.js, and Redis caching to deliver a smooth and optimized
                  UX.
                </p>
              </div>
            </section>

            <!-- Results -->
            <section
                class="bg-muted/30 backdrop-blur-sm rounded-2xl p-8 sm:p-10 mb-12 border border-border/50"
            >
              <h3 class="text-sm uppercase tracking-widest text-accent mb-6 font-semibold">
                Results
              </h3>
              <div class="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div class="text-3xl font-bold text-accent mb-1">+60%</div>
                  <p class="text-sm text-muted-foreground">Performance Gain</p>
                </div>
                <div>
                  <div class="text-3xl font-bold text-accent mb-1">99.9%</div>
                  <p class="text-sm text-muted-foreground">Uptime</p>
                </div>
                <div>
                  <div class="text-3xl font-bold text-accent mb-1">10K+</div>
                  <p class="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
            </section>

            <!-- Tech Stack -->
            <section class="mb-12">
              <h3
                  class="text-sm uppercase tracking-widest text-accent mb-4 font-semibold"
              >
                Tech Stack
              </h3>
              <div class="flex flex-wrap gap-3">
                <span
                    v-for="tech in activeProject.tech"
                    :key="tech"
                    class="px-4 py-2 bg-accent/10 border border-accent/20 rounded-lg text-sm text-accent font-medium"
                >
                  {{ tech }}
                </span>
              </div>
            </section>

            <!-- CTA Buttons -->
            <footer class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  href="#"
                  target="_blank"
                  class="px-8 py-3 bg-accent text-background rounded-xl font-semibold hover:shadow-lg hover:shadow-accent/40 transition-all duration-300 text-center"
              >
                🔗 View Live Project
              </a>
              <a
                  href="#"
                  target="_blank"
                  class="px-8 py-3 border border-border rounded-xl font-semibold hover:bg-muted/40 transition-all duration-300 text-center"
              >
                💻 View Source Code
              </a>
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup>
import {ref, computed} from 'vue'

const selectedTag = ref(null)
const isModalOpen = ref(false)
const activeProject = ref({})
const filterTags = ['All', 'Frontend', 'Full-Stack', 'Design', 'Performance']

const projects = [
  {
    id: 1,
    title: 'SaaS Dashboard',
    category: 'Full-Stack',
    description:
        'Real-time analytics platform with WebSocket integration and advanced data visualization.',
    tech: ['Vue 3', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    tags: ['Full-Stack', 'Frontend'],
    image: "/img/bug-app.png",

  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Frontend',
    description:
        'Responsive shopping experience with optimized performance and accessibility.',
    tech: ['React', 'TypeScript', 'Stripe', 'Next.js'],
    tags: ['Frontend', 'Design'],
    image: "/img/bug-app.png",
  },
  {
    id: 3,
    title: 'Design System',
    category: 'Design',
    description:
        'Comprehensive component library with 50+ components and documentation.',
    tech: ['Vue 3', 'Storybook', 'TailwindCSS'],
    tags: ['Design', 'Frontend'],
    image: "/img/bug-app.png",
  },
  {
    id: 4,
    title: 'Performance Optimization',
    category: 'Performance',
    description:
        'Improved Core Web Vitals by 60% through strategic optimization techniques.',
    tech: ['Next.js', 'Lighthouse', 'Performance'],
    tags: ['Performance', 'Frontend'],
    image: "/img/bug-app.png",
  },
  {
    id: 5,
    title: 'Mobile App',
    category: 'Full-Stack',
    description:
        'Cross-platform mobile application with offline-first architecture.',
    tech: ['React Native', 'Firebase', 'Redux'],
    tags: ['Full-Stack', 'Frontend'],
    image: "/img/bug-app.png",
  },
  {
    id: 6,
    title: 'API Gateway',
    category: 'Full-Stack',
    description:
        'High-performance API layer with rate limiting and caching strategies.',
    tech: ['Node.js', 'Express', 'Redis'],
    tags: ['Full-Stack'],
    image: "/img/bug-app.png",
  }
]

const filteredProjects = computed(() => {
  if (!selectedTag.value || selectedTag.value === 'All') return projects
  return projects.filter(p => p.tags.includes(selectedTag.value))
})

const openModal = (project) => {
  activeProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped>

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.35s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.text-muted-foreground {
  color: hsl(240, 4%, 47%);
}

</style>
