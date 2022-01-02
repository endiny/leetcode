// https://leetcode.com/problems/maximum-score-from-performing-multiplication-operations/
function maximumScore(nums: number[], multipliers: number[]): number {
    let start = 0;
    let end = nums.length - 1;
    let score = 0;
    for (const i of multipliers) {
        if (i* nums[start] > i*nums[end]) {
            score += i * nums[start];
            start++;
        } else {
            score += i * nums[end];
            end--;
        }
    }
    return score;
}

maximumScore([-5,-3,-3,-2,7,1], [-10,-5,3,4,6]);