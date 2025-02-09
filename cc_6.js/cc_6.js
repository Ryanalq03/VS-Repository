//Task 1: Function Delaration

//Created formula to calculate profit
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

calculateProfit(20, 30, 100);
calculateProfit(50, 70, 200);

//Task 2 Function Expression

//Created function to calculate sales tax
function calculateSalesTax(amount, taxRate) {
    let tax = amount * taxRate;
    console.log(`Sales Tax: $${tax}`)

};

calculateSalesTax(100, 0.07); 
calculateSalesTax(500, 0.1);  

//Task 3: Arrow Function

//Calculates bonus based on performance
const calculateBonus = (salary, performanceRating) => 
    performanceRating === "Excellent" ? salary * 0.2 :
    performanceRating === "Good" ? salary * 0.1 :
    performanceRating === "Average" ? salary * 0.05 :
    0;

console.log(`Bonus: $${calculateBonus(5000, "Excellent")}`); 
console.log(`Bonus: $${calculateBonus(7000, "Good")}`); 

calculateBonus(5000, "Excellent"); 
calculateBonus(7000, "Good");

//Task 4: Parameters and Arguments

//Function to calculate reoccuring costs with packages
function calculateSubscriptionCost(plan, months, discount = 0) {
    let prices = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    let totalCost = (prices[plan] * months) - discount;
    console.log(`Total Cost: $${totalCost}`);
}

calculateSubscriptionCost("Basic", 6, 10); 
calculateSubscriptionCost("Premium", 12, 0);

//Task 5 Currency Conversion

//Function that converts currency
function convertCurrency(amount, exchangeRate) {
    let convertedAmount = amount * exchangeRate;
    console.log(`Converted Amount: $${convertedAmount.toFixed(2)}`);
}

convertCurrency(100, 1.1); 
convertCurrency(250, 0.85);

