<script setup>
defineProps({
    skills: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <article class="skills-page" data-page="skills">
        <h2 class="h2 article-title">{{ $t('main.skills') }}</h2>
        <div class="skills" v-for="(skill, index) in skills" :key="index">
            <h4 class="h4 skills-category">{{ $t(skill.title) }}</h4>
            <ul class="skill-list">
                <li class="skill-item" v-for="(item, index) in skill.items" :key="index">
                    <div class="skill-logo">
                        <img :src="item.logo" alt="" loading="lazy" />
                    </div>
                    <span class="skill-title">{{ item.title }}</span>
                </li>
            </ul>
        </div>
    </article>
</template>
