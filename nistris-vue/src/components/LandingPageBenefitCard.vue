<template>
  <div class="benefit-card">
    <!-- pass the icon as params from parent -->
    <font-awesome-icon class="benefit-card__icon" size="4x" icon="coffee"/>
    <p class="benefit-card__title">Title</p>
    <p class="benefit-card-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, aliquid ullam nemo facere
      veniam, maxime cum quaerat aperiam ea consectetur velit accusantium veritatis quidem fuga autem, sequi accusamus quos in.</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.benefit-card {
  text-align: center;
  // color: white;

  &__title {
    font-size: 2rem;
    font-weight: 700;
  }

  &__icon {
    margin-bottom: 4rem;
  }
  
}
</style>