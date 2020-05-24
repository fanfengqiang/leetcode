# coding=utf-8

class Solution(object):
    def twoSum(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        hash = {}

        for i in range(len(nums)):
            if target - nums[i] not in hash:
                hash[nums[i]] = i
            else:
                return [hash[target - nums[i]], i]
        return []


if __name__ == '__main__':
    a = [2, 7, 11, 15]
    S=Solution()
    print(S.twoSum(nums=a, target=9))
