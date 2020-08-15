# coding:utf-8

class Solution:
    def romanToInt(self, s: str) -> int:
        m = {
            "I": 1,
            "V": 5,
            "X": 10,
            "L": 50,
            "C": 100,
            "D": 500,
            "M": 1000
        }
        num = 0

        for k in range(len(s)):
            if m[s[k]] >= m[s[min(len(s)-1, k+1)]]:
                num = num+m[s[k]]
            else:
                num = num-m[s[k]]
        return num


if __name__ == "__main__":
    print(Solution().romanToInt("MCMXCIV"))
