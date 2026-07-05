<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { GraduationCap, Award, Calendar, ArrowUpRight } from 'lucide-vue-next'

import type { Education, AcademicItem, CourseItem } from '@/types/Education'
import { PAGE_EDUCATION } from '@/constants/pages'

const { t } = useI18n()

defineProps<{
  education: Education
}>()
</script>

<template>
  <article class="resume" :data-page="PAGE_EDUCATION.id">
    <header>
      <h2 class="article-title">{{ t(PAGE_EDUCATION.label) }}</h2>
    </header>

    <template v-for="section in education" :key="section.id">
      <section v-reveal class="education-section">
        <div class="section-header">
          <div class="section-icon-box">
            <GraduationCap v-if="section.icon === 'graduation'" class="section-icon" />
            <Award v-else class="section-icon" />
          </div>
          <h3>{{ t(section.title) }}</h3>
        </div>

        <div v-if="section.icon === 'graduation'" class="academic-grid">
          <div
            v-for="(item, idx) in section.items as AcademicItem[]"
            :key="idx"
            class="academic-card"
          >
            <div class="academic-card-left">
              <div class="institution-logo-box">
                <img
                  v-if="item.logo"
                  :src="item.logo"
                  :alt="t(section.title)"
                  class="institution-logo"
                  loading="lazy"
                />
                <GraduationCap v-else class="institution-logo-placeholder" />
              </div>
            </div>
            <div class="academic-card-content">
              <h4 class="academic-degree">{{ t(item.title) }}</h4>
              <p class="academic-institution">{{ t(item.institution) }}</p>
              <div class="academic-details">
                <span class="academic-detail">
                  <Calendar class="academic-detail-icon" />
                  {{ t(item.date) }}
                </span>
              </div>
              <p class="academic-description">{{ t(item.description) }}</p>
            </div>
          </div>
        </div>

        <div v-else class="courses-grid">
          <div v-for="(item, idx) in section.items as CourseItem[]" :key="idx" class="course-card">
            <div class="course-header">
              <div class="course-issuer-info">
                <img
                  v-if="item.issuerLogo"
                  :src="item.issuerLogo"
                  :alt="t(item.issuer)"
                  class="course-issuer-logo"
                  loading="lazy"
                />
                <span class="course-issuer">{{ t(item.issuer) }}</span>
              </div>
              <span class="course-date">{{ t(item.date) }}</span>
            </div>
            <h4 class="course-title">{{ t(item.title) }}</h4>
            <a
              v-if="item.credentialUrl"
              :href="item.credentialUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="course-link"
            >
              {{ t('common.view_credential') }}
              <ArrowUpRight class="course-link-icon" />
            </a>
          </div>
        </div>
      </section>
    </template>
  </article>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.education-section {
  @apply mb-6;
}

.section-header {
  @apply mb-3 flex items-center gap-2.5;
}

.section-icon-box {
  @apply relative z-1 flex h-10 w-10 items-center justify-center;
}

.section-icon {
  @apply h-3/4 w-3/4 text-ember-orange;
}

.academic-grid {
  @apply grid gap-4;
}

.academic-card {
  @apply grid grid-cols-[1fr_auto] gap-4 rounded-4xl border border-onyx/65 bg-onyx/65 p-4.5
    transition-all duration-200;
}

.academic-card:hover {
  @apply border-ember-orange bg-onyx;
}

.academic-card-left {
  @apply flex;
}

.institution-logo-box {
  @apply relative z-1 flex h-16 w-16 items-center justify-center;
}

.institution-logo {
  @apply h-full w-full rounded-xl object-contain;
}

.institution-logo-placeholder {
  @apply h-3/4 w-3/4 text-ember-orange;
}

.academic-card-content {
  @apply flex flex-col;
}

.academic-degree {
  @apply mb-1 text-3 leading-tight font-500 text-paper;
}

.academic-institution {
  @apply mb-1.5 text-2 font-400 text-paper/70;
}

.academic-details {
  @apply mb-2 flex flex-wrap gap-2;
}

.academic-detail {
  @apply flex items-center gap-1 text-1.5 font-300 text-paper/60;
}

.academic-detail-icon {
  @apply h-3 w-3;
}

.academic-description {
  @apply text-justify text-2 leading-relaxed font-300 text-paper/85;
}

.courses-grid {
  @apply grid grid-cols-1 gap-3;
}

.course-card {
  @apply flex h-full flex-col rounded-4xl border border-onyx/65 bg-onyx/65 p-4.5 transition-all duration-200;
}

.course-card:hover {
  @apply border-ember-orange bg-onyx;
}

.course-title {
  @apply mb-1.5 text-2 leading-tight font-500 text-paper;
}

.course-link {
  @apply mt-auto inline-flex items-center gap-1 self-start text-1.5 font-400 text-ember-orange
    transition-colors duration-200 hover:text-honey;
}

.course-header {
  @apply mb-2 flex items-center justify-between gap-2;
}

.course-issuer-info {
  @apply flex min-w-0 items-center gap-1.5;
}

.course-issuer-logo {
  @apply h-4 w-4 object-contain;
}

.course-issuer {
  @apply truncate text-1.5 font-400 text-paper/70;
}

.course-date {
  @apply shrink-0 text-1.5 font-400 text-ember-orange;
}

.course-title {
  @apply mb-1.5 text-2 leading-tight font-500 text-paper;
}

.course-link {
  @apply inline-flex items-center gap-1 text-1.5 font-400 text-ember-orange transition-colors
    duration-200 hover:text-honey;
}

.course-link-icon {
  @apply h-4 w-4;
}

@media (min-width: 580px) {
  .section-icon-box {
    @apply h-12 w-12;
  }

  .institution-logo-box {
    @apply h-20 w-20;
  }

  .academic-card {
    @apply p-4;
  }

  .academic-degree {
    @apply text-4;
  }

  .academic-institution {
    @apply text-3;
  }

  .academic-details {
    @apply gap-3;
  }

  .academic-detail {
    @apply text-2;
  }

  .academic-description {
    @apply text-3;
  }

  .courses-grid {
    @apply grid-cols-2;
  }
}

@media (min-width: 768px) {
  .institution-logo-box {
    @apply h-24 w-24;
  }

  .course-issuer-logo {
    @apply h-5 w-5;
  }

  .course-title {
    @apply text-3;
  }

  .course-date,
  .course-issuer,
  .course-link {
    @apply text-2;
  }
}

@media (min-width: 1250px) {
  .academic-description {
    @apply max-w-3xl;
  }
}
</style>
