<script>
  let titles = [
    "My very first post",
    "Hello world, life is good",
    "What are you talking about bro?",
    "This theme is ultra minimal",
    "What you talkin' bout?",
    "Trying out this new site",
  ];
</script>

<style lang="scss">
  @import "../../sass/variables";
  
  .content {
    padding-bottom: 10rem;

    &-title {
      font-size: 5rem;
      color: $text-color-darker;
      font-weight: 700;
    }

    &-date {
      color: $text-color-lightest;
      font-weight: 200;
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
