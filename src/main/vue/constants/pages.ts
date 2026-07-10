import type { Component } from 'vue'

import AboutMe from '@/components/pages/AboutMe.vue'
import Experiences from '@/components/pages/Experiences.vue'
import Education from '@/components/pages/Education.vue'
import Projects from '@/components/pages/Projects.vue'
import Skills from '@/components/pages/Skills.vue'

export interface NavTab {
  id: string
  label: string
  component: Component
}

export const PAGE_ABOUT_ME = {
  id: 'about-me',
  label: 'nav.about',
} as const

export const PAGE_EXPERIENCE = {
  id: 'experience',
  label: 'nav.experience',
} as const

export const PAGE_EDUCATION = {
  id: 'education',
  label: 'nav.education',
} as const

export const PAGE_PROJECTS = {
  id: 'projects',
  label: 'nav.portfolio',
} as const

export const PAGE_SKILLS = {
  id: 'skills',
  label: 'nav.skills',
} as const

export const NAV_TABS: NavTab[] = [
  { ...PAGE_ABOUT_ME, component: AboutMe },
  { ...PAGE_EXPERIENCE, component: Experiences },
  { ...PAGE_EDUCATION, component: Education },
  { ...PAGE_PROJECTS, component: Projects },
  { ...PAGE_SKILLS, component: Skills },
]
