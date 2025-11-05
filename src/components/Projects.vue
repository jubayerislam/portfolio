<template>
  <section class="py-20 px-4 sm:px-8 lg:pl-80 lg:pr-8">
    <div class="max-w-6xl">
      <!-- Section Header -->
      <div class="mb-16">
        <h2 class="text-4xl sm:text-5xl font-bold text-foreground mb-4">Selected Work</h2>
        <p class="text-muted-foreground text-lg">Projects that showcase my approach to design and development</p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-3 mb-12 flex-wrap">
        <button
            v-for="tag in filterTags"
            :key="tag"
            @click="selectedTag = selectedTag === tag ? null : tag"
            :class="[
            'px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm',
            selectedTag === tag
              ? 'bg-accent text-background shadow-lg shadow-accent/50'
              : 'bg-muted text-foreground hover:bg-muted/80'
          ]"
        >
          {{ tag }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            v-for="project in filteredProjects"
            :key="project.id"
            @click="selectProject(project)"
            class="group cursor-pointer"
        >
          <!-- Project Card -->
          <div class="relative rounded-xl overflow-hidden mb-4 aspect-video bg-gradient-to-br from-muted to-muted/50 hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
            <div class="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
              <div>
                <h3 class="text-xl font-bold text-white mb-1">{{ project.title }}</h3>
                <p class="text-sm text-gray-300">{{ project.category }}</p>
              </div>
            </div>
          </div>

          <!-- Project Info -->
          <div class="space-y-2">
            <p class="text-muted-foreground text-sm line-clamp-2">{{ project.description }}</p>
            <div class="flex gap-2 flex-wrap">
              <span
                  v-for="tech in project.tech"
                  :key="tech"
                  class="px-3 py-1 text-xs bg-muted text-muted-foreground rounded-full group-hover:bg-accent group-hover:text-background transition-all duration-300"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const selectedTag = ref(null)
const filterTags = ['All', 'Frontend', 'Full-Stack', 'Design', 'Performance']

const projects = [
  {
    id: 1,
    title: 'SaaS Dashboard',
    category: 'Full-Stack',
    description: 'Real-time analytics platform with WebSocket integration and advanced data visualization.',
    tech: ['Vue 3', 'Node.js', 'PostgreSQL', 'TailwindCSS'],
    tags: ['Full-Stack', 'Frontend']
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'Frontend',
    description: 'Responsive shopping experience with optimized performance and accessibility.',
    tech: ['React', 'TypeScript', 'Stripe', 'Next.js'],
    tags: ['Frontend', 'Design']
  },
  {
    id: 3,
    title: 'Design System',
    category: 'Design',
    description: 'Comprehensive component library with 50+ components and documentation.',
    tech: ['Vue 3', 'Storybook', 'TailwindCSS'],
    tags: ['Design', 'Frontend']
  },
  {
    id: 4,
    title: 'Performance Optimization',
    category: 'Performance',
    description: 'Improved Core Web Vitals by 60% through strategic optimization techniques.',
    tech: ['Next.js', 'Lighthouse', 'Performance'],
    tags: ['Performance', 'Frontend']
  },
  {
    id: 5,
    title: 'Mobile App',
    category: 'Full-Stack',
    description: 'Cross-platform mobile application with offline-first architecture.',
    tech: ['React Native', 'Firebase', 'Redux'],
    tags: ['Full-Stack', 'Frontend']
  },
  {
    id: 6,
    title: 'API Gateway',
    category: 'Full-Stack',
    description: 'High-performance API layer with rate limiting and caching strategies.',
    tech: ['Node.js', 'Express', 'Redis'],
    tags: ['Full-Stack']
  }
]

const filteredProjects = computed(() => {
  if (!selectedTag.value || selectedTag.value === 'All') {
    return projects
  }
  return projects.filter(p => p.tags.includes(selectedTag.value))
})

const selectProject = (project) => {
  // Emit to parent or open modal
  console.log('Selected project:', project)
}
</script>