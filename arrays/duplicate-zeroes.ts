// https://leetcode.com/problems/duplicate-zeros/
// TODO
function duplicateZeros(arr: number[]): void {
    let zeroes = 0;
    let skipFirst = false;
    for (let i = 0; (i + zeroes) < arr.length; ++i) {
        if (arr[i] === 0) {
            zeroes++;
            skipFirst = i === arr.length - zeroes - 1;
        }
    }
    for (let i = arr.length - 1; i >= 0; --i) {
        if (arr[i] === 0 && i === 0) break;
        arr[i] = arr[i - zeroes];
        if (arr[i] === 0 && !skipFirst) {
            arr[--i] = 0;
            zeroes--;
        }
        skipFirst = false;
    }
}

duplicateZeros([8,4,5,0,0,0,0,7]);