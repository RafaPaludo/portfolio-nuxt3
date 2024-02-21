<template>
    <footer class="footer">
      <Logo />
      <div class="footer__media">
        <Button as="a" href="https://github.com/RafaPaludo" target="_blank">
          <template v-slot="icon">
              <Icon name="mdi:github" color="#FFF" width="32" height="32"/>
          </template>
        </Button>
        <Button as="a" href="https://www.linkedin.com/in/rafael-paludo-93a48413b/" target="_blank">
          <template v-slot="icon">
              <Icon name="mdi:linkedin" color="#fff" width="32" height="32"/>
          </template>
        </Button>

        <Button as="a" href="https://www.instagram.com/rafa.paludo/" target="_blank">
          <template v-slot="icon">
              <Icon name="mdi:instagram" color="#fff" width="32" height="32"/>
          </template>
        </Button>
      </div>
      <p>
        Feito com 
        <Icon name="iconoir:coffee-cup" color="#13b47e" width="24" height="24" class="icon_coffee"/>
        <Icon name="mdi:heart-outline"  color="#13b47e" width="24" height="24"  class="icon_coffee"/>
        <Icon name="material-symbols:code"  color="#13b47e" width="24" height="24"  class="icon_coffee"/>
        | Copyright © <span>{{ currentYear() }}</span>
      </p>
    </footer>
</template>

<style lang="scss">
.footer {
  margin: 14rem auto 0;
  max-width: 127rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  padding: 4rem;
  color: $white;
  text-align: center;
  line-height: 1.5;

  &__media {
    display: flex;
    gap: 3rem;

    .btn {
      min-width: 1rem;
      background-color: transparent;

      &::after,
      &::before { display: none; }
    }
  }

  .icon {
    top: -0.3rem;
    position: relative;
    margin: 0 .5rem;
  }
}

@media screen and (max-width: 767px) {
  .footer {
    padding: 4rem 2rem;
    margin-top: 5rem;
  }
}
</style>