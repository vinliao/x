<template>
  <div class="container">
    <section class="choose flex">

      <!-- Be careful, nested flex ahead! -->
      <div class="flex-one"></div>

      <!-- card -->
      <div class="flex-two choose__content flex">
        <div class="flex-one"></div>

        <!-- inside the card -->
        <div class="flex-four">
          <div class="choose__description flex">
            <p class="choose__description-choose">Choose</p>
            <p class="choose__description-upload choose__description--grey-out">Upload</p>
          </div>

          <!-- marketplace images -->
          <div class="choose__marketplace-images flex">
            <img
              v-for="(item, index) in imageData"
              :src="getSrc(index)"
              alt=""
              @click="toggleColor(index)"
              :class="{ inactive: isInactive[index] }"
            >

          </div>

          <!-- button -->
          <router-link
            to="upload"
            class="choose__next-button"
          >Next</router-link>

        </div>

        <div class="flex-one"></div>
      </div>
      <div class="flex-one"></div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // start with everything inactive (greyed out)
      imageData1: [true, true, true, true],
      imageData: [
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
      isInactive: [true, true, true, true]
    };
  },
  methods: {
    toggleColor(index) {
      // only one item can be active
      this.isInactive = [true, true, true, true];
      this.isInactive.splice(index, 1, !this.isInactive[index]);
    },
    getSrc(index){
      return this.imageData[index].src
    }
  },
  computed: {}
};
</script>

<style lang="scss" scoped>
.choose {
  @include center-flex;

  &__content {
    @include grey-border;
    text-align: center;
  }

  &__description-space {
    margin: 0 1rem;
  }

  &__description {
    margin: 3rem 0 4rem 0;

    &-choose,
    &-upload {
      width: 50%;
      padding-bottom: 0.5rem;
      border-bottom: 0.5px $grey-900 solid;
    }

    &--grey-out {
      color: $grey-300;
      border-bottom: 0.5px $grey-300 solid;
    }
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
    @include button;
    display: block;
    margin: 3rem 0;
  }
}

.inactive {
  filter: grayscale(100%);
}
</style>