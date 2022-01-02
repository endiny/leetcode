// https://leetcode.com/problems/maximum-subarray/
// TODO
function maxSubArray(nums: number[]): number {
    let curr = nums[0];
    let max = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        curr = Math.max(curr, curr + nums[i]);
        max = Math.max(curr, max);
    }
    return curr;
}

// Bruteforce
function maxSubArrayBrute(nums: number[]): number {
    let max = -Infinity;
    for (let i = 0; i < nums.length; ++i) {
        let curr = 0;
        for (let j = i; j < nums.length; ++j) {
            curr += nums[j];
            max = Math.max(max, curr);
        }
    }
    return max;
}