<template>
    <section id="projects" class="projects">
        <Subtitle>Projetos</Subtitle>

        <div class="projects__container">
            <RCard></RCard>
            <RCard></RCard>
            <RCard></RCard>
        </div>

    </section>
</template>

<style lang="scss">
.projects {
    margin: 14rem 0;

    &__container {
        justify-content: space-between;
        align-items: center;
        margin: 5rem 0;
        display: flex;
        gap: 3rem;
    }
}

.subtitle {
    margin: 0 auto;
}

@media screen and (max-width: 767px) {
    .projects {
        margin: 7rem 0 0;

        &__container {
            flex-direction: column;
            justify-content: center;
        }
    }
}
</style>