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
nav {
    
    width: 100%;
}

ul  {
    @include bevel($bg-color: $rich-black, $border-color: $light-green);
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