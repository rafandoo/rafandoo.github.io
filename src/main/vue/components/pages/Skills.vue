<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import type { SkillCategory } from '@/types/Skills'
import { PAGE_SKILLS } from '@/constants/pages'

const { t } = useI18n()

defineProps<{
  skills: Record<string, SkillCategory>
}>()
</script>

<template>
  <article class="skills" :data-page="PAGE_SKILLS.id">
    <h2 class="article-title">{{ t(PAGE_SKILLS.label) }}</h2>
    <div v-for="(skill, key, idx) in skills" :key="key" v-reveal="idx * 80">
      <h4 class="skill-category">{{ t(skill.title) }}</h4>

      <ul class="skills-list">
        <li v-for="item in skill.items" :key="item.title" class="skill-item">
          <div class="skill-logo">
            <img :src="item.logo" alt="" loading="lazy" />
          </div>
          <span class="skill-title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.skill-category {
  @apply mb-5;
}

.skills-list {
  @apply mb-2.5 grid grid-cols-3 gap-8;
}

.skill-item {
  @apply flex flex-col items-center justify-center transition-all duration-300 ease-out;
}

.skill-item:hover {
  @apply -translate-y-1;
}

.skill-logo {
  @apply rounded-full transition-shadow duration-300 ease-out;
}

.skill-logo img {
  @apply h-10 w-10 object-cover transition-transform duration-300 ease-out;
}

.skill-item:hover .skill-logo img {
  transform: rotate(4deg) scale(1.05);
}

.skill-item:hover .skill-logo {
  filter: drop-shadow(0 0 6px rgb(from var(--color-ember-orange) r g b / 0.5));
}

.skill-title {
  @apply mx-1.5 my-2.5 w-max rounded-full bg-dark-graphite px-3 py-1.5 text-1 font-500
    text-paper/85 transition-all duration-200;
}

@media (min-width: 768px) {
  .skills-list {
    @apply mb-5 grid-cols-4;
  }

  .skill-title {
    @apply text-2;
  }
}

@media (min-width: 1024px) {
  .skills-list {
    @apply grid-cols-8;
  }
}
</style>
