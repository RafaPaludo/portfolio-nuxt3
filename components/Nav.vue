<template>
    <nav>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#curriculum">Currículo</a></li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '~/assets/scss/main.scss';

nav {
    max-width: 600px;
    width: 100%;
}

ul  {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    position: relative;
    list-style: none;
    padding: 1.5rem;
    margin: 0;
    border: 1px solid $light-green;
    font-size: 1.6rem;
    font-weight: 700;
    
    li {
        a {
            color: $white;
        }
    }
}

</style>