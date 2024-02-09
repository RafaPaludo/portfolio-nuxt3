<template>
    <section id="contact" class="contact">
        <Subtitle>Contact</Subtitle>
        <p class="contact__lead">
            Tem algum projeto em mente? <br>
            Me envie um e-mail para tirarmos isso do papel e revolucionar o mundo!
        </p>

        <form action="" class="contact__form">
            <label class="contact__label">
                <input type="text" placeholder="Nome" class="contact__name" />
            </label>

            <label class="contact__label">
                <input type="email" placeholder="Email" class="contact__email" />
            </label>

            <label class="contact__label">
                <textarea id="subject" name="subject" rows="5" cols="50" class="contact__subject" placeholder="Assunto"></textarea>
            </label>

            <Button class="contact__button">Enviar</Button>
        </form>
    </section>
</template>

<style lang="scss">
.contact {
    @include rabbet;
    padding: 5rem 5rem 8rem;
    margin: 14rem 0;

    &__lead {
        margin: 5rem 0;
        text-align: center;
        color: $white;
        line-height: 1.5;
    }

    &__form {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 3rem;
        padding: 0 15rem;
    }

    &__label {
        grid-column: span 4;
        @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $white, $hover: false);

        &:nth-of-type(3)  {
            grid-column: span 8;
        }
          
        & > * {
            width: 100%;
            padding: 1.5rem;
            background-color: transparent;
            border: none;
            color: $white;
            font-weight: 700;

            &:focus-visible {
                outline: none;
            }
        }

        textarea {
            min-height: 5rem;
            resize: vertical;
        }
    }

    &__button {
        grid-column: 3 / 7;
        margin-top: 2rem;
    }
}

@media screen and (max-width: 767px) {
    .contact {
        padding: 4rem 2rem 8rem;
        margin: 5rem 0;

        &__form {
            padding: 0;
            display: flex;
            flex-direction: column;
        }
    }
}
</style>