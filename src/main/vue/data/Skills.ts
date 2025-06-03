import type { SkillCategory } from '@/types/Skills'

export default {
  programmingLanguages: {
    title: 'personal.skills.programming_languages',
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
        title: 'PHP',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
      },
      {
        title: 'JavaScript',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      },
    ],
  } satisfies SkillCategory,
  frameworks: {
    title: 'personal.skills.frameworks',
    items: [
      {
        title: 'Quarkus',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quarkus/quarkus-original.svg',
      },
      {
        title: 'Hibernate',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hibernate/hibernate-original.svg',
      },
      {
        title: 'JUnit 5',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/junit/junit-original.svg',
      },
      {
        title: 'Tomcat',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tomcat/tomcat-original.svg',
      },
      {
        title: 'Pandas',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg',
      },
      {
        title: 'Matplotlib',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg',
      },
      {
        title: 'NumPy',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg',
      },
      {
        title: 'Seaborn',
        logo: new URL('#/assets/img/skills/seaborn.svg', import.meta.url).href,
      },
      {
        title: 'Selenium',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg',
      },
      {
        title: 'Laravel',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
      },
      {
        title: 'Node.JS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
      },
      {
        title: 'Vue.JS',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
      },
    ],
  } satisfies SkillCategory,
  ai: {
    title: 'personal.skills.ai',
    items: [
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
  tools: {
    title: 'personal.skills.tools',
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
      {
        title: 'JMeter',
        logo: new URL('#/assets/img/skills/jmeter.svg', import.meta.url).href,
      },
      {
        title: 'Jupyter',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
      },
    ],
  } satisfies SkillCategory,
  devops: {
    title: 'personal.skills.devops',
    items: [
      {
        title: 'Docker',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      },
      {
        title: 'Jenkins',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
      },
    ],
  } satisfies SkillCategory,
  databases: {
    title: 'personal.skills.databases',
    items: [
      {
        title: 'MySQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
      },
      {
        title: 'PostgreSQL',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      },
      {
        title: 'SQLite',
        logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
      },
    ],
  } satisfies SkillCategory,
}
