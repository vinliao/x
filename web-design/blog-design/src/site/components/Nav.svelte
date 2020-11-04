<script>
</script>

<style lang="scss">
  @import "../../sass/variables";

  .navbar {
    display: flex;
    justify-content: space-between;
    padding: 2rem 3rem 5rem 3rem;

    &-title {
      font-family: 'Source Code Pro', monospace;
      font-size: 4rem;
      font-weight: 300;
    }

    &-links {
      display: flex;
      align-items: center;

      a {
        color: $text-color-lightest;
        padding-left: 2rem;
      }
    }
  }
</style>

<div class="navbar">
  <a class="navbar-title" href="/">blog title</a>
  <div class="navbar-links">
    <a href="/about">about</a>
    <a href="/">other</a>
  </div>
</div>
