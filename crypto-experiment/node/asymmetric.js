const crypto = require('crypto')
const fs = require('fs')
const xor = require('buffer-xor')

// things I can do with bob and alice's keys:
// 1. send signed + encrypted message
// 2. verify signed message
// 3. send encrypted image? Maybe. After all, an image is made up of bytestring.

// ===== import =====
let alice = { name: 'alice' }
let bob = { name: 'bob' }
const actors = [alice, bob]
actors.forEach((actor) => {
  const rawPrivate = fs.readFileSync(`./keys/${actor.name}Priv.pem`)
  const privateKey = crypto.createPrivateKey(rawPrivate)
  actor.private = privateKey

  const rawPublic = fs.readFileSync(`./keys/${actor.name}Pub.pem`)
  const publicKey = crypto.createPublicKey(rawPublic)
  actor.public = publicKey
})

// ===== alice sends secret message to bob =====
// Q: can I use public and private key interchangeably?
const aliceSendsBob = () => {
  const msg = 'Hi bob, my facebook password is cutealice123'
  const byteString = Buffer.from(msg)
  const cipherText = crypto.publicEncrypt(bob.public, byteString).toString('base64')

  // sends base64 message to bob

  const byteStringCipher = Buffer.from(cipherText, 'base64')
  const clearText = crypto.privateDecrypt(bob.private, byteStringCipher).toString()
  console.log(clearText)

  // this has one huge problem: anyone with bob's public key can impersonate as Alice.
  // bob has no way to mathematically verify that the message came from Alice.
}

// ===== alice announce news to the world =====
const aliceSigns = () => {
  const msg = "Hello world, I am Alice. This is not a fake message."
  const byteString = Buffer.from(msg)
  const cipherText = crypto.privateEncrypt(alice.private, byteString).toString('base64')

  // anyone with the message and alice's public key can verify that it's from alice.
  const byteStringCipher = Buffer.from(cipherText, 'base64')
  const clearText = crypto.publicDecrypt(alice.public, byteStringCipher).toString()
  console.log(clearText)

  // this is pretty cool. But what if alice wants to send secret message and not for the whole world?
  // it turns out that both signature and encryption can be combined.
}

const aliceSignsAndEncrypts = () => {
  const msg = 'Hi bob, my facebook password is cutealice123'
  const byteString = Buffer.from(msg)
  // what if I use repeating-key xor encryption and decryption?

  // const signedMsg = crypto.privateEncrypt(alice.private, byteString)
  // const encryptedSignedMessage = crypto.publicEncrypt(bob.public, signedMsg)
  // bob's public key length is shorter than the bytestring, and that causes error
  // I just need to find a way to have the same effect but bypassing the bottleneck
  // one way to get over this bottleneck is to encrypt a key instead of the whole message

  // maybe I can use xor symmetric encryption instead. And instead of sending the key,
  // encrypt and send the xor key generator!

  // encrypt with repeating key xor, then encrypt with bob's public data

  const xorCrypt = (message, key) => {
    // encrypt or decrypt with xor
    const firstByteString = Buffer.from(message)
    const secondByteString = Buffer.from(key)

    console.log(xor(firstByteString, secondByteString).toString('hex'))
  }

  xorCrypt('hey', '9ha')

}

const interchangeableSignAndEncrypt = () => {

}

const sendingPrivateKey = () => {
  // alice encrypts a private key so bob can use it afterward
  // (with the gpg password... of course)
}

aliceSignsAndEncrypts()