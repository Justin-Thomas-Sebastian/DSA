/*
 Problem:  Given the head of a sorted linked list, 
delete all duplicates such that each element appears only once.
Return the linked list sorted as well.
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

let deleteDuplicates = function(head) {

    let currentNode = head;

    while(currentNode !== null && currentNode.next !== null){
        if(currentNode.val === currentNode.next.val){ // found duplicate
            currentNode.next = currentNode.next.next; 
        } else {
            currentNode = currentNode.next;
        }
    }
    return head;
};