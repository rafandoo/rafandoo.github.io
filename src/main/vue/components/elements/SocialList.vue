<script setup lang="ts">
import { AtSign, Github, Instagram, Linkedin } from 'lucide-vue-next'

import type { Social } from '@/types/PersonalInfo'

defineProps<{
  social: Social[]
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
    <li v-for="(s, key) in social" :key="key" class="social-item">
      <a :href="s.link" class="social-link" target="_blank" rel="noopener noreferrer">
        <component :is="getIcon(s.name)" class="social-icon" />
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
  @apply -translate-y-2 text-paper;
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
