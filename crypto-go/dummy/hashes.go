package main

import (
	"crypto/sha256"
	"fmt"
)

func main() {
	sha := sha256.New()
	fmt.Printf("%T\n", sha)

}
