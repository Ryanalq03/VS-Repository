//Task 1: Object Properties - Customer Profile

//Declaring an object containing customer info
let customer = {
    name: "Jane Doe",
    age: 35,
    email: "John.doe@email.com"
};

//Use a for in loop to iterate through object properties
for (let Property in customer) {
    //logging each property to console
    console.log(`${property}: ${customer[property]}`)
};

//Task 2 Object Methods

//Declaring the object's order details
let order = {
    orderID: 12345,
    totalAmount: 150,
    status: "Processing",

    //Add method to log order details to the console
    displayOrder: function() {
        console.log("Order ID:", this.orderID),
        console.log("Total Amount:", this.totalAmount),
        console.log("Status:", this.status) 
    }
};

//Calling method to display details
order.displayOrder();

//Task 3 Array Manipulation

//Declaring array with product names
let cartitems = ["Phone", "Laptop", "Microphone"];

//Adding another item
cartitems.push("Mouse")

//Removing last item
cartitems.pop();

//Adding item to beginning
cartitems.unshift("Keyboard");

//Removing first item
cartitems.shift();

//Logging final array to console
console.log("Cart Items:", cartitems);

//Task 4 Map Method

//Decaring items to array
prices = [100,200,300];

//Apply a 10% discount to each price
let discountedPrices = prices.map(price => price * 0.9);

//Log new discounted prices to the console
console.log("Discounted Prices:", discountedPrices);

//Task 5 Filter Method

//Declaring array with 5 quantities

//Declare array containing five product quantities
let inventory = [3, 6, 23, 62, 0, 12];

//Remove products with zero stock 
let availableInventory = inventory.filter(quantity => quantity > 0);

//Log filtered array to the console
console.log("Available Inventory:", availableInventory);

//Task 6 Reduce Method
//Declare array containing sales data
let sales = [500, 300, 200, 400];

//Calculate total revenue using .reduce() method
let totalRevenue = sales.reduce((total, sale) => total + sale, 0);

//Log total revenue to the console
console.log("Total Revenue: $" + totalRevenue);
