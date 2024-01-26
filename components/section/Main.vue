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
            <Button>Contato</Button>
            <Button variant="ghost">Currículo</Button>
          </div>
        </div>
        
  
        <div class="media__container">
          <Button variant="icon">
                <template v-slot="icon">
                    <Icon name="mdi:github" color="#0E1114" width="32" height="32"/>
                </template>
          </Button>
  
          <Button variant="icon">
                <template v-slot="icon">
                    <Icon name="mdi:linkedin" color="#0E1114" width="32" height="32"/>
                </template>
          </Button>
  
          <Button variant="icon">
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
		margin: 7rem 0 14rem;
		border: 1px solid $light-green;
		display: flex;
		justify-content: left;
		align-items: center;
	}

	&__text {
		flex-basis: 50%;
		padding: 15rem 7.5rem 10rem;
		
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
		gap: 3rem;
	}
}

.media {
	&__container {
		display: flex;
		gap: 3rem;

		.btn {
			padding: 1rem 3rem;
			background-color: $light-green;
		}
	}
}
  
@media screen and (max-width: 767px) {
	.main {
		&__container {
			margin: 1rem 0;
			flex-direction: column;
			align-items: flex-start;
		}

		&__text {
			flex-basis: 50%;
			padding: 3.2rem 1.2rem;

			h1 {
				font-size: 3.2rem;
			}

			h2 {
				font-size: 2.4rem;
				margin: 1rem 0;
			}
		}
	}
  
	.action {
		&__container {
			margin-top: 2.4rem;

			.btn {
				padding: 0.8rem 2.5rem;
			}
		}
	}
  
	.media {
		&__container {
			.btn {
				padding: 0.5rem 1.5rem;
			}
		}
	}
}
</style>