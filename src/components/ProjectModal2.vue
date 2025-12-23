<template>
  <transition name="modal-fade">
    <div class="fixed inset-0 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 z-50">
      <div
          class="relative bg-background/95 border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto ring-1 ring-accent/10"
          @click.stop
      >
        <button @click="$emit('close')" class="absolute top-6 right-6 w-10 h-10">✕</button>
        <div class="p-8 sm:p-12">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <!-- Rest of content -->
        </div>
      </div>
    </div>
  </transition>
</template>
