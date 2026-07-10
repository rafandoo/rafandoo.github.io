<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { BriefcaseBusiness } from 'lucide-vue-next'

import type { Experience, Experiences } from '@/types/Experience'
import { PAGE_EXPERIENCE } from '@/constants/pages'

const { t } = useI18n()

const props = defineProps<{
  experiences: Experiences
}>()

const byStartDateAsc = (a: { startDate: string }, b: { startDate: string }) =>
  a.startDate.localeCompare(b.startDate)

const sortedExperiences = computed<Record<string, Experience>>(() => {
  const entries = Object.entries(props.experiences).map(([key, experience]) => [
    key,
    { ...experience, items: [...experience.items].sort(byStartDateAsc) },
  ])

  return Object.fromEntries(entries) as Record<string, Experience>
})
</script>

<template>
  <article class="resume" :data-page="PAGE_EXPERIENCE.id">
    <header>
      <h2 class="article-title">{{ t(PAGE_EXPERIENCE.label) }}</h2>
    </header>

    <section
      v-for="(experience, key, idx) in sortedExperiences"
      :key="key"
      v-reveal="idx * 80"
      class="timeline"
    >
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
        <li v-for="item in experience.items" :key="item.title" class="timeline-item">
          <h4 class="timeline-item-title">{{ t(item.title) }}</h4>
          <span>{{ t(item.date) }}</span>
          <p class="timeline-text">{{ t(item.description) }}</p>
        </li>
      </ol>
    </section>
  </article>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.timeline {
  --tl-rail: 1.25rem;
  @apply mb-4;
}

.timeline .title-wrapper {
  @apply mb-2 flex items-center gap-2.5;
}

.timeline-list {
  margin-left: calc(var(--tl-rail) * 2);
  @apply text-3;
}

.timeline-item {
  @apply relative;
}

.timeline-item:not(:last-child) {
  @apply mb-5;
}

.timeline-item-title {
  @apply mb-1.5 text-3 font-500;
}

.timeline-list span {
  @apply leading-relaxed font-400 text-ember-orange;
}

.timeline-item:only-child::before,
.timeline-item:not(:last-child)::before {
  @apply absolute -top-5 w-0.5 bg-dark-graphite content-[""];
  left: calc(var(--tl-rail) * -1);
  transform: translateX(-50%);
}

.timeline-item:only-child::before {
  @apply h-9;
}

.timeline-item:not(:last-child)::before {
  @apply h-[calc(100%+50px)];
}

.timeline-item::after {
  @apply absolute top-1.5 h-1.5 w-1.5 rounded-[50%] bg-ember-orange shadow-3 content-[""];
  left: calc(var(--tl-rail) * -1);
  transform: translateX(-50%);
}

.timeline-text {
  @apply text-justify leading-relaxed font-300 text-paper/85;
}

.timeline-logo-box {
  @apply relative z-1 flex h-10 w-10 items-center justify-center;
}

.timeline-logo {
  @apply h-3/4 w-3/4 object-cover transition duration-250 ease-in-out;
}

.experience-briefcase {
  @apply text-ember-orange;
}

@media (min-width: 580px) {
  .timeline {
    --tl-rail: 1.5rem;
  }

  .timeline-logo-box {
    @apply h-12 w-12;
  }

  .timeline-item::after {
    @apply h-2 w-2;
  }

  .timeline-logo {
    @apply h-4/5 w-4/5;
  }
}

@media (min-width: 768px) {
  .timeline-list {
    @apply text-5;
  }

  .timeline-item-title {
    @apply text-5;
  }

  .timeline-item {
    @apply px-1.5;
  }
}

@media (min-width: 1250px) {
  .timeline-text {
    @apply max-w-3xl;
  }
}
</style>
