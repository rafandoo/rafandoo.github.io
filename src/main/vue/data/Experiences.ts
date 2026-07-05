import type { Experiences } from '@/types/Experience'

const experiences: Experiences = {
  IPM: {
    title: 'IPM Sistemas',
    logo: new URL('#/assets/img/experiences/ipm.webp', import.meta.url).href,
    items: [
      {
        title: 'me.experiences.companies.ipm.items[1].title',
        date: 'me.experiences.companies.ipm.items[1].date',
        description: 'me.experiences.companies.ipm.items[1].description',
      },
      {
        title: 'me.experiences.companies.ipm.items[0].title',
        date: 'me.experiences.companies.ipm.items[0].date',
        description: 'me.experiences.companies.ipm.items[0].description',
      },
    ],
  },
  NewTech: {
    title: 'NewTech SC',
    logo: new URL('#/assets/img/experiences/newtech.webp', import.meta.url).href,
    items: [
      {
        title: 'me.experiences.companies.newtech.items[1].title',
        date: 'me.experiences.companies.newtech.items[1].date',
        description: 'me.experiences.companies.newtech.items[1].description',
      },
      {
        title: 'me.experiences.companies.newtech.items[0].title',
        date: 'me.experiences.companies.newtech.items[0].date',
        description: 'me.experiences.companies.newtech.items[0].description',
      },
    ],
  },
  Luxpoli: {
    title: 'Luxpoli Tintas',
    items: [
      {
        title: 'me.experiences.companies.luxpoli.title',
        date: 'me.experiences.companies.luxpoli.date',
        description: 'me.experiences.companies.luxpoli.description',
      },
    ],
  },
}

export default experiences
