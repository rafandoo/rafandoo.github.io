<template>
    <div class="main">
        <SideBar :personal-info="personalInfo" />
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
                <PortfolioPage :projects="projects" />
            </div>
            <div class="tab-content" id="skills">
                <SkillsPage :skills="skills" />
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

import personalInfo from '@/data/personalInfo';
import projects from '@/data/projects';
import skills from '@/data/skills';

export default {
    name: 'App',
    components: {
        SideBar,
        NavBar,
        AboutMe,
        PortfolioPage,
        SkillsPage,
        ContactMe
    },
    data () {
        return {
            personalInfo,
            skills,
            projects
        }
    }
}
</script>

<style>
    @import './assets/css/style.css';
</style>
