package main

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"io/ioutil"
	"strings"
)

// hex to base64
func challenge1(hexString string) string {
	byteString, _ := hex.DecodeString(hexString)
	return base64.StdEncoding.EncodeToString(byteString)
}

// simple xor of 2 hexstring
func challenge2(hexString1, hexString2 string) string {
	byteString1, _ := hex.DecodeString(hexString1)
	byteString2, _ := hex.DecodeString(hexString2)
	resultByteString := make([]byte, len(byteString1))

	for i := 0; i < len(byteString1); i++ {
		resultByteString[i] = byteString1[i] ^ byteString2[i]
	}

	return hex.EncodeToString(resultByteString)
}

// takes cipher string, and spits out a single ascii character
// that is most likely to be the key
func challenge3(hexString string) string {
	totalASCIIChar := 126 - 32 + 1
	byteString, _ := hex.DecodeString(hexString)
	asciiArr := make([]byte, totalASCIIChar) // try ascii of 32 (space) until 126 (tilde) for key

	// resultMap is the total non-gibberish characters found in the message
	// after having decrypted with that one-character key
	resultMap := map[string]int{}

	// fill the asciiArr from 32 to 126
	for i := 0; i < totalASCIIChar; i++ {
		asciiArr[i] = uint8(32 + i)
	}

	// figure out the single-character ascii key
	for i := 0; i < len(asciiArr); i++ {
		totalNonGibberish := 0
		for j := 0; j < len(byteString); j++ {
			tempByte := asciiArr[i] ^ byteString[j]
			// 65 to 90 is A-Z
			// 97 to 122 is a-z
			// 32 is space
			if (tempByte >= 65 && tempByte <= 90) || (tempByte >= 97 && tempByte <= 122) || tempByte == 32 {
				totalNonGibberish++
			}
		}

		resultMap[string(asciiArr[i])] = totalNonGibberish
	}

	// return the resultMap key with the most value
	// the key with highest value is most likelely to be the correct key
	currentHighestValue := 0
	highestKeyValue := ""
	for k, v := range resultMap {
		if v > currentHighestValue {
			currentHighestValue = v
			highestKeyValue = k
		}
	}

	return highestKeyValue
}

// figure out a single-char key. 60 chars are encrypted.
// (this is the same with challenge3, it just has hundrends of strings to test)
func challenge4(text string) string {
	// remove "\n" from text
	text = strings.ReplaceAll(text, "\n", "")

	// {input: total-non-gibberish}
	// this map can be used to figure things out down the road
	resultMap := map[string]int{}

	for i := 0; i < len(text)-59; i++ {
		start := i
		end := start + 60
		hexString := text[start:end]
		totalNonGibberish := 0
		key := challenge3(hexString)
		byteString, _ := hex.DecodeString(hexString)

		// calculate the non-gibberish, given the "most likely" key from challenge3()
		// then store it in resultMap
		for j := 0; j < len(byteString); j++ {
			tempByte := byteString[j] ^ key[0]
			// 65 to 90 is A-Z
			// 97 to 122 is a-z
			// 32 is space
			if (tempByte >= 65 && tempByte <= 90) || (tempByte >= 97 && tempByte <= 122) || tempByte == 32 {
				totalNonGibberish++
			}
		}

		resultMap[hexString] = totalNonGibberish
	}

	// figure out what input has the highest non-gibberish value
	currentHighestNonGibberish := 0
	currentInput := ""
	for k, v := range resultMap {
		if v > currentHighestNonGibberish {
			currentHighestNonGibberish = v
			currentInput = k
		}
	}

	// get the key of that input, then decrypt it with the single-character key
	fmt.Printf("most probable 60 char input: %s\n", currentInput)
	fmt.Printf("most probable key: %s\n", challenge3(currentInput))
	fmt.Printf("total non-gibberish chars: %d\n", currentHighestNonGibberish)

	msgByteString, _ := hex.DecodeString(currentInput)
	bestKey := challenge3(currentInput)
	for i := 0; i < len(msgByteString); i++ {
		msgByteString[i] = msgByteString[i] ^ bestKey[0]
	}

	return string(msgByteString)
}

func main() {
	// // ===== Challenge 1 ======
	// // turn hex to base64
	// hexString := "49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d"
	// base64String := "SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t"
	// fmt.Println(challenge1(hexString) == base64String)

	// // ===== Challenge 2 ======
	// // xor between 2 hexstrings
	// hexString1 := "1c0111001f010100061a024b53535009181c"
	// hexString2 := "686974207468652062756c6c277320657965"
	// XORResultString := "746865206b696420646f6e277420706c6179" // the true result of the xor of both string above
	// fmt.Println(challenge2(hexString1, hexString2) == XORResultString)

	// // ===== Challenge 3 =====
	// // figure out the single-character key of a hexstring
	// // (that has xor'd it), then decode it
	// hexString := "1b37373331363f78151b7f2b783431333d78397828372d363c78373e783a393b3736"
	// mostLikelyKey := challenge3(hexString)
	// fmt.Println(mostLikelyKey) // "X" is the key (I've verified it). Too lazy to write code to verify

	// ===== Challenge 4 =====
	// 60 string of chars in this file has been encrypted by a single
	// character key. Find it out.
	relativePath := "./cryptopal/set-1/challenge4.txt"
	text, _ := ioutil.ReadFile(relativePath)
	fmt.Println(challenge4(string(text))) // it's correct, but it's one character misaligned though
}
