package main

import (
	"fmt"
	"strings"
)

func myAtoi(str string) int {
	new_str := strings.TrimLeft(str, " ")
	flag := false
	num := 0
	for k, v := range new_str {
		var n int
		if k == 0 && v == '-' {
			flag = true
		} else if k == 0 && v == '+' {
			flag = false
		} else if v >= '0' && v <= '9' {
			n = int(v-'0')
		} else {
			break
		}
		num = num*10 +n
		if num>2147483647 {
			if flag{
				num=2147483648
			}else {
				num=2147483647
			}
			break
		}
	}
	if flag {
		num = -num
	}
	return num
}
func main() {
	fmt.Println(myAtoi("+"))
	fmt.Println("hello word!")
}
