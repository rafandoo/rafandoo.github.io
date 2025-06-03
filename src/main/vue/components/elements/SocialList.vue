<script setup lang="ts">
import type { SocialNetwork } from '@/types/PersonalInfo.ts'
import { Github, Instagram, Linkedin } from 'lucide-vue-next'

defineProps<{
  socialNetworks: SocialNetwork[]
}>()

const getIcon = (name: string) => {
  switch (name.toLowerCase()) {
    case 'github':
      return Github
    case 'instagram':
      return Instagram
    case 'linkedin':
      return Linkedin
  }
}
</script>

<template>
  <ul class="social-list">
    <li class="social-item" v-for="(social, key) in socialNetworks" :key="key">
      <a :href="social.link" class="social-link" target="_blank" rel="noopener noreferrer">
        <component :is="getIcon(social.name)" />
      </a>
    </li>
  </ul>
</template>
