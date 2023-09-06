<template>
    <article class="skills-page" data-page="skills">
        <h2 class="h2 article-title">{{ $t('main.skills') }}</h2>
        <div class="skills">
            <ul class="skill-list">
                <li class="skill-item" v-for="(skill, index) in skills" :key="index">
                    <div class="skill-logo">
                        <img :src="skill.logo" alt="" loading="lazy">
                    </div>
                    <span class="skill-title">{{ skill.title }}</span>
                </li>
            </ul>
        </div>
    </article>
</template>

<script>
export default {
    name: 'SkillsPage',
    props: [
        'skills'
    ],
}
</script>
