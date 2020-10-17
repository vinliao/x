#!/usr/bin/env node

const fs = require('fs');

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

if (!argv._[0]) {
  console.error('Must supply file name.');
  return 1;
}

const fileName = argv._[0];
const tweets = chopper(fileName);

if (argv.separate) {
  sender.sendAsIndividualTweets(client, tweets);
} else {
  // this is the default behavior
  sender.sendAsThread(client, tweets);
}

console.log('Tweets sent.')