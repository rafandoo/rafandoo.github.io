<script setup>
defineProps({
    aboutMeParagraphs: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <article class="about" data-page="about">
        <h2 class="h2 article-title">{{ $t('main.about_me') }}</h2>
        <div class="about-text">
            <p v-for="(paragraph, index) in aboutMeParagraphs" :key="index">
                {{ paragraph }}
            </p>
        </div>
    </article>
</template>
