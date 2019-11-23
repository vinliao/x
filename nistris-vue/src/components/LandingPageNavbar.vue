<template>
  <div class="container flex navbar">
    <h1 class="navbar__brand">
      Nistris
    </h1>
    <div class="navbar__items">
      <a
        href="#"
        class="navbar__login"
      >Login</a>

      <a
        href="#"
        class="navbar__signup"
      >
        <strong>
          Sign up
        </strong>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  &__brand {
    font-family: "Playfair Display", serif;
  }

  &__login {
    @include anchor-button;
    color: $grey-900;
    background: white;
    border: 1px $grey-900 solid;
  }

  &__signup {
    @include anchor-button;
    color: white;
    background: $grey-900;
    margin-left: 0.5rem;
  }
}
</style>