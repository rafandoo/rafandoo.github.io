<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import { onMounted } from 'vue'
import LanguageSwitch from '@/components/elements/LanguageSwitch.vue'
import {
  PAGE_ABOUT_ME,
  PAGE_CONTACT,
  PAGE_EXPERIENCE,
  PAGE_PROJECTS,
  PAGE_SKILLS,
} from '@/constants/pages.ts'

/**
 * Realiza a mudança de tab quando um link da navbar é clicado.
 */
const changeTab = () => {
  const tabs = document.querySelectorAll('.tab-content')
  const navLinks = document.querySelectorAll('.navbar-link')

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const clickedId = link.id

      tabs.forEach((tab) => {
        const isActive = tab.id === clickedId
        tab.classList.toggle('active', isActive)
      })

      navLinks.forEach((nav) => {
        const isActive = nav.id === clickedId
        nav.classList.toggle('active', isActive)
      })
    })
  })
}

onMounted(changeTab)
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-link active" :id="PAGE_ABOUT_ME" data-bs-toggle="tab">
          {{ t('main.about') }}
        </button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" :id="PAGE_EXPERIENCE" data-bs-toggle="tab">
          {{ t('main.experience') }}
        </button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" :id="PAGE_PROJECTS" data-bs-toggle="tab">
          {{ t('main.portfolio') }}
        </button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" :id="PAGE_SKILLS" data-bs-toggle="tab">
          {{ t('main.skills') }}
        </button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" :id="PAGE_CONTACT" data-bs-toggle="tab">
          {{ t('main.contact') }}
        </button>
      </li>
      <li class="navbar-item">
        <LanguageSwitch />
      </li>
    </ul>
  </nav>
</template>
