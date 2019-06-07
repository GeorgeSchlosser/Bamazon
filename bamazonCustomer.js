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
    // displayItems();
    // connection.end();
  });

// running app displays all items for sale, including: ids, names, and prices
function displayItems(callback) {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].price);
      }
      callback();
    });
};
    //   console.log(res);
    //   connection.end();
    // });

userPrompt = () => {   
    connection.query("SELECT * FROM products", function(err, res) {
        if (err) throw err; 
    inquirer.prompt([
        {
            name: "buyItems",
            type: "rawlist",
            choices: function() {
                var choiceArr = [];
                for (var i = 0; i < res.length; i++) {
                    choiceArr.push(res[i].item_id)
                }
                return choiceArr;
            },
            message: "Choose the ID of the item you would like to buy"
        },
        {
            name: "quantity",
            type: "input",
            message: "How many would you like to buy?"
        }
    ]).then(function(answer) {
        console.log(answer);
        processOrder(answer);
    });
    });    
}

processOrder = (id, number) => {
    // var to later be set to stock_quantity to check availability
    let stock = 0;
    // MySQL connection w/ user's selected item
        // don't fully understand significance of "?"
    connection.query("SELECT * FROM products WHERE item_id = ?", [id], function (err, res){
        if (err) throw err;
        else {
            stock = res[0].stock_quantity;
            if (stock < number) {
                console.log("Oops! We don't have enough of this item to fill your order");
                userPrompt();
            }
            else {
                update(res[0].item_id, stock, number, res[0].price, number * res[0].price);
            }
        };
    });

};

update = (id, stock, number, price, total) => {
    connection.query("UPDATE products SET stock_quantity = ?, WHERE item_id = ?", [stock - number, total, id], function(err, res) {
        if (err) throw err;
        console.log("Your total is ${price * number}.");
        userPrompt();
    });
};
 
displayItems(userPrompt);
    // [{selectedItem.stock_quantity: res[0].stock_quantity - answer.quantity}])

            // get info of selected item
            // var selectedItem;
            // for (var i = 0; i < res.length; i++) {
            //     if (res[i].item_id === answer.choice) {
            //         selectedItem = res[i];
            //         console.log(selectedItem);
            //     }
            // }
            // console.log(selectedItem);
            // check if suffcient quantity
        //     if (selectedItem.stock_quantity < parseInt(answer.quantity)) {
        //         console.log("Sorry, we don't have enough in stock to place your order. Try again.");
        //         start();
        //     }
        //     else {
        //         update();
        //     }

        // }
        

    


// update = () => {
//     connection.query("UPDATE products SET ? WHERE?",
//     [{selectedItem.stock_quantity: res[0].stock_quantity - answer.quantity}])

// }
// 2 prompts
// ask for ID of product they'd like to buy


// ask for quantity
    // err if not enough: log message & prevent order

    // if enough: fill order:
        // update db quantity
        // log total cost

        // when done hit "ctrl+c" or something 