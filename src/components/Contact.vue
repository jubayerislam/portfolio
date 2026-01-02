<template>
  <section id="contact"
           class="bg-[var(--color-background)] text-[var(--color-foreground)] py-20 px-4 sm:px-8 font-mono border-t border-white/10">
    <div
        class="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10 p-6 rounded-xl bg-[var(--color-muted)]/20 border border-white/10 ">

      <div class="p-4 sm:p-6 bg-muted/40 rounded-xl">
        <h2 class="text-3xl font-semibold mb-6 text-[var(--color-foreground)]">Just Say Hello</h2>
        <form class="space-y-6" @submit.prevent="handleSubmit">
          <div v-if="formData.formStatus.message" :class="[
                'p-4 rounded-lg text-sm font-medium border',
                formData.formStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border-green-200 dark:bg-green-900/40 dark:text-green-400 dark:border-green-500/50'
                    : 'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/40 dark:text-red-400 dark:border-red-500/50'
            ]">
            {{ formData.formStatus.message }}
          </div>

          <div>
            <label for="name" class="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">Your
              Name</label>
            <input
                type="text"
                id="name"
                v-model="formData.name"
                placeholder="Md. Jubayer Islam"
                required
                class="w-full bg-[var(--color-input-bg)]/80 text-[var(--color-foreground)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-white/10 transition-colors">
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">Your
              Email</label>
            <input
                type="email"
                id="email"
                v-model="formData.email"
                placeholder="you@example.com"
                required
                class="w-full bg-[var(--color-input-bg)]/80 text-[var(--color-foreground)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-white/10 transition-colors">
          </div>

          <div>
            <label for="subject"
                   class="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">Subject</label>
            <input
                type="text"
                id="subject"
                v-model="formData.subject"
                placeholder="Question about your services"
                required
                class="w-full bg-[var(--color-input-bg)]/80 text-[var(--color-foreground)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-white/10 transition-colors">
          </div>

          <!-- Message Input -->
          <div>
            <label for="message" class="block text-sm font-medium text-[var(--color-muted-foreground)] mb-2">Your
              Message</label>
            <textarea
                id="message"
                v-model="formData.message"
                placeholder="Your message..."
                rows="4"
                required
                class="w-full bg-[var(--color-input-bg)]/80 text-[var(--color-foreground)] rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] border border-white/10 transition-colors"></textarea>
          </div>

          <!-- Submit Button -->
          <button
              type="submit"
              :disabled="formData.submitting"
              class="w-full px-8 py-3 text-sm font-medium text-[var(--color-background)] bg-[var(--color-accent)] rounded-lg hover:scale-[1.01] hover:shadow-lg hover:shadow-[var(--color-accent)]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
            {{ formData.submitting ? 'Sending...' : 'Send Message' }}
          </button>
        </form>
      </div>

      <!-- Contact Info Side -->
      <div class="space-y-8 p-4 sm:p-6">
        <h2 class="text-3xl font-semibold mb-4 text-foreground">Contact Info</h2>
        <p class="text-[var(--color-muted-foreground)] leading-relaxed">
          We’re here to help and answer any questions you might have. Reach out to us, and we’ll respond as quickly as
          possible.
        </p>

        <div class="space-y-5">
          <div
              class="flex items-start gap-4 p-4 bg-[var(--color-muted-foreground)]/3 rounded-lg border border-white/10">
                  <span
                      class="flex items-center justify-center w-10 h-10 bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] flex-shrink-0">
                      <i class="fa-solid fa-envelope text-lg"></i>
                  </span>
            <div>
              <p class="font-semibold text-foreground">Email</p>
              <p class="text-muted-foreground break-words">jubayer.islam.dev@gmail.com</p>
            </div>
          </div>

          <!-- Phone -->
          <div
              class="flex items-start gap-4 p-4 bg-[var(--color-muted-foreground)]/3 rounded-lg border border-white/10">
                  <span
                      class="flex items-center justify-center w-10 h-10 bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] flex-shrink-0">
                      <i class="fa-solid fa-phone text-lg"></i>
                  </span>
            <div>
              <p class="font-semibold text-foreground">Phone</p>
              <p class="text-muted-foreground">+880 1581-054632</p>
            </div>
          </div>

          <!-- Address -->
          <div
              class="flex items-start gap-4 p-4 bg-[var(--color-muted-foreground)]/3 rounded-lg border border-white/10">
                  <span
                      class="flex items-center justify-center w-10 h-10 bg-[var(--color-accent)]/10 p-3 rounded-full text-[var(--color-accent)] flex-shrink-0">
                      <i class="fa-solid fa-location-dot text-lg"></i>
                  </span>
            <div>
              <p class="font-semibold text-foreground">Address</p>
              <p class="text-muted-foreground">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <!-- Socials -->
        <div class="pt-4">
          <p class="text-muted-foreground mb-4">Visit my social profile and get connected</p>
          <div class="flex gap-3">
            <a
                href="https://github.com/jubayerislam" target="_blank"
                aria-label="Visit my Github profile"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/5 text-muted-foreground hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all duration-300 cursor-pointer border border-white/10">
              <i class="fab fa-github text-lg"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/md-jubayer-islam-230282207/" target="_blank"
                aria-label="Visit my LinkedIn profile"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/5 text-muted-foreground hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all duration-300 cursor-pointer border border-white/10">
              <i class="fab fa-linkedin text-lg"></i>
            </a>
            <a
                href="https://www.facebook.com/jubayer.islam.5473/" target="_blank"
                aria-label="Visit my Facebook profile"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/5 text-muted-foreground hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all duration-300 cursor-pointer border border-white/10"
            >
              <i class="fab fa-facebook text-lg"></i>
            </a>
            <a
                href="https://x.com/Jubayer_Islam7" target="_blank"
                aria-label="Visit my Twitter profile"
                class="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-accent)]/5 text-muted-foreground hover:bg-[var(--color-accent)]/20 hover:text-[var(--color-accent)] transition-all duration-300 cursor-pointer border border-white/10">
              <i class="fab fa-twitter text-lg"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import {ref} from 'vue';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your credentials
// Get these from https://dashboard.emailjs.com/admin
const EMAILJS_PUBLIC_KEY = 'F5nE3Dp7RueqyL3JK';
const EMAILJS_SERVICE_ID = 'service_6tuakse';
const EMAILJS_TEMPLATE_ID = 'template_1idz9k9';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: '',
  submitting: false,
  formStatus: {message: '', type: ''}
});

const handleSubmit = async () => {
  formData.value.submitting = true;
  formData.value.formStatus = {message: '', type: ''};

  try {
    const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.value.name,
          from_email: formData.value.email,
          subject: formData.value.subject,
          message: formData.value.message,
          to_email: 'jubayer.islam.dev@gmail.com', // Your email
          reply_to: formData.value.email,
        },
        EMAILJS_PUBLIC_KEY
    );

    if (response.status === 200) {
      formData.value.formStatus = {
        message: 'Thank you! Your message has been sent successfully.',
        type: 'success'
      };

      formData.value.name = '';
      formData.value.email = '';
      formData.value.subject = '';
      formData.value.message = '';
    } else {
      throw new Error('Failed to send email');
    }

  } catch (error) {
    console.error('Form submission error:', error);
    formData.value.formStatus = {
      message: 'Oops! Something went wrong. Please try again.',
      type: 'error'
    };
  } finally {
    formData.value.submitting = false;
    setTimeout(() => {
      formData.value.formStatus = {message: '', type: ''};
    }, 5000);
  }
};
</script>