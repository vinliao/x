<script>
  // this is like a middleware that routes to components
  import router from "page";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Post from './pages/Post.svelte'

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
