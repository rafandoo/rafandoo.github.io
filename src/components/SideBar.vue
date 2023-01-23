<template>
    <aside class="sidebar" data-sidebar>
        <div class="sidebar-info">
            <figure class="avatar-box">
                <img class="avatar-picture" :src="profile_picture" :alt="my_name" width="80">
            </figure>
            <div class="info-content">
                <h1 class="name">{{ my_name }}</h1>
                <p class="title">{{ sub_title }}</p>
            </div>
            <button class="info_more-btn" data-sidebar-btn>
                <span>Mostrar contatos</span>
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
                        <p class="contact-title">Email</p>
                        <a :href="'mailto:' + email" class="contact-link" target="_blank">{{ email }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="phone-portrait-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Telefone</p>
                        <a :href="whats_link" class="contact-link" target="_blank">{{ phone }}</a>
                    </div>
                </li>
                <li class="contact-item">
                    <div class="icon-box">
                        <ion-icon name="location-outline"></ion-icon>
                    </div>
                    <div class="contact-info">
                        <p class="contact-title">Localização</p>
                        <address>{{ location }}</address>
                    </div>
                </li>
            </ul>
            <div class="separator"></div>
            <ul class="social-list">
                <li class="social-item">
                    <a :href="github_link" class="social-link" target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="linkedin_link" class="social-link" target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                    </a>
                </li>
                <li class="social-item">
                    <a :href="instagram_link" class="social-link" target="_blank">
                        <ion-icon name="logo-instagram"></ion-icon>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'SideBar',

    props: [
        'my_name',
        'profile_picture',
        'sub_title',
        'email',
        'whats_link',
        'phone',
        'location',
        'github_link',
        'linkedin_link',
        'instagram_link',
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
        }
    },

    mounted() {
        this.toggleSidebar();
    }
}
</script>
