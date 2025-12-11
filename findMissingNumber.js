let arr = [9, 0, 2, 1, 4, 3, 5, 6, 8];

function findMissing(arr) {
  let n = arr.length;
  let total = (n * (n + 1)) / 2;
  let sumOfArr = 0;
  for (let i = 0; i < n; i++) {
    sumOfArr = sumOfArr + arr[i];
  }
  return total - sumOfArr;
}

let res = findMissing(arr);
console.log(res);
