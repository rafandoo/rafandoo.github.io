<script setup lang="ts">
import type { SocialNetwork } from '@/types/PersonalInfo.ts'
import { AtSign, Github, Instagram, Linkedin } from 'lucide-vue-next'

defineProps<{
  socialNetworks: SocialNetwork[]
}>()

/**
 * Retorna o ícone conforme o nome da rede social.
 * @param name nome da rede social
 */
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
    <li v-for="(social, key) in socialNetworks" :key="key" class="social-item">
      <a :href="social.link" class="social-link" target="_blank" rel="noopener noreferrer">
        <component :is="getIcon(social.name)" />
      </a>
    </li>
  </ul>
</template>
