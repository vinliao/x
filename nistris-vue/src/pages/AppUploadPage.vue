<template>
  <div class="container">
    <section class="upload flex">
      <!-- Be careful, nested flex ahead! -->
      <div class="flex-one"></div>

      <!-- card -->
      <div class="flex-two upload__content flex">
        <div class="flex-one"></div>

        <!-- inside the card -->
        <div class="flex-four">
          <div class="upload__description flex">
            <p class="upload__description-choose upload__description--grey-out">Choose</p>
            <p class="upload__description-upload">Upload</p>
          </div>

          <!-- button -->
          <router-link
            to="/app"
            class="upload__upload-button"
          >Upload</router-link>

          <router-link
            to="#"
            class="upload__help-link"
          >
            Need help?
          </router-link>
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
.upload {
  height: 100vh;
  justify-content: center;
  align-items: center;

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

  &__content {
    @include grey-border;
    text-align: center;
  }

  &__upload-button {
    @include button;
    display: block;
  }

  &__help-link {
    display: inline-block;
    margin: 1rem 0 5rem 0;
    @include underline-link;
  }
}
</style>