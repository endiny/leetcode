// https://leetcode.com/problems/first-bad-version/
function search(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor((right + left) / 2);
    while (left <= right) {
        if (target === nums[mid]) {
            return mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
            mid = Math.floor((right + left) / 2);
        } else {
            right = mid - 1;
            mid = Math.floor((right + left) / 2);
        }
    }
    return -1;
}

search([-1,0,3,5,9,12],2);