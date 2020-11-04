<script>
</script>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 2rem 0 8rem 0;

    &-title {
      font-family: "Playfair Display", serif;
      font-size: 4rem;

      // I'm not sure why, but if I don't put any color here,
      // it will be overwritten by purple. Yes. Purple.
      color: #333333;
    }

    &-links {
      display: flex;
      align-items: center;

      a {
        padding-left: 2rem;
        color: #333333;
      }
    }
  }
</style>

<div class="navbar">
  <a class="navbar-title" href="/">Title</a>
  <div class="navbar-links">
    <a href="/about">about</a>
    <a href="/">other</a>
  </div>
</div>
