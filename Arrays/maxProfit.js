// You are given an array prices where prices[i] is the price of a
//  given stock on the ith day.

// You want to maximize your profit by choosing a single
// day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this
// transaction.If you cannot achieve any profit, return 0.

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

var maxProfit = function (prices) {
  // we know we're going to need a maxProfit num, set initially to 0.
  let maxProfit = 0;
  let first = 0;
  let second = 1;
  // we know we need to compare every single number in the array with every number after it.
  while (second < prices.length) {
    if (prices[first] < prices[second]) {
      let profit = prices[second] - prices[first];

      maxProfit = Math.max(maxProfit, profit);
    } else {
      first = second;
    }
    second++;
  }
  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
