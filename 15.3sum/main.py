# coding:utf-8
from typing import List


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        l = []
        nums.sort()
        nLen = len(nums)
        for i in range(nLen-1):
            if i != 0 and nums[i] == nums[i-1]:
                continue
            for (j, k) in self.twoSum(nums[i+1:], -nums[i]):
                l.append([nums[i], j, k])
        return l

    def twoSum(self, l, s):
        r = []
        i = 0
        j = len(l)-1
        while i < j:

            if l[i]+l[j] < s:
                i = i+1
            elif l[i]+l[j] > s:
                j = j-1
            else:
                a = l[i]
                b = l[j]
                r.append([a, b])
                while a == l[i] and i < j:
                    i = i+1
                while b == l[j] and i < j:
                    j = j-1
        return r


if __name__ == "__main__":
    print(Solution().threeSum([0, 0, 0, 0]))
