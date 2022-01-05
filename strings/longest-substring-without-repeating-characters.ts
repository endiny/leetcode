// https://leetcode.com/problems/longest-substring-without-repeating-characters/
function lengthOfLongestSubstring(s: string): number {
  if (s.length === 0) return 0;
  const chars = new Map<string, number>([[s[0], 0]]);
  let max = 1;
  let currMax = 1;
  let left = 0;
  for (let i = 1; i < s.length; i++) {
    if (chars.has(s[i])) {
      max = Math.max(currMax, max);
      left = chars.get(s[i]) + 1;
      i = left;
      currMax = 1;
      chars.clear();
      chars.set(s[i], i);
    } else {
      chars.set(s[i], i);
      currMax++;
    }
  }
  return Math.max(currMax, max);
}

console.log(lengthOfLongestSubstring('dvdf'));