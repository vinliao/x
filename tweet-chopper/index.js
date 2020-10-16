const chopper = require('./chopper.js');
const credentials = require('./credentials.js')
const Twitter = require('twitter-lite')

const tweets = chopper();

const client = new Twitter({
  consumer_key: credentials.consumer_key,
  consumer_secret: credentials.consumer_secret,
  access_token_key: credentials.access_token,
  access_token_secret: credentials.access_token_secret,
})

// this is a copy pasted code, maybe read it in the future
// ... maybe, or maybe not. LOL!
async function tweetThread(thread) {
  let lastTweetID = "";
  for (const status of thread) {
    const tweet = await client.post("statuses/update", {
      status: status,
      in_reply_to_status_id: lastTweetID,
      auto_populate_reply_metadata: true
    });
    lastTweetID = tweet.id_str;
  }
}

tweetThread(tweets).catch(console.error);