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
          <!-- <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="shopee"
            >Shopee</label>
          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="bukalapak"
            >Bukalapak</label>
          <label class="choose__radio-label"><input
              type="radio"
              name="marketplace"
              value="lazada"
            >Lazada</label> -->
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
    padding-left: 1.5rem;
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
        border: 2px $grey-400 solid;

        &::after {
          content: '';
          position: absolute;
          width: 0.5rem;
          height: 0.5rem;
          display: inline-block;
          background: $grey-400;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }

  &__radio-circle {
    position: absolute;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px $grey-400 solid;
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