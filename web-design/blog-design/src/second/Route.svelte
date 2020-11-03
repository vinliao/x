<script>
  import router from "page";
  import Home from "./Home.svelte";
  import About from "./About.svelte";

  let current = Home;

  router("/", () => {
    current = Home;
  });

  router("/about", () => {
    current = About;
  });

  router("*", () => {
    current = null;
  })

  router.start();
</script>

<svelte:component this={current} />
