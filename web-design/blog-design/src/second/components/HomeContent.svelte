<script>
  let titles = [
    "my very first post",
    "hello world, life is good",
    "what are you talking about bro?",
    "this theme is ultra minimal",
    "what you talkin' bout?",
  ];
</script>

<style lang="scss">
  .content {
    padding-bottom: 8rem;

    &-title {
      font-size: 2.5rem;
      color: #111111;
      font-weight: 700;
    }

    &-date {
      color: #aaaaaa;
      font-weight: 300;
    }
  }
</style>

{#each titles as title}
  <div class="content">
    <span class="content-date"> 17-02-2006 </span>
    <br />
    <a href="/post" class="content-title"> {title} </a>
    <br />
  </div>
{/each}
