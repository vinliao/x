<template>
  <section class="card-table row">
    <div class="col-xs-12">
      <p class="card-table__title">Riwayat transkasi</p>
      <div
        class="card-table__card-item"
        v-for="item in tableData"
      >
        <!-- make the card into a component, not the whole item -->
        <!-- <p class="card-table__item-name">{{ item.name }}</p>
        <div class="card-table__price-quantity">
          <span class="card-table__price">{{ toRupiah(item.price) }} × </span>
          <span class="card-table__quantity">{{ item.qty }} barang</span>
        </div>
        <p class="card-table__marketplace-name">{{ item.marketplace }}</p>
        <p class="card-table__subtotal-label">Total penjualan</p>
        <p class="card-table__subtotal">{{ calculateSubtotal(item.qty, item.price) }}</p> -->

      </div>


    </div>
    <add-fab></add-fab>
  </section>
</template>

<script>
export default {
  props: ['tableData']
};
</script>

<style lang="scss" scoped>
.card-table {
  margin-top: 4rem;

  @include respond(md) {
    display: none;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 500;
  }

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