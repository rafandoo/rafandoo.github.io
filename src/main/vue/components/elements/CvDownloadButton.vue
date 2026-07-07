<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Download } from 'lucide-vue-next'

import { useCvExport } from '@/composables/useCvExport'

const props = defineProps<{
  fileName: string
  fixed?: boolean
}>()

const { t } = useI18n()

const { isGeneratingPdf, downloadCv } = useCvExport(() => props.fileName)
</script>

<template>
  <button
    class="cv-download"
    :class="{ 'cv-download--fixed': fixed }"
    :aria-label="t('common.export_cv')"
    :disabled="isGeneratingPdf"
    @click="downloadCv"
  >
    <Download v-if="!isGeneratingPdf" class="cv-download-icon" :size="18" />
    <span v-else class="cv-download-spinner" aria-hidden="true" />
    <span class="cv-download-label">{{ t('common.export_cv') }}</span>
  </button>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.cv-download {
  @apply flex w-full items-center justify-center gap-2 rounded-full border border-ember-orange/60 bg-onyx/80 px-4 py-2.5
    text-1 font-500 text-ember-orange backdrop-blur-sm transition-all duration-300 ease-in-out;
}

.cv-download--fixed {
  @apply fixed right-4 bottom-4 z-50 w-auto;
}

.cv-download:hover,
.cv-download:focus-visible {
  @apply border-ember-orange bg-dark-graphite;
}

.cv-download:disabled {
  @apply cursor-wait opacity-80;
}

.cv-download-spinner {
  @apply inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent;
}

@media (min-width: 768px) {
  .cv-download {
    @apply px-5 py-3 text-3;
  }

  .cv-download--fixed {
    @apply right-6 bottom-6;
  }
}
</style>
