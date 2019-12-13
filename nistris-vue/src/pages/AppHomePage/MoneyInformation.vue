<template>

  <section class="money-information row">
    <div class="col-xs-12 col-md-6">
      <div class="money-information__revenue">
        <p class="money-information__description">Omzet anda hari ini</p>
        <p class="money-information__main">{{ revenue }}</p>
      </div>
    </div>
    <div class="col-xs-12 col-md-6 money-information__optional">
      <div class="money-information__items">
        <p class="money-information__description">Banyak barang terjual</p>
        <p class="money-information__main">{{ itemsSold }}</p>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  props: ["revenue", 'itemsSold']
};
</script>

<style lang="scss" scoped>
.money-information {
  margin-top: 2rem;

  &__optional {
    @include respond(xs) {
      display: none;
    }

    @include respond(md) {
      display: block;
    }
  }

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
    padding: 1.5rem;
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