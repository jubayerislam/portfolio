<template>
  <section
      class="py-20 px-4 sm:px-8 lg:px-16 text-gray-900 relative overflow-hidden"
      style="background-image: radial-gradient(ellipse at center, rgba(120, 119, 198, 0.06) 0%, transparent 70%);"
  >
    <div class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
      <div>
        <h2 class="text-3xl font-semibold mb-6">Just Say Hello</h2>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div v-if="formStatus.message" :class="[
            'p-4 rounded-md text-sm',
            formStatus.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          ]">
            {{ formStatus.message }}
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="John Doe"
                required
                class="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="you@example.com"
                required
                class="w-full bg-white  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400">
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">Subject</label>

            <input
                type="text"
                id="subject"
                v-model="formData.subject"
                placeholder="Question about your services"
                required
                class="w-full bg-white rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400">

          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
            <textarea
                id="message"
                v-model="formData.message"
                placeholder="Your message..."
                rows="3"
                required
                class="w-full bg-white  rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400">
            </textarea>
          </div>

          <button
              type="submit"
              :disabled="submitting"
              class="px-8 py-3 border border-accent/30 rounded-lg font-medium hover:bg-accent/10 transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed">
            {{ submitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>

      <div class="space-y-6">
        <h2 class="text-3xl font-semibold mb-4">Contact Info</h2>
        <p class="text-gray-600">
          We’re here to help and answer any questions you might have. Reach out to us, and we’ll respond as quickly as possible.
        </p>

        <div class="space-y-4">
          <div class="flex items-center gap-4">
            <span class="flex items-center justify-center w-12 h-12 bg-gray-100 p-3 rounded-full">
              <i class="fa-solid fa-envelope text-indigo-500 text-lg"></i>
            </span>
            <div>
              <p class="font-semibold">Email</p>
              <p class="text-gray-600">jubayer.islam.dev@gmail.com</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <span class="flex items-center justify-center w-12 h-12 bg-gray-100 p-3 rounded-full">
              <i class="fa-solid fa-phone text-indigo-500 text-lg"></i>
            </span>
            <div>
              <p class="font-semibold">Phone</p>
              <p class="text-gray-600">+880 1581-054632</p>
            </div>
          </div>

          <div class="flex items-center gap-4">
            <span class="flex items-center justify-center w-12 h-12 bg-gray-100 p-3 rounded-full">
              <i class="fa-solid fa-location-dot text-indigo-500 text-lg"></i>
            </span>
            <div>
              <p class="font-semibold">Address</p>
              <p class="text-gray-600">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div class="pt-4">
          <p class="text-gray-600 mb-2">Visit my social profile and get connected</p>
          <div class="flex gap-4">
            <div class="flex gap-3">
              <a
                  href="#"
                  aria-label="Visit my Dribbble profile"
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-pointer">
                <i class="fab fa-dribbble text-lg"></i>
              </a>
              <a
                  href="#"
                  aria-label="Visit my Behance profile"
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                <i class="fab fa-behance text-lg"></i>
              </a>
              <a
                  href="#"
                  aria-label="Visit my Twitter profile"
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                <i class="fab fa-twitter text-lg"></i>
              </a>
              <a
                  href="#"
                  aria-label="Visit my LinkedIn profile"
                  class="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300 cursor-pointer"
              >
                <i class="fab fa-linkedin text-lg"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

// Reactive state for form inputs
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
});

// Reactive state for submission status
const submitting = ref(false);
const formStatus = ref({ message: '', type: '' }); // type can be 'success' or 'error'

// Function to handle form submission
const handleSubmit = async () => {
  submitting.value = true;
  formStatus.value = { message: '', type: '' };

  // --- SIMULATE API CALL ---
  // In a real app, you would replace this with an
  // await fetch() or axios.post() call to your backend.
  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate network delay

    // On successful submission
    console.log('Form Submitted:', formData.value);
    formStatus.value = { message: 'Thank you! Your message has been sent successfully.', type: 'success' };

    // Reset the form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: '',
    };

  } catch (error) {
    // On error
    console.error('Form submission error:', error);
    formStatus.value = { message: 'Oops! Something went wrong. Please try again.', type: 'error' };
  } finally {
    // Re-enable the button
    submitting.value = false;
  }
};
</script>