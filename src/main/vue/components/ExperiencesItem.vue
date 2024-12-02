<script setup>
defineProps({
    experiences: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="resume" data-page="resume">
        <header>
            <h2 class="h2 article-title">{{ $t('main.experience') }}</h2>
        </header>
        <section class="timeline" v-for="(experience, index) in experiences" :key="index">
            <div class="title-wrapper">
                <div class="logo-box">
                    <img
                        v-if="experience.logo"
                        class="experience-logo"
                        :src="experience.logo"
                        :alt="experience.title"
                        loading="lazy"
                    />
                    <ion-icon
                        v-else
                        class="experience-logo icon-box"
                        name="briefcase-outline"
                    ></ion-icon>
                </div>
                <h3 class="h3">{{ experience.title }}</h3>
            </div>
            <ol class="timeline-list">
                <li class="timeline-item" v-for="(item, index) in experience.items" :key="index">
                    <h4 class="h4 timeline-item-title">{{ $t(item.title) }}</h4>
                    <span>{{ $t(item.date) }}</span>
                    <p class="timeline-text">
                        {{ $t(item.description) }}
                    </p>
                </li>
            </ol>
        </section>
    </article>
</template>
