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
          <div class="choose__description">
            <span>Choose</span>
            <span class="choose__description-space"></span>
            <span class="choose__description--grey-out">Upload</span>
          </div>
          
          <!-- marketplace images -->
          <div class="choose__marketplace-images flex">
            <img src="https://via.placeholder.com/100" alt="">
            <img src="https://via.placeholder.com/100" alt="">
            <img src="https://via.placeholder.com/100" alt="">
            <img src="https://via.placeholder.com/100" alt="">
          </div>

          <!-- button -->
          <a
            href="#"
            class="choose__next-button"
          >Next</a>
        </div>

        <div class="flex-one"></div>
      </div>
      <div class="flex-one"></div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.choose {
  height: 100vh;
  justify-content: center;
  align-items: center;

  &__content {
    border: 1px $grey-400 solid;
    border-radius: 5px;
    text-align: center;
  }

  &__description-space {
    margin: 0 1rem;
  }

  &__description {
    margin: 3rem 0 4rem 0;

    &--grey-out {
      color: $grey-300;
    }
  }

  &__marketplace-images {
    border: 1px $grey-400 solid;
    border-radius: 5px;
    padding: 1rem;
    justify-content: space-between;

    img {
      border-radius: 50%;
    }
  }

  &__next-button {
    @include button;
    display: block;
    margin: 3rem 0;
  }
}
</style>