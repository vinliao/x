<template>
  <div>
    <!-- navbar -->
    <div class="container">
      <section class="hero flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <div class="hero__content flex">
            <h1 class="hero__main-text">Your best value propostion</h1>
            <!-- <h2 class="hero__sub-text">this is my friend</h2> -->
            <a
              href="/app"
              class="hero__cta"
            >Try now</a>
            <img
              src="http://via.placeholder.com/2000x1000"
              alt="hero image"
              class="hero__image"
            >
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="benefit flex">
        <div class="flex-one"></div>
        <div class="flex-two">
          <p class="benefit__title">
            Super cool title
          </p>

          <p class="benefit__description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus ut optio officia distinctio, harum quo veritatis.
            Ipsam labore fuga maxime enim, iusto eos aperiam perferendis corrupti architecto et cumque?
          </p>
        </div>
        <div class="flex-two">
          <img
            src="http://via.placeholder.com/2000x500"
            alt=""
            class="benefit__image"
          >
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="testimonial flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <div class="testimonial__content flex">

            <p class="testimonial__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi optio vitae quisquam deleniti suscipit cupiditate illo
            </p>

            <p class="testimonial__identity">
              FirstName LastName - CEO of Company X
            </p>
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="bottom-cta flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <div class="bottom-cta__content flex">
            <p class="bottom-cta__main-text">
              Your best value proposition
            </p>

            <a href="/app" class="bottom-cta__cta">
              Super cool
            </a>
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <!-- <div class="container">
      <section class="footer flex">
        <div class="flex-one"></div>
        <div class="flex-four">Copyright Nistris</div>
        <div class="flex-one"></div>
      </section>
    </div> -->
    
  </div>


</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 3rem 0;

  &__content {
    align-items: center;
    flex-direction: column;
  }

  &__image {
    width: 100%;
  }

  &__main-text {
    font-size: 3rem;
  }

  &__cta {
    @include button-cta;
    margin: 3rem 0;
    display: inline-block;
  }
}

.benefit {
  padding: 3rem 0;
  &__title {
    font-size: 2rem;
    padding: 3rem 0 1rem 0;
  }

  &__title,
  &__description {
    width: 80%;
  }

  &__image {
    // TODO: move this to middle vertically
    width: 100%;
    height: 100%;
  }
}

.testimonial {
  padding: 3rem 0;
  text-align: center;

  &__content {
    @include grey-border;
    padding: 1.5rem;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 2rem;
    width: 70%;

    &::before {
      content: open-quote;
      // font-size: 1rem;
    }
  }

  &__identity {
    color: $grey-600;
    font-style: italic;
    padding-top: 2rem;
  }
}

.bottom-cta {
  text-align: center;
  padding: 4rem 0;

  &__content {
    flex-direction: column;
    align-items: center;
  }

  &__main-text {
    font-size: 3rem;
  }

  &__cta {
    display: inline-block;
    margin-top: 1rem;
    @include button-cta;
  }
}
</style>