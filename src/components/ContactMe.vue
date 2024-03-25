<template>
    <article class="contact" data-page="contact">
        <header>
            <h2 class="h2 article-title">{{ $t('main.contact') }}</h2>
        </header>
        <section class="contact-form">
            <form :action="integration_link" class="form" data-form method="post">
                <div class="input-wrapper">
                    <input type="text" name="name" class="form-input" :placeholder="$t('elements.name')" required data-form-input>
                    <input type="email" name="email" class="form-input" placeholder="E-mail" required data-form-input>
                </div>
                <textarea name="message" class="form-input" :placeholder="$t('elements.message')" required data-form-input></textarea>
                <button class="form-btn" type="submit" disabled data-form-btn @click="showToast()">
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>{{ $t('elements.send') }}</span>
                </button>
            </form>
        </section>
    </article>
</template>

<script>
import { useToast } from 'vue-toastification';

export default {
    name: 'ContactMe',
    props: [
        'integration_link',
    ],
    setup() {
        const toast = useToast();
        return {
            toast,
        }
    },
    methods: {
        ctrlForm() {
            const form = document.querySelector("[data-form]");
            const formInputs = document.querySelectorAll("[data-form-input]");
            const formBtn = document.querySelector("[data-form-btn]");

            for (let i = 0; i < formInputs.length; i++) {
                formInputs[i].addEventListener("input", function () {
                    if (form.checkValidity()) {
                        formBtn.removeAttribute("disabled");
                    } else {
                        formBtn.setAttribute("disabled", "");
                    }
                });
            }
        },
        showToast() {
            this.toast.success('Mensagem enviada com sucesso!', {
                position: 'top-right',
                timeout: 5000,
                closeOnClick: true,
                pauseOnFocusLoss: false,
                pauseOnHover: true,
                draggable: true,
                draggablePercent: 0.6,
                showCloseButtonOnHover: false,
                hideProgressBar: false,
                closeButton: 'button',
                icon: true,
                rtl: false,
            });
        }
    },
    mounted() {
        this.ctrlForm();
    }
}
</script>
