<template>
  <section class="navbar row">
    <p v-if="placeIndicator == undefined" class="navbar__brand">Nistris</p>
    <p v-if="placeIndicator != undefined" class="navbar__place-indicator">{{ placeIndicator }}</p>
    <div class="navbar__items">
      <router-link
        v-if="!isLandingPage"
        to="#"
        class="navbar__settings"
      >Settings</router-link>
      <router-link
        v-if="isLandingPage"
        to="/app"
        class="navbar__login"
      >Login</router-link>
      <router-link
        v-if="isLandingPage"
        to="/app"
        class="navbar__register"
      >Register</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    isLandingPage: {
      type: Boolean,
      default: false
    },
    placeIndicator: {
      type: String,
      default: undefined,
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  // border: 1px solid red;
  justify-content: space-between;
  align-items: center;

  // horizontal padding is 0.75 rem because .container has
  // 0.75 rem margin on each side. Alignment, my friends.
  padding: 0.75rem $container-spacing/2;

  box-shadow: 0 2px 2px $grey-100;

  &__brand {
    font-size: 1.5rem;
    font-family: "Playfair Display", serif;
  }

  &__place-indicator {
    font-size: 1.5rem;
    font-weight: 500;
  }

  &__login {
    @include button;
    background: white;
    color: $grey-900;
    font-weight: 400;
    margin-right: 0.5rem;

    &:hover {
      background: white;
      // color: $grey-900;
    }
  }

  &__register {
    @include button;
  }

  &__settings {
    text-decoration: none;
    color: $grey-900;
  }
}
</style>