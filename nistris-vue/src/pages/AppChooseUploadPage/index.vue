<template>
  <div>
    <global-navbar place-indicator="Upload"></global-navbar>
    <div class="container">
      <section class="choose row">
        <div class="choose__content col-xs-12">
          <p class="choose__title">Pilih marketplace anda</p>

          <label class="choose__radio-container"> Tokopedia
            <input
              type="radio"
              value="tokopedia"
              name="marketplace"
            >
            <span class="choose__radio-circle"></span>
          </label>
          <label class="choose__radio-container"> Shopee
            <input
              type="radio"
              value="shopee"
              name="marketplace"
            >
            <span class="choose__radio-circle"></span>
          </label>
          <label class="choose__radio-container"> Bukalapak
            <input
              type="radio"
              value="bukalapak"
              name="marketplace"
            >
            <span class="choose__radio-circle"></span>
          </label>
          <label class="choose__radio-container"> Lazada
            <input
              type="radio"
              value="lazada"
              name="marketplace"
            >
            <span class="choose__radio-circle"></span>
          </label>
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

  // create block label
  &__radio-container {
    display: block;
    position: relative;
    cursor: pointer;
    padding-left: 2rem;
    margin-bottom: 1rem;

    // hide the default radio
    input[type="radio"] {
      position: absolute;
      opacity: 0;
      height: 0;
      width: 0;
      cursor: pointer;

      // if radio button is checked (clicking label works too),
      // then it will make the next element with class 
      // choose__radio-circle (my created circle) then apply some css
      // inside. This is black magic my friend.
      &:checked ~ .choose__radio-circle {
        border: 2px $grey-700 solid;

        &::before {
          content: '';
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          display: inline-block;
          background: $grey-700;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          // for some reason the translate needs to be -55% to be perfectly
          // centered. There must be something wrong here.
          transform: translate(-50%, -55%);
        }
      }
    }
  }

  &__radio-circle {
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px $grey-300 solid;
    left: 0;
    border-radius: 50%;
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
    display: block;
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