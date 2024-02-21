<template>
    <section id="contact" class="contact">
        <Subtitle>Contact</Subtitle>
        <p class="contact__lead">
            Tem algum projeto em mente? <br>
            Me envie um e-mail para trabalharmos juntos nisso!
        </p>

        <form action="" class="contact__form" ref="form" @submit.prevent="sendEmail">
            <label class="contact__label">
                <input type="text" placeholder="Fulano de Tal" class="contact__name" name="user_name" ref="inputName" @focusin="focusIn" @focusout="focusOut"/>
            </label>

            <label class="contact__label">
                <input type="email" placeholder="fulano@contato.com" class="contact__email" name="user_email" ref="inputEmail" @focusin="focusIn" @focusout="focusOut" />
            </label>

            <label class="contact__label">
                <textarea id="subject" name="message" rows="5" cols="50" class="contact__subject" placeholder="Minha mensagem" ref="message" @focusin="focusIn" @focusout="focusOut"></textarea>
            </label>

            <Button class="contact__button">Enviar</Button>
        </form>

        <Transition name="slide-fade-t">
          <p class="contact__feedback" v-if="feedback">
            Email enviado com sucesso!
          </p>
        </Transition>
    </section>
</template>

<style lang="scss">
.contact {
    @include rabbet;
    padding: 5rem 5rem 8rem;
    margin: 14rem 0;

    &__lead,
    &__feedback {
      margin: 5rem 0;
      text-align: center;
      color: $white;
      line-height: 1.5;
    }

    &__feedback {
      margin-bottom: 0;
    }

    &__form {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        gap: 3rem;
        padding: 0 15rem;
    }

    &__label {
        grid-column: span 4;
        padding: 1.5rem;
        @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $white, $hover: false);

        &--focus-in {
          @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $light-green, $hover: false);
        }

        &--focus-out {
          @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $white, $hover: false);
        }

        &--empty {
          @include bevel($border: true, $edge-bottom-right: 0em, $bg-color: $rich-black, $border-color: $red, $hover: false);
        }

        &:nth-of-type(3)  {
            grid-column: span 8;
        }
          
        & > * {
            width: 100%;
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
const feedback = ref(false)

function clearFields () {
  inputName.value.value = inputEmail.value.value = message.value.value = ''
}

function checkWrongFields ([ ...fields ]) {
  return fields
    .filter(field => {
      field.value.parentElement.classList.remove('contact__label--empty')

      return !field.value.value.trim()
    })
    .map(field => field.value.parentElement.classList.add('contact__label--empty'))
}

function focusIn ({ target }) {
  target.parentElement.classList.remove('contact__label--focus-out')
  target.parentElement.classList.add('contact__label--focus-in')
}

function focusOut ({ target }) {
  target.parentElement.classList.remove('contact__label--focus-in')
  target.parentElement.classList.add('contact__label--focus-out')
}

function displayFeedback () {
  feedback.value = true
  setTimeout(() => {
    feedback.value = false
  }, 5000)
}

function sendEmail () {
  const missingFields = checkWrongFields([inputName, inputEmail, message])

  if (missingFields.length) return 
  
  emailjs
    .sendForm('contact_service', 'contact_form', form.value, {
      publicKey: 'BcNk5FVCHMQCfiIqW'
    })
    .then(
      () => {
        clearFields()
        displayFeedback()
      },
      (error) => {
        console.warn('Error', error.text)
      }
    )
}
</script>