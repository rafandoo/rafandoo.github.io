<template>
    <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img class="avatar-picture" :src="gravatar" :alt="personalInfo.name" width="80">
            </figure>
            <div class="info-content">
                <h1 class="name">{{ personalInfo.name }}</h1>
                <p class="title">{{ $t(personalInfo.subTitle) }}</p>
            </div>
            <button class="info_more-btn" data-sidebar-btn>
                <span>{{ $t('elements.show_contacts') }}</span>
                <ion-icon name="chevron-down"></ion-icon>
            </button>
        </div>
        <div class="sidebar-info_more">
            <div class="separator"></div>
            <ul class="contacts-list">
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="mail-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">E-mail</p>
                        <a :href="'mailto:' + personalInfo.email" class="contact-link" target="_blank">{{ personalInfo.email }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">{{ $t('elements.phone') }}</p>
                        <a :href="whatsLink()" class="contact-link" target="_blank">{{ personalInfo.phone }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">{{ $t('elements.location') }}</p>
                        <address>{{ $t(personalInfo.location) }}</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item">
                    <a :href="'https://github.com/' + personalInfo.githubUser" class="social-link" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="personalInfo.linkedinLink" class="social-link" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="'https://www.instagram.com/' + personalInfo.instagramUser" class="social-link" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
import md5 from 'md5';

export default {
    name: 'SideBar',

    props: {
        personalInfo: {
            type: Object,
            required: true
        }
    },

    methods: {
        toggleSidebar() {
            const elementToggleFunc = function (elem) { 
                elem.classList.toggle("active"); 
            }

            const sidebar = document.querySelector("[data-sidebar]"),
                sidebarBtn = document.querySelector("[data-sidebar-btn]");

            sidebarBtn.addEventListener("click", function () { 
                elementToggleFunc(sidebar); 
            });
        },

        whatsLink() {
            if (this.personalInfo.phone) {
                let whatsLink = "https://api.whatsapp.com/send/?phone=";
                whatsLink += this.personalInfo.phone.replace(/\D/g, '');
                if (this.personalInfo.whatsappMessage) {
                    whatsLink += "&text=" + this.personalInfo.whatsappMessage;
                }
                return whatsLink
            } 
            return null;
        }
    },

    computed: {
        gravatar() {
            const hash = md5(this.personalInfo.email.trim().toLowerCase());
            return `https://www.gravatar.com/avatar/${hash}?s=200&d=retro`;
        }
    },

    mounted() {
        this.toggleSidebar();
    }
}
</script>
