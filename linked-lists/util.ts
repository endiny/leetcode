export class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function generateLinkedList(val: number[]): ListNode|null {
    if (val.length === 0) return null;
    const head: ListNode = {val: val[0], next: null};
    let curr = head;
    for (const i of val.slice(1)) {
        curr.next = {val: i, next: null};
        curr = curr.next;
    }
    return head;
}