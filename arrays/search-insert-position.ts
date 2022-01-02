// https://leetcode.com/problems/search-insert-position/
function searchInsert(nums: number[], target: number): number {
    if (target <= nums[0]) return 0;
    if (target > nums[nums.length - 1]) return nums.length;
    if (target === nums[nums.length - 1]) return nums.length - 1;
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    // What could go wrong? O_o
    return left;
}

const a = searchInsert([1,3,5,6], 7);
console.log(a);