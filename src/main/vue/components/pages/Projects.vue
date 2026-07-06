<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Eye } from 'lucide-vue-next'

import type { Projects } from '@/types/Project'
import { PAGE_PROJECTS } from '@/constants/pages'

const { t } = useI18n()

defineProps<{
  projects: Projects
}>()

function handleImgLoad(e: Event) {
  ;(e.target as HTMLImageElement).classList.add('is-loaded')
}
</script>

<template>
  <article class="portfolio" :data-page="PAGE_PROJECTS.id">
    <h2 class="article-title">{{ t(PAGE_PROJECTS.label) }}</h2>
    <div>
      <ul class="project-list">
        <li
          v-for="(project, key, idx) in projects"
          :key="key"
          v-reveal="idx * 80"
          class="project-item"
        >
          <a :href="project.link" target="_blank" rel="noopener noreferrer">
            <figure class="project-image">
              <div class="project-item-view-icon" aria-hidden="true">
                <Eye />
              </div>
              <img
                :src="project.img"
                :alt="t(project.title)"
                loading="lazy"
                @load="handleImgLoad"
              />
            </figure>

            <h3 class="project-title">{{ t(project.title) }}</h3>
            <div class="project-categories">
              <span
                v-for="(category, cIdx) in project.category"
                :key="cIdx"
                class="project-category"
              >
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

<style scoped>
@reference "#/assets/css/style.css";

.project-list {
  @apply mb-2.5 grid grid-cols-1 gap-8;
}

.project-item {
  @apply block;
}

.project-item > a {
  @apply w-full;
}

.project-image {
  @apply relative mb-4 h-48 w-full overflow-hidden rounded-2xl;
}

.project-image::before {
  @apply absolute top-0 left-0 z-1 h-full w-full bg-transparent transition duration-250 ease-in
    content-[""];
}

.project-item > a:hover .project-image::before {
  @apply bg-black/50;
}

.project-item-view-icon {
  @apply absolute top-1/2 left-1/2 z-1 rounded-full bg-dark-graphite p-4 text-ember-orange
    opacity-0 transition duration-200 ease-in;

  --scale: 0.8;
  transform: translate(-50%, -50%) scale(var(--scale));
}

.project-item > a:hover .project-item-view-icon {
  @apply opacity-100;
  --scale: 1;
}

.project-image img {
  @apply h-full w-full object-cover opacity-0 transition-all duration-300 ease-out;
}

/* eslint-disable-next-line vue-scoped-css/no-unused-selector */
.project-image img.is-loaded {
  @apply opacity-100;
}

.project-item > a:hover img {
  @apply scale-[1.1] transform-gpu;
}

.project-title {
  @apply ml-1.5 text-5 leading-snug font-400 text-paper capitalize;
}

.project-subtitle {
  @apply mt-2 ml-1.5 block text-2 leading-relaxed text-paper/85;
}

.project-categories {
  @apply mt-2 ml-1.5 flex flex-wrap gap-2;
}

.project-category {
  @apply w-max rounded-full bg-blaze/15 px-3 py-1 text-1 font-500 text-ember-orange
    transition-all duration-200;
}

@media (min-width: 450px) {
  .project-image {
    @apply h-auto;
  }
}

@media (min-width: 768px) {
  .project-list {
    @apply grid-cols-2;
  }

  .project-title {
    @apply text-4;
  }

  .project-subtitle {
    @apply text-3;
  }

  .project-category {
    @apply text-2;
  }
}

@media (min-width: 1024px) {
  .project-list {
    @apply grid-cols-3;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project-image::before {
    animation: none;
  }
}
</style>
