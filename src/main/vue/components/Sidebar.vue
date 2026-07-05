<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useToggle } from '@vueuse/core'
import { Maximize2, Minimize2 } from 'lucide-vue-next'

import type { PersonalInfo } from '@/types/PersonalInfo'
import { useLinks } from '@/composables/useLinks'
import SocialList from '@/components/elements/SocialList.vue'
import ContactList from '@/components/elements/ContactList.vue'

const props = defineProps<{
  personalInfo: PersonalInfo
}>()

const { t } = useI18n()

const [sidebarActive, toggleSidebar] = useToggle()

const { gravatar } = useLinks(props.personalInfo.contact)
</script>

<template>
  <aside class="sidebar" :class="{ active: sidebarActive }">
    <div class="sidebar-main">
      <figure class="sidebar-avatar">
        <img
          class="sidebar-avatar-image"
          :src="gravatar"
          :alt="personalInfo.name"
          width="80"
          height="80"
        />
      </figure>

      <div class="sidebar-profile">
        <h1 class="sidebar-profile-name">{{ personalInfo.name }}</h1>
        <p class="sidebar-profile-subtitle">{{ t(personalInfo.subtitle) }}</p>
      </div>

      <button
        class="sidebar-toggle"
        :aria-label="t('elements.show_contacts')"
        @click="toggleSidebar"
      >
        <span class="sidebar-toggle-label">{{ t('elements.show_contacts') }}</span>
        <Maximize2 v-if="!sidebarActive" class="sidebar-toggle-icon" :size="16" />
        <Minimize2 v-else class="sidebar-toggle-icon" :size="16" />
      </button>
    </div>

    <div class="sidebar-details">
      <div class="sidebar-divider"></div>
      <ContactList :contact="personalInfo.contact" />
      <div class="sidebar-divider"></div>
      <SocialList :social="personalInfo.social" />
    </div>
  </aside>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.sidebar {
  @apply mb-4 max-h-28 overflow-hidden transition-all duration-1000 ease-in-out;
}

.sidebar.active {
  @apply max-h-101.25;
}

.sidebar-main {
  @apply relative flex items-center justify-start gap-3.5;
}

.sidebar-avatar-image {
  @apply rounded-full object-cover;
}

.sidebar-divider {
  @apply mx-auto my-4 h-px w-full bg-dark-graphite;
}

.sidebar-profile-name {
  @apply mb-2 flex justify-center font-display text-6 font-500 tracking-tight text-paper;
}

.sidebar-profile-subtitle {
  @apply w-max rounded-full bg-dark-graphite px-3 py-1 text-1 font-300 text-paper;
}

.sidebar-toggle {
  @apply absolute -top-4.25 -right-4.25 z-1 rounded-bl-2xl p-3.5 text-3 text-ember-orange
    transition-all duration-500 ease-in-out;
}

.sidebar-toggle::before {
  @apply absolute inset-px -z-1 rounded-bl-2xl bg-onyx transition-all duration-500
    ease-in-out content-[""];
}

.sidebar-toggle:hover::before,
.sidebar-toggle:focus-visible::before {
  @apply bg-dark-graphite;
}

.sidebar-toggle-label {
  @apply hidden;
}

.sidebar-details {
  @apply invisible opacity-0 transition-all duration-500 ease-in-out;
}

.sidebar.active .sidebar-details {
  @apply visible opacity-100;
}

@media (min-width: 580px) {
  .sidebar {
    @apply max-h-44;
  }

  .sidebar.active {
    @apply max-h-128;
  }

  .sidebar-main {
    @apply gap-6.5;
  }

  .sidebar-avatar img {
    @apply w-30;
  }

  .sidebar-profile-name {
    @apply mb-3.5;
  }

  .sidebar-profile-subtitle {
    @apply px-4.5 py-1.5;
  }

  .sidebar-toggle {
    @apply -top-8 -right-8 px-4 py-2.5;
  }

  .sidebar-toggle-label {
    @apply block text-1;
  }

  .sidebar-toggle-icon {
    @apply hidden;
  }
}

@media (min-width: 768px) {
  .sidebar-profile-name {
    @apply text-8;
  }

  .sidebar-profile-subtitle {
    @apply text-2;
  }

  .sidebar-toggle {
    @apply px-5 py-3;
  }

  .sidebar-toggle-label {
    @apply text-3;
  }
}

@media (min-width: 1250px) {
  .sidebar {
    @apply sticky top-12 z-1 mb-0 h-full max-h-max;
  }

  .sidebar-main {
    @apply flex-col;
  }

  .sidebar-avatar img {
    @apply w-38;
  }

  .sidebar-profile-name {
    @apply text-center whitespace-nowrap;
  }

  .sidebar-profile-subtitle {
    @apply m-auto;
  }

  .sidebar-toggle {
    @apply hidden;
  }

  .sidebar-details {
    @apply visible opacity-100;
  }

  .sidebar-divider {
    @apply w-50;
  }
}
</style>
