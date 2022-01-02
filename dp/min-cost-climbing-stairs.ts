// https://leetcode.com/problems/min-cost-climbing-stairs/
function minCostClimbingStairs(cost: number[]): number {
    cost.push(0);
    const arr = [0,0];

    for (let i = 2; i < cost.length; ++i) {
        arr[i] = Math.min(arr[i-2] + cost[i-2], arr[i-1] + cost[i-1]);
        // const c = Math.min(a, b);
    }
    return arr[arr.length - 1];
}

minCostClimbingStairs([10,15,20]);
// minCostClimbingStairs([0,0,1,1]);
// minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]);