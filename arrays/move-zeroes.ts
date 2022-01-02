// https://leetcode.com/problems/move-zeroes/
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let currZero = -1;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === 0) {
            currZero = i;
            break;
        }
    }
    if (currZero === -1) return;
    for (let i = currZero + 1; i < nums.length; ++i) {
        if (nums[i] !== 0) {
            nums[currZero] = nums[i];
            nums[i] = 0;
            currZero++;
        }
    }
}

moveZeroes([0,1,0,3,12]);