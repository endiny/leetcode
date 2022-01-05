// https://leetcode.com/problems/find-the-town-judge/
function findJudge(n: number, trust: number[][]): number {
    if (n === 1 && trust.length === 0) return 1;
    if (trust.length < n - 1) return -1;
    const trusters = new Set<number>();
    const trusts = new Map<number, number>();
    for (const [truster, trustee] of trust) {
        trusters.add(truster);
        const currTrusts = trusts.get(trustee);
        trusts.set(trustee, currTrusts ? currTrusts + 1 : 1);
    }
    return [...trusts.entries()].find(([trustee, trustsNumber]) => {
        return trustsNumber === n - 1 && !trusters.has(trustee);
    })?.[0] ?? -1;
}