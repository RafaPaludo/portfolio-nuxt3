<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.content">
                <a
                    :href="link.href"
                    :target="link.target || '_self'"
                    @click="smoothScroll"
                >{{ link.content }}</a>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const modalStore = useModalStore()

const links = [
    {
        href: '/',
        content: 'Home'
    },
    {
        href: '#about',
        content: 'Sobre'
    },
    {
        href: '#projects',
        content: 'Projetos'
    },
    {
        href: '#contact',
        content: 'Contato'
    },
    {
        href: '/curriculo-rafael-paludo.pdf',
        target: '_blank',
        content: 'Currículo'
    }
]

function smoothScroll (e) {
    const target = e.target
    
    if (target.hash !== '') {
        e.preventDefault()
        const element = document.querySelector(target.hash)

        modalStore.close()

        window.scrollTo({
            top: element.offsetTop - 130,
            left: 0,
            behavior: "smooth",
        });
    }
}
</script>

<style lang="scss">
nav {
    width: 100%;
}

ul  {
    @include bevel($bg-color: $rich-black, $border-color: $light-green, $hover: false);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    max-width: 600px;
    list-style: none;
    padding: 1.5rem;
    margin: 0 auto;
    font-size: 1.6rem;
    font-weight: 700;
    
    li {
        a {
            color: $white;
        }
    }
}

</style>