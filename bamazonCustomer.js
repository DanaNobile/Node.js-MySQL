// Sets up inquirer and mysql, connects to local host and takes in database and password
let inquirer = require('inquirer');

let mysql = require("mysql2");


var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Hankaaron1",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});



// This displays all of the products once node is ran:

function displayProducts() {
    console.log("Please scroll down to view all of the bamazon products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        // connection.end();
        userShop();

    });
}

displayProducts()

// This asks users if they want an item and then takes in a functions to understand which item and how many

function userShop() {

    inquirer.prompt([{

        type: "confirm",
        name: "continue",
        message: "Would you like to purchase an item?",
        default: true

    }]).then(function (user) {
        if (user.continue === true) {
            selectionPrompt();
        } else {
            console.log("Thank you! Come back soon!");
        }
    });
}


function selectionPrompt() {

    inquirer.prompt([{

        type: "input",
        name: "inputId",
        message: "Please enter the ID of the item you would like to purchase.",
    },
    {
        type: "input",
        name: "inputNumber",
        message: "How many units of this item would you like to purchase?",

    }
    ]).then(function (userPurchase) {

        //This connects to database to reference the stock quantities 

        connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function (err, res) {
            if (err) throw err;
            for (var i = 0; i < res.length; i++) {


                if (userPurchase.inputNumber > res[i].stock_quantity) {
                    console.log("Sorry! Insufficient quantity. Try back again soon.");
                    userShop();

                } else {
                    //list item information for user for confirm prompt
                    console.log("Great! We will start the process to fill your order.");
                    console.log("___________________________________________________");
                    console.log("Your Order Summary:");
                    console.log("________________");
                    console.log("Product: " + res[i].product_name);
                    console.log("Department: " + res[i].department_name);
                    console.log("Price: $" + res[i].price);
                    console.log("Quantity: " + userPurchase.inputNumber);
                    console.log("________________");
                    console.log("Total: $" + res[i].price * userPurchase.inputNumber);
                    console.log("___________________________________________________");

                    var newStock = (res[i].stock_quantity - userPurchase.inputNumber);

                    console.log("Remaining Quantity: " + newStock + " Units");
                }
            }
        });
    });
}



