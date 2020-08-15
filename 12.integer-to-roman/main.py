# coding:utf-8

class Solution:
    def intToRoman(self, num: int) -> str:
        str1 = ""
        while num > 0:
            if num >= 1000:
                s = num // 1000
                num = num % 1000
                str1 = str1+roma(s,  "M", "", "")
            if num >= 100:
                s = num // 100
                num = num % 100
                str1 = str1+roma(s,  "C", "D", "M")
            if num >= 10:
                s = num // 10
                num = num % 10
                str1 = str1+roma(s,  "X", "L", "C")
            if num > 0:
                str1 = str1+roma(num,  "I", "V", "X")
                num = 0
        return str1


def roma(s,  a, b, c):

    str2 = ""
    if s <= 3:
        for _ in range(s):
            str2 = str2+a
    elif s == 4:
        str2 = str2+a+b
    elif s == 5:
        str2 = str2+b
    elif s < 9:
        str2 = str2+b
        for _ in range(s-5):
            str2 = str2+a
    else:
        str2 = str2+a+c
    return str2


if __name__ == "__main__":
    print(Solution().intToRoman(10))
