<template>
    <div class="main">
        <SideBar 
            my_name="Rafael Camargo"
            gravatar_email="rafaelcamargo.inf@gmail.com"
            sub_title="Estudante de Ciência da Computação"
            email="rafaelcamargo.inf@gmail.com"
            whats_link="https://api.whatsapp.com/send/?phone=5547933000961&text=Ol%C3%A1!"
            phone="+55 (47) 99300-0961"
            location="Santa Catarina, Brasil"
            github_link="https://github.com/rafandoo"
            linkedin_link="https://www.linkedin.com/in/rafaelcamargob"
            instagram_link="https://www.instagram.com/rafandoo"
        />
        <div class="main-content">
            <NavBar />
            <div class="tab-content active" id="about">
                <AboutMe 
                    :about_me_paragraphs="[
                        'Olá, meu nome é Rafael Camargo, tenho 20 anos e sou estudante de Ciência da Computação no Instituto Fereral Catarinense (IFC).',
                        'Sou apaixonado por tecnologia e programação, e estou sempre em busca de novos conhecimentos e desafios. Atualmente estou focado em apreder sobre o eco-sistema python e suas possibilidades.', 
                        'Possuo conhecimentos em Python, Java, PHP, MySQL, Git, entre outros.'
                    ]"
                />
            </div>
            <div class="tab-content" id="portfolio">
                <PortfolioPage 
                    :projects="{
                        'PomoTimer': {
                            'title': 'PomoTimer',
                            'subtitle': 'Aplicação da técnica Pomodoro.',
                            'category': ['Web App', 'Vue.JS'],
                            'img': 'img/pomotimer.webp',
                            'link': 'https://rafandoo.github.io/pomotimer-lite/'
                        },
                        'Predição de AVC': {
                            'title': 'Predição de AVC',
                            'subtitle': 'Rede Neural Arficial MLP, para predição de AVC.',
                            'category': ['Machine Learning', 'Python'],
                            'img': 'img/avc.webp',
                            'link': 'https://github.com/rafandoo/predicao-avc'
                        },
                        'Speed Test': {
                            'title': 'Speed Test',
                            'subtitle': 'Speed Test CLI com persistência dos dados coletados.',
                            'category': ['CLI', 'Python'],
                            'img': 'img/speed-test.webp',
                            'link': 'https://github.com/rafandoo/speedtest'
                        },
                        '8 rainhas': {
                            'title': '8 rainhas',
                            'subtitle': 'Algoritmo genético para solucionar o problema das 8 rainhas.',
                            'category': ['Algoritmo Genético', 'Python'],
                            'img': 'img/8-rainhas.webp',
                            'link': 'https://github.com/rafandoo/8-rainhas'
                        },
                        'Help Desk': {
                            'title': 'Help Desk',
                            'subtitle': 'Sistema de Help Desk para suporte técnico.',
                            'category': ['Web App', 'Laravel', 'PHP'],
                            'img': 'img/helpdesk.webp',
                            'link': 'https://github.com/rafandoo/HelpDeskRplus'
                        },
                        'Projeto CLI': {
                            'title': 'Projeto CLI',
                            'subtitle': 'Automatização de criação de estrutura de projetos.',
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
