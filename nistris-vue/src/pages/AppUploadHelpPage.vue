<template>
  <div class="container">
    <section class="help flex">

      <!-- Be careful, nested flex ahead! -->
      <div class="flex-one"></div>

      <!-- card -->
      <div class="flex-two help__content flex">
        <div class="flex-one"></div>

        <!-- inside the card -->
        <div class="flex-four">
          <p class="help__title">Steps</p>
          <p class="help__steps">1. Go to this page</p>
          <p class="help__steps">2. Login to marketplace</p>
          <p class="help__steps">3. Download the file</p>

          <!-- button -->
          <a
            href="/app"
            class="help__back-button"
          >Back</a>
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
.help {
  @include center-flex;

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  &__steps {
    line-height: 300%;

    &:last-of-type {
      margin-bottom: 1rem;
    }
  }

  &__back-button {
    @include button;
  }

}
</style>