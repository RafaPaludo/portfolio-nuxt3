<template>
  <main class="page">
    <SectionMain />
    <SectionAbout />
    <SectionProjects />
    <SectionContact />
  </main>
</template>

<style lang="scss">
.page {
  margin: 0 auto;
  max-width: 127rem;
}
  
@media screen and (max-width: 767px) {
	.page {
    margin: 1.5rem;
  }
}
</style>
