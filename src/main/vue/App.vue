<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { defineAsyncComponent } from 'vue'

import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'

import AboutMe from '@/components/pages/AboutMePage.vue'

const Experiences = defineAsyncComponent(() => import('@/components/pages/ExperiencesPage.vue'))
const Projects = defineAsyncComponent(() => import('@/components/pages/ProjectsPage.vue'))
const Skills = defineAsyncComponent(() => import('@/components/pages/SkillsPage.vue'))
const ContactMe = defineAsyncComponent(() => import('@/components/pages/ContactMe.vue'))

import personalInfo from '@/data/PersonalInfo'
import experiences from '@/data/Experiences'
import projects from '@/data/Projects'
import skills from '@/data/Skills'

import {
  PAGE_ABOUT_ME,
  PAGE_CONTACT,
  PAGE_EXPERIENCE,
  PAGE_PROJECTS,
  PAGE_SKILLS,
} from '@/constants/pages.ts'
</script>

<template>
  <div class="main">
    <SideBar :personal-info="personalInfo" />
    <div class="main-content">
      <NavBar />
      <div :id="PAGE_ABOUT_ME" class="tab-content active">
        <AboutMe :about-me-text="t('personal.about_me')" />
      </div>
      <div :id="PAGE_EXPERIENCE" class="tab-content">
        <Experiences :experiences="experiences" />
      </div>
      <div :id="PAGE_PROJECTS" class="tab-content">
        <Projects :projects="projects" />
      </div>
      <div :id="PAGE_SKILLS" class="tab-content">
        <Skills :skills="skills" />
      </div>
      <div :id="PAGE_CONTACT" class="tab-content">
        <ContactMe :email="personalInfo.email" />
      </div>
    </div>
  </div>
</template>
