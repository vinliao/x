const crypto = require('crypto')
const fs = require('fs')
const name = process.argv[2]
if (!name){
  console.log('Name is required.')
  console.log('Command: node generate.js [name]')
  return 1
}

const keys = crypto.generateKeyPairSync('rsa', {modulusLength: 1024})
const pub = keys.publicKey
const priv = keys.privateKey

exportOption = {type: 'pkcs1', format: 'pem'}

// wow this fs path is kinda fucked when I run it outside the /node folder
// but... eh whatever
fs.writeFileSync(`./keys/${name}Priv.pem`, priv.export(exportOption))
fs.writeFileSync(`./keys/${name}Pub.pem`, pub.export(exportOption))