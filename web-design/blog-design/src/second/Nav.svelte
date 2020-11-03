<script>

</script>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;

    &-title {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
    }

    // how do I center this vertically?
    &-links {
      display: flex;
      align-items: center;

      span {
        padding-left: 1rem;
      }
    }
    
  }

</style>

<div class="navbar">
  <span class="navbar-title">
    hello
  </span>
  <div class="navbar-links">
    <span>about</span>
    <span>other</span>
  </div>
</div>