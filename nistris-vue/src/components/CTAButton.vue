<template>
  <a
    href="#"
    class="cta-button"
  >
    <strong>
      Try now
    </strong>
  </a>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.cta-button {
  @include anchor-button;
  display: inline-block;
  background: $red-600;
  color: white;
  padding: 1rem 3rem;
  font-size: 1.25rem;
}
</style>