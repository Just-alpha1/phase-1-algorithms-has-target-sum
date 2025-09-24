function hasTargetSum(array, target) {
  // Brute force approach: Check every pair of numbers
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/*
  Big O time complexity: O(n^2) - We use nested loops to check every pair, so for n elements, it's n*(n-1)/2 comparisons.
  Space complexity: O(1) - We only use a constant amount of extra space.
*/

/*
  Pseudocode:
  - Iterate through each element in the array with index i from 0 to n-1
  - For each i, iterate through each subsequent element with index j from i+1 to n-1
  - Check if array[i] + array[j] equals the target
  - If yes, return true
  - If no pairs found, return false
*/

/*
  Explanation:
  This is a brute force solution that checks every possible pair of numbers in the array to see if their sum equals the target.
  It's simple and works for small arrays, but inefficient for large ones due to the nested loops.
  An optimized version could use a hash set to store seen numbers and check for complements in O(n) time.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
