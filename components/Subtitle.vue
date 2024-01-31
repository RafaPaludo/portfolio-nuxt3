<template>
    <h3 class="subtitle">
        <slot />
    </h3>
</template>

<style lang="scss">
.subtitle {
    @include bevel($border: false);
    display: block;
    max-width: 27rem;
    padding: 1rem;
    text-align: center;
    font-size: 3.2rem;
    background: $light-green;
    color: $rich-black;
}

@media screen and (max-width: 767px) {
	.subtitle {
        margin: 0 auto;
        max-width: 19rem;
        font-size: 2.4rem;
        padding: .6rem;
    }
}
</style>