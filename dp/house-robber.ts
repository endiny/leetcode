
// https://leetcode.com/problems/house-robber/
// function rob(nums: number[]): number {
//   const tmp = [];
//
//   tmp[0] = nums[0];
//   tmp[1] = Math.max(nums[0], nums[1]);
//   for (let i = 2; i < nums.length; ++i) {
//     tmp[i] = Math.max(tmp[i-2] + nums[i], tmp[i-1]);
//   }
//   return tmp[tmp.length - 1];
// };

function rob(nums: number[]): number {
  function helper(i: number, nums: number[]): number {
    if (i < 2) return arr[i];
    if (arr[i] === undefined) {
      arr[i] = Math.max(helper(i-2, nums) + nums[i], helper(i-1, nums));
    }
    return arr[i];
  }
  const arr = [];

  arr[0] = nums[0];
  arr[1] = Math.max(nums[0], nums[1]);

  if (nums.length < 3) return arr[nums.length - 1];

  return helper(nums.length - 1, nums);
}

console.log(rob([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]));