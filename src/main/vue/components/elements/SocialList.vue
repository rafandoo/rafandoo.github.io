<script setup lang="ts">
import { AtSign, Github, Instagram, Linkedin } from 'lucide-vue-next'

import type { SocialLink } from '@/types/PersonalInfo'

defineProps<{
  socialLinks: SocialLink[]
}>()

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'github':
      return Github
    case 'instagram':
      return Instagram
    case 'linkedin':
      return Linkedin
    default:
      return AtSign
  }
}
</script>

<template>
  <ul class="social-list">
    <li v-for="(social, key) in socialLinks" :key="key" class="social-item">
      <a :href="social.url" class="social-link" target="_blank" rel="noopener noreferrer">
        <component :is="getIcon(social.name)" class="social-icon" />
      </a>
    </li>
  </ul>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.social-list {
  @apply flex items-center gap-4 pb-1 pl-2;
}

.social-item .social-link {
  @apply text-8 text-paper-dark transition-all duration-300 ease-out;
}

.social-item .social-link:hover {
  @apply -translate-y-1 text-paper;
}

@media (min-width: 768px) {
  .social-list {
    @apply pb-0 pl-0;
  }

  .social-icon {
    @apply size-7;
  }
}

@media (min-width: 1250px) {
  .social-list {
    @apply justify-center;
  }
}
</style>
