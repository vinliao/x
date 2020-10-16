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

const sendTweets = async () => {
  let lastTweetId = '';
  for (let i = 0; i < tweets.length; i++) {
    const tweet = await client.post('statuses/update', {
      status: tweets[i],
      in_reply_to_status_id: lastTweetId,
      auto_populate_reply_metadata: true
    })
    lastTweetId = tweet.id_str;
  }
}

sendTweets().catch((err) => console.error(err));