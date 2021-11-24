/*
Problem: Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
*/

// IN -> number[]
// OUT -> number

let singleNumber = function(nums) {
    
    let map = {};
    
    for(let num of nums){
        if(num in map){
            map[num] += 1;
        } else {
            map[num] = 1;
        }
    }
    
    
    for(let num in map){
        if(map[num] == 1){
            return num;
        }
    }   
};