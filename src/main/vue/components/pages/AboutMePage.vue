<script setup lang="ts">
import { $t } from '@/i18n'
import { computed } from 'vue'
import { PAGE_ABOUT_ME } from '@/constants/pages.ts'

const props = defineProps<{
  aboutMeText: string
}>()

const aboutMeParagraphs = computed(() => {
  return props.aboutMeText.split('\n')
})
</script>

<template>
  <article class="about" :data-page="PAGE_ABOUT_ME">
    <h2 class="article-title">{{ $t('main.about_me') }}</h2>
    <div class="about-text">
      <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
        {{ paragraph }}
      </p>
    </div>
  </article>
</template>
