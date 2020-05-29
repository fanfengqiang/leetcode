package main

import "fmt"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	sum := len(nums1) + len(nums2)
	if sum%2 == 1 {
		return float64(findNums(nums1, nums2, sum/2+1))
	} else {
		return float64(findNums(nums1, nums2, sum/2)+findNums(nums1, nums2, sum/2+1)) / 2.0
	}
}

func findNums(l1, l2 []int, k int) int {
	fmt.Println("s:", l1, l2, k)
	index1 := Min(k/2-1, len(l1)-1)
	index2 := Min(k/2-1, len(l2)-1)
	if len(l1) == 0 {
		return l2[k-1]
	}
	if len(l2) == 0 {
		return l1[k-1]
	}
	if k == 1 {
		return Min(l1[0], l2[0])
	}
	if l1[index1] < l2[index2] {
		return findNums(l1[index1+1:], l2, k-index1-1)
	} else {
		return findNums(l1, l2[index2+1:], k-index2-1)
	}

}
func Max(x, y int) int {
	if x > y {
		return x
	}
	return y
}
func Min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func main() {
	a := []int{1}
	b := []int{2, 3, 4, 5, 6}
	c := findMedianSortedArrays(b, a)
	fmt.Println(c)
}
