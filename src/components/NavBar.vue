<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
                <button class="navbar-link active" id="about" data-bs-toggle="tab">{{ $t('main.about') }}</button>
            </li>
            <li class="navbar-item">
                <button class="navbar-link" id="experience" data-bs-toggle="tab">{{ $t('main.experience') }}</button>
            </li>
            <li class="navbar-item">
                <button class="navbar-link" id="portfolio" data-bs-toggle="tab">{{ $t('main.portfolio') }}</button>
            </li>
            <li class="navbar-item">
                <button class="navbar-link" id="skills" data-bs-toggle="tab">{{ $t('main.skills') }}</button>
            </li>
            <li class="navbar-item">
                <button class="navbar-link" id="contact" data-bs-toggle="tab">{{ $t('main.contact') }}</button>
            </li>
            <li class="navbar-item">
                <LanguageSwitch />
            </li>
        </ul>
    </nav>
</template>

<script>
import LanguageSwitch from './LanguageSwitch.vue';

export default {
    name: 'NavBar',
    methods: {
        changeTab() {
            let tabs = document.querySelectorAll(".tab-content"), navLinks = document.querySelectorAll(".navbar-link");
            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].addEventListener("click", function () {
                    for (let i = 0; i < tabs.length; i++) {
                        if (this.id === tabs[i].id) {
                            tabs[i].classList.add("active");
                            navLinks[i].classList.add("active");
                        }
                        else {
                            tabs[i].classList.remove("active");
                            navLinks[i].classList.remove("active");
                        }
                    }
                });
            }
        }
    },
    mounted() {
        this.changeTab();
    },
    components: { LanguageSwitch }
}
</script>
