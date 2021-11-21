/*
Problem: Given an array nums of n integers where nums[i] is in the range [1, n], 
return an array of all the integers in the range [1, n] that do not appear in nums.
*/

// IN -> number[]
// OUT -> number[]

let findDisappearedNumbers = function(nums) {

    let set = new Set();
    
    for(let num of nums){
        set.add(num);
    }
    
    let result = [];
    
    for(let i = 1 ; i <= nums.length; i++){
        if(!set.has(i)){
            result.push(i);
        }
    }
    
    return result;   
};