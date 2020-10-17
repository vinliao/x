const fs = require('fs')
try {
  const rawCredentials = fs.readFileSync('credentials.json', 'utf8');
  const keys = JSON.parse(rawCredentials);
  module.exports = keys;
} catch {
  console.error('Read credentials error.');
}