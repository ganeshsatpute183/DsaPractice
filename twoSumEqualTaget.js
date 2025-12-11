var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

let arr = [1, 5, 3, 2, 11, 15, 7];
let res = twoSum(arr, 9);
console.log(res);
