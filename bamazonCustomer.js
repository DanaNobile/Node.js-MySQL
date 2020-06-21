
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


function displayProducts() {
    console.log("Please scroll down to view all of the bamazon products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
}

displayProducts()
userShop()

function userShop() {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What is the ID of the item you would like to buy?",
            choices: [
                "Cutting Board, ID: 749378",
                "Ninja Blender, ID: 734849",
                "Apple AirPods, ID: 456937",
                "FitBit Watch, ID: 409235",
                "Ray-Ban Erika Sunglasses ID: 839909",
                "Michael Kors Voyager Tote ID: 878900",
                "File Organizer, ID: 127765",
                "Stand-Up Desk, ID: 147365 ",
                "Standing Lamp : 339856",
                "Wall Clock, ID: 349122",
                "Exit"
            ]
        })
        .then(function (answer) {
            switch (answer.action) {

                case "Scroll to pick your item?":
                    userShop();
                    break;

                case "How many units would you like to purchase?":
                    userQuantity();
                    break;


                case "exit":
                    connection.end();
                    break;
            }
        });
}

// userShop()

function userQuantity() {
    inquirer
        .prompt({
            Quantity: "",

        })
        .then(function (answer) {
            var query = "SELECT position, song, year FROM top5000 WHERE ?";
            connection.query(query, { artist: answer.artist }, function (err, res) {
                if (err) throw err;
                for (var i = 0; i < res.length; i++) {
                    console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
                }
                runSearch();
            });
        });
}