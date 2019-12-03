<template>
  <div id="app">
    <router-view></router-view>
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
@import url('https://fonts.googleapis.com/css?family=Roboto:400,400i,500,700&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 100%;
}

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $grey-900;
}
</style>
