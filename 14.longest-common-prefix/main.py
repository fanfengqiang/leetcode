# coding:utf-8
from typing import List


class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if len(strs) == 0:
            return ""
        i = 0
        pre = ""
        while i < min(len(item) for item in strs):
            bool = True
            for item in strs:
                if item[i] != strs[0][i]:
                    bool = False
            if bool:
                pre = pre+item[i]
            else:
                break
            i = i+1
        return pre


if __name__ == "__main__":
    print(Solution().longestCommonPrefix(["aca", "cba"]))
