#include <vector>
#include <unordered_set>

class Solution{
public:
    bool containsDuplicate(std::vector<int>& nums){
        std::unordered_set<int> mySet;
        for(int i = 0; i < nums.size(); i++){
            if(mySet.find(nums[i]) != mySet.end()){
                return true;
            }
            mySet.insert(nums[i]);
        }
        return false;
    }
};