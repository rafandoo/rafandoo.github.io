<script setup>
import SideBar from '@/main/vue/components/SideBar.vue'
import NavBar from '@/main/vue/components/NavBar.vue'
import AboutMe from '@/main/vue/components/AboutMe.vue'
import ExperiencesItem from '@/main/vue/components/ExperiencesItem.vue'
import PortfolioItem from '@/main/vue/components/PortfolioItem.vue'
import SkillsItem from '@/main/vue/components/SkillsItem.vue'
import ContactMe from '@/main/vue/components/ContactMe.vue'

import personalInfo from '@/main/vue/data/personalInfo'
import experiences from '@/main/vue/data/experiences'
import projects from '@/main/vue/data/projects'
import skills from '@/main/vue/data/skills'
</script>

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
                />
            </div>
            <div class="tab-content" id="experience">
                <ExperiencesItem :experiences="experiences" />
            </div>
            <div class="tab-content" id="portfolio">
                <PortfolioItem :projects="projects" />
            </div>
            <div class="tab-content" id="skills">
                <SkillsItem :skills="skills" />
            </div>
            <div class="tab-content" id="contact">
                <ContactMe
                    integration_link="https://send.pageclip.co/PFWf4lo5hFmU0tI2gNrf7nsRJCeMGh8b/contact-gh-pages"
                />
            </div>
        </div>
    </div>
</template>

<style>
@import '@/main/resources/assets/css/style.css';
</style>
