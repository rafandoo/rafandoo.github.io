<template>
    <article class="contact" data-page="contact">
        <header>
            <h2 class="h2 article-title">Contato</h2>
        </header>
        <section class="contact-form">
            <form :action="integration_link" class="form" data-form method="post">
                <div class="input-wrapper">
                    <input type="text" name="name" class="form-input" placeholder="Nome" required data-form-input>
                    <input type="email" name="email" class="form-input" placeholder="E-mail" required data-form-input>
                </div>
                <textarea name="message" class="form-input" placeholder="Sua mensagem" required data-form-input></textarea>
                <button class="form-btn" type="submit" disabled data-form-btn>
                    <ion-icon name="paper-plane"></ion-icon>
                    <span>Enviar</span>
                </button>
            </form>
        </section>
    </article>
</template>

<script>
export default {
    name: 'ContactMe',
    props: [
        'integration_link',
    ],
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
        }
    },
    mounted() {
        this.ctrlForm();
    }
}
</script>

<style scoped></style>
