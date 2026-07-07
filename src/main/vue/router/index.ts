import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

import CvDocument from '@/components/cv/CvDocument.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/cv/preview',
    name: 'CvPreview',
    component: CvDocument,
    props: { preview: true },
  },
]

export default createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
