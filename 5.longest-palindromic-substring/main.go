package main

import "fmt"

func longestPalindrome(s string) string {
	n := len(s)
	if n == 0 {
		return ""
	}
	var p [][]bool
	for i := 0; i < n; i++ {
		s := []bool{}
		for j := 0; j < n; j++ {
			s = append(s, false)
		}
		p = append(p, s)
	}
	index1 := 0
	index2 := 0
	nums := 0
	for i := 0; i < n; i++ {
		for j := 0; j < n; j++ {
			if (i == j) || (j == i+1 && p[i][i] && s[i] == s[j]) || (i >= 1 && j < n-1 && s[i] == s[j] && p[i-1][j+1]) {
				p[i][j] = true
				//fmt.Println("i-j > nums", i, j)
				if i-j > nums {
					nums = i - j
					index2 = i
					index1 = j
				}
			}
		}
	}
	return s[index1 : index2+1]
}

func main() {
	s := "a"
	fmt.Println(longestPalindrome(s))
}
