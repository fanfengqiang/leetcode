package main

import "fmt"

func longestCommonPrefix(strs []string) string {

	pre := ""
	if len(strs) == 0 {
		return ""
	}

	for i := 0; i < minLen(strs); i++ {
		b := true
		for _, v := range strs {
			if v[i] != strs[0][i] {
				b = false
			}
		}
		if b {
			pre = pre + string(strs[0][i])
		} else {
			break
		}
	}
	return pre
}
func minLen(strs []string) int {
	l := len(strs[0])
	for _, v := range strs {
		if len(v) < l {
			l = len(v)
		}
	}
	return l
}
func main() {
	strs := []string{"flower", "flow", "flight"}
	fmt.Println(longestCommonPrefix(strs))
}
