<template>
    <header class="header">
        <div class="container">
            <Logo />
            <Nav class="mb-hidden"></Nav>
            <Button class="btn__contact mb-hidden">Contato</Button>
            <Button @click="openModal" variant="icon" class="desk-hidden">
                <template v-slot="icon">
                    <Icon name="game-icons:hamburger-menu" color="#2EBF93" width="32" height="32"/>
                </template>
            </Button>

            <Transition name="slide-fade-r">
                <div v-if="modalStore.modal" class="modal">
                    <div class="overlay" @click="closeModal"></div>
                    <div class="menu-mobile">
                        <Button  @click="closeModal" class="desk-hidden close-menu" variant="icon">
                            <template v-slot="icon">
                                <Icon name="material-symbols:close-small-outline" color="#2EBF93" width="50" height="50"/>
                            </template>
                        </Button>
                        <Nav></Nav>
                        <Button
                            as="a"
                            href="/curriculo-rafael-paludo.pdf" target="_blank"
                        >
                            Currículo
                        </Button>
                    </div>
                </div>
            </Transition>
        </div>
    </header>
</template>

<script setup>
const modalStore = useModalStore()

function openModal () {
    modalStore.open()
}

function closeModal () {
    modalStore.close()
}
</script>

<style lang="scss">

.desk-hidden {
    display: none;
}

.header {
    box-shadow: 0 3px 8px rgba($light-green,.1);
}

.logo,
.btn__contact {
    flex-basis: 10%;
}

nav {
    flex-basis: 80%;
}

.container {
    background-color: $rich-black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 1.5rem;
    margin: 0 auto;
    max-width: 130rem;
    gap: 2rem;
}

.modal {
    position: fixed;
    inset: 0;
    z-index: 10;
    width: 100vw;

    .overlay {
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: rgba($black, .8);
        width: 200%;
    }

    .menu-mobile {
        @include bevel($border: false, $edge-top-left: 5em);
        width: 80%;
        height: 100vh;
        margin-left: auto;
        padding: 3.2rem;
        background: $rich-black;

        .close-menu {
            display: block;
            margin-left: auto;
        }

        nav {
            max-width: none;
         
            ul {
                flex-direction: column;
                padding: 14rem 0 4rem;
                border: none;
                gap: 4rem;

                &::after,
                &::before { display: none; }

                li:last-child { display: none; }
            }
        }

        .default {
            display: block;
            margin: 0 auto;
        }
    }
}

@media screen and (max-width: 767px) {
    .mb-hidden {
        display: none;
    }

    .desk-hidden {
        display: initial;
    }
}
</style>