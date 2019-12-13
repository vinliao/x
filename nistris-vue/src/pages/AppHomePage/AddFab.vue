<template>
  <div>
    <span
      class="add-fab"
      @click="showModal"
    >+</span>

    <div
      class="modal"
      :style="{display: modalDisplay}"
    >
      <div class="modal__content">
        <p class="modal__title">Pilih marketplace anda</p>
        <label
          class="modal__choice"
          v-for="item in marketplaces"
        >
          <input
            type="file"
            style="display: none;"
            @change="closeModal"
          >{{ item }}
        </label>

      </div>
    </div>

    <div
      class="overlay"
      @click="closeModal"
      :style="{display: modalDisplay}"
    ></div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      modalDisplay: "none",
      marketplaces: ["Tokopedia", "Shopee", "Bukalapak", "Lazada"]
    };
  },
  methods: {
    showModal() {
      this.modalDisplay = "block";
    },
    closeModal() {
      this.modalDisplay = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.add-fab {
  // positioning
  position: fixed;
  bottom: 1rem;
  right: 1rem;

  // fab css
  width: $fab-size;
  height: $fab-size;
  border-radius: 50%;
  background: $primary-500;
  cursor: pointer;

  // content css
  text-align: center;
  color: white;
  font-size: 2rem;
  text-decoration: none;

  // line height determines the width of a text content. The content
  // then will be vertically centered. Super cool
  line-height: $fab-size;
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  opacity: 0.2;
  height: 100vh;
  width: 100vw;

  // make it in the background. It's never wise to
  // use z-index, so I heard.
  z-index: 1;
}

.modal {
  display: none;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
  border-radius: 1rem 1rem 0 0;

  z-index: 2;

  &__title {
    padding: 1rem;
    margin-bottom: 0.5rem;
    font-weight: 500;
  }

  &__choice {
    display: block;
    padding: 1rem;
    outline: none;
    text-decoration: none;
    color: #333;
    transition: 300ms;
    cursor: pointer;

    &:hover {
      background: hsl(0, 0%, 95%);
    }
  }
}
</style>