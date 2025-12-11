// let arr1 = [1, 2, 3];
// let arr2 = [2, 3, 4, 5, 6];

// function MergeToSorted(arr1, m, arr2, n) {
//   let copya = arr1.slice(0, m);
//   let p1 = 0;
//   let p2 = 0;
//   for (let i = 0; i < m + n; i++) {
//     if (p2 >= n && p1 < m && copya[p1] < arr2[p2]) {
//       arr1[i] = copya[p1];
//       p1++;
//     } else {
//       arr1[i] = arr2[p2];
//       p2++;
//     }
//   }
//   console.log(arr1);
//   return arr1;
// }

// MergeToSorted(arr1, 3, arr2, 5);

// Solution 2:
let arr1 = [1, 2, 3, 0, 0, 0];
let arr2 = [2, 5, 6];

function MergeToSorted(arr1, m, arr2, n) {
  let p1 = m - 1;
  let p2 = n - 1;
  for (let i = arr1.length; i >= 0; i--) {
    if (p2 < 0) {
      break;
    }
    if (p1 >= 0 && arr1[p1] > arr2[p2]) {
      arr1[i - 1] = arr1[p1];
      p1--;
    } else {
      arr1[i - 1] = arr2[p2];
      p2--;
    }
  }
  console.log(arr1);
  // if (p < b.length) {
  // copy remaining
  //}
}

MergeToSorted(arr1, 3, arr2, 3);
