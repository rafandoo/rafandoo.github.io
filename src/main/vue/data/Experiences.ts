import type { Experiences } from '@/types/Experience.ts'

const experiences: Experiences = {
  IPM: {
    title: 'IPM Sistemas',
    logo: new URL('#/assets/img/experiences/ipm.webp', import.meta.url).href,
    items: [
      {
        title: 'personal.experiences.ipm.items[1].title',
        date: 'personal.experiences.ipm.items[1].date',
        description: 'personal.experiences.ipm.items[1].description',
      },
      {
        title: 'personal.experiences.ipm.items[0].title',
        date: 'personal.experiences.ipm.items[0].date',
        description: 'personal.experiences.ipm.items[0].description',
      },
    ],
  },
  NewTech: {
    title: 'NewTech SC',
    logo: new URL('#/assets/img/experiences/newtech.webp', import.meta.url).href,
    items: [
      {
        title: 'personal.experiences.newtech.items[1].title',
        date: 'personal.experiences.newtech.items[1].date',
        description: 'personal.experiences.newtech.items[1].description',
      },
      {
        title: 'personal.experiences.newtech.items[0].title',
        date: 'personal.experiences.newtech.items[0].date',
        description: 'personal.experiences.newtech.items[0].description',
      },
    ],
  },
  Luxpoli: {
    title: 'Luxpoli Tintas',
    items: [
      {
        title: 'personal.experiences.luxpoli.title',
        date: 'personal.experiences.luxpoli.date',
        description: 'personal.experiences.luxpoli.description',
      },
    ],
  },
}

export default experiences
