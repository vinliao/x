package main

import (
	"fmt"
	"math/rand"
	"strconv"
)

func getBinaryLength(arrayBytes []byte) int {
	counter := 0
	for i := 0; i < len(arrayBytes); i++ {
		// currentByte is still in ascii of the characters
		// currentBin is in binary form
		currentByte := arrayBytes[i]
		currentBin := fmt.Sprintf("%b", currentByte)

		for j := 0; j < len(currentBin); j++ {
			counter++
		}
	}

	return counter
}

func generateKey(arrayBytes []byte) []int {
	totalChar := len(arrayBytes)
	keyArray := make([]int, totalChar)

	for i := 0; i < len(keyArray); i++ {
		charBinary := fmt.Sprintf("%b", arrayBytes[i])

		for j := 0; j < len(charBinary); j++ {

			// same as `while(!len(charBinary) == len(randomBin)`
			for {
				randomByte := rand.Intn(255)
				randomBin := fmt.Sprintf("%b", randomByte)
				if len(charBinary) == len(randomBin) {
					keyArray[i], _ = strconv.Atoi(randomBin)
					break
				}
			}
		}
	}

	return keyArray
}

func main() {
	byteString := []byte("What the fuck?")

	fmt.Printf("%b\n", byteString)
	fmt.Println(generateKey(byteString))
}
