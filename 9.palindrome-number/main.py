# coding:utf-8


class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0 or (x > 0 and x % 10 == 0):
            return False
        y = 0
        if x < 10:
            return True
        while x > 0:
            t = x % 10
            x = x // 10
            y = 10 * y + t
            print(x, y)
            print(x,y)
            if x == y or (x > 9 and y == x // 10):
                return True
        return False


if __name__ == '__main__':
    print(Solution().isPalindrome(9))
