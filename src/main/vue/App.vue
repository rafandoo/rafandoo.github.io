<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import Sidebar from '@/components/Sidebar.vue'
import NavBar from '@/components/NavBar.vue'
import CvDocument from '@/components/cv/CvDocument.vue'
import { provideActiveTab } from '@/composables/useActiveTab'
import personalInfo from '@/data/PersonalInfo'
import experiences from '@/data/Experiences'
import projects from '@/data/Projects'
import skills from '@/data/Skills'
import education from '@/data/Education'
import { NAV_TABS } from '@/constants/pages'

const { t } = useI18n()

const isPreview = computed(() => import.meta.env.DEV && window.location.pathname === '/cv/preview')

const { activeTab } = provideActiveTab()

const aboutMeText = computed(() => t(personalInfo.me.bio))

const tabProps = computed<Record<string, Record<string, unknown>>>(() => ({
  'about-me': { aboutMeText: aboutMeText.value },
  experience: { experiences },
  education: { education },
  projects: { projects },
  skills: { skills },
}))

const activeTabMeta = computed(
  () => NAV_TABS.find((tab) => tab.id === activeTab.value) ?? NAV_TABS[0],
)
const activeTabComponent = computed(() => activeTabMeta.value.component)
const activeTabProps = computed(() => tabProps.value[activeTab.value] ?? {})
</script>

<template>
  <div class="main" v-if="!isPreview">
    <Sidebar :personal-info="personalInfo" />
    <main class="main-content">
      <NavBar />

      <div
        v-if="activeTabMeta"
        :id="`${activeTabMeta.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${activeTabMeta.id}-tab`"
      >
        <component :is="activeTabComponent" v-bind="activeTabProps" />
      </div>
    </main>
  </div>

  <CvDocument :preview="isPreview" />
</template>

<style scoped>
@reference "#/assets/css/style.css";

.main {
  @apply mx-3 mt-4 mb-20 min-w-2xs;
}

.tab-content {
  @apply block;
  animation: fade 0.8s cubic-bezier(0.22, 1, 0.36, 1) backwards;
}

@media (min-width: 580px) {
  .main {
    @apply mt-12 mb-24.5;
  }
}

@media (min-width: 1024px) {
  .main {
    @apply mb-15;
  }

  .main-content {
    @apply relative m-auto w-max;
  }
}

@media (min-width: 1250px) {
  .main {
    @apply mx-auto flex max-w-7xl items-stretch justify-center gap-5;
  }

  .main-content {
    @apply m-0 w-3/4 min-w-3/4;
  }
}
</style>
