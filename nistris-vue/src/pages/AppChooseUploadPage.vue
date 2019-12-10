<template>
  <div>
    <global-navbar place-indicator="Upload"></global-navbar>
    <div class="container">
      <section class="choose row">
        <div class="choose__content col-xs-12">
          <p class="choose__title">Pilih marketplace anda</p>
          <!-- marketplace images -->
          <div class="choose__marketplace-images flex">
            <img
              v-for="(item, index) in marketplaceData"
              :src="getSrc(index)"
              alt=""
              @click="toggleColor(index)"
              :class="{ inactive: isInactive[index] }"
            >

          </div>
        </div>
      </section>

      <section
        class="upload row"
        v-if="isInactive.indexOf(false) != -1"
      >
        <div class="upload__content col-xs-12">
          <p class="upload__title">Upload excel</p>

          <!-- instruction is bad in usability! -->
          <router-link
            to="#"
            class="upload__download-excel"
          >Klik sini untuk download excel dari {{ getActiveMarketplace() }}</router-link>

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
      // start with everything inactive (greyed out)
      marketplaceData: [
        {
          marketplaceName: "tokopedia",
          // to be completely honest, I don't understand why require here
          src: require("../assets/tokopedia-logo.png")
        },
        {
          marketplaceName: "shopee",
          src: require("@/assets/shopee-logo.png")
        },
        {
          marketplaceName: "bukalapak",
          src: require("@/assets/bukalapak-logo.svg")
        },
        {
          marketplaceName: "lazada",
          src: require("@/assets/lazada-logo.png")
        }
      ],

      // the default is all active (colored)
      // I set all them to be inactive

      // when the image is clicked, then the item will be active (colored)
      // only one item can be active at a time
      isInactive: [true, true, true, true]
    };
  },
  methods: {
    toggleColor(index) {
      this.isInactive = [true, true, true, true];
      this.isInactive.splice(index, 1, !this.isInactive[index]);
    },
    getSrc(index) {
      // for some reason, binding src needs to be a function
      return this.marketplaceData[index].src;
    },
    getActiveMarketplace() {
      const activeIndex = this.isInactive.indexOf(false);
      if (activeIndex === -1) {
        return "none";
      } else {
        return this.marketplaceData[activeIndex].marketplaceName;
      }
    }
  },
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

  &__marketplace-images {
    @include grey-border;
    padding: 1rem;
    justify-content: space-between;

    img {
      // border-radius: 50%;
      width: 25%;
      transition: 300ms;
      // filter: grayscale(100%);

      &:hover {
        filter: grayscale(0%);
        cursor: pointer;
      }
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

.inactive {
  filter: grayscale(100%);
}

.section-separator {
  width: 100%;
  height: 7px;
  background: $grey-300;
  margin-top: 2rem;
}
</style>