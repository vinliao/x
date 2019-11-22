<template>
  <div class="container flex">
    <p>hello friend</p>

    <landing-page-navbar></landing-page-navbar>
  </div>
</template>

<script>
import LandingPageNavbar from '../components/LandingPageNavbar'

export default {

  components: {
    LandingPageNavbar
  }

}
</script>

<style lang="scss" scoped>
.container {
  background: $red-100;
}

.text {
  color: $red-900;
}
</style>