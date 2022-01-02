const tmp = new Map<number, number>();

// https://leetcode.com/problems/n-th-tribonacci-number/
function tribonacci(n: number): number {
    if (n < 3) return n === 0 ? 0 : 1;

    if (!tmp.has(n)) {
        tmp.set(n, tribonacci(n-3) + tribonacci(n-2) + tribonacci(n-1));
    }
    
    return tmp.get(n);
}