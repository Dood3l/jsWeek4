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

//NEW LOGIC ↓
//Create an array for the value of the coins, along with a variable for the total amount of money.
//Create a function, probably for loop, that can take in the coin values and sort them from greatest to least.
//Create a function that can see how many times a coin value can go into the total amount of money without a remainder. If a remainder exists, move onto the next coin value until no remainder.
//If no remainder is found, return the amount of coins used.
//If coin values cant equate to total amount of money, then return -1.

let coinValues = [1, 5, 2];
let money = 11;
let numOfCoins = 0;

coinValues.sort(function(a, b) {
  return b - a;
});
console.log(coinValues);

function coinCounter ( ){
    for ( i = 0; i < coinValues.length; i++){
        
    }



// FLAWED LOGIC ↓ 
// Start with a const that contains the total amount of money. Then make variables for coins.
// let coins = [1, 2, 5];
// let total = 11
// //Create a for loop that gets sum of the array
// let sum = 0
// for (let i = 0; i < coins.length; i++) {
//     sum += coins[i];
// }
// // Create a function that uses if, else if, for the coins, and else for -1.
// function coinCounter(arr){
//     if (sum <= total){
//         return (total -= sum)
//     }
//     else if (sum != total){
//         return "-1"
//     }
// }
// console.log(coinCounter(sum));
