<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const currentLanguage = ref(localStorage.getItem('language') || 'pt_br')

const changeLanguage = (newLocale) => {
    locale.value = newLocale
}

const toggleLanguage = () => {
    currentLanguage.value = currentLanguage.value === 'pt_br' ? 'en' : 'pt_br'
    localStorage.setItem('language', currentLanguage.value)
    changeLanguage(currentLanguage.value)
}

onMounted(() => {
    localStorage.setItem('language', currentLanguage.value)
    changeLanguage(currentLanguage.value)
})
</script>

<template>
    <div class="language-switch">
        <button @click="toggleLanguage" class="language-button">
            <ion-icon name="earth-outline"></ion-icon>
        </button>
    </div>
</template>

<style scoped>
.language-switch {
    padding: 20px 7px;
}

.language-button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    font-size: 1.1rem;
    color: #d6d6d6;
}

.language-button:focus {
    outline: none;
}

@media (min-width: 768px) {
    .language-button {
        font-size: 1.5rem;
    }
}
</style>
