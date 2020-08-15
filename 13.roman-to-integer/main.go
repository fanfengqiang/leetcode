package main

import "fmt"

func romanToInt(s string) int {
	m := map[byte]int{
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000,
	}
	num := 0

	for k := range s {
		if m[s[k]] >= m[s[min(len(s)-1, k+1)]] {
			num = num + m[s[k]]
		} else {
			num = num - m[s[k]]
		}
	}
	return num
}
func min(a, b int) int {
	if a >= b {
		return b
	}
	return a
}

func main() {
	fmt.Println(romanToInt("MCMXCIV"))
}
