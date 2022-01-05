// https://leetcode.com/problems/reverse-words-in-a-string/
function reverseWords(s: string): string {
    const chars = trimSpaces(s).split('');
    let left = 0; let right = chars.length - 1;
    while (left < right) {
        const tmp = chars[left];
        chars[left++] = chars[right];
        chars[right--] = tmp;
    }
    left = 0; right = 0;
    let offset = 0; let totalOffset = 0;
    let isWord = false;
    for (let i = 0; i < chars.length; ++i) {
        if (!isWord) {
            if (chars[i] !== ' ') {
                isWord = true;
                left = i;
            } else if (chars[i-1] === ' ') {offset++; totalOffset++;}
        } else {
            if (chars[i] === ' ') right = i - 1;
            else if (i === chars.length - 1) right = i;
            else continue;
            while (left < right) {
                const tmp = chars[left];
                chars[left++ - offset] = chars[right];
                if (offset) chars[right] = '';
                chars[right-- - offset] = tmp;
            }
            isWord = false;
        }
    }
    return chars.join('');
}

function trimSpaces(s: string): string {
    let left = 0; let right = s.length - 1;
    while (left < right && s[left] === ' ') {
        left++;
    }
    while (left < right && s[right] === ' ') {
        right--;
    }
    return s.substring(left, right + 1);
}

reverseWords("  the sky is  blue   ");