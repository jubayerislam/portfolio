<template>
  <!-- PORTFOLIO SECTION -->

  <section id="work" class="py-20 px-4 sm:px-8 lg:px-12 bg-[var(--color-background)] border-t border-white/10">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 text-center">
        <h2 class="text-4xl font-mono sm:text-5xl font-bold text-[var(--color-foreground)] mb-4">Portfolio
          Highlights</h2>
        <p class="text-[var(--color-muted-foreground)]/80 text-lg font-mono max-w-2xl mx-auto">
          A curated selection of projects that reflect my passion for crafting clean, functional, and impactful digital
          experiences.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-3 mb-12 flex-wrap justify-center font-mono">
        <button
            v-for="tag in filterTags"
            :key="tag"
            @click="selectedTag = selectedTag === tag ? 'All' : tag"
            :class="['px-5 py-2 rounded-lg font-medium transition-all duration-300 text-sm border cursor-pointer', selectedTag === tag
                    ? 'bg-[var(--color-card-accent)] text-[var(--color-button-text)] shadow-[0_1px_2px_var(--color-muted)] border-[var(--color-card-accent)]'
                    : 'bg-[var(--color-project-btn-bg)]/30 text-[var(--color-muted-foreground)] hover:bg-[var(--color-muted-foreground)]/10 border-white/10']">
          {{ tag }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 font-mono">
        <div v-for="project in filteredProjects" :key="project.id" @click="openModal(project)"
             class="group cursor-pointer p-5 bg-[var(--color-muted)]/20 rounded-xl border border-white/10 shadow-sm hover:shadow-[0_4px_8px_var(--color-accent)]/30
            transition-all duration-500 transform hover:-translate-y-2">

          <div
              class="relative rounded-lg overflow-hidden mb-4 aspect-video bg-gradient-to-br from-muted/50 to-muted/80">
            <img :src="project.image" :alt="project.title"
                 loading="lazy"
                 decoding="async"
                 class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                 onerror="this.onerror=null;this.src='https://placehold.co/400x300/1e293b/a5f3fc?text=Project';"/>

            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-4">
              <div>
                <h3 class="text-xl font-semibold text-white drop-shadow-md mb-1">
                  {{ project.title }}
                </h3>
                <p class="text-sm text-gray-300 drop-shadow">{{ project.category }}</p>
              </div>
            </div>
          </div>

          <div class="space-y-3">
            <p class="text-[var(--color-muted-foreground)]/80 text-sm line-clamp-3">
              {{ project.description }}
            </p>
            <div class="flex gap-2 flex-wrap">
                <span
                    v-for="tech in project.tech"
                    :key="tech"
                    class="px-3 py-1 text-xs font-medium text-[var(--color-accent)] bg-[var(--color-tech-bg)]/10 rounded-full border border-[var(--color-tech-border)]/20">
                    {{ tech }}
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal -->
    <transition name="modal-fade">
      <div v-if="isModalOpen"
           class="fixed inset-0 bg-background/90 backdrop-blur-xl flex items-center justify-center p-4 z-50 ">


        <div data-lenis-prevent
             class="relative bg-[var(--color-background)]/95 border border-white/10 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto ring-1 ring-[var(--color-accent)]/10 custom-scrollbar"
             @click.stop>

          <button
              @click="closeModal"
              class="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-xl text-foreground hover:bg-[var(--color-muted)]/50 transition-all duration-300 z-10 border border-[var(--color-muted)]/50">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <!-- Content -->
          <div class="p-8 sm:p-12">
            <!-- Header -->
            <header class="mb-10 text-center animate-fade-in">
              <h2 class="text-4xl sm:text-5xl font-bold text-foreground mb-3">
                {{ activeProject.title }}
              </h2>
              <p class="text-lg sm:text-xl text-[var(--color-muted-foreground)]/80 leading-relaxed max-w-2xl mx-auto">
                {{ activeProject.description }}
              </p>
            </header>

            <!-- Project Preview -->
            <div
                class="w-full aspect-video bg-muted/40 rounded-2xl mb-10 overflow-hidden relative flex items-center justify-center group border border-white/10">
              <img
                  :src="activeProject.image"
                  :alt="activeProject.title"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  onerror="this.onerror=null;this.src='https://placehold.co/800x450/1e293b/a5f3fc?text=Project+Showcase';"
              />
            </div>

            <!-- Challenge & Solution -->
            <section class=" mb-12">
              <div>
                <h3 class="text-sm uppercase tracking-widest text-[var(--color-accent)] font-semibold mb-3">
                  Project Overview
                </h3>
                <div class="text-[var(--color-muted-foreground)]/80 leading-relaxed project-overview-content" v-html="activeProject.projectOverview">

                </div>
              </div>
            </section>

            <!-- Tech Stack -->
            <section class="mb-12">
              <h3 class="text-sm uppercase tracking-widest text-[var(--color-accent)] mb-4 font-semibold">
                Tech Stack
              </h3>
              <div class="flex flex-wrap gap-3">
                  <span
                      v-for="tech in activeProject.tech"
                      :key="tech"
                      class="px-4 py-2 bg-[var(--color-tech-bg)]/10 border border-[var(--color-tech-border)]/20 rounded-lg text-sm text-[var(--color-accent)] font-medium">
                      {{ tech }}
                  </span>
              </div>
            </section>

            <!-- CTA Buttons -->
            <footer class="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                  :href="activeProject.url"
                  target="_blank"
                  class="px-8 py-3 bg-[var(--color-accent)] text-[var(--color-background)] rounded-xl font-semibold hover:shadow-lg hover:shadow-[var(--color-accent)]/40 transition-all duration-300 text-center">
                🔗 View Live Project
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

const selectedTag = ref('All')
const isModalOpen = ref(false)
const activeProject = ref({})
const filterTags = ['All', 'Individual', 'Collaboration', 'Learning', 'Contribute']

const projects = [
  {
    id: 2,
    title: 'Bug Finder',
    category: 'Full-Stack',
    description:
        'A scalable web platform with separate admin, user, and employee panels to support operational management.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> A feature-rich admin panel offering user and employee management, role-based permissions, email marketing, API integrations, expense and earnings tracking, dynamic content control, Envato product management, and real-time support ticketing—optimized for scalable business operations.</p>\n' +
        '<p><strong>Advanced Analytics & Reporting:</strong> Interactive graphs and charts for deposits, transactions, and overall system performance.</p>\n' +
        '<p><strong>Comprehensive Payment Integration:</strong> Supports payment gateways such as Stripe.</p>\n' +
        '<p><strong>Real-Time Systems:</strong> Support ticket management, in-app notifications using Laravel Pusher broadcasting, event listeners, and push notifications via Firebase.</p>\n' +
        '<p><strong>User Dashboard:</strong> An intuitive user dashboard featuring plan purchase and upgrade options with detailed plan information, subscription tracking, and a real-time client support ticket system..</p>\n'+
        '<p><strong>Employee Dashboard:</strong> A centralized dashboard that enables employees to view salary details and payment history, submit and track leave applications, and manage essential work-related information through a secure and user-friendly interface..</p>\n',
    tech: ['Vue.js', 'Inertia.js', 'PHP', 'Laravel', 'MySql', 'BootStrap', 'API', 'WebSocket'],
    tags: ['Individual'],
    image: "/img/projects/bugfinder.png",
    url: "https://bugfinder.net/",
  },
  {
    id: 3,
    title: 'SMM Matrix – Social Growth Platform',
    category: 'Full-Stack',
    description:
        'An all-in-one social media marketing platform for managing, automating, and scaling digital campaigns across multiple networks.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> Manage users, orders, services, payments, reports, and system settings with full control and analytics.</p>\n' +
        '  <p><strong>User Dashboard:</strong> Allows clients and resellers to place orders, track progress, manage wallet, view history, and update profile settings.</p>\n' +
        '  <p><strong>API Integration:</strong> Supports multiple SMM service providers, automates order fulfillment, and provides endpoints for external apps.</p>\n' +
        '  <p><strong>Multi-Tenant Support:</strong> Enables resellers to operate independently with separate dashboards, isolated data, and flexible pricing on a shared platform.</p>\n' +
        '  <p><strong>Payment Gateway:</strong> Integrated with multiple payment gateways, including Stripe, PayPal, Binance, Cryptomus, bKash, Nagad, etc., to handle secure transactions and support multi-currency payments..</p>\n' +
        '  <p><strong>Technology:</strong> Built with a modern frontend using Vue.js (with Blade templates), a backend powered by PHP and Laravel, MySQL database, RESTful APIs, PWA support, multi-currency and multi-language capabilities, and security features like 2FA.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/smm.png",
    url: "https://smm-matrix.bugfinder.app/",
  },
  {
    id: 9,
    title: 'Remito - A Complete Remittance Solution',
    category: 'Backend Development',
    description:
        'A secure global money transfer and remittance platform supporting live exchange rates, automated currency conversions, and multi-channel payouts.',
    projectOverview: '<p><strong>Admin Panel:</strong> Manage sender/recipient verifications, monitor global money transfers, manage payout agents, and configure currency conversion margins.</p>\n' +
        '  <p><strong>User Portal:</strong> Calculate real-time transaction fees and exchange rates, send money securely using international checkouts, and track payment delivery status.</p>\n' +
        '  <p><strong>Exchange Rates & Webhooks:</strong> Integrated with exchange rate APIs for real-time currency pricing, featuring automated payout processing using payment networks.</p>\n' +
        '  <p><strong>Core Technology:</strong> Powered by PHP Laravel, MySQL database, and a responsive frontend utilizing jQuery, Bootstrap, CSS, and HTML.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Collaboration'],
    image: "/img/projects/remito.png",
    url: "https://remito.bugfinder.app/",
  },
  {
    id: 10,
    title: 'Pay Secure – Secure Payment For Global Economy',
    category: 'Backend Development',
    description:
        'A secure, scalable online payment gateway and merchant services platform supporting multi-currency transactions, payout processing, and seamless API integration.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> Manage merchants, track global transactions, process payouts/settlements, monitor refunds, and generate comprehensive financial reports.</p>\n' +
        '  <p><strong>Merchant Dashboard:</strong> Allows merchants to generate API keys, track real-time payments, request payouts, manage refund requests, and configure webhook notifications.</p>\n' +
        '  <p><strong>API & Webhook Integration:</strong> Standardized RESTful API endpoints and secure webhooks for seamless integration with external e-commerce platforms and instant payment IPNs.</p>\n' +
        '  <p><strong>Payment Gateway Integration:</strong> Integrated with multiple payment methods (Stripe, PayPal, Binance, Cryptomus, credit cards, bKash, Nagad) supporting global multi-currency payments.</p>\n' +
        '  <p><strong>Technology & Security:</strong> Built with Vue.js (in Blade templates), Laravel, MySQL, RESTful APIs, 2FA, API token authentication, and fraud-detection rules to ensure secure transactions.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Rest API', 'BootStrap', 'Jquery'],
    tags: ['Collaboration'],
    image: "/img/projects/pay-secure.png",
    url: "https://pay-secure.bugfinder.app/",
  },
  {
    id: 4,
    title: 'Yes Cable – Inventory Management Platform',
    category: 'Backend Development',
    description:
        'An inventory management system designed to control cable assets, reduce losses, and optimize supply operations.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> Manage Sales centr. customer, manage sales, services, payments, reports, and system settings with full control and analytics.</p>\n' +
        '  <p><strong>User Dashboard:</strong> Allows clients and resellers to place orders, track progress, manage wallet, view history, and update profile settings.</p>\n' +
        '  <p><strong>API Integration:</strong> Supports multiple SMM service providers, automates order fulfillment, and provides endpoints for external apps.</p>\n' +
        '  <p><strong>Multi-Tenant Support:</strong> Enables resellers to operate independently with separate dashboards, isolated data, and flexible pricing on a shared platform.</p>\n' +
        '  <p><strong>Payment Gateway:</strong> Integrated with multiple payment gateways, including Stripe, PayPal, Binance, Cryptomus, bKash, Nagad, etc., to handle secure transactions and support multi-currency payments..</p>\n' +
        '  <p><strong>Technology:</strong> Built with a modern frontend using Vue.js (with Blade templates), a backend powered by PHP and Laravel, MySQL database, RESTful APIs, PWA support, multi-currency and multi-language capabilities, and security features like 2FA.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/yescable.png",
    url: "https://yescable.net/",
  },
  {
    id: 5,
    title: 'Techpack – Garment Specification Design',
    category: 'Full-Stack',
    description:
        'A collaborative web platform for fashion designers and manufacturers to create, share, and manage production-ready apparel specification sheets.',
    projectOverview: '<p><strong>Techpack Builder:</strong> Interactive tools to build comprehensive tech packs, including measurement charts, bill of materials (BOM), annotations, and sketches.</p>\n' +
        '  <p><strong>Inertia.js & Vue SPA:</strong> Utilizes Inertia.js to seamlessly combine the power of a Laravel backend with a highly reactive Vue.js single-page application frontend.</p>\n' +
        '  <p><strong>Real-Time Collaboration:</strong> Integrated WebSockets to allow designers and manufacturers to collaborate on revisions, leave comments, and track design approvals in real time.</p>\n' +
        '  <p><strong>Subscription & Payments:</strong> Integrated Stripe and Lemon Squeezy payment engines to manage global SaaS subscriptions, recurring billing, customer invoice portals, and webhook-driven plan management.</p>\n' +
        '  <p><strong>Export Engine:</strong> Custom document generator that builds and exports print-ready, high-fidelity PDF specification documents for garment factories.</p>\n' +
        '  <p><strong>Core Stack:</strong> Powered by PHP Laravel, Vue.js, Inertia.js, MySQL database management, and Bootstrap for the editor layout.</p>\n',
    tech: ['Vue.js', 'Inertia.js', 'PHP', 'Laravel', 'MySql', 'BootStrap', 'API', 'WebSocket', 'Stripe', 'Lemon Squeezy'],
    tags: ['Individual'],
    image: "/img/projects/techpack.png",
    url: "https://techpack.design/",
  },
  {
    id: 6,
    title: 'Groomify – Booking & E-Commerce Platform',
    category: 'Backend Development',
    description:
        'A comprehensive booking and online commerce platform designed for barber shops, salons, and spa service providers.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> Manage salon branches, stylist profiles, services catalog, appointment calendars, and customer records with detailed business analytics.</p>\n' +
        '  <p><strong>Booking Scheduler:</strong> A real-time appointment booking interface allowing clients to select services, choose stylists, and reserve available time slots seamlessly.</p>\n' +
        '  <p><strong>User Dashboard:</strong> Allows clients to schedule bookings, track order status, submit support tickets, make secure online payments, and manage profile settings.</p>\n' +
        '  <p><strong>Payment Gateways:</strong> Integrated with multiple payment gateways like Stripe, PayPal, and Binance to handle secure online transactions and booking deposits.</p>\n' +
        '  <p><strong>Core Stack:</strong> Built with a frontend using HTML, CSS, JavaScript, Bootstrap, and jQuery, powered by PHP and Laravel with a MySQL database.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/groomify.png",
    url: "https://groomify.bugfinder.app/",
  },
  {
    id: 7,
    title: 'Construm – Construction Management Platform',
    category: 'Backend Development',
    description:
        'A comprehensive online platform for construction businesses, combining project management, service promotion, and client engagement.',
    projectOverview: '<p><strong>Admin Panel:</strong> Track project construction phases, monitor budgets/costs, manage contractor profiles, handle inquiries, and update the portfolio showcase.</p>\n' +
        '  <p><strong>Client Portal:</strong> Allows clients to submit custom project requests, track progress status, check billing details, and communicate with construction managers.</p>\n' +
        '  <p><strong>Project Portfolio & Estimator:</strong> Features dynamic showcases of completed construction projects and an interactive cost calculator for incoming service estimation.</p>\n' +
        '  <p><strong>Multi-Currency Invoice Support:</strong> Handles diverse client contracts and payments with support for international currencies and standard secure payment checkouts.</p>\n' +
        '  <p><strong>Core Stack:</strong> Built on PHP Laravel, MySQL backend database, and a responsive frontend framework utilizing jQuery, Bootstrap, CSS, and HTML.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/contrum.png",
    url: "https://construm.bugfinder.app/",
  },
  {
    id: 8,
    title: 'GearFixer – Vehicle Service Platform',
    category: 'Backend Development',
    description:
        'A unified platform for booking car services, managing vehicle maintenance schedules, and coordinating auto repair services with real-time updates and service management tools.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> Manage vehicle repair orders, mechanic assignments, services catalog, parts inventory, and appointments with comprehensive reporting.</p>\n' +
        '  <p><strong>Booking & Scheduling:</strong> A vehicle service scheduler allowing customers to book service packages, select mechanical experts, and pick convenient drop-off times.</p>\n' +
        '  <p><strong>Customer Portal:</strong> Track live repair progress, view historical vehicle service records, manage active invoices, and handle digital payment checkouts.</p>\n' +
        '  <p><strong>Core Technology:</strong> Developed using standard web technologies (HTML, CSS, Bootstrap, JavaScript, jQuery) with a reliable PHP Laravel server and MySQL database.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/gear-fixer.png",
    url: "https://gear-fixer.bugfinder.app/",
  },
  {
    id: 11,
    title: 'Healing Hub – E-Commerce Platform',
    category: 'Backend Development',
    description:
        'A modern e-commerce platform designed to deliver seamless product browsing, cash on delivery, and efficient order management.',
    projectOverview: '<p><strong>Product & Order Management:</strong> Advanced product catalog search, shopping cart features, cash on delivery (COD) checkouts, and order processing controls.</p>\n' +
        '  <p><strong>Admin Dashboard:</strong> Manage inventory stock levels, order status updates, customer records, and integrate marketing tracking pixels.</p>\n' +
        '  <p><strong>Meta Pixel Integration:</strong> Integrated Meta (Facebook) Tracking Pixels to track user activity, checkouts, and custom conversion events for ad campaign optimization.</p>\n' +
        '  <p><strong>Core Stack:</strong> Developed using PHP Laravel for back-end logic, MySQL database, and Bootstrap/jQuery for the customer facing e-commerce store.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Meta Pixel', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/healing-hub.png",
    url: "https://healinghubbd.com/",
  },
  {
    id: 12,
    title: 'StarryHire - Freelancers, Influencers, and the Job Market',
    category: 'Backend Development',
    description:
        'StarryHire is a next-generation platform that bridges freelancers, influencers, and companies through smart hiring, collaboration, and opportunity discovery.',
    projectOverview: '<p><strong>Campaign & Job Board:</strong> Companies can post specialized job openings, contract-based gigs, or influencer marketing campaigns to discover top talent.</p>\n' +
        '  <p><strong>Talent Discovery:</strong> Advanced search and filtering tools for companies to find freelancers and influencers based on skills, niche, engagement rates, and region.</p>\n' +
        '  <p><strong>Collaboration Tools:</strong> Features to support communication, milestone tracking, secure agreement configurations, and delivery of digital deliverables.</p>\n' +
        '  <p><strong>My Contributions:</strong> Responsible for ongoing bug fixes, implementing new RESTful API endpoints, developing database optimizations, and making frontend enhancements for a smoother user experience.</p>\n' +
        '  <p><strong>Technology Stack:</strong> Built using PHP and Laravel for the backend, MySQL database storage, and a responsive frontend powered by JavaScript, jQuery, and Bootstrap.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Contribute'],
    image: "/img/projects/staryhire.png",
    url: "https://starryhire.bugfinder.app/",
  },
  {
    id: 13,
    title: 'Portfolio - Software Engineer Portfolio',
    category: 'Full-Stack',
    description:
        'A personal software engineer portfolio showcasing projects, skills, experience, and professional background with a modern, responsive design.',
    projectOverview:
        'Designed and developed a modern personal portfolio using Vue 3 and Vite, featuring responsive layouts, optimized performance, dynamic content, and a clean UI to effectively present projects, technical skills, and professional experience.',
    tech: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'Vite', 'Vue.js', 'API'],
    tags: ['Learning'],
    image: "/img/projects/portfolio.png",
    url: "https://jubayerislam.vercel.app/",
  },
  {
    id: 1,
    title: 'Admin Dashboard',
    category: 'Backend Development',
    description:
        'Centralized dashboard with integrated payments, payouts, and automated SMS/email notifications.',
    projectOverview: '<p><strong>Admin Dashboard:</strong> I developed a fully functional and scalable Admin Dashboard for Bugfinder, designed to manage 40+ backend projects efficiently. The dashboard provides complete system control and analytics, including real-time user tracking, deposits, transactions, and login monitoring..</p>\n' +
        '<p><strong>Advanced Analytics & Reporting:</strong> Interactive graphs and charts for deposits, transactions, and overall system performance..</p>\n' +
        '<p><strong>Comprehensive Payment Integration:</strong> Supports multiple payment gateways such as Stripe, PayPal, Razorpay, bKash, Nagad, Izico, Binance, Instamoto, and more.</p>\n' +
        '<p><strong>Communication Services:</strong> Integrated with leading SMS providers (Twilio, Infobip, Vonage) and email services (Amazon S3, Mailgun, SendGrid) for seamless notifications.</p>\n' +
        '<p><strong>Real-Time Systems:</strong> Support ticket management, in-app notifications using Laravel Pusher broadcasting, event listeners, and push notifications via Firebase.</p>\n' +
        '<p><strong>User & Security Management:</strong> Full user management, KYC verification, 2FA authentication, and role-based access control.</p>\n'+
        '<p><strong>Dynamic & Flexible Architecture:</strong> Dynamic page routing, automatic currency updates via payment APIs, and text translation using Azure API.</p>\n',
    tech: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'BootStrap', 'Jquery'],
    tags: ['Individual'],
    image: "/img/projects/admin.png",
    url: "https://smm-matrix.bugfinder.app/",
  }
]

const filteredProjects = computed(() => {

  if (!selectedTag.value || selectedTag.value === 'All') {
    // Show only first 9 projects when "All" is selected
    return projects.slice(0, 9)
  }
  // Show all projects that include the selected tag
  return projects.filter(p => p.tags.includes(selectedTag.value))
})


const openModal = (project) => {
  activeProject.value = project;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

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

:deep(.project-overview-content strong) {
  color: var(--color-foreground);
}

</style>
