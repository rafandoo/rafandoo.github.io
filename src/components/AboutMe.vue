<template>
    <article class="about" data-page="about">
        <h2 class="h2 article-title">{{ $t('main.about_me') }}</h2>
        <div class="about-text">
            <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
        <section class="wid">
            <h3 class="h3 wid-title">{{ $t('main.what_im_doing') }}</h3>
            <ul class="wid-list">
                <li class="wid-item" v-for="(wid, index) in whatImDoing" :key="index">
                    <div class="wid-icon-box">
                        <ion-icon :name="wid.icon"></ion-icon>
                    </div>
                    <div class="wid-content-box">
                        <h4 class="h4 wid-item-title">{{ $t(wid.title) }}</h4>
                        <p class="wid-item-text">
                            {{ $t(wid.description) }}
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
    props: {
        aboutMeParagraphs: {
            type: Array,
            required: true
        },
        whatImDoing: {
            type: Array,
            required: true
        }
    }
}
</script>
