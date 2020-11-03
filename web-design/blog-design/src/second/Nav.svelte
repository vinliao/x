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

      a {
        padding-left: 1rem;
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