#include <vector>

class Solution {
public:
    std::vector<int> getAverages(std::vector<int>& nums, int k) {
        if(k == 0){
            return nums;
        }

        int n = nums.size();
        std::vector<int> averages(n, -1);
        int validLength = k * 2 + 1;

        if(n < validLength){
            return averages;
        }

        long windowSum = 0;
        for(int i = 0; i < validLength; i++){
            windowSum += nums[i];
        }

        averages[k] = windowSum/validLength;

        for(int i = k + 1; i < n - k; i++){
            windowSum -= nums[i - k - 1]; // left bound
            windowSum += nums[i + k]; // right bound
            averages[i] = windowSum/validLength;
        }

        return averages;
    }
};