<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import type { SkillCategory } from '@/types/Skills'
import { PAGE_SKILLS } from '@/constants/pages.ts'

defineProps<{
  skills: Record<string, SkillCategory>
}>()
</script>

<template>
  <article class="skills" :data-page="PAGE_SKILLS">
    <h2 class="article-title">{{ t('main.skills') }}</h2>
    <div v-for="(skill, key) in skills" :key="key">
      <h4 class="skill-category">{{ t(skill.title) }}</h4>
      <ul class="skills-list">
        <li v-for="item in skill.items" :key="item.title" class="skill-item animate-scaleUp">
          <div class="skill-logo">
            <img :src="item.logo" :alt="item.title" loading="lazy" />
          </div>
          <span class="skill-title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>
