import { inject, provide, ref, type InjectionKey, type Ref } from 'vue'

import { NAV_TABS } from '@/constants/pages'

const VALID_TAB_IDS = NAV_TABS.map((tab) => tab.id)

export interface ActiveTabStore {
  activeTab: Ref<string>
  setActiveTab: (id: string) => void
}

const ACTIVE_TAB_KEY: InjectionKey<ActiveTabStore> = Symbol('activeTab')

const getInitialTab = (): string => {
  const hash = window.location.hash.slice(1)
  return hash && VALID_TAB_IDS.includes(hash) ? hash : NAV_TABS[0].id
}

export function provideActiveTab(): ActiveTabStore {
  const activeTab = ref(getInitialTab())

  const handleHashChange = () => {
    const hash = window.location.hash.slice(1)
    if (hash && VALID_TAB_IDS.includes(hash)) {
      activeTab.value = hash
    }
  }

  const setActiveTab = (id: string) => {
    if (VALID_TAB_IDS.includes(id)) {
      activeTab.value = id
      window.location.hash = id
    }
  }

  window.addEventListener('hashchange', handleHashChange)
  window.addEventListener('beforeunload', () => {
    window.removeEventListener('hashchange', handleHashChange)
  })

  const store: ActiveTabStore = { activeTab, setActiveTab }

  provide(ACTIVE_TAB_KEY, store)
  return store
}

export function useActiveTab(): ActiveTabStore {
  const store = inject(ACTIVE_TAB_KEY)
  if (!store) {
    throw new Error('useActiveTab deve ser usado dentro de um componente com provideActiveTab')
  }
  return store
}
