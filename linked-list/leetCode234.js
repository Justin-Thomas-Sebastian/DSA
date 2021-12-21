/* Problem: Given the head of a singly linked list, return true if it is a palindrome. */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// IN -> ListNode
// OUT -> Boolean

let isPalindrome = function(head) {
    
    let fast = head;
    let slow = head;
    
    // fast reaches end of list, slow will be in the middle
    while(fast !== null && fast.next !== null){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    slow = reverseList(slow); //returns list from last to middle. Ex. a b c d e  -> e d c                  
    fast = head;  //return to first node
    
    //compare nodes of original with nodes of reversed
    while(slow != null){
        if(slow.val !== fast.val){
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};

// helper function. used to reverse from middle to end of original list
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