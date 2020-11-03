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
  .container {
    padding-top: 7rem;
  }

  .content {
    padding-bottom: 5rem;

    &-title {
      font-size: 1.5rem;
      color: #000000;
      font-weight: 700;
    }

    &-date {
      font-weight: 300;
    }
  }
</style>

<div class="container">
  {#each titles as title}
    <div class="content">
      <span class="content-date"> 17-02-2006 </span>
      <br />
        <a href="/post" class="content-title"> {title} </a>
      <br />
    </div>
  {/each}
</div>
