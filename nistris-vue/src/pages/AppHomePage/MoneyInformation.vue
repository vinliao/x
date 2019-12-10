<template>

  <section class="money-information row">
    <div class="col-xs-12">
      <div class="money-information__revenue">
        <p class="money-information__description">Omzet anda hari ini</p>
        <p class="money-information__main">{{ revenue }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['revenue']
};
</script>

<style lang="scss" scoped>
.money-information {
  margin-top: 1rem;

  &__revenue,
  &__items {
    background: $grey-900;
    color: white;
  }

  &__revenue {
    border-right-style: none;
    padding: 1.5rem;
  }

  &__items {
    border-radius: 0 5px 5px 0;
    padding: 2rem;
  }

  &__description {
    color: $grey-400;
    margin-bottom: 0.5rem;
  }

  &__main {
    font-size: 2rem;
    font-weight: 700;
  }
}
</style>