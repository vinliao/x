<template>
  <div>
    <global-navbar place-indicator="Upload"></global-navbar>
    <div class="container">
      <section class="choose row">
        <div class="choose__content col-xs-12">
          <p class="choose__title">Pilih marketplace anda</p>
          <select v-model="selectedMarketplace">
            <option
              disabled
              value=""
              hidden
            >Pilih satu</option>
            <option value="Tokopedia">Tokopedia</option>
            <option value="Shopee">Shopee</option>
            <option value="Lazada">Lazada</option>
            <option value="Bukalapak">Bukalapak</option>
          </select>
        </div>
      </section>

      <section
        class="upload row"
        v-if="selectedMarketplace != ''"
      >
        <div class="upload__content col-xs-12">
          <p class="upload__title">Upload excel</p>

          <!-- instruction is bad in usability! -->
          <router-link
            to="#"
            class="upload__download-excel"
          >Klik sini untuk download excel dari {{ selectedMarketplace }}</router-link>

          <router-link
            class="upload__upload-button"
            to="/app"
          >Upload</router-link>
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
  },
  methods: {},
  computed: {}
};
</script>

<style lang="scss" scoped>
.choose {
  margin: 2rem 0;
  // @include center-flex;

  &__title {
    font-weight: 500;
    margin-bottom: 1.5rem;
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
    margin-bottom: 1.5rem;
  }

  &__download-excel {
    display: inline-block;
    @include underline-link;
    margin-bottom: 1rem;
  }

  &__upload-button {
    @include button;
    display: block;
    text-align: center;
  }
}
</style>