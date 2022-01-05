// TODO
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
function maxProfit(prices: number[]): number {
    let min = prices[0];
    let max = 0;
    let diffMax = 0;
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] < min) {
            max = Math.max(diffMax, max);
            min = prices[i];
        } else {
            diffMax = Math.max(diffMax, prices[i] - min);
        }
    }
    return Math.max(max, diffMax);
}

maxProfit([7,1,5,3,6,4]);