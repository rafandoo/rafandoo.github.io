<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import Sidebar from '@/components/Sidebar.vue'
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/pages/AboutMe.vue'
import { activeTab } from '@/composables/useActiveTab'
import personalInfo from '@/data/PersonalInfo'
import experiences from '@/data/Experiences'
import projects from '@/data/Projects'
import skills from '@/data/Skills'
import {
  PAGE_ABOUT_ME,
  PAGE_EXPERIENCE,
  PAGE_EDUCATION,
  PAGE_PROJECTS,
  PAGE_SKILLS,
} from '@/constants/pages'
import education from '@/data/Education'

const { t } = useI18n()

const aboutMeText = computed(() => t('personal.about_me'))

const Experiences = defineAsyncComponent(() => import('@/components/pages/Experiences.vue'))
const Education = defineAsyncComponent(() => import('@/components/pages/Education.vue'))
const Projects = defineAsyncComponent(() => import('@/components/pages/Projects.vue'))
const Skills = defineAsyncComponent(() => import('@/components/pages/Skills.vue'))
</script>

<template>
  <div class="main">
    <Sidebar :personal-info="personalInfo" />
    <main class="main-content">
      <NavBar />

      <div
        v-if="activeTab === PAGE_ABOUT_ME.id"
        :id="`${PAGE_ABOUT_ME.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${PAGE_ABOUT_ME.id}-tab`"
      >
        <AboutMe :about-me-text="aboutMeText" />
      </div>

      <div
        v-if="activeTab === PAGE_EXPERIENCE.id"
        :id="`${PAGE_EXPERIENCE.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${PAGE_EXPERIENCE.id}-tab`"
      >
        <Experiences :experiences="experiences" />
      </div>

      <div
        v-if="activeTab === PAGE_EDUCATION.id"
        :id="`${PAGE_EDUCATION.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${PAGE_EDUCATION.id}-tab`"
      >
        <Education :education="education" />
      </div>

      <div
        v-if="activeTab === PAGE_PROJECTS.id"
        :id="`${PAGE_PROJECTS.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${PAGE_PROJECTS.id}-tab`"
      >
        <Projects :projects="projects" />
      </div>

      <div
        v-if="activeTab === PAGE_SKILLS.id"
        :id="`${PAGE_SKILLS.id}-panel`"
        class="tab-content"
        role="tabpanel"
        :aria-labelledby="`${PAGE_SKILLS.id}-tab`"
      >
        <Skills :skills="skills" />
      </div>
    </main>
  </div>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.main {
  @apply mx-3 mt-4 mb-20 min-w-2xs;
}

.tab-content {
  @apply block;
  /*TODO*/
  animation: fadeUp 0.5s cubic-bezier(0.22, 1, 0.36, 1) backwards;
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
