<template>
  <div>
    <global-navbar></global-navbar>

    <div class="container">
      <money-information :revenue="calculateRevenue()"></money-information>
    </div>

    <div class="container">

      <section class="card-table row">
        <div class="col-xs-12">
          <p class="card-table__title">Riwayat transkasi</p>
          <div
            class="card-table__card-item"
            v-for="item in tableData"
          >
            <!-- make the card into a component, not the whole item -->
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

    <add-fab></add-fab>

  </div>
</template>

<script>
import GlobalNavbar from "@/components/GlobalNavbar";
import AddFab from "./AddFab";
import MoneyInformation from "./MoneyInformation";

export default {
  components: {
    GlobalNavbar,
    AddFab,
    MoneyInformation
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
.card-table {
  margin-top: 4rem;

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