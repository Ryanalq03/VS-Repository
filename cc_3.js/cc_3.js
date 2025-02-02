//Task 1: Product Price Management 

//Declaring Array
let prices = [100,200,300,400,500];

//Adding new price
prices.push(600);

//Removed first item
prices.shift();

//Update list to console
console.log("Updated Prices:", prices);

//Task 2: Modifying Customer Order

//Delare an array
let orders = [10,20,30,40,50];

//Increase third quantity by 5
orders[2] += 5;

//Logging new array
console.log("Updated Orders:", orders);

//Calculating Total orders
let total_orders = orders.reduce((total, order) => total + order, 0);

//Log total orders to console
console.log("Total Orders:", total_orders);








