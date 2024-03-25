<template>
    <article class="resume" data-page="resume">
        <header>
            <h2 class="h2 article-title">Resume</h2>
        </header>
        <section class="timeline" v-for="(experience, index) in experiences" :key="index">
            <div class="title-wrapper">
                <div class="logo-box">
                    <img v-if="experience.logo" class="experience-logo" :src="experience.logo" :alt="experience.title" loading="lazy" />
                    <svg v-else class="experience-logo no-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="none" d="M336 80H176a16 16 0 0 0-16 16v16h192V96a16 16 0 0 0-16-16" />
                        <path fill="currentColor"
                            d="M496 176a64.07 64.07 0 0 0-64-64h-48V96a48.05 48.05 0 0 0-48-48H176a48.05 48.05 0 0 0-48 48v16H80a64.07 64.07 0 0 0-64 64v48h480Zm-144-64H160V96a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16Zm-16 152a24 24 0 0 1-24 24H200a24 24 0 0 1-24-24v-4a4 4 0 0 0-4-4H16v144a64 64 0 0 0 64 64h352a64 64 0 0 0 64-64V256H340a4 4 0 0 0-4 4Z" />
                    </svg>
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

<script>
export default {
    name: 'ExperiencesPage',
    props: {
        experiences: {
            type: Array,
            required: true
        }
    }
}
</script>
