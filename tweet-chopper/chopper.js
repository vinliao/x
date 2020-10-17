const { Z_FILTERED } = require('zlib');

module.exports = (textPath) => {
  const fs = require('fs');
  const path = require('path');
  var textArr = [];
  try {
    const absTextPath = path.join(__dirname, textPath);
    
    // check file exist
    if(!fs.existsSync(absTextPath)){
      console.error('File does not exist!');
      return;
    }

    var text = fs.readFileSync(absTextPath, 'utf8');

    // add '---' at the end of text if there is none
    // this is used for slicing

    if (text.lastIndexOf('---') + 3 != text.length) {
      text = text.concat('---');
    }

    // here's the logic:
    // instead of automatic checking, use --- instead as a symbol for new tweet
    // after the tweet has been appeneded to the list, cut it out from the text

    while (text.indexOf('---') != -1) {
      currIndex = text.indexOf('---');
      if (currIndex > 240) {
        console.error(`The tweet "${text.slice(0, currIndex)}" has ${currIndex} characters. Can't send tweet.`)
        return;
      }
      textArr.push(text.slice(0, currIndex));
      text = text.slice(currIndex + 3);
    }
  } catch {
    console.error('There is error in chopping the tweets!');
  }
  return textArr;
}