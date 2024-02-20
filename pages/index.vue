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
  margin: 17rem auto 0;
  max-width: 127rem;
}

#about,
#contact,
#projects {
  scroll-margin-top: 22rem;
}
  
@media screen and (max-width: 767px) {
  #about,
  #contact,
  #projects {
    scroll-margin-top: 12rem;
  }
	.page {
    margin: 12rem 1.5rem 1.5rem;
  }
}
</style>
