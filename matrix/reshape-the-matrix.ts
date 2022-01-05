// https://leetcode.com/problems/reshape-the-matrix/
function matrixReshape(mat: number[][], r: number, c: number): number[][] {
  const m = mat.length; const n = mat[0].length;
  if (m * n !== r * c) return mat;
  const res = Array.from({length: r}, () => []);

  for (let i = 0; i < (m * n); i ++) {
    res[Math.floor(i / c)][i % c] = mat[Math.floor(i / n)][i % n];
  }

  return res;
};

matrixReshape([[1,2],[3,4]], 1, 4);