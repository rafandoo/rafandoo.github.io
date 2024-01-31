<template>
    <div class="main">
        <SideBar 
            my_name="Rafael Camargo"
            :sub_title="$t('personal.sub_title')"
            email="rafaelcamargo.inf@gmail.com"
            whatsapp_message="Ol%C3%A1!"
            phone="+55 (47) 99166-4002"
            :location="$t('personal.location')"
            github_user="rafandoo"
            instagram_user="rafandoo"
            linkedin_link="https://www.linkedin.com/in/rafaelcamargob"
        />
        <div class="main-content">
            <NavBar />
            <div class="tab-content active" id="about">
                <AboutMe 
                    :about_me_paragraphs="[
                        $t('personal.about_me_one'),
                        $t('personal.about_me_two'),
                        $t('personal.about_me_three'),
                    ]"
                />
            </div>
            <div class="tab-content" id="portfolio">
                <PortfolioPage 
                    :projects="{
                        'StockPrediction': {
                            'title': $t('personal.projects.stock_prediction.title'),
                            'subtitle': $t('personal.projects.stock_prediction.subtitle'),
                            'category': ['AI', 'Machine Learning', 'Python'],
                            'img': 'img/stock.webp',
                            'link': 'https://github.com/rafandoo/previsao-acoes'
                        },
                        'FInv': {
                            'title': $t('personal.projects.finv.title'),
                            'subtitle': $t('personal.projects.finv.subtitle'),
                            'category': ['Java'],
                            'img': 'img/finv.webp',
                            'link': 'https://github.com/rafandoo/finv'
                        },
                        'PomoTimer': {
                            'title': $t('personal.projects.pomotimer.title'),
                            'subtitle': $t('personal.projects.pomotimer.subtitle'),
                            'category': ['Web App', 'Vue.JS'],
                            'img': 'img/pomotimer.webp',
                            'link': 'https://rafandoo.github.io/pomotimer-lite/'
                        },
                        'StrokePrediction': {
                            'title': $t('personal.projects.stroke_prediction.title'),
                            'subtitle': $t('personal.projects.stroke_prediction.subtitle'),
                            'category': ['AI', 'Machine Learning', 'Python'],
                            'img': 'img/avc.webp',
                            'link': 'https://github.com/rafandoo/predicao-avc'
                        },
                        'SpeedTest': {
                            'title': $t('personal.projects.speed_test.title'),
                            'subtitle': $t('personal.projects.speed_test.subtitle'),
                            'category': ['Python'],
                            'img': 'img/speed-test.webp',
                            'link': 'https://github.com/rafandoo/speedtest'
                        },
                        'EightQueens': {
                            'title': $t('personal.projects.eight_queens.title'),
                            'subtitle': $t('personal.projects.eight_queens.subtitle'),
                            'category': ['AI', 'Genetic Algorithm', 'Python'],
                            'img': 'img/8-rainhas.webp',
                            'link': 'https://github.com/rafandoo/8-rainhas'
                        },
                        'HelpDesk': {
                            'title': $t('personal.projects.helpdesk.title'),
                            'subtitle': $t('personal.projects.helpdesk.subtitle'),
                            'category': ['Web App', 'Laravel', 'PHP'],
                            'img': 'img/helpdesk.webp',
                            'link': 'https://github.com/rafandoo/HelpDeskRplus'
                        },
                        'CLIProject': {
                            'title': $t('personal.projects.cli_project.title'),
                            'subtitle': $t('personal.projects.cli_project.subtitle'),
                            'category': ['Python'],
                            'img': 'img/project-cli.webp',
                            'link': 'https://github.com/rafandoo/project-cli'
                        }
                    }"
                />
            </div>
            <div class="tab-content" id="skills">
                <SkillsPage 
                    :skills="{
                        'programming_languages': {
                            'title': $t('personal.skills.programming_languages'),
                            'items': [
                                {
                                    'title': 'Python',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                                },
                                {
                                    'title': 'Java',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                                },
                                {
                                    'title': 'PHP',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
                                },
                                {
                                    'title': 'JavaScript',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
                                }
                            ]
                        },
                        'frameworks': {
                            'title': $t('personal.skills.frameworks'),
                            'items': [
                                {
                                    'title': 'Django',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
                                },
                                {
                                    'title': 'TensorFlow',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg'
                                },
                                {
                                    'title': 'JUnit 5',
                                    'logo': 'img/logo/junit5.svg'
                                },
                                {
                                    'title': 'Selenium',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg'
                                },
                                {
                                    'title': 'Laravel',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
                                },
                                {
                                    'title': 'Vue.JS',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
                                },
                            ]
                        },
                        'tools': {
                            'title': $t('personal.skills.tools'),
                            'items': [
                                {
                                    'title': 'Git',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                                },
                                {
                                    'title': 'Insomnia',
                                    'logo': 'img/logo/insomnia.svg'
                                },
                                {
                                    'title': 'Postman',
                                    'logo': 'img/logo/postman.svg'
                                }
                            ]
                        },
                        'databases': {
                            'title': $t('personal.skills.databases'),
                            'items': [
                                {
                                    'title': 'MySQL',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                                },
                                {
                                    'title': 'PostgreSQL',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
                                },
                                {
                                    'title': 'SQLite',
                                    'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
                                },
                            ]
                        }
                    }"
                />
            </div>
            <div class="tab-content" id="contact">
                <ContactMe 
                    integration_link="https://send.pageclip.co/PFWf4lo5hFmU0tI2gNrf7nsRJCeMGh8b/contact-gh-pages"
                />
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AboutMe from './components/AboutMe.vue'
import PortfolioPage from './components/PortfolioPage.vue'
import SkillsPage from './components/Skills.vue'
import ContactMe from './components/ContactMe.vue'

export default {
    name: 'App',
    components: {
        SideBar,
        NavBar,
        AboutMe,
        PortfolioPage,
        SkillsPage,
        ContactMe
    }
}
</script>

<style>
    @import './assets/css/style.css';
</style>
