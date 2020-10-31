<template>
  <div>
    <global-navbar :is-landing-page="true"></global-navbar>

    <div class="container">
      <section class="hero row">
        <div class="col-xs-12 col-lg-8 offset-lg-2 offset-xl-2">
          <div class="hero__content row">
            <h1 class="hero__main-text">Software akuntansi <br> untuk pengusaha cerdas</h1>
            <router-link
              to="/app"
              class="hero__cta"
            >Coba Gratis</router-link>
            <img
              src="@/assets/hero-table.png"
              alt="hero image"
              class="hero__image"
            >
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="benefit row">
        <div class="col-lg-6 offset-lg-3 offset-xl-3 col-xs-12">

          <h2 class="benefit__main-text">Hitung omzet anda dalam satu klik</h2>
          <p class="benefit__description">Sekarang anda dapat rekap order dari semua marketplace dalam 5 menit</p>
          <router-link
            to="#"
            class="benefit__link"
          >Lihat fitur dari aplikasi</router-link>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="testimonial row">
        <div class="col-lg-6 offset-lg-3 offset-xl-3 col-xs-12">
          <div class="testimonial__content">

            <p class="testimonial__title">
              Dulu saya tutup toko butuh 30 menit buat rekapin order.
              Dengan Nistris, saya bisa lakukan semuanya dalam 5 menit.
            </p>

            <p class="testimonial__identity">
              Edward Edditya<br>pemilik Toko Kue Maknyus
            </p>
          </div>

        </div>
      </section>
    </div>

    <div class="container">
      <section class="bottom-cta row">
        <div class="col-lg-6 offset-lg-3 offset-xl-3 col-xs-12">
          <div class="bottom-cta__content flex">
            <p class="bottom-cta__main-text">
              Waktu anda berharga
            </p>
            <h2 class="bottom-cta__description">
              Gunakan waktu anda untuk bernisnis <br> bukan rekap order
            </h2>
            <router-link
              to="/app"
              class="bottom-cta__cta"
            >Coba Gratis</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import GlobalNavbar from "@/components/GlobalNavbar";

export default {
  components: { GlobalNavbar }
};
</script>

<style lang="scss" scoped>
.hero {
  padding: 2rem 0;

  &__content {
    flex-direction: column;
    align-items: flex-start;

    @include respond(lg) {
      align-items: center;
    }
  }

  &__image {
    width: 100%;
  }

  &__main-text {
    font-size: 2.5rem;
    text-align: left;
    font-weight: 700;

    @include respond(lg) {
      text-align: center;
    }
  }

  &__cta {
    @include button-cta;
    margin: 2.5rem 0;
    display: inline-block;
  }
}

.benefit {
  padding: 2rem 0;
  text-align: left;

  @include respond(lg) {
    text-align: center;
  }

  &__main-text {
    font-size: 2rem;
    font-weight: 500;
  }

  &__description {
    font-size: 1.25rem;
    margin: 1rem 0;
  }

  &__link {
    font-size: 1.25rem;
    @include underline-link;
  }
}

.testimonial {
  padding: 2rem 0;
  text-align: left;

  @include respond(lg) {
    text-align: center;
  }

  &__content {
    @include grey-border;
    padding: 2rem;
    flex-direction: column;
    // align-items: center;

    @include respond(lg) {
      border: none;
      padding: 0;
    }
  }

  &__title {
    font-size: 1.25rem;
    line-height: 120%;
    // width: 70%;

    &::before {
      content: open-quote;
      font-size: 2.5rem;
    }
  }

  &__identity {
    color: $grey-600;
    font-style: italic;
    padding-top: 1.5rem;
    text-align: left;

    @include respond(lg) {
      text-align: center;
    }
  }
}

.bottom-cta {
  padding: 2rem 0;
  text-align: left;

  @include respond(lg) {
    text-align: center;
  }

  &__content {
    flex-direction: column;
    align-items: flex-start;

    @include respond(lg) {
      align-items: center;
    }
  }

  &__main-text {
    font-size: 2.5rem;
    font-weight: 700;
  }

  &__description {
    font-size: 1.25rem;
    margin: 1rem 0;
  }

  &__cta {
    display: inline-block;
    margin-top: 1rem;
    @include button-cta;
  }
}
</style>