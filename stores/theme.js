export const useThemeStore = defineStore('theme', () => {
  const theme = ref('dark-mode')

  function dark() {
    theme.value = 'dark-mode'
  }

  function light() {
    theme.value = 'light-mode'
  }

  function toggle() {
    theme.value === 'dark-mode' ? light() : dark()
  }

  function activeTheme () {
    return this.theme
  }

  return { theme, dark, light, toggle, activeTheme}
})