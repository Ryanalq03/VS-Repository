//Coding Challenge 8: Tasks and Test Data

//Task 1: Employee Salary Calulation 

//Function that calculates net salary
function calculateSalary(baseSalary, bonus, taxRate) {
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate);
//Logs net salary to console
    console.log(`Net Salary: $${netSalary.toFixed(2)}`);

};
//Test Cases
calculateSalary(5000, 500, 0.1);
calculateSalary(7000, 1000, 0.15);

//Task 2: Product price after discount

//Declaring function to find final price
const calculateDiscount = function(price, discountRate) {
    const finalPrice = price - (price * discountRate);

//Logging final price to console
console.log(`Final price: $${finalPrice.toFixed(2)}`);
};

//Test Cases
calculateDiscount(100, 0.2);
calculateDiscount(250, 0.15);

//Task 3: Service Fee Calculation

//Arrow function that applies different fees
const calculateServiceFee = (amount, serviceType) => {
    let feeCost = 0;

    //Determines the fee percentage based on service type
    if (serviceType === "Premium") {fee = amount * 0.15}
    else if (serviceType === "Standard") {fee = amount * 0.1}
    else if (serviceType === "Basic") {fee = amount * 0.05};
    const fee = amount * feeRate;
    //Logs the fee to console
    console.log(`Service Fee: $${fee.toFixed(2)}`)
}

//Test Data
calculateServiceFee(200, "Premium");
calculateServiceFee(500, "Standard");

//Task 4: Car Rental Cost Calculation

//Function that calculates total rental cost
function calculateRentalCost(days, carType, insurance = false) {
    
    // Determines the daily car rental fee based on car type
    let carTypeRates = {"Economy": 40, "Standard": 60, "Luxury": 100};
    
    // Determines if insurance fee is needed
    let insuranceType = {true: 20, false: 0};

    // Calculates the total cost for all days
    let rentalTotal = (carTypeRates[carType] + insuranceType[insurance]) * days

    //Logs total rental cost to console
    console.log(`Total Rental Cost: $${rentalTotal}`)
}

// Test Data
calculateRentalCost(3, "Economy", true);
calculateRentalCost(5, "Luxury", false);

//Task 5: Loan Payment Calculation 

//Function that returns the total loan payment 
function calculateLoanPayment(principal, rate, time) {
    const totalPayment = principal + (principal * rate * time);

    //Logs the total loan payment to console
    console.log(`Total payment: $${totalPayment.toFixed(2)}`);
};

//Test cases - Values can be changed
calculateLoanPayment(1000, 0.05, 2); //Expected output - Total payment: $1100.00
calculateLoanPayment(5000, 0.07, 3); //Expected output - Total payment: $6050.00

//Task 6: Identifying large transaction

//Declared array with transactions
let transactions = [200, 1500, 3200, 800, 2500];

//Function that filters the large transactions
function filterLargeTransactions(transactions, filterFunction) {
    //Applies the filter function 
    const result = transactions.filter(filterFunction);

    //Logged the large transactions to console
    console.log("Large transactions:", result);
};

//Test Case
filterLargeTransactions(transactions, amount => amount > 1000); //Expected output: [1500, 3200, 2500]
