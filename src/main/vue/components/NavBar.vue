<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import LanguageSwitch from '@/components/elements/LanguageSwitch.vue'
import { activeTab } from '@/composables/useActiveTab'
import { resetRevealStates } from '@/composables/useReveal'
import { NAV_TABS } from '@/constants/pages'

const { t } = useI18n()

const changeTab = (id: string) => {
  if (id === activeTab.value) {
    return
  }

  activeTab.value = id
  window.scrollTo({ top: 0, behavior: 'smooth' })
  resetRevealStates()
}
</script>

<template>
  <nav class="navbar">
    <ul class="navbar-list" role="tablist">
      <li v-for="tab in NAV_TABS" :key="tab.id" class="navbar-item" role="presentation">
        <button
          :id="`${tab.id}-tab`"
          class="navbar-link"
          :class="{ active: activeTab === tab.id }"
          role="tab"
          :aria-selected="activeTab === tab.id"
          :aria-controls="`${tab.id}-panel`"
          @click="changeTab(tab.id)"
        >
          {{ t(tab.label) }}
        </button>
      </li>
      <li class="navbar-item">
        <LanguageSwitch />
      </li>
    </ul>
  </nav>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.navbar {
  @apply fixed bottom-0 left-0 z-10 w-full rounded-t-xl bg-onyx/75 shadow-2 backdrop-blur-md;
}

.navbar-list {
  @apply flex flex-wrap items-center justify-center px-2;
}

.navbar-link {
  @apply relative px-4 py-3 text-1 text-paper transition-all duration-200 ease-out;
}

.navbar-link::after {
  @apply absolute right-4 bottom-2 left-4 h-0.5 origin-center scale-x-0 bg-ember-orange
    transition-transform duration-300 ease-out content-[""];
}

.navbar-link:hover {
  @apply -translate-y-0.5 text-white;
}

.navbar-link:hover::after,
.navbar-link:focus::after,
.navbar-link.active::after {
  @apply scale-x-100;
}

.navbar-link.active {
  @apply font-500 text-white;
}

@media (min-width: 580px) {
  .navbar {
    @apply rounded-t-4xl;
  }

  .navbar-list {
    @apply gap-2;
  }

  .navbar-link {
    @apply text-3;
  }
}

@media (min-width: 768px) {
  .navbar-link {
    @apply text-5;
  }

  .navbar-list {
    @apply gap-8;
  }
}

@media (min-width: 1024px) {
  .navbar {
    @apply absolute top-0 right-0 bottom-auto left-auto w-max rounded-tl-none rounded-bl-4xl
      px-5 shadow-none;
  }

  .navbar-list {
    @apply gap-8;
  }

  .navbar-link {
    @apply font-500;
  }
}
</style>
