package main

import (
	"fmt"
	"strconv"
)

// an attempt to write code that turns hex into base64 encoding
//just for understanding (and little bit of fun, I guess...)

func byteToHex(oneByte byte) string {
	firstDigit, secondDigit := "", ""

	if oneByte/16 == 10 {
		firstDigit = "a"
	} else if oneByte/16 == 11 {
		firstDigit = "b"
	} else if oneByte/16 == 12 {
		firstDigit = "c"
	} else if oneByte/16 == 13 {
		firstDigit = "d"
	} else if oneByte/16 == 14 {
		firstDigit = "e"
	} else if oneByte/16 == 15 {
		firstDigit = "f"
	} else {
		firstDigit = strconv.Itoa(int(oneByte / 16))
	}

	if oneByte%16 == 10 {
		secondDigit = "a"
	} else if oneByte%16 == 11 {
		secondDigit = "b"
	} else if oneByte%16 == 12 {
		secondDigit = "c"
	} else if oneByte%16 == 13 {
		secondDigit = "d"
	} else if oneByte%16 == 14 {
		secondDigit = "e"
	} else if oneByte%16 == 15 {
		secondDigit = "f"
	} else {
		secondDigit = strconv.Itoa(int(oneByte % 16))
	}

	return firstDigit + secondDigit
}

func hexToByte(twoHexDigit string) uint8 {
	oneByte := uint8(0)
	if string(twoHexDigit[0]) == "a" {
		oneByte += 16 * 10
	} else if string(twoHexDigit[0]) == "b" {
		oneByte += 16 * 11
	} else if string(twoHexDigit[0]) == "c" {
		oneByte += 16 * 12
	} else if string(twoHexDigit[0]) == "d" {
		oneByte += 16 * 13
	} else if string(twoHexDigit[0]) == "e" {
		oneByte += 16 * 14
	} else if string(twoHexDigit[0]) == "f" {
		oneByte += 16 * 15
	} else {
		firstDigit, _ := strconv.Atoi(string(twoHexDigit[0]))
		oneByte += uint8(firstDigit) * 16
	}

	if string(twoHexDigit[1]) == "a" {
		oneByte += 10
	} else if string(twoHexDigit[1]) == "b" {
		oneByte += 11
	} else if string(twoHexDigit[1]) == "c" {
		oneByte += 12
	} else if string(twoHexDigit[1]) == "d" {
		oneByte += 13
	} else if string(twoHexDigit[1]) == "e" {
		oneByte += 14
	} else if string(twoHexDigit[1]) == "f" {
		oneByte += 15
	} else {
		secondDigit, _ := strconv.Atoi(string(twoHexDigit[1]))
		oneByte += uint8(secondDigit)
	}

	return oneByte
}

func hexEncode(byteString []byte) string {
	hexString := ""
	for i := 0; i < len(byteString); i++ {
		hexString += byteToHex(byteString[i])
	}

	return hexString
}

func hexDecode(hexString string) []byte {
	byteString := make([]byte, len(hexString)/2)

	for i := 0; i < len(byteString); i++ {
		firstDigit := i * 2
		secondDigit := firstDigit + 2

		// the slicing is a bit weird here
		// hexString[0:1] returns only the first digit, but not the second
		// it needs to be hexString[0:2] to return two digits
		byteString[i] = hexToByte(hexString[firstDigit:secondDigit])
	}

	return byteString
}

func main() {
	byteString := []byte("So what you're saying is I'm not a piece of shit?")
	fmt.Println(hexEncode(byteString))
	hexString := hexEncode(byteString)
	fmt.Println(string(hexDecode(hexString)))
}
