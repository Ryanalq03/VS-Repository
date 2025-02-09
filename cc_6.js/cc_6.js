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

calculateSalesTax(100, 0.07); // Expected output: "Sales Tax: $7"
calculateSalesTax(500, 0.1);  // Expected output: "Sales Tax: $50";
