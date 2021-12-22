/* 
Problem: Given the head of a linked list and an integer val, 
remove all the nodes of the linked list that has Node.val == val, 
and return the new head.
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

 let removeElements = function(head, val) {
    
    let dummy = new ListNode(null, head);
    
    let prev = dummy;
    let curr = head;
    
    while(curr !== null){
        if(curr.val === val){
            prev.next = curr.next;
        } else {
            prev = curr;
        }
        curr = curr.next;
    }
    
    return dummy.next; // will always point to first node
};