<template>
  <div>
    <div class="container">
      <section class="money-information flex">
        <div class="flex-one"></div>
        <div class="flex-two">
          <div class="money-information__revenue">
            <p class="money-information__description">desc</p>
            <p class="money-information__main">main</p>
          </div>
        </div>
        <div class="flex-two">
          <div class="money-information__items">
            <p class="money-information__description">desc</p>
            <p class="money-information__main">A</p>
          </div>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

    <div class="container">
      <section class="table flex">
        <div class="flex-one"></div>
        <div class="flex-four">
          <a href="choose" class="table__add-button">Add new</a>
          <table class="table__content">
            <tr>
              <th>one</th>
              <th>two</th>
              <th>three</th>
            </tr>
            <tr>
              <td>four</td>
              <td>five</td>
              <td>six</td>
            </tr>
          </table>
        </div>
        <div class="flex-one"></div>
      </section>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.money-information {
  margin-top: 5rem;

  &__revenue,
  &__items {
    border: 1px $grey-400 solid;
  }

  &__revenue {
    border-right-style: none;
    border-radius: 5px 0 0 5px;
    padding: 2rem;
  }

  &__items {
    border-radius: 0 5px 5px 0;
    padding: 2rem;
  }

  &__description {
    color: $grey-400;
  }

  &__main {
    font-size: 3rem;
    font-weight: 900;
    line-height: 100%;
  }
}

.table {
  margin-top: 5rem;

  &__add-button {
    @include button;
    display: inline-block;
    margin-bottom: 1rem;
  }

  &__content {
    width: 100%;
    border: 1px $grey-400 solid;

    td,
    th {
      text-align: left;
      padding: 0.5rem 0.5rem 0 0.5rem;
    }

    // apply bottom padding to tr elements on the last tr row
    tr:last-of-type > td {
      padding-bottom: 0.5rem;
    }
  }
}
</style>