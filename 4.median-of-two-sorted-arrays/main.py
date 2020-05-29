# coding: utf-8

class Solution:
    def findMedianSortedArrays(self, nums1, nums2):
        sum = (len(nums1)+len(nums2))
        if sum % 2 == 1:
            return findNum(nums1, nums2, sum//2+1)/1.0
        else:
            return (findNum(nums1, nums2, sum//2)+findNum(nums1, nums2, sum//2+1))/2


def findNum(l1, l2, k):
    # print("s:", l1, l2, k)
    if len(l1) == 0:
        return l2[k-1]
    if len(l2) == 0:
        return l1[k-1]
    if k == 1:
        # print("min:", l1, l2, l1[0], l2[0], min(l1[0], l2[0]))
        return min(l1[0], l2[0])
    index1 = min(k//2 - 1, len(l1)-1)
    index2 = min(k//2 - 1, len(l2)-1)
    # print("index1,2:", index1, index2)
    if l1[index1] < l2[index2]:
        # print("<")
        return findNum(l1[index1+1:], l2, k-index1-1)
    else:
        # print(">")
        return findNum(l1, l2[index2+1:], k-index2-1)


if __name__ == "__main__":

    a = [2, 4, 5, 6]
    b = [1, 2, 3, 7]
    s = Solution()
    e = s.findMedianSortedArrays(nums1=a, nums2=b)
    print(e)
