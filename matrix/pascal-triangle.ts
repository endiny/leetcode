// https://leetcode.com/problems/reshape-the-matrix
function generate(n: number): number[][] {
  const res = [];

  for (let i = 0; i < n; ++i) {
    const row = [];
    row[0] = 1; row[i] = 1;
    for (let j = 1; j < i; j++) {
      row[j] = res[i-1][j-1] + res[i-1][j];
    }
    res.push(row);
  }
  
  return res;
};