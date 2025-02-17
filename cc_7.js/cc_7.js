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
