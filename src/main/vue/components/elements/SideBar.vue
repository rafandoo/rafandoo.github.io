<script setup lang="ts">
import { $t } from '@/i18n'
import { onMounted, ref } from 'vue'
import { useLinks } from '@/composables/useLinks.ts'
import { Github, Instagram, Linkedin, Mail, Phone, MapPin, Maximize2, Minimize2 } from 'lucide-vue-next'

import type { PersonalInfo } from '@/types/PersonalInfo.ts'

const props = defineProps<{
  personalInfo: PersonalInfo
}>()

const { gravatar, whatsLink, githubLink, linkedinLink, instagramLink } = useLinks(
  props.personalInfo,
)

const sidebarActive = ref(false)

const toggleSidebar = () => {
  const sidebar = document.querySelector('[data-sidebar]')
  const sidebarButton = document.querySelector('[data-sidebar-button]')

  if (!sidebar || !sidebarButton) return

  sidebarButton.addEventListener('click', () => {
    sidebar.classList.toggle('active')
    sidebarActive.value = !sidebarActive.value
  })
}

onMounted(toggleSidebar)
</script>

<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-main">
      <figure class="avatar-box">
        <img class="avatar-picture" :src="gravatar" :alt="personalInfo.name" width="80" />
      </figure>
      <div class="sidebar-main-content">
        <h1 class="name">{{ personalInfo.name }}</h1>
        <p class="subtitle">{{ $t(personalInfo.subTitle) }}</p>
      </div>
      <button class="sidebar-show-more-button" data-sidebar-button>
        <span>{{ $t('elements.show_contacts') }}</span>
        <Maximize2 v-if="!sidebarActive" :size="15" />
        <Minimize2 v-else :size="15" />
      </button>
    </div>
    <div class="sidebar-secondary">
      <div class="separator"></div>
      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <Mail />
          </div>
          <div class="contact-info">
            <p class="contact-title">E-mail</p>
            <a :href="'mailto:' + personalInfo.email" class="contact-link" target="_blank">
              {{ personalInfo.email }}
            </a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <Phone />
          </div>
          <div class="contact-info">
            <p class="contact-title">{{ $t('elements.phone') }}</p>
            <a :href="whatsLink" class="contact-link" target="_blank" rel="noopener noreferrer">
              {{ personalInfo.phone }}
            </a>
          </div>
        </li>
        <li class="contact-item">
          <div class="icon-box">
            <MapPin />
          </div>
          <div class="contact-info">
            <p class="contact-title">{{ $t('elements.location') }}</p>
            <address>{{ $t(personalInfo.location) }}</address>
          </div>
        </li>
      </ul>
      <div class="separator"></div>
      <ul class="social-list">
        <li class="social-item">
          <a :href="githubLink" class="social-link" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        </li>
        <li class="social-item">
          <a :href="linkedinLink" class="social-link" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        </li>
        <li class="social-item">
          <a :href="instagramLink" class="social-link" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>
