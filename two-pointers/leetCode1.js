/*
Problem: Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, 
and you may not use the same element twice.
 */

//IN -> Number[]
//OUT -> Number[]

let twoSum = function(nums, target) {
	let copy = [...nums];
    copy.sort( (a, b) => (a - b) ) // sort in ascending
    
	let left = 0;
	let right = copy.length - 1;
    let result = [];
	
	while(left < right){
		let currentSum = copy[left] + copy[right];
		if(currentSum === target){
			break;
		} else if(currentSum < target){
			left++;
		} else {
			right--;
		}
	}
	
    for(let i = 0; i < nums.length; i++){ // find left index in original array
        if(nums[i] === copy[left]){
            result.push(i);
            break;
        }
    }
    
    for(let i = nums.length - 1; i >= 0; i--){ // find right index in original array
        if(nums[i] === copy[right]){
            result.push(i);
            break;
        }
    }
    
    return result;
}    