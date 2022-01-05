// https://leetcode.com/problems/permutation-in-string/
function checkInclusion(s1: string, s2: string): boolean {
  if (s2.length < s1.length) return false;
  const chars1 = countChars(s1);

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    if (!chars1.has(s2[i])) continue;
    const chars2 = new Map(chars1);
    let j = i;
    for (; j < i + s1.length; ++j) {
      const count = chars2.get(s2[j]);
      if (count !== undefined) {
        count - 1 === 0 ? chars2.delete(s2[j]) : chars2.set(s2[j], count - 1);
      } else if (!chars1.has(s2[j])) {
        i = j;
        break;
      } else {
        break;
      }
    }
    if (chars2.size === 0) return true;
  }
  
  return false;
}

function countChars(s: string): Map<string, number> {
  const res = new Map<string, number>();

  for (const char of s) {
    res.set(char, (res.get(char) ?? 0) + 1);
  }
  
  return res;
}

checkInclusion('ccc', 'cbac');