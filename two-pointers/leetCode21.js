/*
leetcode 21

Problem: You are given the heads of two sorted linked lists list1 and list2.
Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
Return the head of the merged linked list.
*/

//Definition for singly-linked list.
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }

// IN -> ListNode1, ListNode2
// OUT -> ListNode

let mergeTwoLists = function(list1, list2) {
    let newHeadPrev = new ListNode();  // will point to new head
    let currentNode = newHeadPrev;

    while(list1 !== null && list2 !== null){ // iterate through both lists
        if(list1.val < list2.val){
            currentNode.next = list1;
            list1 = list1.next;
        } else {
            currentNode.next = list2;
            list2 = list2.next;
        }

        currentNode = currentNode.next;
    }

    if(list1 !== null){ // if list2 reaches the end first
        currentNode.next = list1;
        list1 = list1.next;
    }

    if(list2 !== null){  // if list1 reaches the end first
        currentNode.next = list2;
        list2 = list2.next;
    }

    return newHeadPrev.next;   // new head
};