// https://leetcode.com/problems/middle-of-the-linked-list/
function middleNode(head: ListNode | null): ListNode | null {
    if (!head || !head?.next) {
        return head?.next ?? head;
    }
    let left = head;
    let right = head.next;
    while (right) {
        right = right.next?.next;
        left = left.next;
    }
    return left;
};