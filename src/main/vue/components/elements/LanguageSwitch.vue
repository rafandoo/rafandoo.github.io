<script lang="ts" setup>
import { AVAILABLE_LOCALES, toggleLanguage } from '@/i18n'
import { Earth } from 'lucide-vue-next'
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
  @apply py-5 px-2;
}

.language-button {
  @apply bg-transparent border-none cursor-pointer p-0 text-[#d6d6d6];
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
