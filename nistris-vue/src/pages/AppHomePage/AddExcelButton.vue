<template>

  <div
    class="add-button"
    @click="toggleDropdown"
  >
    <span>Add new</span>

    <div
      class="add-button__dropdown-content"
      :style="{display: dropdownContentDisplay}"
    >

      <label
        class="add-button__dropdown-item"
        v-for="item in marketplaces"
      >
        <input
          type="file"
          style="display: none;"
          @change="closeDropdown"
        >{{ item }}
      </label>
    </div>

    <!-- clicking overlay will click table__add-button
            which will toggle the dropdown -->
    <div
      class="add-button__dropdown-overlay"
      :style="{display: dropdownContentDisplay}"
    ></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownContentDisplay: "none",
      marketplaces: ["tokopedia", "shopee", "lazada", "bukalapak"]
    };
  },
  methods: {
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
.add-button {
  @include button;
  display: inline-block;
  cursor: pointer;
  margin-bottom: 1rem;
  position: relative;

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
}
</style>