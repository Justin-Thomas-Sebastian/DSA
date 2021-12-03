/* Problem: Given the head of a singly linked list, reverse the list, and return the reversed list.

Example:
INPUT: a -> b -> c
OUTPUT: c -> b -> a

*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// IN -> ListNode
// OUT -> ListNode

let reverseList = function(head) {
    
    let prev = null;
    let curr = head;
    let next = null;
    
    while(curr != null){
        next = curr.next // stash
        curr.next = prev;  // reverse
        prev = curr //advance
        curr = next  //advance
    }
    
    return prev;
};