package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"
)

func generateKey(arrayBytes []byte, seed int64) []byte {
	totalChar := len(arrayBytes)
	keyArray := make([]byte, totalChar)
	rand.Seed(seed)

	for i := 0; i < len(keyArray); i++ {
		charBinary := fmt.Sprintf("%b", arrayBytes[i])

		for j := 0; j < len(charBinary); j++ {

			// same as `while(!len(charBinary) == len(randomBin)`
			for {
				randomByte := rand.Intn(255)
				randomBin := fmt.Sprintf("%b", randomByte)
				if len(charBinary) == len(randomBin) {
					randomBinInt, _ := strconv.Atoi(randomBin)
					keyArray[i] = byte(randomBinInt)
					break
				}
			}
		}
	}

	return keyArray
}

func encrypt(message, key []byte) []byte {
	cipherArr := make([]byte, len(message))
	for i := 0; i < len(message); i++ {
		cipherArr[i] = message[i] ^ key[i]
	}

	return cipherArr
}

func decrypt(cipher, key []byte) []byte {
	messageArr := make([]byte, len(cipher))
	for i := 0; i < len(cipher); i++ {
		messageArr[i] = cipher[i] ^ key[i]
	}

	return messageArr
}

func main() {
	byteString := []byte("Very secret!!")
	seed := time.Now().UnixNano()
	secretKey := generateKey(byteString, seed)

	fmt.Println(secretKey)

	// the cool thing is... this seed now can become the "secret key,"
	// because from this seed, the secret key can be derived out of it

	// the problem I have now is this secretKey isn't secure because it has
	// the length of the original data. And the person who has the
	// cipher and the message can figure out the secret key (by xor).

	cipher := encrypt(byteString, secretKey)
	fmt.Println(string(cipher))

	message := decrypt(cipher, secretKey)
	fmt.Println(string(message))

	// haha I thought I need to play with binary, but using byte/uint8 is enough
	// for everything.

	// thoughts on stream cipher: with stream cipher, the key isn't the key itself,
	// but the seed that is used to generate the key. There must be a way to create this

	// oh, so this is basically a stream cipher with "unprocessed"/long key

	// time to make the block one, I guess. I'll start with some simple ones.

	// instead of using the key itself as the key, how can I use a "shorter" key?

}
