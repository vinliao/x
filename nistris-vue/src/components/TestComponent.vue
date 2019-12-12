<template>
  <div>
    <label class="add-fab">+
      <input
        type="checkbox"
        style="display: none;"
      >
      <div class="modal">
        <div class="modal__content">
          <p class="modal__title">Pilih marketplace anda</p>
          <label
            @change="toggleModal"
            class="modal__choice"
            v-for="item in marketplaces"
          >
            <input
              type="file"
              style="display: none;"
            >{{ item }}
          </label>

        </div>
      </div>
      <div class="overlay"></div>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marketplaces: ["Tokopedia", "Shopee", "Bukalapak", "Lazada"]
    };
  },
  methods: {
    toggleModal() {
      const checkbox = document.querySelector('.add-fab input[type="checkbox"]');
      checkbox.checked = !checkbox.checked
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

  // content css
  text-align: center;
  // color: $grey-900;
  color: white;
  font-size: 2rem;

  // line height determines the width of a text content. The content
  // then will be vertically centered. Super cool
  line-height: $fab-size;

  // when checkbox checked, apply styles to modal
  input[type="checkbox"]:checked {
    & ~ .modal {
      display: block;
    }

    & ~ .overlay {
      display: block;
    }
  }
}

.overlay {
  display: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $grey-900;
  opacity: 0.7;
  height: 100vh;
  width: 100vw;

  // make it in the background. It's never wise to
  // use z-index, so I heard.
  z-index: -1;
}

.modal {
  // don't inherit from fab
  all: initial;

  display: none;
  font-size: 1rem;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(0, 0%, 90%);
  border-radius: 1rem 1rem 0 0;

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
    // border: 0.5px #ccc solid;
  }
}
</style>