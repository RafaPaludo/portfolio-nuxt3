<template>
    <div id="default" :class="useTheme.theme">
      <Header />
      <slot />

      <Footer />
    </div>
</template>

<style lang="scss">
#default {
    background-color: $rich-black;
}

</style>

<script setup>
const useTheme = useThemeStore()
</script>