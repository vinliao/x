module.exports = () => {
  const fs = require('fs');
  var textArr = [];

  try {
    var text = fs.readFileSync('./sample.txt', 'utf8');

    // add '---' at the end of text if there is none
    // this is used for slicing

    if (text.lastIndexOf('---') + 3 != text.length) {
      text = text.concat('---');
    }

    // here's the logic:
    // instead of automatic checking, use --- instead as a symbol for new tweet

    // and another logic: use indexOf, then cut the tweet after it's being 
    // appeneded to the array

    // while there is still tweet
    while (text.indexOf('---') != -1) {
      currIndex = text.indexOf('---');

      if (currIndex > 240) {
        console.error(`The tweet "${text.slice(0, currIndex)}" has more than 240 characters. Can't send tweet.`);
        return;
      }

      textArr.push(text.slice(0, currIndex));
      text = text.slice(currIndex + 3);
    }

  } catch {
    console.error('There is an error');
  }

  return textArr;
}