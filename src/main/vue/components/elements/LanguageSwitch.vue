<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronDown } from 'lucide-vue-next'

import {
  AVAILABLE_LOCALES,
  LOCALE_DISPLAY_NAMES,
  getCurrentLocale,
  changeLanguage,
  type LocaleType,
} from '@/i18n'

const isOpen = ref(false)
const currentLocale = ref<LocaleType>(getCurrentLocale())
const buttonRef = ref<HTMLElement | null>(null)
const dropdownStyle = ref<Record<string, string>>({})

function updatePosition() {
  if (!buttonRef.value) {
    return
  }

  const rect = buttonRef.value.getBoundingClientRect()
  const openUpward = window.innerWidth < 1024

  dropdownStyle.value = {
    position: 'fixed',
    left: `${rect.left + rect.width / 2}px`,
    transform: 'translateX(-50%)',
    ...(openUpward
      ? { bottom: `${window.innerHeight - rect.top + 8}px` }
      : { top: `${rect.bottom + 8}px` }),
  }
}

function toggleDropdown() {
  if (!isOpen.value) {
    updatePosition()
  }
  isOpen.value = !isOpen.value
}

function selectLocale(locale: LocaleType) {
  changeLanguage(locale)
  currentLocale.value = locale
  isOpen.value = false
}

function handleClickOutside(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('.language-switch') && !target.closest('.language-dropdown')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  window.addEventListener('resize', updatePosition)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
  window.removeEventListener('resize', updatePosition)
})
</script>

<template>
  <div class="language-switch">
    <button ref="buttonRef" class="language-button" @click.stop="toggleDropdown">
      <span class="language-label">{{ LOCALE_DISPLAY_NAMES[currentLocale] }}</span>
      <ChevronDown class="chevron" :class="{ 'chevron-open': isOpen }" />
    </button>
    <Teleport to="body">
      <Transition name="dropdown">
        <div v-if="isOpen" class="language-dropdown" :style="dropdownStyle">
          <button
            v-for="locale in AVAILABLE_LOCALES"
            :key="locale"
            class="dropdown-item"
            :class="{ 'dropdown-item-active': locale === currentLocale }"
            @click.stop="selectLocale(locale)"
          >
            {{ LOCALE_DISPLAY_NAMES[locale] }}
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
@reference "#/assets/css/style.css";

.language-switch {
  @apply relative overflow-visible px-2 py-5;
}

.language-button {
  @apply flex cursor-pointer items-center border-none bg-transparent p-0 text-paper;
}

.language-button:focus {
  @apply outline-none;
}

.language-label {
  @apply mr-1 text-1 font-medium;
}

.chevron {
  @apply size-4 transition-transform duration-200;
}

.chevron-open {
  @apply rotate-180;
}

.language-dropdown {
  @apply z-9999 min-w-15 rounded-xl border border-dark-graphite bg-onyx py-1 shadow-lg;
}

.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-200 ease-out;
}

.dropdown-enter-from,
.dropdown-leave-to {
  @apply scale-95 opacity-0;
}

.dropdown-enter-to,
.dropdown-leave-from {
  @apply scale-100 opacity-100;
}

.dropdown-item {
  @apply block w-full cursor-pointer border-none bg-transparent px-4 py-2 text-center text-1
    text-paper;
}

.dropdown-item:hover {
  @apply bg-dark-graphite;
}

.dropdown-item:focus {
  @apply bg-dark-graphite outline-none;
}

.dropdown-item-active {
  @apply text-ember-orange;
}

@media (min-width: 580px) {
  .language-label {
    @apply text-3;
  }

  .dropdown-item {
    @apply text-3;
  }

  .chevron {
    @apply size-4;
  }
}
</style>
