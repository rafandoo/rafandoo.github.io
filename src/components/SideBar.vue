<template>
    <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img class="avatar-picture" :src="gravatar" :alt="my_name" width="80">
            </figure>
            <div class="info-content">
                <h1 class="name">{{ my_name }}</h1>
                <p class="title">{{ sub_title }}</p>
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
                        <a :href="'mailto:' + email" class="contact-link" target="_blank">{{ email }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">{{ $t('elements.phone') }}</p>
                        <a :href="whatsLink()" class="contact-link" target="_blank">{{ phone }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">{{ $t('elements.location') }}</p>
                        <address>{{ location }}</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item">
                    <a :href="'https://github.com/' + github_user" class="social-link" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="linkedin_link" class="social-link" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="'https://www.instagram.com/' + instagram_user" class="social-link" target="_blank">
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

    props: [
        'my_name',
        'sub_title',
        'email',
        'whatsapp_message',
        'phone',
        'location',
        'github_user',
        'instagram_user',
        'linkedin_link',
    ],

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
            if (this.phone) {
                let whatsLink = "https://api.whatsapp.com/send/?phone=";
                whatsLink += this.phone.replace(/\D/g, '');
                if (this.whatsapp_message) {
                    whatsLink += "&text=" + this.whatsapp_message;
                }
                return whatsLink
            } 
            return null;
        }
    },

    computed: {
        gravatar() {
            const hash = md5(this.email.trim().toLowerCase());
            return `https://www.gravatar.com/avatar/${hash}?s=200&d=retro`;
        }
    },

    mounted() {
        this.toggleSidebar();
    }
}
</script>
