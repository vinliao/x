<template>
  <div>
    <landing-page-navbar></landing-page-navbar>
    <div class="hero container flex">
      <div class="hero__content">
        <h1 class="hero__main-text">Super cool heading</h1>
        <h2 class="hero__sub-text">super cool subheading</h2>
        <CTAButton></CTAButton>
      </div>
      <img
        src="https://picsum.photos/600/400"
        alt="Cool picture"
        class="hero__image"
      >
    </div>

    <div class="benefit">
      <div class="container flex benefit__content">
        <landing-page-benefit-card class="benefit__card"></landing-page-benefit-card>
        <landing-page-benefit-card class="benefit__card"></landing-page-benefit-card>
        <landing-page-benefit-card class="benefit__card"></landing-page-benefit-card>
      </div>
    </div>

    <div class="testimonial container-small flex">
      <p class="testimonial__content">lorem lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Non labore quis iure eius! Dolores placeat tempora sit.</p>

      <div class="testimonial__person">
        <img
          src="https://picsum.photos/500/500"
          alt="Person picture"
          class="testimonial__person-picture"
        >
        <p class="testimonial__person-name">-John Doe, owner of Hello world</p>
      </div>

    </div>

    <div class="second-hero">
      <div class="container">
      <p class="second-hero__main-text">
        Super cool text
      </p>

      <CTAButton></CTAButton>
      </div>
    </div>

    <div class="footer">
      <p class="container footer__text">Footer text</p>
    </div>
  </div>

</template>

<script>
import LandingPageNavbar from "../components/LandingPageNavbar";
import LandingPageBenefitCard from "../components/LandingPageBenefitCard";
import CTAButton from "../components/CTAButton";

export default {
  components: {
    LandingPageNavbar,
    LandingPageBenefitCard,
    CTAButton
  }
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 12rem 0;
  align-items: center;
  justify-content: space-between;

  &__content {
    width: 50%;
  }

  &__main-text {
    font-size: 6rem;
    font-weight: 800;
  }

  &__sub-text {
    font-size: 3rem;
    font-weight: 400;
    margin-bottom: 3rem;
  }

  &__image {
    width: 50%;
  }
}

.benefit {
  background: $grey-100;
  padding: 6rem 0;
  &__card {
    width: 25%;
  }

  &__content {
    align-items: center;
    justify-content: space-between;
  }
}

.testimonial {
  justify-content: space-between;
  padding: 5rem 0;

  &__content {
    font-size: 2rem;
    width: 50%;

    &::before {
      content: open-quote;
      display: block;
      font-family: "Playfair Display", serif;
      font-size: 3rem;
    }
  }

  &__person {
    width: 50%;
    text-align: center;
  }

  &__person-picture {
    width: 80%;
    border-radius: 50%;
  }

  &__person-name {
    font-style: italic;
  }
}

.second-hero {
  background: $grey-100;
  padding: 6rem 0;

  &__main-text {
    font-size: 6rem;
    font-weight: 800;
  }
}

.footer {
  background: $grey-900;
  padding: 1rem 0;

  &__text {
    color: white;
  }
}
</style>