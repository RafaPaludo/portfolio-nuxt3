<template>
    <section id="contact" class="contact">
        <Subtitle>Contact</Subtitle>
        <p class="contact__lead">
            Tem algum projeto em mente? <br>
            Me envie um e-mail para tirarmos isso do papel e revolucionar o mundo!
        </p>

        <form action="" class="contact__form" ref="form" @submit.prevent="sendEmail">
            <label class="contact__label">
                <input type="text" placeholder="Nome" class="contact__name" name="user_name" ref="inputName"/>
            </label>

            <label class="contact__label">
                <input type="email" placeholder="Email" class="contact__email" name="user_email" ref="inputEmail"/>
            </label>

            <label class="contact__label">
                <textarea id="subject" name="message" rows="5" cols="50" class="contact__subject" placeholder="Assunto" ref="message"></textarea>
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

        &--empty {
          @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $red, $hover: false);
        }

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

<script setup>
import emailjs from '@emailjs/browser'

const form = ref(null)
const inputName = ref(null)
const inputEmail = ref(null)
const message = ref(null)

function clearFields () {
  inputName.value.value = inputEmail.value.value = message.value.value = ''
}

function checkWrongFields ([ ...fields ]) {
  fields.forEach(field => {
    if (!field.value.value.trim()) {
      field.value.parentElement.classList.add('contact__label--empty')
    }
  })
}

function sendEmail () {
  checkWrongFields([inputName, inputEmail, message])
  
  // emailjs
  //   .sendForm('contact_service', 'contact_form', form.value, {
  //     publicKey: 'BcNk5FVCHMQCfiIqW'
  //   })
  //   .then(
  //     () => {
  //       clearFields()
  //       console.log("SUCESS!")
  //     },
  //     (error) => {
  //       console.warn('Error', error.text)
  //     }
  //   )
}
</script>