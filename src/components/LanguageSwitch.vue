<template>
    <div class="language-switch">
        <button @click="toggleLanguage" class="language-button">
            <ion-icon name="earth-outline"></ion-icon>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            currentLanguage: localStorage.getItem('language') || 'pt_br',
        };
    },
    methods: {
        changeLanguage(locale) {
            this.$i18n.locale = locale;
        },
        toggleLanguage() {
            this.currentLanguage = this.currentLanguage === 'pt_br' ? 'en' : 'pt_br';
            localStorage.setItem('language', this.currentLanguage);
            this.changeLanguage(this.currentLanguage);
        },
        
    },
    mounted() {
        localStorage.setItem('language', this.currentLanguage);
    }
};
</script>

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
    color: #D6D6D6;
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