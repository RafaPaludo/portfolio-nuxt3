<template>
    <button 
        class="btn"
        :class="variant"
    >
        <span v-if="btnText"> {{ btnText }}</span>
        <span v-if="btnIcon"> 
            <Icon 
                :name="btnIcon.name"
                :color="btnIcon.color"
                :width="btnIcon.width"
                :height="btnIcon.height"
            />
        </span>  
    </button>
</template>

<script setup>
const porps = defineProps({
    btnText:  {
        type: String,
        default: 'Contato'
    },
    btnIcon: {
        type: Object
    },
    variant: {
        type: String,
        default: 'default',
        validator(value, props) {
            // The value must match one of these strings
            return ['default', 'icon'].includes(value)
        }
    }
})
</script>

<style lang="scss">
@import '~/assets/scss/main.scss';
.btn {
    font-weight: 700;
    background-color: $light-green;
    color: $rich-black;
    border: none;
}

.default {
    padding: 1.5rem 5rem;
}

.icon {
    background-color: transparent;
}
</style>