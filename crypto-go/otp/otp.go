package main

import (
	"fmt"
	"math/rand"
	"strconv"
	"time"
)

func generateKey(arrayBytes []byte) []byte {
	totalChar := len(arrayBytes)
	keyArray := make([]byte, totalChar)

	for i := 0; i < len(keyArray); i++ {
		charBinary := fmt.Sprintf("%b", arrayBytes[i])

		for j := 0; j < len(charBinary); j++ {

			// same as `while(!len(charBinary) == len(randomBin)`
			for {
				rand.Seed(time.Now().UnixNano())
				randomByte := rand.Intn(255)
				randomBin := fmt.Sprintf("%b", randomByte)
				if len(charBinary) == len(randomBin) {
					// keyArray[i], _ = strconv.Atoi(randomBin)
					randomBinInt, _ := strconv.Atoi(randomBin)
					keyArray[i] = byte(randomBinInt)
					break
				}
			}
		}
	}

	return keyArray
}

func byteArrToBin(arrayBytes []byte) []int {
	binaryIntArr := make([]int, len(arrayBytes))

	for i := 0; i < len(arrayBytes); i++ {
		binaryOfByte := fmt.Sprintf("%b", arrayBytes[i])
		binaryIntArr[i], _ = strconv.Atoi(binaryOfByte)
	}

	return binaryIntArr
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
	secretKey := generateKey(byteString)

	cipher := encrypt(byteString, secretKey)
	fmt.Println(string(cipher))

	message := decrypt(cipher, secretKey)
	fmt.Println(string(message))
}
