let employeeName = "John Snow";
const employeeID = 123;
var isActive = true;

console.log(employeeName); // "John Snow"
console.log(typeof employeeName); //"string"

console.log(employeeID); //123
console.log(typeof employeeID); //"number"

console.log(isActive); //true
console.log(typeof isActive); //"boolean"


//Task 2
let products = ["Camera", "Microphone", "Tablet"];
const productDetails= {
    name: "Camera",
    price: 1000,
    inStock: true
};

console.log(products); 
console.log(productDetails);

//Task 3
let accountBalance= 10000;

accountBalance += 500; 
console.log(accountBalance); //10500

accountBalance -= 100;
console.log(accountBalance); //10400

accountBalance *= 1.05;
console.log(accountBalance); //10920

accountBalance /= 2;
console.log(accountBalance); //5460

accountbalance %= 100;
console.log(accountBalance);//546

//Task 4
let employeeScore1 = 100;
let employeeScore2 = 90;

console.log(employeeScore1 > employeeScore2); //true
console.log(employeeScore1 < employeeScore2); //false
console.log(employeeScore1 >= 100); //true
console.log(employeeScore2 <= 90);//true
console.log(employeeScore1 === 90); //false
console.log(employeeScore1 !== employeeScore2); //true


//Task 5
let hasKeyCard= true;
let hasPermission = false;

console.log(hasKeyCard && hasPermission);
console.log(hasKeyCard || hasPermission);
console.log(!hasKeyCard);