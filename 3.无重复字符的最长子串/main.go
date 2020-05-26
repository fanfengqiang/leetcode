package main

import (
	"fmt"
)

func lengthOfLongestSubstring(s string) int {
	rk := 0
	nums := 0
	caps := map[rune]int{}
	for k := range s {
		if k != 0 {
			delete(caps, rune(s[k-1]))
		}
		for {
			if rk >= len(s) {
				break
			}
			if _, ok := caps[rune(s[rk])]; !ok {
				caps[rune(s[rk])] = 1
				rk++
			} else {
				break
			}
		}
		nums = Max(nums, rk-k)
	}
	return nums
}
func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}

func main() {
	c := lengthOfLongestSubstring("pa")
	fmt.Println(c)
}
