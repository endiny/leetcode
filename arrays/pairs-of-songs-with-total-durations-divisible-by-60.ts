// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60
function numPairsDivisibleBy60(time: number[]): number {
    let res = 0;
    const mods = new Map<number, number>();
    for (const i of time) {
        const mod = i % 60;
        res += (mods.get(mod === 0 ? 0 : 60 - mod) ?? 0);
        mods.has(mod) ? mods.set(mod, mods.get(mod)! + 1) : mods.set(mod, 1);
    }
    return res;
}

console.log(numPairsDivisibleBy60([60, 60, 60]));