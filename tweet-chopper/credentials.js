const fs = require('fs');
const path = require('path');

try {
  const credentialPath = path.join(__dirname, 'credentials.json')
  const rawCredentials = fs.readFileSync(credentialPath, 'utf8');
  const keys = JSON.parse(rawCredentials);
  module.exports = keys;
} catch {
  console.error('Read credentials error.');
}