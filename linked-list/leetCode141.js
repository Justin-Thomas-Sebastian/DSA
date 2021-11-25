/*
Problem: Given head, the head of a linked list, determine if the linked list has a cycle in it.
There is a cycle in a linked list if there is some node in the list that can be reached again by 
continuously following the next pointer. 
Return true if there is a cycle in the linked list. Otherwise, return false.
*/


/*
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// IN -> ListNode
// OUT -> Boolean

 let hasCycle = function(head) {

    // USING SLOW AND FAST POINTER 
    // time -> O(N)
    // space -> O(1)

    // let slow = head;
    // let fast = head;
    
    // while(fast && fast.next){
    //     slow = slow.next;
    //     fast = fast.next.next;
    //     if(slow == fast){
    //         return true;
    //     }
    // }
    // return false;  

    // USING A HASH SET
    // time -> O(n)
    // space -> O(n)

    if(head === null) return false;
    
    let set = new Set();
    
    while(head.next !== null){
        
        if(set.has(head)){
            return true;
        } else {
            set.add(head);
            head = head.next; 
        }
    }
    return false;
};