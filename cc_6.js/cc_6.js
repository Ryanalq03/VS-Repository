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
