package main

/*
	#include <stdlib.h>
	#include <string.h>
*/
import "C"

//export sum
func sum(numa *C.int, numb *C.int) *C.int {
	result := C.int(int(*numa) + int(*numb))
	return &result
}

//export sub
func sub(numa *C.int, numb *C.int) *C.int {
	result := C.int(int(*numa) - int(*numb))
	return &result
}

//export mult
func mult(numa *C.int, numb *C.int) *C.int {
	result := C.int(int(*numa) * int(*numb))
	return &result
}

//export divide
func divide(numa *C.int, numb *C.int) *C.int {
	result := C.int(int(*numa) / int(*numb))
	return &result
}

func main() {

}
