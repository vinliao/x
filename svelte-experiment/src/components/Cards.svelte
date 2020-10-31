<script>
  let texts = [
    "some very cool text 1",
    "another cool text??? maybe?",
    "this sounds very cooL!!!",
    "?",
  ];
</script>

<div class="columns has-text-centered p-1">

  {#each texts as text}

    <div class="column">
      <div class="card">

        <div class="card-content">
          <div class="content">{text}</div>
        </div>

        <div class="card-footer">
          <div class="card-footer-item"><a href="#">Cool story</a></div>
          <div class="card-footer-item"><a href="#">bro</a></div>
        </div>
      </div>
    </div>

  {/each}

</div>
