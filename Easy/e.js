// EASY: Write a function that takes in an array of numbers and outputs the average of all the numbers. 
// Example 1:
// Input: [1 , 4 , 7]  Output: 4
// Input: [10, 5]  Output: 7.5
// Input: [1.5, 3, 2.5, 1]  Output: 2

let num1 = [1, 4, 7];
let num2 = [10, 5];
let num3 = [1.5, 3, 2.5, 1];

function avg(nums) {
  const total = nums.reduce((acc, c) => acc + c, 0); 
  return total / nums.length;
}

console.log(avg(num1));
console.log(avg(num2));
console.log(avg(num3));