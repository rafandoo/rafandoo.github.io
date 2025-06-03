<script setup lang="ts">
import { $t } from '@/i18n'
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
      <div class="tab-content active" :id="PAGE_ABOUT_ME">
        <AboutMe :about-me-text="$t('personal.about_me')" />
      </div>
      <div class="tab-content" :id="PAGE_EXPERIENCE">
        <Experiences :experiences="experiences" />
      </div>
      <div class="tab-content" :id="PAGE_PROJECTS">
        <Projects :projects="projects" />
      </div>
      <div class="tab-content" :id="PAGE_SKILLS">
        <Skills :skills="skills" />
      </div>
      <div class="tab-content" :id="PAGE_CONTACT">
        <ContactMe :page-clip="personalInfo.pageClip" />
      </div>
    </div>
  </div>
</template>
