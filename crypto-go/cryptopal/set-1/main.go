package main

import (
	"encoding/base64"
	"encoding/hex"
	"fmt"
)

// char -> byte (from ascii)
// byte -> hex
// and I think byte -> base64 is also possible

func hexToBase64(hexString string) string {
	byteString, _ := hex.DecodeString(hexString)

	// this base64.StdEncoding is a type of struct/class
	// that is already pre-made by golang. In the documentation,
	// this is in the variable section (which fooled me).

	// I thought I had to make my own decoder!
	return base64.StdEncoding.EncodeToString(byteString)
}

func main() {
	fmt.Println("?")
	byteString := []byte("hello?")
	hexString := hex.EncodeToString(byteString)
	fmt.Println(hexToBase64(hexString))
}
