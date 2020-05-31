# coding:utf-8


class Solution:
    def myAtoi(self, str: str) -> int:
        new_str = str.strip()
        flag = False
        if len(new_str) == 0:
            return 0
        if new_str[0] == '-':
            flag = True
            new_str = new_str[1:]
        elif new_str[0] == '+':
            new_str = new_str[1:]
        if len(new_str) == 0:
            return 0
        num = 0
        s = set(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])
        for i in new_str:
            if i in s:
                num = num * 10 + int(i)
                if num > 2147483647:
                    if flag:
                        num = 2147483648
                    else:
                        num = 2147483647
                    break
            else:
                break
        if flag:
            num = -num
        return num


if __name__ == '__main__':
    print(Solution().myAtoi("   2147483649"))
