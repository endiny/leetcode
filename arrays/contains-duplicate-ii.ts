// https://leetcode.com/problems/contains-duplicate-ii/
function containsNearbyDuplicate(nums: number[], k: number): boolean {
    const tmp = new Set<number>();
    for (const [i,v] of nums.entries()) {
        if (tmp.has(v)) return true;
        tmp.add(v);
        tmp.delete(nums[i - k]);
    }
    return false;
}

containsNearbyDuplicate([1,0,1,1], 1);