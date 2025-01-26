//Task 1
let products = ["Laptop", "Tablet", "Smartphone", "Headphones", "Smartwatch"];
products.push("Mouse");
products.pop();
console.log("Updated product list:", products);

//Task 2
let scores = [70, 65, 80, 75, 85];
scores[1] = 90;
let sum = scores.reduce((total, score) => total + score, 0);
let average = sum/ scores.length;
console.log("Updated Scores:");
console.log("Average Score:");

//Task 3
let employee = {
    name: "John Snow",
    age: 30,
    department: "Sales",
    isActive: true,
};
employee.department = "Marketing";
employee.position = "Manager";
console.log("Updated Employee Record:", employee);

//Task 4
let customers = [
    {name: "Hiba Alqasemi", email: "Halq@gmail.com", purchaseAmount: 100},
    {name: "Lama Alqasemi", email: "Lalq@gmail.com", purchaseAmount: 150},
    {name: "Rama Alqasemi", email: "Ralq@gmail.com", purchaseAmount: 80},
];
let newCustomer = {
    name: "Dana Alqasmei",
    email: "Dalq@gmail.com",
    purchaseAmount: 300,
};
customers.push(newCustomer);
console.log("Updated Customer List:", customers);

//Task 5
let order = {
    orderId: "2345",
    customerName: "Shelby Snow",
    amount: 200,
    calculateTax: function (){
        return this.amount * 0.1;
    },
};
console.log("Order Details:");
console.log("Order ID: , order.orderId");
console.log("Customer Name:", order.customerName);
console.log("Order Amount:" , order.amount);
console.log("Tax Amount:" , order.calculateTax());