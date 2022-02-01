// *VERY HARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
// Hint:  Sudo code this problem. Focus on breaking the problem down into steps  Use functions, arrays and logical operators.  Do not have anyone give you the answer or solve this problem for you. 
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3 
// Explanation: 11 = 5 + 5 + 1
// Example 2:
// Input: coins = [2], amount = 3
// Output: -1
// Note: You may assume that you have an infinite number of each kind of coin.

// Start with a const that contains the total amount of money. Then make variables for coins.
let coins = [1, 2, 5];
let total = 11
//Create a for loop that gets sum of the array
let sum = 0
for (let i = 0; i < coins.length; i++) {
    sum += coins[i];
}
// Create a function that uses if, else if, for the coins, and else for -1.
function coinCounter(arr){
    if (sum <= total){
        return (total -= sum)
    }
    else if (sum != total){
        return "-1"
    }
}
console.log(coinCounter(sum));