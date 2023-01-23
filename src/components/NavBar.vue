<template>
    <nav class="navbar">
        <ul class="navbar-list">
            <li class="navbar-item">
                <button class="navbar-link active" id="about" data-bs-toggle="tab">Sobre</button>
            </li>
            <li class="navbar-item">
                <button class="navbar-link" id="port" data-bs-toggle="tab">Portfolio</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        changeTab() {
            let tabs = document.querySelectorAll(".tab-content"),
                navLinks = document.querySelectorAll(".navbar-link");

            for (let i = 0; i < navLinks.length; i++) {
                navLinks[i].addEventListener("click", function () {
                    for (let i = 0; i < tabs.length; i++) {
                        if (this.id === tabs[i].id) {
                            tabs[i].classList.add("active");
                            navLinks[i].classList.add("active");
                        } else {
                            tabs[i].classList.remove("active");
                            navLinks[i].classList.remove("active");
                        }
                    }
                });
            }
        }
    },
    mounted() {
        this.changeTab();
    }
}
</script>
