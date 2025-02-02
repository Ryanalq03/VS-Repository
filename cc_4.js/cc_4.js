//Task 1: Customer Discounts

//Declaring a variable
let purchaseAmount = 500;

//10% discount applied
if (purchaseAmount > 100) {
    FinalAmount = purchaseAmount * 0.9;
}

//Loged the final amount to console
console.log(`Final amount after discount: $${finalAmount}`);

//Task 2: For Loop

//Declaring Array with 5 Figures
let sales = [100,200,300,400,500];

//Declare totalsales variable
totalSales= 0;

//For loop for total sales
for (let i = 0; i< sales.length; i++) {
    totalSales += sales[i];
}

//Log total sales to console
console.log(`Total Sales: $${totalSales}`);
