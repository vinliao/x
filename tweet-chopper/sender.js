module.exports = {
  sendAsThread: async (client, tweets) => {
    let lastTweetId = '';
    for (let i = 0; i < tweets.length; i++) {
      const tweet = await client.post('statuses/update', {
        status: tweets[i],
        in_reply_to_status_id: lastTweetId,
        auto_populate_reply_metadata: true
      })
      lastTweetId = tweet.id_str;
    }
  },

  sendAsIndividualTweets: async (client, tweets) => {
    for (let i = 0; i < tweets.length; i++) {
      const tweet = await client.post('statuses/update', {
        status: tweets[i],
        auto_populate_reply_metadata: true
      })
    }
  }
}