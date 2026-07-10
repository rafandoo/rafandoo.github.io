import type { SkillCategory } from '@/types/Skills'

export default {
  programmingLanguages: {
    title: 'me.skills.categories.programming_languages',
    items: [
      {
        title: 'Java',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
      },
      {
        title: 'Python',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      },
      {
        title: 'TypeScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      },
    ],
  } satisfies SkillCategory,
  backend: {
    title: 'me.skills.categories.backend',
    items: [
      {
        title: 'Quarkus',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original.svg',
      },
      {
        title: 'Hibernate',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg',
      },
    ],
  } satisfies SkillCategory,
  frontend: {
    title: 'me.skills.categories.frontend',
    items: [
      {
        title: 'Vue.JS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
      },
      {
        title: 'Tailwind',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
      },
      {
        title: 'Puppeteer',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg',
      },
    ],
  } satisfies SkillCategory,
  dataAi: {
    title: 'me.skills.categories.data_ai',
    items: [
      {
        title: 'Pandas',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      },
      {
        title: 'NumPy',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
      },
      {
        title: 'Matplotlib',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
      },
      {
        title: 'Seaborn',
        logo: new URL('#/assets/img/skills/seaborn.svg', import.meta.url).href,
      },
      {
        title: 'Jupyter',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
      },
      {
        title: 'TensorFlow',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg',
      },
      {
        title: 'Keras',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/keras/keras-original.svg',
      },
    ],
  } satisfies SkillCategory,
  testing: {
    title: 'me.skills.categories.testing',
    items: [
      {
        title: 'JUnit 5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg',
      },
      {
        title: 'Selenium',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
      },
      {
        title: 'JMeter',
        logo: new URL('#/assets/img/skills/jmeter.svg', import.meta.url).href,
      },
    ],
  } satisfies SkillCategory,
  messaging: {
    title: 'me.skills.categories.messaging',
    items: [
      {
        title: 'RabbitMQ',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
      },
    ],
  } satisfies SkillCategory,
  devops: {
    title: 'me.skills.categories.devops',
    items: [
      {
        title: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
      },
      {
        title: 'Jenkins',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
      },
      {
        title: 'Portainer',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/portainer/portainer-original.svg',
      },
    ],
  } satisfies SkillCategory,
  observability: {
    title: 'me.skills.categories.observability',
    items: [
      {
        title: 'Grafana',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg',
      },
      {
        title: 'Prometheus',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg',
      },
      {
        title: 'OpenTelemetry',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opentelemetry/opentelemetry-original.svg',
      },
    ],
  } satisfies SkillCategory,
  databases: {
    title: 'me.skills.categories.databases',
    items: [
      {
        title: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        title: 'MongoDB',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
      },
      {
        title: 'Redis',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
      },
    ],
  } satisfies SkillCategory,
  tools: {
    title: 'me.skills.categories.tools',
    items: [
      {
        title: 'Git',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      },
      {
        title: 'Postman',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg',
      },
      {
        title: 'Bruno',
        logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/bruno.webp',
      },
      {
        title: 'Jira',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg',
      },
      {
        title: 'Swagger',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original.svg',
      },
      {
        title: 'Gradle',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gradle/gradle-original.svg',
      },
      {
        title: 'Maven',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
      },
    ],
  } satisfies SkillCategory,
}
