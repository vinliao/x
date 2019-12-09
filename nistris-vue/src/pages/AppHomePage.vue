<template>
  <div>
    <global-navbar></global-navbar>

    <div class="container">

      <section class="money-information row">
        <div class="col-xs-12">
          <div class="money-information__revenue">
            <p class="money-information__description">Omzet anda hari ini</p>
            <p class="money-information__main">{{ calculateRevenue() }}</p>
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <!-- <section class="table flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <router-link
            to="/app/choose"
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
        <div class="flex-one"></div>
      </section> -->
      <section class="card-table row">
        <div class="col-xs-12">
          <p class="card-table__title">Riwayat transkasi</p>
          <div
            class="card-table__card-item"
            v-for="item in tableData"
          >
            <p class="card-table__item-name">{{ item.name }}</p>
            <div class="card-table__price-quantity">
              <span class="card-table__price">{{ toRupiah(item.price) }} × </span>
              <span class="card-table__quantity">{{ item.qty }} barang</span>
            </div>
            <p class="card-table__marketplace-name">{{ item.marketplace }}</p>
            <p class="card-table__subtotal-label">Total penjualan</p>
            <p class="card-table__subtotal">{{ calculateSubtotal(item.qty, item.price) }}</p>
          </div>
        </div>
      </section>
    </div>

  </div>
</template>

<script>
import GlobalNavbar from "@/components/GlobalNavbar";

export default {
  components: {
    GlobalNavbar
  },
  data() {
    return {
      revenue: 0,
      itemsSold: 0,
      tableData: [
        {
          marketplace: "Tokopedia",
          name: "Kipas angin",
          qty: 1,
          price: 200000
        },
        {
          marketplace: "Bukalapak",
          name: "Rice cooker",
          qty: 1,
          price: 500000
        },
        {
          marketplace: "Shopee",
          name: "Headset",
          qty: 2,
          price: 50000
        },
        {
          marketplace: "Lazada",
          name: "Botol minum",
          qty: 5,
          price: 200000
        },
        {
          marketplace: "Tokopedia",
          name: "Air mineral",
          qty: 20,
          price: 5000
        }
      ]
    };
  },

  methods: {
    sumReducer(acc, curr) {
      return (acc += curr);
    },

    multiplyReducer(acc, curr) {
      return (acc *= curr);
    },

    toRupiah(number) {
      const numberReverse = number
        .toString()
        .split("")
        .reverse();

      for (let i = 0; i < numberReverse.length; i++) {
        if (i % 3 == 0 && i != 0) {
          numberReverse[i] += ",";
        }
      }

      numberReverse.push("Rp. ");
      return numberReverse.reverse().join("");
    },

    calculateSubtotal(qty, price) {
      return this.toRupiah(qty * price);
    },

    calculateRevenue() {
      const subtotalArr = [];

      // the sales data will be an array, first index is qty, second the price
      const salesData = this.tableData.map(item => [item.qty, item.price]);

      salesData.forEach(item => {
        subtotalArr.push(item.reduce(this.multiplyReducer));
      });

      return this.toRupiah(subtotalArr.reduce(this.sumReducer));
    },

    calculateItemsSold() {
      // only take the quantity out all of the attribute of data
      const quantities = this.tableData.map(item => item.qty);

      // sum those quantity
      return quantities.reduce(this.sumReducer);
    }
  }
};
</script>

<style lang="scss" scoped>
.money-information {
  margin-top: 1rem;

  &__revenue,
  &__items {
    // border: 1px $grey-400 solid;
    background: $grey-900;
    color: white;
  }

  &__revenue {
    border-right-style: none;
    // border-radius: 5px 0 0 5px;
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

.card-table {
  margin-top: 4rem;

  &__title {
    // color: $grey-400;
    font-size: 1.25rem;
    font-weight: 500;
  }

  &__card-item {
    // border: 1px solid red;
    border-bottom: 1px $grey-100 solid;
    padding: 1.5rem 0;
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

    // apply bottom margin to tr elements on the last tr row
    // tr:last-of-type > td {
    //   margin-bottom: 1rem;
    // }
  }
}
</style>