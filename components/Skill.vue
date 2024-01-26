<template>
    <figure class="skill">
        <img :src="source" :alt="alt" class="skill__icon">
        <figcaption class="skill__caption">{{ alt }}</figcaption>
    </figure>
</template>

<script setup>
const prop = defineProps(['source', 'alt'])

</script>

<style lang="scss">
.skill {
    width: 10.2rem;
    height: 12.5rem;
    margin: 0;
    text-align: center;
    color: $white;
    font-weight: 700;

    &__icon {
        padding: 1.5rem;
        border: 1px solid $light-green;
        margin-bottom: .4rem;
    }
}
</style>