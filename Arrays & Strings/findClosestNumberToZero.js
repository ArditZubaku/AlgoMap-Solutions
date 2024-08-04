//https://leetcode.com/problems/find-closest-number-to-zero/description/

/*
 2239. Find Closest Number to Zero

 Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.

Constraints:

1 <= n <= 1000
-10^5 <= nums[i] <= 10^5

 */
function findClosestNumber(nums) {
  return minElement(nums);
}

function modul(num) {
  if (num > 0) return num;
  else return -num;
}

function minElement(nums) {
  let minElement = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (modul(nums[i]) < modul(minElement)) minElement = nums[i];
  }

  const inverse = nums.find(n => n === -minElement);

  return inverse ? modul(minElement) : minElement;
}

const { test } = require('node:test');
const assert = require("node:assert");

test('findClosestNumber', function() {
  assert.strictEqual(findClosestNumber([-4, -2, 1, 4, 8]), 1);
  assert.strictEqual(findClosestNumber([2, -1, 1]), 1);
  assert.strictEqual(findClosestNumber([-100000, -100000]), -100000);
});
