# coding:utf-8

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        n = len(s)
        new_s = ""
        if numRows == 1:
            return s
        if numRows == 2:
            return s[0::2]+s[1::2]
        for i in range(numRows):
            for j in range(n):
                u = j//(numRows-1)
                us = u*2*(numRows-1)
                if j % (numRows-1) == 0:
                    k = us+i
                    if k < n:
                        new_s = new_s+s[k]
                elif i+(j % (numRows-1)) == numRows - 1:
                    k = us + numRows + (numRows-2-i)
                    if k < n:
                        new_s = new_s+s[k]
        return new_s


if __name__ == "__main__":
    """
L     D     R
E   O E   I I
E C   I H   N
T     S     G
    """
    print(Solution().convert("LEETCODEISHIRING", 4))
