package main

import "fmt"

type rectangle struct {
	h float64
	w float64

	// now, what does this truly mean?
	// the code works, but I don't care.
	// I want to understand what this means.

	// what does it mean to have a data type of *rectangle?
	// next is a variable that has a data type of the memory of another triangle
	// but why is it *rectangle? I don't understand. It's not intuitive.

	// this is a field to store where it's pointing to
	// *rectangle is "the address of rectangle"
	// becuase what it essentially does is store the value of the other rectangle's address
	next *rectangle

	// so this is a "nested object" in some sense
	ministruct ministruct

	// oh in a struct, I can store an address of another struct or the struct itself.
	// if I store the address of another struct, then I can use * to access the value
	// but if I directly store the struct inside a struct, I can access it with a dot
	// it's a field after all.
}

type ministruct struct {
	value int
}

func main() {
	firstRec := rectangle{h: 1024, w: 512, next: nil}
	secondRec := rectangle{h: 5122, w: 1024, next: nil}

	randomMini := ministruct{value: 33}

	// oh this assign only a memory instead of the whole struct into the
	// firstRec.next
	firstRec.next = &secondRec

	// this one stores the entire mini struct into the var
	firstRec.ministruct = randomMini

	fmt.Println(*firstRec.next)
	fmt.Println(firstRec)
}
