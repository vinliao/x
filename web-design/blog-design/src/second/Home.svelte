<script>
  import Nav from "./Nav.svelte";
  import HomeContent from "./HomeContent.svelte";
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,300;0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
  $text-color: #333;
  .container {
    :global(p, span, h1, h2, h3, a) {
      color: $text-color;
      font-family: "Lato", sans-serif;
    }
  }
</style>

<div class="container">
  <Nav />
  <HomeContent />
</div>
