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
import { defineAsyncComponent } from 'vue'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'

const About = defineAsyncComponent(() => import('./components/About.vue'))
const Skills = defineAsyncComponent(() => import('./components/Skills.vue'))
const Resume = defineAsyncComponent(() => import('./components/Resume.vue'))
const Project = defineAsyncComponent(() => import('./components/Project.vue'))
const Contact = defineAsyncComponent(() => import('./components/Contact.vue'))
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'))
</script>
