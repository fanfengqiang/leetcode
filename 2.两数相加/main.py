# coding: utf-8

class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        val = 0
        l3 = ListNode(0)
        l4 = l3
        a = False
        b = False
        while True:
            if a and b and val == 0:
                break

            l3.next = ListNode((l1.val+l2.val+val) % 10)
            l3 = l3.next

            val = (l1.val+l2.val+val)//10
            
            if l1.next != None:
                l1 = l1.next
            else:
                a = True
                l1 = ListNode(0)
            if l2.next != None:
                l2 = l2.next
            else:
                b = True
                l2 = ListNode(0)

        return l4


def genNode(l: list) -> ListNode:
    a = ListNode(0)
    b = a
    for i in l:
        a.next = ListNode(i)
        a = a.next
    return b.next

def showNode(l: ListNode):
    while True:
        print(l.val)
        if l.next != None:
            l = l.next
        else:
            break

if __name__ == "__main__":

    c = genNode([5])
    d = genNode([5])
    S = Solution()
    e = S.addTwoNumbers(c, d)
    showNode(e.next)
    pass
