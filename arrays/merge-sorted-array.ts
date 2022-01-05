// https://leetcode.com/problems/merge-sorted-array/
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let arr1 = m - 1;
    let arr2 = n - 1;
    let p = nums1.length - 1;
    while (arr1 >= 0 && arr2 >= 0) {
        if (nums1[arr1] > nums2[arr2]) {
            nums1[p--] = nums1[arr1--];
        } else {
            nums1[p--] = nums2[arr2--];
        }
    }
    while (arr1 >= 0) nums1[p--] = nums1[arr1--];
    while (arr2 >= 0) nums1[p--] = nums2[arr2--];
}

merge([1,2,3,0,0,0], 3, [2,5,6], 3);