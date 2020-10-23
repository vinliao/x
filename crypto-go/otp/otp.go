package main

import (
	"fmt"
	"math/rand"
	"strconv"
)

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

func byteArrToBin(arrayBytes []byte) []int {
	binaryIntArr := make([]int, len(arrayBytes))

	for i := 0; i < len(arrayBytes); i++ {
		binaryOfByte := fmt.Sprintf("%b", arrayBytes[i])
		binaryIntArr[i], _ = strconv.Atoi(binaryOfByte)
	}

	return binaryIntArr
}

func binaryToByte(binArr []int) []byte {
	byteArr := make([]byte, len(binArr))
	for i := 0; i < len(binArr); i++ {
		// apparently you can't just use `string(binArr[i])`
		// it will conver the whole int to ascii
		stringBin := strconv.Itoa(binArr[i])
		parsedByte, _ := strconv.ParseInt(stringBin, 2, 8)
		byteArr[i] = byte(parsedByte)

	}

	return byteArr
}

func encrypt(message, key []int) {

}

func decrypt(cipher, key []int) {

}

func main() {
	byteString := []byte("Very secret!")
	binString := byteArrToBin(byteString)

	fmt.Println(byteString)
	fmt.Println(binString)
	fmt.Println(binaryToByte(binString))

	// key := generateKey(byteString)

	// fmt.Println(binString)
	// fmt.Println(key)

	// fmt.Println(byteString)
	// fmt.Println(binaryToByte(binString))
}
