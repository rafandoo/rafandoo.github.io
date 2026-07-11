<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScroll, useSwipe } from '@vueuse/core'
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

import LanguageSwitch from '@/components/elements/LanguageSwitch.vue'
import { useActiveTab } from '@/composables/useActiveTab'
import { resetRevealStates } from '@/composables/useReveal'
import { NAV_TABS } from '@/constants/pages'

const { t } = useI18n()

const { activeTab, setActiveTab } = useActiveTab()

const navListRef = ref<HTMLUListElement | null>(null)

const { x, arrivedState } = useScroll(navListRef, { behavior: 'smooth' })
const { isSwiping } = useSwipe(navListRef)

const scrollBy = (direction: 'left' | 'right') => {
  const el = navListRef.value
  if (!el) {
    return
  }
  const scrollAmount = Math.min(100, el.clientWidth * 0.5)
  x.value += direction === 'left' ? -scrollAmount : scrollAmount
}

const changeTab = (id: string) => {
  if (id === activeTab.value) {
    return
  }
  setActiveTab(id)
  window.scrollTo({ top: 0, behavior: 'smooth' })
  resetRevealStates()
}

onMounted(() => {
  nextTick(() => {
    const el = navListRef.value
    if (!el) {
      return
    }

    arrivedState.right = el.scrollWidth <= el.clientWidth
    arrivedState.left = true
  })
})
</script>

<template>
  <nav class="navbar">
    <button
      v-show="!arrivedState.left"
      class="nav-chevron left"
      aria-label="Scroll left"
      @click="scrollBy('left')"
    >
      <ChevronLeft :size="18" />
    </button>
    <ul ref="navListRef" class="navbar-list" role="tablist">
      <li v-for="tab in NAV_TABS" :key="tab.id" class="navbar-item" role="presentation">
        <button
          :id="`${tab.id}-tab`"
          class="navbar-link"
          :class="{ active: activeTab === tab.id, 'no-hover': isSwiping }"
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
    <button
      v-show="!arrivedState.right"
      class="nav-chevron right"
      aria-label="Scroll right"
      @click="scrollBy('right')"
    >
      <ChevronRight :size="18" />
    </button>
  </nav>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.navbar {
  @apply fixed bottom-0 left-0 z-10 w-full rounded-t-xl bg-onyx/75 shadow-2 backdrop-blur-md;
}

.nav-chevron {
  @apply absolute top-1/2 z-10 flex h-8 w-8 -translate-y-1/2 cursor-pointer items-center justify-center
    rounded-full bg-onyx/90 text-paper shadow-md transition-all duration-200;
}

.nav-chevron:hover {
  @apply bg-onyx text-white;
}

.nav-chevron.left {
  @apply left-1;
}

.nav-chevron.right {
  @apply right-1;
}

.navbar-list {
  @apply flex touch-pan-x scrollbar-none items-center justify-start overflow-x-auto px-2;
  -webkit-overflow-scrolling: touch;
}

.navbar-list::-webkit-scrollbar {
  display: none;
}

.navbar-item {
  @apply shrink-0;
}

@media (min-width: 580px) {
  .nav-chevron {
    display: none;
  }

  .navbar-list {
    @apply flex-wrap justify-center gap-2 overflow-x-visible;
  }
}

.navbar-link {
  @apply relative px-4 py-3 text-1 text-paper;
}

.navbar-link::after {
  @apply absolute right-4 bottom-2 left-4 h-0.5 origin-center scale-x-0 bg-ember-orange
    transition-transform duration-300 ease-out content-[""];
}

.navbar-link.active::after {
  @apply scale-x-100;
}

.navbar-link.no-hover {
  @apply pointer-events-none!;
}

@media (min-width: 580px) {
  .navbar-link::after {
    @apply transition-transform duration-300 ease-out;
  }

  .navbar-link:hover::after,
  .navbar-link:focus::after {
    @apply scale-x-100;
  }

  .navbar-link:hover {
    @apply -translate-y-0.5 text-white;
  }
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
    @apply text-3 transition-all duration-200 ease-out;
  }

  .navbar-link:hover {
    @apply -translate-y-0.5 text-white;
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
