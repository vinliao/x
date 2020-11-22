<script>
  // export let tweetId
  let tweet
  // console.log(3 + 3);
  fetch("parsed.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data[1327287048852688901]) 
      tweet = data[1327287048852688901]
    });
</script>

<p>this is from post folder</p>
<!-- <p>{ tweet.content }</p> -->