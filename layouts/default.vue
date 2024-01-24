<template>
    <div id="default">
      <Header />
      <slot />
    </div>
</template>

<style lang="scss">
@import '~/assets/scss/main.scss';

#default {
    background-color: $rich-black;
}

</style>