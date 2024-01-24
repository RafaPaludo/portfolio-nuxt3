<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
                <NuxtLink to="/#about">Sobre</NuxtLink>
                <NuxtLink to="/#projects">Projetos</NuxtLink>
                <NuxtLink to="/#curriculum">Currículo</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<style lang="scss">
@import '~/assets/scss/main.scss';

ul  {
    position: relative;
    list-style: none;
    padding: 0;
    margin: 0;
    background-color: lime;
    width: 400px;
    height: 400px;
    background:
        linear-gradient(135deg, transparent 45px, #900 0) top left,
        linear-gradient(-45deg, transparent 45px, #900 0) bottom left;
    background-size: 100% 50%;
    background-repeat: no-repeat;
}

</style>