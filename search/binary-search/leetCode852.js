/* 
Problem: Let's call an array arr a mountain if the following properties hold:

    1. arr.length >= 3
    2. There exists some i with 0 < i < arr.length - 1 such that:
        * arr[0] < arr[1] < ... arr[i-1] < arr[i]
        * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
    
Given an integer array arr that is guaranteed to be a mountain, 
return any i such that:
arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

Example 1:

Input: arr = [0,1,0]
Output: 1
Example 2:

Input: arr = [0,2,1,0]
Output: 1
Example 3:

Input: arr = [0,10,5,2]
Output: 1

(BASICALLY LOOKING FOR THE PEAK OF THE MOUNTAIN)
*/

// IN -> Array[Number]
// OUT -> Number

let peakIndexInMountainArray = function(arr) {
    
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right){

        let middle = Math.floor(left + (right - left)/2);

        if(arr[middle] < arr[middle + 1]){ // until we find the peak
            left = middle + 1;
        } else {
            right = middle - 1;
        }   
    }

    return left;
};