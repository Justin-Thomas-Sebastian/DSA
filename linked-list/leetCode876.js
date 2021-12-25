/* 
Problems: Given the head of a singly linked list, return the middle node of the linked list.
If there are two middle nodes, return the second middle node.
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

let middleNode = function(head){
    
    let slow = head;
    let fast = head;

    // fast goes until end. slow ends up in the middle
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};