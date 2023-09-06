<template>
    <article class="portfolio" data-page="portfolio">
        <h2 class="h2 article-title">{{ $t('main.portfolio') }}</h2>
        <div class="projects">
            <ul class="project-list">
                <li class="project-item" v-for="(project, index) in projects" :key="index">
                    <a :href="project.link" target="_blank">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                            <img :src="project.img" alt="" loading="lazy">
                        </figure>
                        <h3 class="project-title">{{ project.title }}</h3>
                        <div class="project-categories">
                            <span class="project-category" v-for="(category, index) in project.category" :key="index">{{ category }}</span>
                        </div>
                        <p class="project-subtitle">{{ project.subtitle }}</p>
                    </a>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
export default {
    name: 'PortfolioPage',

    props: [
        'projects'
    ],
}
</script>
