/* 
Problem: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
*/
 
 // IN -> number[]
 // OUT -> boolean   
let containsDuplicate = function(nums) {
    
    let set = new Set();
    
    for(let num of nums){
        if(set.has(num)){
            return true;
        } else {
            set.add(num);
        }
    }
    return false;
};