package main

import "fmt"

func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}
	new_s := ""
	k := 0
	for i := 0; i < numRows; i++ {
		for j := 0; j < len(s); j++ {
			u := j / (numRows - 1)
			us := u * 2 * (numRows - 1)
			if j%(numRows-1) == 0 {
				k = us + i
				if k < len(s) {
					new_s = new_s + string(s[k])
				}
			} else if i+(j%(numRows-1)) == numRows-1 {
				k = us + numRows + (numRows - 2 - i)
				if k < len(s) {
					new_s = new_s + string(s[k])
				}
			}

		}
	}
	return new_s
}

func main() {
	fmt.Println(convert("LEETCODEISHIRING", 4))
}
