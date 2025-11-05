<template>
  <section class="py-20 px-4 sm:px-8 lg:pl-80 lg:pr-8 bg-muted/30">
    <div class="max-w-3xl">
      <!-- Section Header -->
      <div class="mb-12">
        <h2 class="text-4xl sm:text-5xl font-bold text-foreground mb-4">Let's Work Together</h2>
        <p class="text-lg text-muted-foreground">Have a project in mind? I'd love to hear about it.</p>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-6">
        <!-- Name Field -->
        <div>
          <label class="block text-sm font-medium text-foreground mb-2">Your Name</label>
          <input
              v-model="form.name"
              type="text"
              placeholder="John Doe"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <!-- Email Field -->
        <div>
          <label class="block text-sm font-medium text-foreground mb-2">Email Address</label>
          <input
              v-model="form.email"
              type="email"
              placeholder="john@example.com"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <!-- Project Type -->
        <div>
          <label class="block text-sm font-medium text-foreground mb-2">Project Type</label>
          <select
              v-model="form.projectType"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-foreground"
          >
            <option value="">Select a project type</option>
            <option value="website">Website</option>
            <option value="app">Web Application</option>
            <option value="design">Design System</option>
            <option value="other">Other</option>
          </select>
        </div>

        <!-- Message Field -->
        <div>
          <label class="block text-sm font-medium text-foreground mb-2">Message</label>
          <textarea
              v-model="form.message"
              placeholder="Tell me about your project..."
              rows="5"
              class="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-accent focus:outline-none transition-all duration-300 text-foreground placeholder:text-muted-foreground resize-none"
          ></textarea>
        </div>

        <!-- Submit Button -->
        <button
            type="submit"
            class="w-full px-6 py-3 bg-accent text-background rounded-lg font-medium hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 transform hover:-translate-y-1"
        >
          Send Message
        </button>
      </form>

      <!-- Success Message -->
      <transition name="fade">
        <div v-if="submitSuccess" class="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg text-accent text-sm">
          ✓ Thanks for reaching out! I'll get back to you soon.
        </div>
      </transition>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  projectType: '',
  message: ''
})

const submitSuccess = ref(false)

const handleSubmit = async () => {
  // Simulate form submission
  console.log('Form submitted:', form.value)
  submitSuccess.value = true

  // Reset form
  setTimeout(() => {
    form.value = { name: '', email: '', projectType: '', message: '' }
    submitSuccess.value = false
  }, 3000)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>