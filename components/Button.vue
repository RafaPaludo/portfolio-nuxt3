<template>
    <component :is="as"
        class="btn"
        :class="variant"
    >
        <slot name="icon"></slot>
        <slot>Click</slot>
    
    </component>
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
    },
    as: {
        type: String,
        default: 'button',
        validator(value, props) {
            // The value must match one of these strings
            return ['button', 'a'].includes(value)
        }
    }
})
</script>

<style lang="scss">
.btn {
    cursor: pointer;
    font-weight: 700;
    background-color: $light-green;
    color: $rich-black;
    border: none;
    min-width: 17rem;
    text-align: center;

    &.default {
        @include bevel;
        padding: 1.5rem 0;
    }

    &.ghost {
        @include bevel($text-transition-color: $white);
        padding: 1.5rem 0;
        color: $light-green;
        background-color: transparent;

        &::after {
            background: $rich-black;
        }

        &::before {
            background: $light-green;
        }
    }

    &.icon {
        background-color: transparent;
        min-width: 4rem;
    }
}
</style>