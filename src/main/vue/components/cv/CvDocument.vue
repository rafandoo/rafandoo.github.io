<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import personalInfo from '@/data/PersonalInfo'
import experiences from '@/data/Experiences'
import education from '@/data/Education'
import type { AcademicItem, CourseItem } from '@/types/Education'

defineProps<{ preview?: boolean }>()

const { t } = useI18n()

const byStartDateAsc = (a: { startDate: string }, b: { startDate: string }) =>
  a.startDate.localeCompare(b.startDate)

const sortedExperiences = computed(() =>
  Object.fromEntries(
    Object.entries(experiences).map(([key, experience]) => [
      key,
      { ...experience, items: [...experience.items].sort(byStartDateAsc) },
    ]),
  ),
)

const cvSocialLinks = computed(() =>
  personalInfo.socialLinks
    .filter((social) => social.visibleOnCv)
    .map((social) => ({
      ...social,
      displayUrl: social.url.replace(/^https?:\/\//, ''),
    })),
)
</script>

<template>
  <div class="cv-a4" :class="{ preview: preview }">
    <header class="cv-header">
      <div class="cv-header-left">
        <h1>{{ personalInfo.name }}</h1>
        <p class="cv-headline">{{ t(personalInfo.me.headline) }}</p>
      </div>
      <ul class="cv-contacts">
        <li class="cv-location">{{ personalInfo.contact.location }}</li>
        <li>{{ personalInfo.contact.email }}</li>
        <li>{{ personalInfo.contact.phone }}</li>
        <li v-for="s in cvSocialLinks" :key="s.name">
          {{ s.displayUrl }}
        </li>
      </ul>
    </header>

    <div class="cv-divider"></div>

    <section class="cv-section">
      <h2>{{ t('cv.summary') }}</h2>
      <p class="cv-summary">{{ t(personalInfo.me.summary) }}</p>
    </section>

    <section class="cv-section">
      <h2>{{ t('cv.professional_experience') }}</h2>
      <div v-for="experience in sortedExperiences" :key="experience.title" class="cv-company">
        <h3>{{ experience.title }}</h3>
        <div v-for="item in experience.items" :key="item.title" class="cv-item">
          <div class="cv-item-head">
            <span>{{ t(item.title) }}</span>
            <span class="cv-item-date">{{ t(item.date) }}</span>
          </div>
          <p>{{ t(item.description) }}</p>
        </div>
      </div>
    </section>

    <template v-for="section in education" :key="section.id">
      <section class="cv-section">
        <h2>{{ t(section.title) }}</h2>
        <template v-if="section.icon === 'graduation'">
          <div
            v-for="(item, idx) in section.items as AcademicItem[]"
            :key="idx"
            class="cv-institution"
          >
            <h3>{{ t(item.institution) }}</h3>
            <div class="cv-item">
              <div class="cv-item-head">
                <span>{{ t(item.title) }}</span>
                <span class="cv-item-date">{{ t(item.date) }}</span>
              </div>
              <p>{{ t(item.description) }}</p>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            v-for="(item, idx) in (section.items as CourseItem[]).filter(
              (item) => item.visibleOnCv,
            )"
            :key="idx"
            class="cv-course"
          >
            <div class="cv-item-head">
              <span class="cv-course-title">{{ t(item.title) }}</span>
              <span class="cv-item-date">{{ t(item.date) }}</span>
            </div>
            <p class="cv-course-issuer">{{ t(item.issuer) }}</p>
          </div>
        </template>
      </section>
    </template>
  </div>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.cv-a4 {
  display: none;
}

.cv-a4.preview {
  @apply block! min-h-[297mm] w-[210mm] bg-white font-sans leading-[1.4];
  padding: 18mm 16mm;
  font-size: 10.5pt;
}

.cv-a4.export {
  @apply fixed top-0 left-[-10000px] -z-1 block! min-h-[297mm] w-[210mm] bg-white p-0
    font-sans leading-[1.4];
  font-size: 10.5pt;
}

.cv-header {
  @apply flex items-center justify-between pb-3;
}

.cv-header-left {
  @apply self-end;
}

.cv-header-left h1 {
  @apply text-9 font-800 tracking-tight text-charcoal-black;
}

.cv-headline {
  @apply text-3 font-600 tracking-wide text-ember-orange uppercase;
}

.cv-contacts {
  @apply text-right text-1.5 leading-relaxed text-dark-graphite;
}

.cv-contacts li {
  @apply flex items-center justify-end gap-1.5;
}

.cv-location {
  @apply text-jet/75;
}

.cv-divider {
  @apply mx-auto h-0.75 w-full bg-ember-orange;
}

.cv-section {
  @apply mt-5 break-inside-avoid;
}

.cv-section > h2 {
  @apply mb-2.5 border-b border-paper-dark/40 pb-1 text-1.5 font-800 tracking-widest text-ember-orange
    uppercase;
}

.cv-summary {
  @apply text-justify text-3 leading-relaxed text-dark-graphite;
}

.cv-company > h3 {
  @apply mt-4 mb-2 text-4 font-700 text-dark-graphite;
}

.cv-institution > h3 {
  @apply mt-4 mb-2 text-4 font-700 text-dark-graphite;
}

.cv-item {
  @apply mb-3 break-inside-avoid border-l-2 border-l-ember-orange/60 pl-3;
}

.cv-item-head {
  @apply mb-1 flex items-baseline justify-between text-3 font-700 text-dark-graphite;
}

.cv-item-date {
  @apply shrink-0 text-3 font-600 text-ember-orange;
}

.cv-item p {
  @apply text-justify text-3 leading-snug text-dark-graphite;
}

.cv-course {
  @apply mt-4 mb-3 break-inside-avoid border-l-2 border-l-ember-orange/60 pl-3;
}

.cv-course-title {
  @apply text-3 font-600 text-dark-graphite;
}

.cv-course-issuer {
  @apply text-3 leading-snug text-dark-graphite italic;
}
</style>
