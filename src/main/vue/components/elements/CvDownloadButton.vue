<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Download } from 'lucide-vue-next'

import { useCvExport } from '@/composables/useCvExport'

const props = defineProps<{
  fileName: string
}>()

const { t } = useI18n()

const { isGeneratingPdf, downloadCv } = useCvExport(() => props.fileName)
</script>

<template>
  <button
    class="cv-download cv-download--attached"
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
  @apply flex w-full items-center justify-center gap-2 rounded-full bg-transparent px-4 py-2.5
    text-1 font-500 tracking-wider text-paper backdrop-blur-sm transition-colors duration-200
    ease-out;
}

.cv-download:hover,
.cv-download:focus-visible {
  @apply text-ember-orange;
}

.cv-download:disabled {
  @apply cursor-wait opacity-60;
}

.cv-download-icon {
  @apply transition-transform duration-200;
}

.cv-download:hover .cv-download-icon {
  @apply -translate-y-0.5;
}

.cv-download-spinner {
  @apply inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent;
}

.cv-download--attached {
  @apply absolute right-0 bottom-0 left-0 -mx-4 w-auto rounded-none rounded-b-4xl
    bg-onyx/60;
}

@media (min-width: 580px) {
  .cv-download--attached {
    @apply -mx-7.5 -mb-7.5;
  }
}

@media (min-width: 768px) {
  .cv-download {
    @apply px-5 py-3 text-2;
  }
}
</style>
