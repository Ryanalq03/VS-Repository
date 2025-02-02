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

//Task 3 Employee Performance Tracking

//Declare object with employee details
let employee = {
    name: "Joe Shmow",
    role: "Loiterer",
    performanceScore: 20,
    isActive: true
};

//Updating Score
employee.performanceScore = 99;

//Adding new Promotion property
employee.promotionEligible = true;

//Updating Object to console
console.log("Updated Employee Details:", employee);

//Task 4 Customer Feedback Records

//Declaring array with 3 objects
let feedback = [
    {customerName: "George Cat", feedbackText: "Meow", rating: 3},
    {customerName: "Suzan Perkins", feedbackText: "NO Recording!", rating: 1},
    {customerName: "Cleo Patra", feedbackText: "Yes Sir", rating: 5}
];

//Adding new feedback
feedback.push({
    customerName: "Hue Mungus",
    feedbackText: "Best Company Ever!",
    rating: 5
});

//Log customer feedback to console
console.log("Customer Feedback:", feedback);

//Task 5 Inventory Management

//Decalring object with item details
let inventory = {
    itemName: "Dog Water",
    stockCount: 100,
    price: 1000,

    //method to calculate total value
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};
//Logging inventory to console
console.log("Inventory Details:", inventory);

//Logging total value to console
console.log("Total Value: $" + inventory.calculateTotalValue());




