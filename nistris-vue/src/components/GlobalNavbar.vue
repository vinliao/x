<template>
  <section class="navbar row">
    <p class="navbar__brand">Nistris</p>
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
  data() {
    return {
      isLandingPage: false
    };
  },
  props: ["isLandingPage"]
};
</script>

<style lang="scss" scoped>
.navbar {
  // border: 1px solid red;
  justify-content: space-between;
  align-items: center;

  // vertical padding is 0.75 rem because .container has
  // 0.75 rem margin on each side. Alignment, my friends.
  padding: 0.5rem $container-spacing/2;

  &__brand {
    font-size: 2rem;
    font-family: "Playfair Display", serif;
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