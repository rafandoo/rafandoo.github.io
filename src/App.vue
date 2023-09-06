<template>
    <div class="main">
        <SideBar 
            my_name="Rafael Camargo"
            gravatar_email="rafaelcamargo.inf@gmail.com"
            :sub_title="$t('personal.sub_title')"
            email="rafaelcamargo.inf@gmail.com"
            whats_link="https://api.whatsapp.com/send/?phone=5547991664002&text=Ol%C3%A1!"
            phone="+55 (47) 99166-4002"
            :location="$t('personal.location')"
            github_link="https://github.com/rafandoo"
            linkedin_link="https://www.linkedin.com/in/rafaelcamargob"
            instagram_link="https://www.instagram.com/rafandoo"
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
                            'category': ['Machine Learning', 'Python'],
                            'img': 'img/avc.webp',
                            'link': 'https://github.com/rafandoo/predicao-avc'
                        },
                        'SpeedTest': {
                            'title': $t('personal.projects.speed_test.title'),
                            'subtitle': $t('personal.projects.speed_test.subtitle'),
                            'category': ['CLI', 'Python'],
                            'img': 'img/speed-test.webp',
                            'link': 'https://github.com/rafandoo/speedtest'
                        },
                        'EightQueens': {
                            'title': $t('personal.projects.eight_queens.title'),
                            'subtitle': $t('personal.projects.eight_queens.subtitle'),
                            'category': ['AI', 'Python'],
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
                        1.1: {
                            'title': 'Python',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
                        },
                        1.2: {
                            'title': 'Java',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
                        },
                        1.3: {
                            'title': 'PHP',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
                        },
                        2.1: {
                            'title': 'Git',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
                        },
                        3.1: {
                            'title': 'Laravel',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg'
                        },
                        3.2: {
                            'title': 'Vue.JS',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
                        },
                        3.3: {
                            'title': 'Selenium',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg'
                        },
                        4.1: {
                            'title': 'MySQL',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
                        },
                        4.2: {
                            'title': 'SQLite',
                            'logo': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg'
                        },
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
