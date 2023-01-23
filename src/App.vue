<template>
    <main>
        <SideBar 
            my_name="Rafael Camargo"
            profile_picture="https://avatars.githubusercontent.com/u/53565557?v=4"
            sub_title="Estudante de Ciência da Computação"
            email="rafaelcamargo.inf@gmail.com"
            whats_link="https://api.whatsapp.com/send/?phone=5547933000961&text=Ol%C3%A1!"
            phone="+55 (47) 99300-0961"
            location="Santa Catarina, Brasil"
            github_link="https://github.com/rafandoo"
            linkedin_link="https://www.linkedin.com/in/rafaelcamargob"
            instagram_link="https://www.instagram.com/rafandoo"
        />
        <div class="main-content">
            <NavBar />
            <div class="tab-content active" id="about">
                <AboutMe 
                    about_me_one="Olá, meu nome é Rafael Camargo, tenho 20 anos e sou estudante de Ciência da Computação no Instituto Fereral Catarinense (IFC)."
                    about_me_two="Sou apaixonado por tecnologia e programação, e estou sempre em busca de novos conhecimentos e desafios. Atualmente estou focado em apreder sobre o eco-sistema python e suas possibilidades. Possuo conhecimentos em Python, Java, PHP, MySQL, Git, entre outros."
                />
            </div>
            <div class="tab-content" id="port">
                <PortfolioPage />
            </div>
        </div>
    </main>
</template>

<script>
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
import AboutMe from './components/AboutMe.vue'
import PortfolioPage from './components/PortfolioPage.vue'

export default {
    name: 'App',
    components: {
        SideBar,
        NavBar,
        AboutMe,
        PortfolioPage,
    },
    created() {
        
    }
}
</script>

<style>
    @import './assets/css/style.css';
</style>
