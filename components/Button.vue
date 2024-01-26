<template>
    <button 
        class="btn"
        :class="variant"
    >
        <slot name="icon"></slot>
        <slot>Click</slot>
    </button>
</template>

<script setup>
const porps = defineProps({
    variant: {
        type: String,
        default: 'default',
        validator(value, props) {
            // The value must match one of these strings
            return ['default', 'ghost', 'icon'].includes(value)
        }
    }
})
</script>

<style lang="scss">
.btn {
    @include cuttedEgde;
    font-weight: 700;
    background-color: $light-green;
    color: $rich-black;
    border: none;
}

.default {
    padding: 1.5rem 5rem;
}

.ghost {
    padding: 1.5rem 5rem;
    color: $light-green;
    background-color: transparent;

    &::after {
        background: $rich-black;
    }

    &::before {
        background: $light-green;
    }
}

.icon {
    background-color: transparent;
}

</style>