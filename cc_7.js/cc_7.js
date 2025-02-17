//Coding Challange 7 Java Script Functions

//Task 1: Function Declaration 
//Calculates the final invoice amount
function calculateInvoice(subtotal, taxRate, discount) {
    //Calculates total by applying the tax and discount
    const total = (subtotal + (subtotal * taxRate)) - discount;


//Logging invoice amount to console
console.log(`Total invoice: $${total.toFixed(2)}`);
};

//Testing data
calculateInvoice(100, 0.08, 5); //Expected output: $103.00
calculateInvoice(500, 0.1, 20); //Expected output: $530.00

//Task 2: Function Expression

//Function that calculates hourly wage
const calculateHourlyWage = function(salary, hoursPerWeek) {
    let hourlyWage = salary / (hoursPerWeek * 52);
//Logging results to console.
console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);
}

//Testing data
calculateHourlyWage(52000, 40); //Expected output: $25.00
calculateHourlyWage(75000, 35); //Expected output: $41.21

//Task 3: Arrow Function
//Arrow function that applies different discounts
const calculateLoyaltyDiscount = (amount, years) => {
    let discountRate;
    //15% discount for 5 or more years
    if (years >= 5) discountRate = 0.15;
    //10% discount for 3 or more years
    else if (years >= 3) discountRate = 0.1;
    //5% discount for less than 3 years
    else discountRate = 0.05;

    const discountedPrice = amount * (1 - discountRate);
    
    //Logging discounted price to console
    console.log(`Discounted price: $${discountedPrice.toFixed(2)}`);
};

//Test Data
calculateLoyaltyDiscount(100, 6); //Expected output: $85.00
calculateLoyaltyDiscount(200, 2); //Expected output: $190.00

//Task 4: Parameters and Arguments

//Function that calculates shipping rate based on different variables
function calculateShippingCost(weight, location, expedited = false) {    
    let shippingFees = 0;
    
    //Determines the shipping cost based on location
    if (location === "USA") {
        shippingFees = 5 + (0.5 * weight)}
    else if (location === "Canada") {
        shippingFees = 10 + (0.7 * weight)}
    
    // Add expedited shipping fee if expedited
    if (expedited) {
        shippingFees += 10};
    
    // Adding final shipping fee to console
    console.log(`Shipping Cost: $${shippingFees.toFixed(2)}`)
}

// Test Data
calculateShippingCost(10, "USA", true);
calculateShippingCost(5, "Canada", false);
