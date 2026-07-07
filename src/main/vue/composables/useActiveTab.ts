import { tryOnScopeDispose } from '@vueuse/core'
import { ref } from 'vue'

import { NAV_TABS } from '@/constants/pages'

const VALID_TAB_IDS = NAV_TABS.map((tab) => tab.id)

const getInitialTab = (): string => {
  const hash = window.location.hash.slice(1)
  return hash && VALID_TAB_IDS.includes(hash) ? hash : NAV_TABS[0].id
}

export const activeTab = ref(getInitialTab())

const handleHashChange = () => {
  const hash = window.location.hash.slice(1)
  if (hash && VALID_TAB_IDS.includes(hash)) {
    activeTab.value = hash
  }
}

const stopHashListener = () => window.removeEventListener('hashchange', handleHashChange)

export function useActiveTabListener() {
  window.addEventListener('hashchange', handleHashChange)
  tryOnScopeDispose(stopHashListener)
}

export const setActiveTab = (id: string) => {
  if (VALID_TAB_IDS.includes(id)) {
    activeTab.value = id
    window.location.hash = id
  }
}
