<script>
  import Nav from "./Nav.svelte";
  import Content from "./Content.svelte";
  let homeComponent = true;

  function changeHomeComponent() {
    homeComponent = false;
    console.log(homeComponent);
  }
</script>

<style lang="scss">
  @import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,400&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap");
  $max-width: 720px;
  $text-color: #555555;

  // set colors
  // h1,
  // h2,
  // h3,
  // h4,
  // h5,
  // h6,
  // p,
  // span,
  // a {
  //   color: $text-color;
  //   font-family: "Playfair Display", serif;
  // }

  .navbar {
    padding: 2rem 0;
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
  }

  .navbar-title {
    text-decoration: none;
    font-size: 2rem;
  }

  .subtitle {
    display: block;
  }

  .container {
    max-width: $max-width;
    margin: 0 auto;
    padding-bottom: 1rem;
  }

  .subtitle {
    display: block;
  }

  .content {
    padding-top: 2rem;
  }

  .content-title {
    font-family: "Lato", sans-serif;
    font-size: 2rem;
    font-weight: 700;
  }

  .content-description {
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }

  @media (max-width: $max-width) {
    .container {
      max-width: none;
      padding: 0 1rem;
    }
  }
</style>

<div class="container">
  {#if homeComponent}
    <Nav />
    {#each Array(5) as _, _}
      <div class="content" on:click={changeHomeComponent}>
        <span class="content-title">This is a very cool title</span><br />
        <p class="content-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
          consequuntur fuga quasi quod atque laudantium rerum, maiores delectus
          dolor expedita repellat adipisci sunt, sint odit amet eius, dolorem
          voluptatibus! Molestias?
        </p>
      </div>
    {/each}
  {:else}
    <Content />
  {/if}
</div>
