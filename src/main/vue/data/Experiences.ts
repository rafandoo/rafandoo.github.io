import type { Experiences } from '@/types/Experience'

const experiences: Experiences = {
  Syonet: {
    title: 'Syonet S.A.',
    logo: new URL('#/assets/img/experiences/syonet.webp', import.meta.url).href,
    items: [
      {
        title: 'me.experiences.companies.syonet.items[0].title',
        date: 'me.experiences.companies.syonet.items[0].date',
        description: 'me.experiences.companies.syonet.items[0].description',
      },
    ],
  },
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
        title: 'me.experiences.companies.luxpoli.items[0].title',
        date: 'me.experiences.companies.luxpoli.items[0].date',
        description: 'me.experiences.companies.luxpoli.items[0].description',
      },
    ],
  },
}

export default experiences
