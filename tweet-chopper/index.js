const chopper = require('./chopper.js');
const credentials = require('./credentials.js')
const twit = require('twit');

const tweets = chopper();

console.log(credentials);

const T = new twit({
  consumer_key: credentials.consumer_key,
  consumer_secret: credentials.consumer_secret,
  access_token: credentials.access_token,
  access_token_secret: credentials.access_token_secret,
})

T.post('statuses/update', { status: tweets[0] }, (err, data, response) => {
  if (err) {
    console.error(err)
  }

  console.log('tweets sent successfully')
})