<template>

  <router-link to="/app/upload">
    <div class="add-fab">+</div>
  </router-link>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.add-fab {
  // positioning
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  // fab css
  width: $fab-size;
  height: $fab-size;
  border-radius: 50%;
  background: $primary-500;

  // content css
  text-align: center;
  // color: $grey-900;
  color: white;
  font-size: 2rem;

  // line height determines the width of a text content. The content
  // then will be vertically centered. Super cool
  line-height: $fab-size;
}
</style>