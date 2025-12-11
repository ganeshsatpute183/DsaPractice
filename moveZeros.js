let arr = [0, 1, 0, 0, 0, 3, 12];
function moveZeroes(arr) {
  let p = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[p];
      arr[p] = arr[i];
      arr[i] = temp;
      p++;
    } else if (arr[i] == 0) {
    }
  }
  return arr;
}

let res = moveZeroes(arr);
console.log(res);
