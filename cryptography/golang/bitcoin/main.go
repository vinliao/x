package main

import (
	"crypto"
	"crypto/rand"
	"crypto/rsa"
	"fmt"
)

func generateKeyPair(bitsize int) (*rsa.PrivateKey, crypto.PublicKey) {
	privateKey, err := rsa.GenerateKey(rand.Reader, bitsize)

	if err != nil {
		fmt.Println("There is error in generating private key")
		return nil, nil
	}

	return privateKey, privateKey.Public()

}

// func main() {
// 	// okay now that I have the ability to generate this key, what can I do with it?
// 	// I can play around... but I'm kinda hungry right now

// }
