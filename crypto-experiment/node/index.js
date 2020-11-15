const crypto = require('crypto')
const fs = require('fs')
const sha256 = crypto.createHash('sha256')

// const { pub, priv } = crypto.generateKeyPairSync()
// console.log(pub)
// console.log(priv)

const keys = crypto.generateKeyPairSync('rsa', {modulusLength: 1024})
const pub = keys.publicKey
const priv = keys.privateKey

// byte string in go is called buffer
const rawBuffer = Buffer.from('what bro?')

const buf = crypto.privateEncrypt(priv, rawBuffer)

// raw bytestring. Mostly gibberish.
// --armor is gpg is just turning it into base64
console.log(buf.toString('base64'))

// LOOK HOW CONVENIENT THIS IS!
// console.log(sha256.digest(rawBuffer).toString('base64'))