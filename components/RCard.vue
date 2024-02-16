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
    @include bevel($bg-color: $rich-black, $border-color: $light-green, $edge-top-left: 2rem, $edge-bottom-right: 2rem);

    &__container {
        margin: 0;
    }
    
    &__image {
        @include bevel($border: false, $edge-top-left: 1.8rem, $edge-bottom-right: 0em);
        width: 100%;
    }

    &__caption {
        @include bevel($border: false, $bg-color: $rich-black, $edge-top-left: 0em, $edge-bottom-right: 1.8rem, $hover: false);
        padding: 1rem;
        margin-top: .2rem;
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