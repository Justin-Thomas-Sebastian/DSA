/*
 Problem: Given an integer array nums sorted in non-decreasing order, 
 return an array of the squares of each number sorted in non-decreasing order.

 Follow up: Squaring each element and sorting the new array is very trivial, 
 could you find an O(n) solution using a different approach?
 */

 let sortedSquares = function(nums) {    
    let result = [];
    let left = 0;
    let right = nums.length - 1;
    
    while(left <= right){
        if(Math.abs(nums[left]) >= Math.abs(nums[right])){
            result.push(nums[left] ** 2);
            left++;
        } else {
            result.push(nums[right] ** 2);
            right--;
        }
    }
    return result.reverse();
};