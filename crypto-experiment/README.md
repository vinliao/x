## Notes on cryptography
- The purpose of encryption is secure communication. And encryption is only a small part of crypto.
- As far as I've looked, everything seems to operate using bytestring.
- Base64 makes bytestring human readable (and easily copiable). But readability != understandability. Turning binary gibberish into letters human can read by converting it to base64 is what the `--armor` option is on gpg.
- As I toy with these things, I realized that using go is not the best option. I code slower and my experiment cycle is just so slow because I have to manage all the small details. In javascript, I can move fast, break things, and run lots of experiment quickly. Huge advantage over something like go. (I think go is more suited for production level of crypto, but not experimentation).
- The cons of encrypting message without signing is that the recipient can't verify that it's legit. A person may impersonate as someone you know and send encrypted text to you and you wouldn't know.
- One of the strangest thing I encountered is that I can't sign and encrypt like normal. If I sign with a private key and encrypt with someone's public key, the "data too long" error will show. It seems like there's some padding error stuff going on. I also encountered this when toying with symmetric encryption where the ciphertext is very long. But here's the thing: signing and encrypting stuff works on gpg without any configuration. Weird eh? The solution to this is to use hybrid encryption.

## Things to toy with
> What I can't build, I don't understand
> --Richard Feynman

Here are things that I want to build:
- bitcoin
- code of two (or more) parties using pgp
- rsa with all the maths and stuff?
- tls and https (maybe)