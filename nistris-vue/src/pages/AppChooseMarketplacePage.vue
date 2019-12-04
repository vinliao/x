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
              src="@/assets/shopee-logo.png"
              alt=""
              @click="image0Grey = !image0Grey"
              :class="{ 'grey-color': image0Grey }"
            >
            <img
              src="@/assets/shopee-logo.png"
              alt=""
              @click="image1Grey = !image1Grey"
              :class="{ 'grey-color': image1Grey }"
            >
            <img
              src="@/assets/shopee-logo.png"
              alt=""
              @click="image2Grey = !image2Grey"
              :class="{ 'grey-color': image2Grey }"
            >
            <img
              src="@/assets/shopee-logo.png"
              alt=""
              @click="image3Grey = !image3Grey"
              :class="{ 'grey-color': image3Grey }"
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
      image0Grey: true,
      image1Grey: true,
      image2Grey: true,
      image3Grey: true,
    }
  },
  methods: {
  },
  computed: {
  }
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
      border-radius: 50%;
      width: 25%;
      transition: 300ms;

      &:hover {
        filter: grayscale(0%);
      }
    }
  }

  &__next-button {
    @include button;
    display: block;
    margin: 3rem 0;
  }
}

.grey-color{
  filter: grayscale(100%);
  // background: blue;
}

</style>