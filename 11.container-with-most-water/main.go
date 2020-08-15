package main

import "fmt"

func maxArea(height []int) int {
	i := 0
	j := len(height) - 1
	max := min(height[i], height[j]) * (j - i)
	for i != j {
		if height[i] < height[j] {
			i++
		} else {
			j--
		}
		tmp := min(height[i], height[j]) * (j - i)
		if tmp > max {
			max = tmp
		}
	}
	return max
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func main() {
	l := []int{1, 8, 6, 2, 5, 4, 8, 3, 7}
	r := maxArea(l)
	fmt.Println(r)
}
