<template>
    <div class="card">
        <figure class="card__container">
            <img src="~/assets/img/card-image.png" alt="Card" class="card__image">
            <figcaption  class="card__caption">
                <h4>Card</h4>
                <p>Descricao</p>
            </figcaption>
        </figure>
    </div>
</template>

<style lang="scss">
.card {
    max-width: 35rem;
    border: 1px solid $light-green;
    padding: .4rem;

    &__container {
        margin: 0;
    }

    &__image {
        width: 100%;
    }

    &__caption {
        padding: 1rem;
        margin-top: .2rem;
        background-color: $light-green;
        color: $white;

        h4 {
            font-size: 2.4rem;
        }

        p {
            margin: .5rem 0 ;
        }
    }
}
</style>