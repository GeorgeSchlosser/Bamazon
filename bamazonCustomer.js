// requirements
var mysql = require("mysql");
var inquirer = require("inquirer");

// link to MySQL
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "str1d3r",
    database: "bamazon"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
  });

// running app displays all items for sale, including: ids, names, and prices

// 2 prompts
// ask for ID of product they'd like to buy

// ask for quantity
    // err if not enough: log message & prevent order

    // if enough: fill order:
        // update db quantity
        // log total cost