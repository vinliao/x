<template>
  <div>

    <p class="card-table__item-name">{{ name }}</p>
    <div class="card-table__price-quantity">
      <span class="card-table__price">{{ price }} × </span>
      <span class="card-table__quantity">{{ qty }} barang</span>
    </div>
    <p class="card-table__marketplace-name">{{ marketplace }}</p>
    <p class="card-table__subtotal-label">Total penjualan</p>
    <p class="card-table__subtotal">{{ subtotal }}</p>
  </div>
</template>

<script>
export default {
  props: ["name", "price", "qty", "marketplace", "subtotal"]
};
</script>

<style lang="scss" scoped>
.card-table {
  &__card-item {
    border-bottom: 1px $grey-100 solid;
    padding: 1.5rem 0;

    &:last-of-type {
      margin-bottom: 5rem;
      border: none;
    }
  }

  &__item-name {
    margin-bottom: 0.5rem;
    font-weight: 700;
  }

  &__price-quantity {
    margin-bottom: 0.5rem;
  }

  &__marketplace-name {
    font-size: 0.75rem;
    color: $grey-400;
    margin-bottom: 1rem;
  }

  &__subtotal-label {
    color: $grey-400;
    font-size: 0.75rem;
    text-align: right;
  }

  &__subtotal {
    text-align: right;
    font-size: 1.5rem;
    font-weight: 700;
  }
}
</style>