<template>
  <div>
    <global-navbar></global-navbar>

    <div class="container">
      <money-information
        :revenue="calculateRevenue()"
        :items-sold="calculateItemsSold()"
      ></money-information>
    </div>

    <div class="container">
      <section class="card-table row">
        <div class="col-xs-12">
          <p class="card-table__title">Riwayat transkasi</p>
          <div
            class="card-table__card-item"
            v-for="item in tableData"
          >
            <card-table-item
              :name="item.name"
              :price="toRupiah(item.price)"
              :qty="item.qty"
              :marketplace="item.marketplace"
              :subtotal="calculateSubtotal(item.qty, item.price)"
            ></card-table-item>
          </div>
        </div>
        <add-fab></add-fab>
      </section>
    </div>

    <div class="container">
      <section class="table row">
        <div class="col-12">

          <add-excel-button></add-excel-button>

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
    </div>

  </div>
</template>

<script>
import GlobalNavbar from "@/components/GlobalNavbar";
import AddFab from "./AddFab";
import MoneyInformation from "./MoneyInformation";
import CardTable from "./CardTable";
import CardTableItem from "./CardTableItem";
import AddExcelButton from "./AddExcelButton";

export default {
  components: {
    GlobalNavbar,
    AddFab,
    MoneyInformation,
    CardTableItem,
    AddExcelButton
  },
  data() {
    return {
      dropdownContentDisplay: "none",
      revenue: 0,
      itemsSold: 0,
      marketplaces: ["tokopedia", "shopee", "lazada", "bukalapak"],
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
    },
    toggleDropdown() {
      if (this.dropdownContentDisplay == "none") {
        this.dropdownContentDisplay = "block";
      } else {
        this.dropdownContentDisplay = "none";
      }
    },
    openDropdown() {
      this.dropdownContentDisplay = "block";
    },
    closeDropdown() {
      this.dropdownContentDisplay = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.table {
  display: none;

  @include respond(md) {
    display: block;
  }

  margin: 5rem 0 2rem 0;

  &__add-button {
    @include button;
    display: inline-block;
    cursor: pointer;
    margin-bottom: 1rem;
    position: relative;
  }

  &__dropdown-content {
    left: 0;
    top: 2rem;
    display: none;
    position: absolute;
    background: white;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: $grey-900;
    padding: 0.5rem 0;

    z-index: 1;
  }

  &__dropdown-item {
    display: block;
    padding: 0.5rem 1rem;
    font-weight: 400;
    font-size: 1rem;
    outline: none;
    text-decoration: none;
    color: #333;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background: hsl(0, 0%, 95%);
    }
  }

  &__dropdown-overlay {
    display: none;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    cursor: default;
  }

  &__content {
    width: 100%;
    border-collapse: collapse;

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