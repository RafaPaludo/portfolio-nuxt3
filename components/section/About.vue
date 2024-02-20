<template>
    <section id="about" class="about">
        <Subtitle>Sobre</Subtitle>

        <div class="about__description">
            <img src="~/assets/img/sobre-foto.png" alt="" class="about__image">
            <p class="about__text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. And more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
            </p>
        </div>

        <div class="carousel__container">
            <carousel
                v-bind="settings"
                :breakpoints="breakpoints"
            >
                <slide v-for="icon in icons" :key="icon.id">
                    <Skill :source="icon.source" :alt="icon.name"/>
                </slide>

                <template #addons>
                    <navigation />
                </template>
            </carousel>
        </div>
    </section>
</template>

<script setup>
import css from '~/assets/img/css.svg'
import cypress from '~/assets/img/cypress.svg'
import html from '~/assets/img/html.svg'
import js from '~/assets/img/js.svg'
import tailwind from '~/assets/img/tailwind.svg'
import vue from '~/assets/img/vue.svg'

const icons = [
    {
        id: 0,
        name: 'HTML',
        source: html
    },
    {
        id: 1,
        name: 'CSS',
        source: css
    },
    {
        id: 2,
        name: 'JavaScript',
        source: js
    },
    {
        id: 3,
        name: 'Vue',
        source: vue
    },
    {
        id: 4,
        name: 'Tailwind',
        source: tailwind
    },
    {
        id: 5,
        name: 'Cypress',
        source: cypress
    }
]

const settings = {
    itemsToShow: 2.5,
    autoplay: 4000,
    snapAlign: 'start',
    wrapAround: true, 
    pauseAutoplayOnHover: true
}

const breakpoints = {
    // 700px and up
    700: {
        itemsToShow: 3.5,
    },
    // 1024 and up
    1024: {
        itemsToShow: 5.5,
    },
}

</script>


<style lang="scss">
.about {
    margin: 14rem 10rem;

    &__description {
        margin: 5rem 0;
        display: flex;
        gap: 3rem;
    }

    &__image {

    }

    &__text {
        margin: 0;
        font-size: 2.4rem;
        line-height: 1.5;
        color: $white;
    }
}

.carousel__container {
    padding: 0 8rem;
}

.carousel__slide {
  min-height: 15rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 1rem;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  color: $light-green;

  &:hover {
    color: rgba($light-green, .4);
  }
}

.carousel__prev {
    left: -6rem;
}

.carousel__next {
    right: -6rem;
}

.carousel__pagination {
    gap: 1rem;

    &-button {
        border: 1px solid $light-green;
        padding: 0;

        &::after {
            width: 1.2rem;
            height: 1.2rem;
        }

        &--active {
            &::after {
                background-color: $light-green;
            }
        }        
    }
}

@media screen and (max-width: 767px) {
	.about {
        margin: 7rem 0 0;

        &__image {
            display: none;
        }

        &__text {
            font-size: 2rem;
        }
    }

    .carousel__container {
        padding: 0 4rem;
    }
}
</style>