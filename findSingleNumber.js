let arr = [2, 2, 1, 1, 3, 3, 4, 4, 7]; // 4

// function findSingleNumber(arr) {
//   let hash = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!hash[arr[i]]) {
//       hash[arr[i]] = 1;
//     } else {
//       hash[arr[i]]++;
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (hash[arr[i]] === 1) {
//       return arr[i];
//     }
//   }
// }

function findSingleNumber(arr) {
  let xor = 0;
  for (let i = 0; i < arr.length; i++) {
    xor = xor ^ arr[i];
  }
  return xor;
}

let res = findSingleNumber(arr);
console.log(res);
