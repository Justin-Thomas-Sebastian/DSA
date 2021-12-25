/*
Problem: Given an array of integers nums which is sorted in ascending order and an integer target.
Write a function to search target in nums. 
If target exists, then return its index. 
Otherwise, return -1.
You must write an algorithm with O(log n) runtime complexity.
 */

// IN -> number[], number(target)
// OUT -> number(index)

let search = function(nums, target) {
    
    let left = 0;
    let right = nums.length -1;
    
    while(left <= right){
        
        let middle = Math.floor(left + (right - left)/2); // updates middle point
        
        if(target === nums[middle]){ // target found
            return middle;
        } else if (target > nums[middle]){  // eliminate left side 
            left = middle + 1;
        } else if (target < nums[middle]){  // elimminate right side
            right = middle - 1;
        }
    }
    
    return -1; // target not found
};