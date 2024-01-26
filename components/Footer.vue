<template>
    <footer class="footer">
        <Logo />
        <div class="footer__media">
            <Icon name="mdi:github" color="#FFF" width="32" height="32"/>
            <Icon name="mdi:linkedin" color="#FFF" width="32" height="32"/>
            <Icon name="mdi:instagram" color="#FFF" width="32" height="32"/>
        </div>
        <p>
            Alguns direitos reservados :coffee: 2024
        </p>
    </footer>
</template>

<style lang="scss">
.footer {
    margin: 14rem auto 0;
    max-width: 127rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding: 4rem;
    color: $white;
    text-align: center;
    line-height: 1.5;

    &__media {
        display: flex;
        gap: 3rem;
    }
}

@media screen and (max-width: 767px) {
    .footer {
        padding: 4rem 2rem;
        margin: 5rem 0;
    }
}
</style>