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

func main() {
	secretMessage := "hello this is very secret"

	// [] in front means create an array. byte(secretMessage) turns
	// those string to bytes. The end product is an array of bytes
	// these arrays are the unicode encoding of each character, stored
	// in array. Might have something to do with mathematical operation
	secretMessageByte := []byte(secretMessage)

	priv, _ := generateKeyPair(42)
	// signed, _ := priv.Sign(rand.Reader, secretMessageByte, crypto.SignerOpts)
	signed, _ := rsa.SignPSS(rand.Reader, priv, crypto.SHA256, secretMessageByte, nil)

	fmt.Println(secretMessageByte)
	fmt.Println(signed)
	fmt.Println(crypto.SHA256.HashFunc())
}
