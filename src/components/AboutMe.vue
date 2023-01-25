<template>
    <article class="about" data-page="about">
        <h2 class="h2 article-title">Sobre mim</h2>
        <div class="about-text">
            <p v-for="(paragraph, index) in about_me_paragraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </article>
</template>

<script>
export default {
    name: 'AboutMe',
    props: [
        'about_me_paragraphs'
    ],
}
</script>
