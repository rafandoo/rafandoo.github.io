<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import type { Projects } from '@/types/Project'
import { PAGE_PROJECTS } from '@/constants/pages.ts'
import { Eye } from 'lucide-vue-next'

defineProps<{
  projects: Projects
}>()
</script>

<template>
  <article class="portfolio" :data-page="PAGE_PROJECTS">
    <h2 class="article-title">{{ t('main.portfolio') }}</h2>
    <div>
      <ul class="project-list">
        <li class="project-item animate-scaleUp" v-for="(project, key) in projects" :key="key">
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <figure class="project-image">
              <div class="project-item-view-icon">
                <Eye />
              </div>
              <img :src="project.img" :alt="t(project.title)" loading="lazy" />
            </figure>
            <h3 class="project-title">{{ t(project.title) }}</h3>
            <div class="project-categories">
              <span class="project-category" v-for="(category, idx) in project.category" :key="idx">
                {{ category }}
              </span>
            </div>
            <p class="project-subtitle">{{ t(project.subtitle) }}</p>
          </a>
        </li>
      </ul>
    </div>
  </article>
</template>
