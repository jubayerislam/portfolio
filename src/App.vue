<template>
  <Header/>
  <div>
    <main>
      <Hero/>
      <About/>
      <Skills/>
      <Resume/>
      <Project/>
      <Contact/>
      <Footer/>
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

import Lenis from 'lenis'
import {onMounted, onBeforeUnmount} from 'vue'

let lenis;
let rafId;

onMounted(() => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Better easing function
    smoothWheel: true,
  })

  function raf(time) {
    lenis.raf(time)
    rafId = requestAnimationFrame(raf)
  }

  rafId = requestAnimationFrame(raf)
})



onBeforeUnmount(() => {
  if (lenis) lenis.destroy()
  cancelAnimationFrame(rafId)
})

</script>
