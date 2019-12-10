<template>
  <section class="table row">
    <div class="col-lg-8 offset lg-2">
      <router-link
        to="/app/upload"
        class="table__add-button"
      >Add new</router-link>
      <table class="table__content">
        <tr>
          <th>Marketplace</th>
          <th>Nama Barang</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Subtotal</th>
        </tr>

        <tr v-for="item in tableData">
          <td>{{ item.marketplace }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.qty }}</td>
          <td>{{ toRupiah(item.price) }}</td>
          <td>{{ calculateSubtotal(item.qty, item.price) }}</td>
        </tr>

      </table>
    </div>
  </section>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.table {
  margin: 5rem 0 2rem 0;

  &__add-button {
    @include button;
    display: inline-block;
    margin-bottom: 1rem;
  }

  &__content {
    width: 100%;
    border-collapse: collapse;
    // @include grey-border;

    th {
      text-align: left;
      padding: 1rem 1rem 0.75rem 1rem;
      border-bottom: 2px $grey-400 solid;
    }

    td {
      text-align: left;
      padding: 0.75rem 1rem;
      border-bottom: 0.5px $grey-200 solid;
    }

    // select the Qty, marketplace and subtotal
    // then align right
    td:nth-child(3),
    th:nth-child(3),
    td:nth-child(4),
    th:nth-child(4),
    td:nth-child(5),
    th:nth-child(5) {
      text-align: right;
    }

    // grey out marketplace and item name
    td:nth-child(1),
    td:nth-child(2) {
      color: $grey-600;
    }
  }
}
</style>