/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
// https://leetcode.com/problems/first-bad-version/
var solution = function(isBadVersion: (version: number) => boolean) {

    return function(n: number): number {
        let left = 0;
        let right = n;
        let mid = Math.floor((left + right) / 2);
        while (left <= right) {
            const isBad = isBadVersion(mid);
            if (!isBad && isBadVersion(mid + 1)) {
                return mid + 1;
            }
            if (isBad) {
                right = mid - 1;
                mid = Math.floor((left + right) / 2);
            } else {
                left = mid + 1;
                mid = Math.floor((left + right) / 2);
            }
        }
        return -1;
    };
};