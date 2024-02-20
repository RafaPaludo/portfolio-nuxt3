<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.content">
                <NuxtLink
                    :to="link.href"
                    :target="link.target || '_self'"
                    @click="handleClick"
                >{{ link.content }}</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script setup>
const modalStore = useModalStore()

const links = [
    {
        href: '/',
        content: 'Home'
    },
    {
        href: '#about',
        content: 'Sobre'
    },
    {
        href: '#projects',
        content: 'Projetos'
    },
    {
        href: '#contact',
        content: 'Contato'
    },
    {
        href: '/curriculo-rafael-paludo.pdf',
        target: '_blank',
        content: 'Currículo'
    }
]

function handleClick () {
  modalStore.close()
}

</script>

<style lang="scss">
nav {
    width: 100%;
}

ul  {
  @include bevel($bg-color: $rich-black, $border-color: $light-green, $hover: false);
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
      transition: color .15s ease-in-out;

      &:hover {
        color: $light-green;
      }
    }
  }
}

</style>