package main

import "fmt"

func isPalindrome(x int) bool {
	if x < 0 || (x != 0 && x%10 == 0) {
		return false
	}
	if x <= 9 {
		return true
	}
	y := 0
	for x > 0 {
		t := x % 10
		x = x / 10
		y = 10*y + t
		//fmt.Println(x,y)
		if x == y || y == x/10 {
			return true
		}
	}
	return false
}
func main() {
	fmt.Println(isPalindrome(1310))
}
