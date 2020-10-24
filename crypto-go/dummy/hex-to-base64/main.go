package main

import (
	"errors"
	"fmt"
	"strconv"
	"strings"
)

// an attempt to write code that turns hex into base64 encoding
//just for understanding (and little bit of fun, I guess...)

var base64Map = map[string]string{
	"110000": "w",
	"110001": "x",
	"110101": "1",
	"110100": "0",
	"010100": "U",
	"010101": "V",
	"001100": "M",
	"001101": "N",
	"011110": "e",
	"011111": "f",
	"001001": "J",
	"001000": "I",
	"011011": "b",
	"011010": "a",
	"000110": "G",
	"000111": "H",
	"000011": "D",
	"000010": "C",
	"100100": "k",
	"100101": "l",
	"111100": "8",
	"111101": "9",
	"100010": "i",
	"100011": "j",
	"101110": "u",
	"101111": "v",
	"111001": "5",
	"111000": "4",
	"101011": "r",
	"101010": "q",
	"110011": "z",
	"110010": "y",
	"010010": "S",
	"010011": "T",
	"010111": "X",
	"010110": "W",
	"110110": "2",
	"110111": "3",
	"011000": "Y",
	"011001": "Z",
	"001111": "P",
	"001110": "O",
	"011101": "d",
	"011100": "c",
	"001010": "K",
	"001011": "L",
	"101101": "t",
	"000000": "A",
	"000001": "B",
	"100111": "n",
	"100110": "m",
	"000101": "F",
	"000100": "E",
	"111111": "/",
	"111110": "+",
	"100001": "h",
	"100000": "g",
	"010001": "R",
	"010000": "Q",
	"101100": "s",
	"111010": "6",
	"111011": "7",
	"101000": "o",
	"101001": "p",
}

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

// turn three chars to byte, then turn to binary
// those binary of length 24 (from 8*3) can be divided
// into 4 of length 6. These 4*6 binary is called base64

// Oh! Hexadecimal is made by dividing one char (1*8 bits) into
// two hexa (2*4 bits). Ah... okay. Cool
func threeBytesToBase64(byteString []byte) (string, error) {
	if len(byteString) != 3 {
		return "", errors.New("Length of bytes to base64 must be three")
	}

	// TODO: check padding stuff

	base64String := ""
	binaryString := ""
	totalPadding := 0
	sixBitsArr := make([]string, 4)

	// check whether there is padding
	if byteString[1] == uint8(0) {
		totalPadding += 2
	} else if byteString[2] == uint8(0) {
		totalPadding++
	}

	fmt.Println("padding:", totalPadding)

	// byte to binary. If length < 8, pad it to make it 8
	for i := 0; i < len(byteString); i++ {
		byteInBinary := fmt.Sprintf("%b", byteString[i])
		if len(byteInBinary) < 8 {
			bitsNeeded := 8 - len(byteInBinary)
			padding := strings.Repeat("0", bitsNeeded)
			binaryString += padding + byteInBinary
		} else if len(byteInBinary) == 8 {
			binaryString += byteInBinary
		}
	}

	// it seems like code like this needs to be examined properly
	// or else the start and end value can fuck things really badly
	for i := 0; i < 4; i++ {
		start := i * 6
		end := start + 6

		sixBitsArr[i] = binaryString[start:end]
	}

	// very messy, maybe can use switch.
	// (but I'm lazy though)
	for i := 0; i < len(sixBitsArr); i++ {
		if totalPadding == 1 && i == 3 {
			base64String += "="
		} else if totalPadding == 2 && i == 2 {
			base64String += "="
		} else if totalPadding == 2 && i == 3 {
			base64String += "="
		} else {
			base64String += base64Map[sixBitsArr[i]]
		}
	}

	return base64String, nil
}

func base64Encode(byteString []byte) string {
	base64String := ""
	count := len(byteString) / 3

	for i := 0; i < count; i++ {
		start := 3 * i
		end := start + 3
		tempBase64String, _ := threeBytesToBase64(byteString[start:end])
		base64String += tempBase64String
	}

	// this is where the excess is dealt
	if len(byteString)%3 != 0 {
		excessByte := len(byteString) % 3
		lengthNeeded := 3 - excessByte
		lastChunk := byteString[len(byteString)-excessByte : len(byteString)]
		fmt.Println("last chunk is", lastChunk)
		padding := make([]byte, lengthNeeded)

		fmt.Printf("%T\n", lastChunk)
		fmt.Printf("%T\n", padding)

		fmt.Println(lastChunk)
		fmt.Println(padding)

		// the triple dot is a "variadic" or something like that
		// not sure what it is, but it's needed for it to work...
		lastChunk = append(lastChunk, padding...)
		tempBase64String, _ := threeBytesToBase64(lastChunk)
		base64String += tempBase64String
	}

	return base64String
}

func main() {
	byteString := []byte("heyaaaf")
	// fmt.Println(hexEncode(byteString))
	// hexString := hexEncode(byteString)
	// fmt.Println(string(hexDecode(hexString)))

	// fmt.Println(threeCharsToBase64("ads"))

	fmt.Println(base64Encode(byteString))

	// parsedBinary, _ := strconv.ParseInt("59", 2, 0)
	// fmt.Println(parsedBinary)

}
