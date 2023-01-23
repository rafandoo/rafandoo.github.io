<template>
    <article class="about" data-page="about">
        <h2 class="h2 article-title">Sobre mim</h2>
        <section class="about-text">
            <p>
                {{ about_me_one }}
            </p>
            <p>
                {{ about_me_two }}
            </p>
        </section>
        <section class="service" hidden>
            <h3 class="h3 service-title">Minhas skills</h3>
            <ul class="service-list">
                <li class="service-item">
                    <div class="service-icon-box">
                        
                    </div>
                    <div class="service-content-box">
                        <h4 class="h4 service-item-title">Web design</h4>
                        <p class="service-item-text">
                            The most modern and high-quality design made at a professional level.
                        </p>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>

<script>
export default {
    name: 'AboutMe',

    props: [
        'about_me_one',
        'about_me_two'
    ]
}
</script>
