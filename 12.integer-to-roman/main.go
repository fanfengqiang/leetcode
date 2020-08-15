package main

import "fmt"

func intToRoman(num int) string {
	str1 := ""
	for num > 0 {
		if num >= 1000 {
			s := num / 1000
			num = num % 1000
			str1 = str1 + roma(s, "M", "", "")
		}
		if num >= 100 {
			s := num / 100
			num = num % 100
			str1 = str1 + roma(s, "C", "D", "M")
		}
		if num >= 10 {
			s := num / 10
			num = num % 10
			str1 = str1 + roma(s, "X", "L", "C")
		}
		if num > 0 {
			str1 = str1 + roma(num, "I", "V", "X")
			num = 0
		}
	}
	return str1
}
func roma(s int, a, b, c string) string {

	str2 := ""
	if s <= 3 {
		for i := 0; i < s; i++ {
			str2 = str2 + a
		}
	} else if s == 4 {
		str2 = str2 + a + b
	} else if s == 5 {
		str2 = str2 + b
	} else if s < 9 {
		str2 = str2 + b
		for i := 0; i < s-5; i++ {
			str2 = str2 + a
		}
	} else {
		str2 = str2 + a + c
	}

	return str2
}
func main() {
	fmt.Println(intToRoman(1994))
}
