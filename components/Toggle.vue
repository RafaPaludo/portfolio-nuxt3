<template>
  <label class="switch">
    <input type="checkbox" @click="toggleThemeColors">
    <span class="slider round">
      <Icon
        :name="'material-symbols:' + activeTheme"
        color="#22222a"
        width="24"
        height="24"
        class="slider__icon"
      />
    </span>
  </label>
</template>

<style lang="scss">
/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  max-width: 6rem;
  height: 3.4rem;

  /* Hide default HTML checkbox */
  & > input {
    opacity: 0;
    width: 0;
    height: 0;
  }
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $white;
  border: 1px solid $light-green;
  -webkit-transition: .4s;
  transition: .4s;

  &__icon {
    position: absolute;
    left: 4px;
    bottom: 4px;
    background-color: $light-green;
    border-radius: 50%;
    -webkit-transition: .4s;
    transition: .5s;
  }
}

input:checked + .slider {
  background-color: #292935;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider .icon  {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}
</style>

<script setup>
const themeStore = useThemeStore()
const activeTheme = ref('')

function toggleThemeColors () {
  themeStore.toggle()
  activeTheme.value = themeStore.activeTheme()
}
</script>