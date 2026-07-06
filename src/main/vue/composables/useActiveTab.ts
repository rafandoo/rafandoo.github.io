import { ref } from 'vue'

import { PAGE_ABOUT_ME } from '@/constants/pages'

export const activeTab = ref(PAGE_ABOUT_ME.id)
