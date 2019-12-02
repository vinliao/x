<template>
  <div class="container">
    <section class="upload flex">
      <!-- Be careful, nested flex ahead! -->
      <div class="flex-one"></div>

      <!-- card -->
      <div class="flex-two upload__content flex">
        <div class="flex-one"></div>

        <!-- inside the card -->
        <div class="flex-one">
          <div class="upload__description">
            <span class="upload__description--grey-out">Choose</span>
            <span class="upload__description-space"></span>
            <span>Upload</span>
          </div>

          <!-- button -->
          <a
            href="/app"
            class="upload__upload-button"
          >Upload</a>

          <a href="upload/help" class="upload__help-link">
            Need help?
          </a>
        </div>


        <div class="flex-one"></div>
      </div>
      <div class="flex-one"></div>
      
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.upload {
  height: 100vh;
  justify-content: center;
  align-items: center;

  &__description-space {
    margin: 0 1rem;
  }

  &__description {
    margin: 3rem 0 4rem 0;

    &--grey-out {
      color: $grey-300;
    }
  }

  &__content {
    @include grey-border;
    text-align: center;
  }

  &__upload-button {
    @include button;
    display: block;
  }

  &__help-link {
    display: block;
    color: $grey-900;
    margin: 1rem 0 5rem 0;
  }
}

</style>