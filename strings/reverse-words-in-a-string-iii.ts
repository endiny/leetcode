// https://leetcode.com/problems/reverse-words-in-a-string-iii/
// @ts-ignore
function reverseWords(s: string): string {
    let curr = 0;
    const words: string[] = [];
    for (let i = 0; i < s.length; ++i) {
        if (s[i] !== ' ' && i !== s.length - 1) continue;
        const word: string[] = [];
        let left = curr;
        let right = (i === s.length - 1) ? i : i-1;
        while (left <= right) {
            word[left] = s[right];
            word[right--] = s[left++];
        }
        curr = i + 1;
        words.push(word.join(''));
    }
    return words.join(' ');
}

function reverseWordsJS(s: string): string {
    return s.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}
