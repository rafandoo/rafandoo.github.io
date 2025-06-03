<script setup lang="ts">
import { $t } from '@/i18n'
import { onMounted, ref } from 'vue'
import { useLinks } from '@/composables/useLinks.ts'
import { Maximize2, Minimize2 } from 'lucide-vue-next'

import type { PersonalInfo } from '@/types/PersonalInfo.ts'
import SocialList from '@/components/elements/SocialList.vue'
import ContactList from '@/components/elements/ContactList.vue'

const props = defineProps<{
  personalInfo: PersonalInfo
}>()

const { gravatar } = useLinks(
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
      <ContactList :personal-info="personalInfo" />
      <div class="separator"></div>
      <SocialList :social-networks="personalInfo.social" />
    </div>
  </aside>
</template>
