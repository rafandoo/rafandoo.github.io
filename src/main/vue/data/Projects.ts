import type { Projects } from '@/types/Project'

const projects: Projects = {
  Tasker: {
    title: 'me.portfolio.projects.tasker.title',
    subtitle: 'me.portfolio.projects.tasker.subtitle',
    category: ['Microservice', 'Quarkus', 'Java'],
    img: new URL('#/assets/img/projects/tasker.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/tasker',
  },
  StockPrediction: {
    title: 'me.portfolio.projects.stock_prediction.title',
    subtitle: 'me.portfolio.projects.stock_prediction.subtitle',
    category: ['AI', 'Machine Learning', 'Python'],
    img: new URL('#/assets/img/projects/stock.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/previsao-acoes',
  },
  FInv: {
    title: 'me.portfolio.projects.finv.title',
    subtitle: 'me.portfolio.projects.finv.subtitle',
    category: ['Java'],
    img: new URL('#/assets/img/projects/finv.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/finv',
  },
  CUP: {
    title: 'me.portfolio.projects.cup.title',
    subtitle: 'me.portfolio.projects.cup.subtitle',
    category: ['Java'],
    img: new URL('#/assets/img/projects/cup.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/cup',
  },
  PomoTimer: {
    title: 'me.portfolio.projects.pomotimer.title',
    subtitle: 'me.portfolio.projects.pomotimer.subtitle',
    category: ['Web App', 'Vue.JS'],
    img: new URL('#/assets/img/projects/pomotimer.webp', import.meta.url).href,
    link: 'https://rafandoo.github.io/pomotimer-lite/',
  },
  StrokePrediction: {
    title: 'me.portfolio.projects.stroke_prediction.title',
    subtitle: 'me.portfolio.projects.stroke_prediction.subtitle',
    category: ['AI', 'Machine Learning', 'Python'],
    img: new URL('#/assets/img/projects/stroke.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/predicao-avc',
  },
  SpeedTest: {
    title: 'me.portfolio.projects.speed_test.title',
    subtitle: 'me.portfolio.projects.speed_test.subtitle',
    category: ['Python'],
    img: new URL('#/assets/img/projects/speed-test.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/speedtest',
  },
  EightQueens: {
    title: 'me.portfolio.projects.eight_queens.title',
    subtitle: 'me.portfolio.projects.eight_queens.subtitle',
    category: ['AI', 'Genetic Algorithm', 'Python'],
    img: new URL('#/assets/img/projects/eight-queens.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/8-rainhas',
  },
  HelpDesk: {
    title: 'me.portfolio.projects.helpdesk.title',
    subtitle: 'me.portfolio.projects.helpdesk.subtitle',
    category: ['Web App', 'Laravel', 'PHP'],
    img: new URL('#/assets/img/projects/helpdesk.webp', import.meta.url).href,
    link: 'https://github.com/rafandoo/HelpDeskRplus',
  },
}

export default projects
