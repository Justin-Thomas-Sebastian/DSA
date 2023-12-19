/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n) time
// O(n) space
function twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        } else {
            map.set(nums[i], i);
        }
    }
}
