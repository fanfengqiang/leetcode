# coding: utf-8

class Solution:
    def reverse(self, x: int) -> int:
        flag = False
        if x < 0:
            flag = True
            x = -x
        y = 0
        while x > 0:
            n = x % 10
            x = x//10
            y = y*10+n
            pass
        if flag:
            y = -y
        if y < -2 ** 31 or y > 2 ** 31:
            return 0
        return y


if __name__ == "__main__":
    print(Solution().reverse(-12455668))
