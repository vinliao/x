<template>
  <div>
    <global-navbar place-indicator="Upload"></global-navbar>
    <div class="container">
      <section class="choose row">
        <div class="choose__content col-xs-12">
          <p class="choose__title">Pilih marketplace anda</p>

          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="tokopedia"
              checked
            > Tokopedia</label>
          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="shopee"
            > Shopee</label>
          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="bukalapak"
            > Bukalapak</label>
          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="lazada"
            > Lazada</label>
        </div>
      </section>

      <section class="upload row">
        <div class="upload__content col-xs-12">
          <p class="upload__title">Upload excel</p>

          <input
            type="file"
            name="excelInput"
            class="upload__input-file"
          >
          <router-link
            to="#"
            class="upload__upload-help"
          >Butuh bantuan?</router-link>

          <router-link
            class="upload__upload-button"
            to="/app"
          >Selesai</router-link>

        </div>
      </section>
    </div>

  </div>
</template>

<script>
import GlobalNavbar from "@/components/GlobalNavbar";
export default {
  components: { GlobalNavbar },
  data() {
    return {
      selectedMarketplace: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.choose {
  margin: 2rem 0;
  // @include center-flex;

  &__title {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &__radio-label {
    display: block;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &:active {
      background: white;
    }
  }

  &__content {
    input[type="radio"] {
      outline: none;
    }
  }

  &__next-button {
    text-align: center;
    @include button;
    display: block;
    margin: 3rem 0;
  }
}

.upload {
  margin-top: 3rem;

  &__title {
    font-weight: 500;
    margin-bottom: 1rem;
  }

  &__input-file {
    margin-bottom: 0.5rem;
  }

  &__upload-help {
    display: inline-block;
    @include underline-link;
    margin-bottom: 2rem;
  }

  &__upload-button {
    @include button;
    display: block;
    text-align: center;
  }
}
</style>