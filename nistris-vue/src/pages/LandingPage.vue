<template>
  <div>
    <!-- navbar -->
    <div class="container">
      <section class="hero flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <div class="hero__content flex">
            <h1 class="hero__main-text">Software akuntansi <br> untuk pengusaha cerdas</h1>
            <router-link
              to="/app"
              class="hero__cta"
            >Coba Gratis</router-link>
            <img
              src="../assets/hero-table.png"
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
          <h2 class="benefit__main-text">Hitung omzet anda dalam satu klik</h2>
          <p class="benefit__description">Jangan takut lagi untuk menghitung omzet dari semua toko online anda karena anda dapat lakukan semua dengan mudah dan cepat</p>
          <router-link
            to="#"
            class="benefit__link"
          >Lihat fitur dari aplikasi</router-link>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="testimonial flex">
        <div class="flex-one"></div>
        <div class="flex-two">
          <div class="testimonial__content flex">

            <p class="testimonial__title">
              Dulu saya pas tutup toko butuh 30 menit buat
              rekapin orderan saya, sekarang mah cuma butuh 5 menit,
              tanpa pusing pake Excel lagi
            </p>

            <p class="testimonial__identity">
              Edward Edditya, pemilik Toko Kue Maknyus
            </p>
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="bottom-cta flex">
        <div class="flex-one"></div>
        <div class="flex-two">
          <div class="bottom-cta__content flex">
            <p class="bottom-cta__main-text">
              Waktu anda berharga
            </p>

            <p class="bottom-cta__description">
              Gunakan waktu anda untuk bernisnis <br> bukan rekap order
            </p>

            <router-link
              to="/app"
              class="bottom-cta__cta"
            >Coba Gratis</router-link>
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

  </div>

</template>

<script>
export default {};
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
    text-align: center;
    font-weight: 700;
  }

  &__cta {
    @include button-cta;
    margin: 3rem 0;
    display: inline-block;
  }
}

.benefit {
  padding: 3rem 0;
  text-align: center;

  &__main-text {
    font-size: 3rem;
    font-weight: 500;
  }

  &__description {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  &__link {
    font-size: 1.5rem;
    @include underline-link;
  }
}

.testimonial {
  padding: 3rem 0;
  text-align: center;

  &__content {
    @include grey-border;
    padding: 2rem 0;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 2rem;
    line-height: 120%;
    width: 70%;

    &::before {
      content: open-quote;
      font-size: 4rem;
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
    font-weight: 700;
  }

  &__description {
    font-size: 1.5rem;
    margin: 1rem 0;
  }

  &__cta {
    display: inline-block;
    margin-top: 1rem;
    @include button-cta;
  }
}
</style>