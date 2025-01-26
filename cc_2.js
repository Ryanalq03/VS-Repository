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