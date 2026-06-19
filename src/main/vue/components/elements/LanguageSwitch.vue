<script lang="ts" setup>
import { Earth } from 'lucide-vue-next'

import { AVAILABLE_LOCALES, toggleLanguage } from '@/i18n'
</script>

<template>
  <div class="language-switch">
    <button class="language-button" @click="toggleLanguage(AVAILABLE_LOCALES)">
      <Earth class="language-icon" />
    </button>
  </div>
</template>

<style scoped>
@import 'tailwindcss';
@layer theme, base, components, utilities;

.language-switch {
  @apply px-2 py-5;
}

.language-button {
  @apply cursor-pointer border-none bg-transparent p-0 text-[#d6d6d6];
}

.language-button:focus {
  @apply outline-none;
}

.language-icon {
  @apply size-5;
}

@media (min-width: 768px) {
  .language-icon {
    @apply size-6;
  }
}
</style>
