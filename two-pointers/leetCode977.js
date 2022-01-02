/*
 Problem: Given an integer array nums sorted in non-decreasing order, 
 return an array of the squares of each number sorted in non-decreasing order.

 Follow up: Squaring each element and sorting the new array is very trivial, 
 could you find an O(n) solution using a different approach?
 */

// IN -> number[]
// OUT -> number[]

// left = first element
// right = last element
// compare left and right
// find larger absolute value
// square the larger value
// then add to the end of result array
// increment left/ decrement right
// after loop, result arr will be in descending order
// return reversed array
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