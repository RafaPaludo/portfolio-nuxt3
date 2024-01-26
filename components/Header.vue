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

            <div v-if="modal" class="modal">
                <div class="overlay" @click="closeModal"></div>
                <div class="menu-mobile">
                    <Button  @click="closeModal" class="desk-hidden close-menu" variant="icon">
                        <template v-slot="icon">
                            <Icon name="material-symbols:close" color="#2EBF93" width="32" height="32"/>
                        </template>
                    </Button>
                    <Nav></Nav>
                    <Button>Contato</Button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>    
const modal = ref(false)

function openModal () {
    modal.value = true
}

function closeModal () {
    modal.value = false
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

    .overlay {
        position: absolute;
        inset: 0;
        z-index: -1;
        background-color: rgba($black, .8);
    }

    .menu-mobile {
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
                padding: 5rem 0 3rem;
                border: none;
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