<script>
  import router from "page";
  import Home from "./Home.svelte";
  import About from "./About.svelte";
  import Post from './Post.svelte'

  let current = Home;

  router("/", () => {
    current = Home;
  });

  router("/about", () => {
    current = About;
  });

  router("/post", () => {
    current = Post;
  });

  router("*", () => {
    current = null;
  })

  router.start();
</script>

<svelte:component this={current} />
