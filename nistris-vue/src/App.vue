<template>
  <div id="app">
    <landing-page></landing-page>
  </div>
</template>

<script>
import LandingPage from './pages/LandingPage'

export default {
  name: "app",
  components: {
    LandingPage
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,800|Playfair+Display&display=swap");

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grey-900;
}
</style>
