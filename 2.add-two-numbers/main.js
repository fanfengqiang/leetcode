/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}



function genList(l) {
    let header = new ListNode(0)
    let curr = header
    for (var i = 0; i < l.length; i++) {
        curr.next = new ListNode(l[i])
        curr = curr.next
    }
    return header.next
}

function showList(l) {
    do {
        console.log(l.val)
        l = l.next
    } while (l != null)
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let header = new ListNode(0)
    let curr = header
    let val = 0
    do {
        let sum = 0
        if (l1 != null) {
            sum += l1.val
            l1 = l1.next
        }
        if (l2 != null) {
            sum += l2.val
            l2 = l2.next
        }
        sum += val
        curr.next = new ListNode(sum % 10)
        curr = curr.next
        val = parseInt(sum / 10)
    } while (val != 0 || l1 != null || l2 != null)
    return header.next
};

(function main() {
    a = genList([2, 4, 3])
    b = genList([5, 6, 4])
    c = addTwoNumbers(a, b)
    showList(c)
}());