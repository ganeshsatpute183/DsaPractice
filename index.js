// function recursion(num) {
//   if (num === 0) return;

//   num--;
//   recursion(num);
//   console.log(num);
// }

// recursion(10);

// function sum(n) {
//   if (n === 0) {
//     return 0;
//   }
//   return n + sum(--n);
// }
// let res = sum(5);
// console.log(res);
// let arr = [5, 3, 0, 2, 1, 4, 7];
// function sumOfAllArray(n) {
//   let isOdd = arr[n] % 2 != 0;
//   if (n === 0) {
//     return isOdd ? arr[0] : 0;
//   }

//   return (isOdd ? arr[n] : 0) + sumOfAllArray(--n);
// }
// console.log(sumOfAllArray(arr.length - 1));

// function findFactorial(n) {
//   if (n == 1) {
//     return 1;
//   }
//   return n * findFactorial(n - 1);
// }

// console.log(findFactorial(5));
//Need binary search and bubble sort imle
// function isPowerOfTwo(n) {
//   if (n == 1) {
//     return true;
//   }
//   if (n % 2 != 0 || n < 1) {
//     return false;
//   }
//   //let res = Math.floor(n / 2);
//   return isPowerOfTwo(n / 2);
// }
// console.log(isPowerOfTwo(16));

let arr = [3, 4, 1, 6, 9, 2, 0, 7];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let prev = i - 1;
    while (arr[prev] > current && prev >= 0) {
      arr[prev + 1] = arr[prev];
      prev--;
    }
    arr[prev + 1] = current;
  }
  return arr;
}

console.log(insertionSort(arr));
