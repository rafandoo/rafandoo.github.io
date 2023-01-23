<template>
    <article class="portfolio" data-page="portfolio">
        <h2 class="h2 article-title">Portfolio</h2>
        <section class="projects">
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
                        <p class="project-category">{{ project.category }}</p>
                    </a>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
export default {
    name: 'PortfolioPage',

    data() {
        return {
            projects: [
                {
                    'title': 'PomoTimer',
                    'category': 'Aplicação web',
                    'img': 'https://imgpile.com/images/dJryJg.jpg',
                    'link': 'https://rafandoo.github.io/pomotimer-lite/'
                },
                {
                    'title': 'Predição de AVC',
                    'category': 'Inteligência artificial',
                    'img': 'https://imgpile.com/images/dJznyN.jpg',
                    'link': 'https://github.com/rafandoo/predicao-avc'
                },
                {
                    'title': 'Speed Test',
                    'category': 'Aplicação python django',
                    'img': 'https://imgpile.com/images/dJz5Fj.jpg',
                    'link': 'https://github.com/rafandoo/SpeedTestRplus'
                }
            ]
        }
    }
}
</script>
