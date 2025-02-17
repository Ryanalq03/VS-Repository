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
