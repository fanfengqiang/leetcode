package main

import "fmt"

func twoSum(nums []int, target int) []int {
	hash := map[int]int{}

	for i := 0; i < len(nums); i++ {
		if v, ok := hash[target-nums[i]]; !ok {
			hash[nums[i]] = i
		} else {
			return []int{v,i}
		}
	}
	return []int{}

}

func main() {
	a := []int{2, 7, 9, 11}
	fmt.Println(twoSum(a,9))
}
