// https://leetcode.com/problems/remove-nth-node-from-end-of-list/
import {ListNode, generateLinkedList} from "./util";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if (head.next === null) return null;

    let left = head;
    let right = head;
    for (let i = 1; i < n; ++i) right = right.next;
    while (right.next !== null) {
        right = right.next;
        left = left.next;
    }
    const toRemove = left;
    if (toRemove === head) return head.next;
    left = head;
    while (left.next !== toRemove) {
        left = left.next;
    }
    left.next = left.next.next;
    return head;
}

removeNthFromEnd(generateLinkedList([1,2]), 2);