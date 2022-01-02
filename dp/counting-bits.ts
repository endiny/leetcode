// https://leetcode.com/problems/counting-bits/
function countBits(n: number): number[] {
    return Array.from({length: n + 1}, countOnesInBinary);
}

function countOnesInBinary(_, n: number): number {
    let num = n;
    let res = 0;
    while (num > 1) {
        res += num % 2;
        num = Math.floor(num / 2);
    }
    if (num === 1) res++;
    return res;
}

console.log(countBits(5));