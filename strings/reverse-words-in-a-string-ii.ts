// https://leetcode.com/problems/reverse-words-in-a-string-ii/
// @ts-ignore
/**
 Do not return anything, modify s in-place instead.
 */
function reverseWords(s: string[]): void {
    let left = 0;
    let right = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ' ' && i !== s.length - 1) continue;
        right = (i === s.length - 1) ? i : i - 1;
        while (left < right) {
            const tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }
    left = 0; right = s.length - 1;
    while (left < right) {
        const tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}