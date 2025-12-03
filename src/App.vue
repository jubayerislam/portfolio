<template>
  <div class="font-inter bg-gray-50 text-gray-900">
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Resume />
      <Project />
      <Contact />
      <Footer />
    </main>
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Project from './components/Project.vue'
import Skills from './components/Skills.vue'
import Resume from './components/Resume.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

</script>
