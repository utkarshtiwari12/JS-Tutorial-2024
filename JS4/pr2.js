let prices = [250, 645, 300, 900, 50];

console.log("Original Prices are : ", prices);

for (let i = 0; i < prices.length; i++)
{
    prices[i] = prices[i] - (prices[i] * 0.1) ;
}

console.log(`Prices of items after applying offer is : ${prices}`)