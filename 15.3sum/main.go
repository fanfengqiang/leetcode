package main

import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	l := [][]int{}
	sort.Ints(nums)
	fmt.Println(nums)
	n := len(nums)
	for i := 0; i < n-1; i++ {
		if i != 0 && nums[i] == nums[i-1] {
			continue
		}
		for _, v := range twoSum(nums[i+1:], -nums[i]) {
			l = append(l, []int{nums[i], v[0], v[1]})
		}
	}
	return l
}
func twoSum(nums []int, s int) [][]int {
	l := [][]int{}
	i := 0
	j := len(nums) - 1
	for i < j {
		if nums[i]+nums[j] < s {
			i++
		} else if nums[i]+nums[j] > s {
			j--
		} else {
			a := nums[i]
			b := nums[j]
			l = append(l, []int{a, b})
			for a == nums[i] && i < j {
				i++
			}
			for b == nums[j] && i < j {
				j--
			}
		}
	}
	return l
}
func main() {
	fmt.Println(threeSum([]int{0, 0, 0, 0, 0}))
}
