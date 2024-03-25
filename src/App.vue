<template>
    <div class="main">
        <SideBar :personal-info="personalInfo" />
        <div class="main-content">
            <NavBar />
            <div class="tab-content active" id="about">
                <AboutMe 
                    :about-me-paragraphs="[
                        $t('personal.about_me_one'),
                        $t('personal.about_me_two'),
                        $t('personal.about_me_three'),
                    ]"
                    :what-im-doing="whatImDoing"
                />
            </div>
            <div class="tab-content" id="experience">
                <ExperiencesPage :experiences="experiences" />
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
import SideBar from '@/components/SideBar.vue'
import NavBar from '@/components/NavBar.vue'
import AboutMe from '@/components/AboutMe.vue'
import ExperiencesPage from '@/components/Experiences.vue'
import PortfolioPage from '@/components/Portfolio.vue'
import SkillsPage from '@/components/Skills.vue'
import ContactMe from '@/components/ContactMe.vue'

import personalInfo from '@/data/personalInfo';
import experiences from '@/data/experiences'
import projects from '@/data/projects';
import skills from '@/data/skills';
import whatImDoing from '@/data/whatImDoing';

export default {
    name: 'App',
    components: {
        SideBar,
        NavBar,
        AboutMe,
        ExperiencesPage,
        PortfolioPage,
        SkillsPage,
        ContactMe
    },
    data () {
        return {
            personalInfo,
            experiences,
            skills,
            projects,
            whatImDoing
        }
    }
}
</script>

<style>
    @import '@/assets/css/style.min.css';
</style>
