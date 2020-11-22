// This script is to clean raw data and dump everything to mongodb
// Huge bug: the relative path are all fucked up, but everything is fine
// if it's ran from the /preprocess folder

const lineReader = require('line-reader')
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;

// end goal: parsed.json
/*
{
  tweets: [
    content: "",
    date: "",
    url: "",
    tweetId: "",
    parentTweet: "",
    media: "",
  ]
}
*/

// I think this can be optimzed, especially for threads/nested tweets.
// Maybe I can steal hnpwa's structure
const cleanTweets = () => {
  let tweets = []

  lineReader.eachLine('/data/raw.jsonl', (line, last) => {
    let tmpObj = {}
    const parsed = JSON.parse(line)

    tmpObj.content = parsed.content
    tmpObj.date = parsed.date
    tmpObj.tweetId = parsed.id
    tmpObj.conversationId = parsed.conversationId
    fs.writeFileSync(`./data/tweets/${tmpObj.tweetId}.json`, JSON.stringify(tmpObj))
    tweets.push(tmpObj)

    if (last) {
      fs.writeFileSync('./data/parsed.json', JSON.stringify(tweets))
    }
  })
}

const mongoOperator = (operation) => {
  // I think using !== is impossible here...
  if(operation === 'purge' || operation === 'write'){
    const credentials = JSON.parse(fs.readFileSync('./credentials.json'))
    const uri = credentials.uri

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    client.connect(async err => {
      const collection = client.db("maindb").collection("tweets");
  
      if(operation === 'write') {
        console.log('Writing tweets to mongo...')
        const cleanedTweets = JSON.parse(fs.readFileSync('./data/parsed.json'))
        await collection.insertMany(cleanedTweets)
        console.log('Done writing to mongo')
      } else if(operation === 'purge'){
        console.log('Deleting all tweets...')
        await collection.deleteMany({})
        console.log('Done deleting all tweets.')
      }
  
      client.close();
    });
  } else {
    console.error('Operation parameter must either be [write|purge]')
    return -1
  }
}

mongoOperator('purge')