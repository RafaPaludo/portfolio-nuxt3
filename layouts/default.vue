<template>
    <div id="default">
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