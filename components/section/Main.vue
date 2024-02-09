<template>
    <section class="main__container">
      <div class="main__description">
        <div class="main__text">
          <h1>
            Hello,<br>
            I'm <span>Rafael Paludo</span>
          </h1>
  
          <h2>Frontend Developer</h2>
  
          <p>I solve real problems using technology</p>
  
          <div class="action__container">
            <Button as="a" href="#contact">Contato</Button>
            <Button variant="ghost" as="a" href="/curriculo-rafael-paludo.pdf" target="_blank">Currículo</Button>
          </div>
        </div>
        
  
        <div class="media__container">
          <Button as="a" href="https://github.com/RafaPaludo" target="_blank">
                <template v-slot="icon">
                    <Icon name="mdi:github" color="#0E1114" width="32" height="32"/>
                </template>
          </Button>
  
          <Button as="a" href="https://www.linkedin.com/in/rafael-paludo-93a48413b/" target="_blank">
                <template v-slot="icon">
                    <Icon name="mdi:linkedin" color="#0E1114" width="32" height="32"/>
                </template>
          </Button>
  
          <Button as="a" href="https://www.instagram.com/rafa.paludo/" target="_blank">
                <template v-slot="icon">
                    <Icon name="mdi:instagram" color="#0E1114" width="32" height="32"/>
                </template>
          </Button>
        </div>
      </div>
  
      <div class="main__image">
        <img src="~/assets/img/main-photo.png" alt="Minha foto aqui!">
      </div>
    </section>
</template>

<style lang="scss"> 
.main {
	&__container {
		@include bevel($bg-color: $rich-black, $border-color: $light-green, $edge-top-left: 3em, $edge-bottom-right: 3em, $hover: false);
		margin: 7rem 0 14rem;
		border: 1px solid $light-green;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	&__description {
		width: 100%;
	}

	&__text {
		flex-basis: 50%;
		padding: 10rem 7.5rem 0;
		
		color: $white;

		h1 {
			font-size: 4.8rem;
			
			span {
				color: $light-green;
				background-color: transparent;
				text-shadow: -10px 0 100px $light-green;
			}
		}

		h2 {
			font-size: 3.2rem;
			margin: 1rem 0;
		}
	}

	&__image {
		flex-basis: 50%;
		padding: 1rem;

		img {
			margin: 0 auto;
			display: block;
			object-fit: scale-down;
			width: 100%;
			max-height: 45rem;
			// filter: drop-shadow(-55px -197px 100rem rgba(255,255,255,0.1));
		}
	}
}

.action {
	&__container {
		margin-top: 4.8rem;
		display: flex;
		flex-wrap: wrap;
		gap: 3rem;
	}
}

.media {
	&__container {
		display: flex;
		gap: 3rem;
		padding: 4rem 7.5rem 10rem;

		.btn {
			padding: 0;
			min-width: 9.2rem;
			height: 4.2rem;

			&::after,
			&::before { display:  none; }
		}
	}
}
  
@media screen and (max-width: 767px) {
	.main {
		&__container {
			margin: 0 0 1rem;
			flex-direction: column;
			align-items: flex-start;
		}

		&__text {
			padding: 5.2rem 3.2rem;

			h1 {
				font-size: 3.2rem;
			}

			h2 {
				font-size: 2.4rem;
				margin: 1rem 0;
			}
		}

		&__image {
			padding: 5.2rem 3.2rem;
		}
	}
  
	.action {
		&__container {
			margin-top: 2.4rem;
			gap: 2rem;

			.btn {
				padding: 0.8rem 2.5rem;
			}
		}
	}
  
	.media {
		&__container {
			padding: 0rem 3.2rem 5.2rem 3.2rem;
			gap: 2rem;

			.btn {
				min-width: 6rem;
			}
		}
	}
}
</style>