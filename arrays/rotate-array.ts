// https://leetcode.com/problems/rotate-array/
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], oldK: number): void {
    if (oldK === 0 || nums.length === 1) return;
    let changes = 0;
    let first = 0;
    let second = first;
    let buffer = nums[first];
    const k = oldK % nums.length;
    while (changes !== nums.length) {
        let newIndex = first + k;
        if (newIndex > nums.length - 1) newIndex -= nums.length;
        const tmp = nums[newIndex];
        nums[newIndex] = buffer;
        buffer = tmp;
        first = newIndex;
        changes++;
        if (second === first) {
            first++;
            second++;
            buffer = nums[first];
        }
    }
}
