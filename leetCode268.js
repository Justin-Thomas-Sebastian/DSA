/* 
Problem: Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

// IN -> number[]
// OUT -> number

 var missingNumber = function(nums) {
    
//     SOLUTION USING AN ARRAY
//     nums.sort( (a, b) => (a - b) ) ;
 
//     if(nums[0] !== 0) {
//         return 0;
//     }
 
//     if(nums[nums.length - 1] !== nums.length) {
//         return nums.length;
//     }
         
 
//     for(let i = 0; i < nums.length - 1; i++){
//        if(nums[i + 1] !== i + 1){
//            return i + 1;
//        }    
//     }
 

 // SOLUTION USING MATH
 let actualTotal = 0;
 for(let num of nums){
     actualTotal += num; 
 }
 
 let expectedTotal = 0;
 for(let i = 0; i <= nums.length; i++){
     expectedTotal += i;
 }
 
 return expectedTotal - actualTotal;
};