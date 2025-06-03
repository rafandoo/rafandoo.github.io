import type { Projects } from '@/types/Project'

const projects: Projects = {
  StockPrediction: {
    title: 'personal.projects.stock_prediction.title',
    subtitle: 'personal.projects.stock_prediction.subtitle',
    category: ['AI', 'Machine Learning', 'Python'],
    img: new URL('#/assets/img/projects/stock.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/previsao-acoes',
  },
  FInv: {
    title: 'personal.projects.finv.title',
    subtitle: 'personal.projects.finv.subtitle',
    category: ['Java'],
    img: new URL('#/assets/img/projects/finv.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/finv',
  },
  CUP: {
    title: 'personal.projects.cup.title',
    subtitle: 'personal.projects.cup.subtitle',
    category: ['Java'],
    img: new URL('#/assets/img/projects/cup.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/cup',
  },
  PomoTimer: {
    title: 'personal.projects.pomotimer.title',
    subtitle: 'personal.projects.pomotimer.subtitle',
    category: ['Web App', 'Vue.JS'],
    img: new URL('#/assets/img/projects/pomotimer.webp', import.meta.url).href,
    link: 'https://rafandoo.github.io/pomotimer-lite/',
  },
  StrokePrediction: {
    title: 'personal.projects.stroke_prediction.title',
    subtitle: 'personal.projects.stroke_prediction.subtitle',
    category: ['AI', 'Machine Learning', 'Python'],
    img: new URL('#/assets/img/projects/stroke.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/predicao-avc',
  },
  SpeedTest: {
    title: 'personal.projects.speed_test.title',
    subtitle: 'personal.projects.speed_test.subtitle',
    category: ['Python'],
    img: new URL('#/assets/img/projects/speed-test.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/speedtest',
  },
  EightQueens: {
    title: 'personal.projects.eight_queens.title',
    subtitle: 'personal.projects.eight_queens.subtitle',
    category: ['AI', 'Genetic Algorithm', 'Python'],
    img: new URL('#/assets/img/projects/eight-queens.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/8-rainhas',
  },
  HelpDesk: {
    title: 'personal.projects.helpdesk.title',
    subtitle: 'personal.projects.helpdesk.subtitle',
    category: ['Web App', 'Laravel', 'PHP'],
    img: new URL('#/assets/img/projects/helpdesk.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/HelpDeskRplus',
  },
}

export default projects
