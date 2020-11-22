// This script is to clean raw data and dump everything to mongodb
// Huge bug: the relative path are all fucked up, but everything is fine
// if it's ran from the /preprocess folder

const lineReader = require('line-reader')
const fs = require('fs')
// const MongoClient = require('mongodb').MongoClient;

// end goal: parsed.json
/*
{
  "12095917319513": {
    content: "lorem ipsum", 
    date: "whatever",
    url: "",
    parentTweet: "asdfasdf",
    media: "" (maybe later)
  }
}
*/

// I think this can be optimzed, especially for threads/nested tweets.
// Maybe I can steal hnpwa's structure
const cleanTweets = () => {
  let tweets = {}

  lineReader.eachLine('./data/raw.jsonl', (line, last) => {
    let tmpObj = {}
    const parsed = JSON.parse(line)
    const tweetId = parsed.id

    tmpObj.content = parsed.content
    tmpObj.date = parsed.date
    // tmpObj.tweetId = parsed.id
    tmpObj.conversationId = parsed.conversationId
    // fs.writeFileSync(`./data/tweets/${tmpObj.tweetId}.json`, JSON.stringify(tmpObj))
    // tweets.push(tmpObj)
    tweets[tweetId] = tmpObj

    if (last) {
      fs.writeFileSync('./data/parsed.json', JSON.stringify(tweets))
      console.log('Finish cleaning tweets')
    }
  })
}

cleanTweets()