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
