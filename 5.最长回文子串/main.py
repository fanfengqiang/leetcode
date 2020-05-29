# coding:utf-8

class Solution:
    def longestPalindrome(self, s: str) -> str:
        n = len(s)
        if n == 0:
            return ""
        p = [[False]*n for _ in range(n)]
        index1 = 0
        index2 = 0
        nums = 0
        for i in range(n):
            for j in range(n):
                if (j == i) or (j == i+1 and p[i][i] and s[i] == s[j]) or (i >= 1 and j < n-1 and s[i] == s[j] and p[i-1][j+1]):
                    p[i][j] = True
                    if i-j > nums:
                        nums = i-j
                        index2 = i
                        index1 = j
        return(s[index1:index2+1])


if __name__ == "__main__":
    s = ""
    # print(s[0:2])
    print("r:", Solution().longestPalindrome(s))
