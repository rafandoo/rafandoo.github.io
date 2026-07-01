<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

import { PAGE_ABOUT_ME } from '@/constants/pages'

const { t } = useI18n()

const props = defineProps<{
  aboutMeText: string
}>()

const aboutMeParagraphs = computed(() =>
  props.aboutMeText.split('\n').filter((paragraph) => paragraph.trim().length > 0),
)
</script>

<template>
  <article class="about" :data-page="PAGE_ABOUT_ME.id">
    <h2 class="article-title">{{ t(PAGE_ABOUT_ME.label) }}</h2>
    <div class="about-text">
      <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </article>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.about-text {
  @apply text-justify text-3 leading-relaxed font-300 text-paper/85;
}

.about-text p {
  @apply mb-4;
}

@media (min-width: 768px) {
  .about-text {
    @apply text-5;
  }
}
</style>
