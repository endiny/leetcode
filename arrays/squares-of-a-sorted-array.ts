// https://leetcode.com/problems/squares-of-a-sorted-array/
function sortedSquares(nums: number[]): number[] {
    if (nums.length === 1) return [nums[0]*nums[0]];
    const res = [];

    let j = 0;
    for (let k = 1; k < nums.length; ++k) {
        if (Math.abs(nums[k]) < Math.abs(nums[j])) j = k;
    }
    let i = j - 1;

    while (i >= 0 && j < nums.length) {
        const a = nums[i] * nums[i];
        const b = nums[j] * nums[j];
        if (a < b) {
            res.push(a);
            i--;
        } else {
            res.push(b);
            j++;
        }
    }
    while (i >= 0) {
        res.push(nums[i] * nums[i]);
        i--;
    }
    while (j < nums.length) {
        res.push(nums[j] * nums[j]);
        j++;
    }
    return res;
}

console.log(sortedSquares(
    [-4,-1,0,3,10]));