<script>
  import Nav from "../components/Nav.svelte";
</script>

<style lang="scss">
  @import "../../sass/variables";

  .post-title {
    font-size: 5rem;
    color: $text-color-darker;
    font-weight: 700;
    margin: 0;
    padding-bottom: 3rem;
  }

  .post-content {
    color: $text-color-lighter;
  }
</style>

<Nav />
<div class="container">
  <h1 class="post-title">A very cool post title</h1>
  <span class="post-content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
    quidem necessitatibus ducimus voluptate accusamus enim labore libero fuga
    facere eius quia suscipit, ab itaque cum odit delectus ratione sequi rem
    odio distinctio aperiam earum! Assumenda illo sequi perferendis temporibus
    explicabo nisi, iure quia inventore sapiente rerum eaque. Aspernatur odit
    distinctio, dolor vitae nemo ducimus reprehenderit vel illum nulla corporis
    quisquam asperiores temporibus similique ratione. Esse quasi accusamus
    placeat mollitia nisi exercitationem blanditiis alias eius pariatur
    laboriosam quisquam iusto odio, officia accusantium expedita aperiam
    obcaecati iste, saepe repudiandae ex libero. Modi velit ut veniam eveniet
    quae. Dolorum, error fugit. Aliquid, praesentium.</span>
</div>
