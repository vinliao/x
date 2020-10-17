const Twitter = require('twitter-lite');
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv)).argv

const chopper = require('./chopper.js');
const sender = require('./sender.js');
const credentials = require('./credentials.js');

const client = new Twitter({
  consumer_key: credentials.consumer_key,
  consumer_secret: credentials.consumer_secret,
  access_token_key: credentials.access_token,
  access_token_secret: credentials.access_token_secret,
})

// get tweets from .txt
const tweets = chopper();

// first argument (the non double-dash one)
// use this to input filename as argument
console.log(argv._[0]);

if(argv.separate){
  sender.sendAsIndividualTweets(client, tweets);
} else {
  // this is the default behavior
  sender.sendAsThread(client, tweets);
}