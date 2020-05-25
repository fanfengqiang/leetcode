package main

import "fmt"

/**
 * Definition for singly-linked list.

 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	header := &ListNode{}
	curr := header
	val := 0
	for true {
		if val == 0 && l1 == nil && l2 == nil {
			break
		}
		sum := 0
		if l1 != nil {
			sum = l1.Val + sum
			l1 = l1.Next
		}

		if l2 != nil {
			sum = l2.Val + sum
			l2 = l2.Next
		}
		sum = sum + val
		curr.Next = &ListNode{
			Val: sum % 10,
		}
		curr = curr.Next

		val = sum / 10

	}

	return header.Next
}

func genList(l []int) *ListNode {
	header := &ListNode{
		Val: 0,
	}
	curr := header

	for _, v := range l {
		curr.Next = &ListNode{
			Val: v,
		}
		curr = curr.Next
	}
	return header.Next

}

func showList(l *ListNode) {
	for l != nil {
		fmt.Println(l.Val)
		l = l.Next
	}
}
func main() {
	a := genList([]int{2, 4, 3})
	b := genList([]int{5, 6, 4})
	c := addTwoNumbers(a, b)
	showList(c)
}
