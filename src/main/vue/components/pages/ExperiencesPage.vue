<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

import type { Experiences } from '@/types/Experience'
import { PAGE_EXPERIENCE } from '@/constants/pages.ts'
import { BriefcaseBusiness } from 'lucide-vue-next'

defineProps<{
  experiences: Experiences
}>()
</script>

<template>
  <article class="resume" :data-page="PAGE_EXPERIENCE">
    <header>
      <h2 class="article-title">{{ t('main.experience') }}</h2>
    </header>
    <section v-for="(experience, i) in experiences" :key="i" class="timeline">
      <div class="title-wrapper">
        <div class="timeline-logo-box">
          <img
            v-if="experience.logo"
            class="timeline-logo"
            :src="experience.logo"
            :alt="experience.title"
            loading="lazy"
          />
          <BriefcaseBusiness v-else class="timeline-logo experience-briefcase" />
        </div>
        <h3>{{ experience.title }}</h3>
      </div>
      <ol class="timeline-list">
        <li v-for="(item, j) in experience.items" :key="j" class="timeline-item">
          <h4 class="timeline-item-title">{{ t(item.title) }}</h4>
          <span>{{ t(item.date) }}</span>
          <p class="timeline-text">{{ t(item.description) }}</p>
        </li>
      </ol>
    </section>
  </article>
</template>
