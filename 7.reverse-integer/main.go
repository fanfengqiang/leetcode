package main

import (
	"fmt"
)

func reverse(x int) int {
	var f bool

	if x < 0 {
		f = true
		x = -x
	}
	y := 0
	for x > 0 {
		n := x % 10
		x = x / 10
		y = y*10 + n
	}
	if f {
		y = -y
	}
	if (y < -1<<31) || (y > 1<<31) {
		return 0
	}
	return y
}

func main() {
	fmt.Println(reverse(-21474836))
}
