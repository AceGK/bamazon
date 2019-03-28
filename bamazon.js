var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon"
});

const shop = function () {

  connection.query('SELECT * FROM products', function (err, res) {
    console.log("Welcome to Bamazon");
    console.log("=================================================");
    console.log("Available Products:");
    for (var i = 0; i < res.length; i++) {
      console.log([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }
    console.log("\n");

    inquirer.prompt([{
      name: "item",
      type: "input",
      message: "What is the item ID you would like to buy?",
      validate: function (value) {
        if (isNaN(value) == false) {
          return true;
        } else {
          return false;
        }
      }
    }, {
      name: "quantity",
      type: "input",
      message: "How many of this item would you like to buy?",
      validate: function (value) {
        if (isNaN(value) == false) {
          return true;
        } else {
          return false;
        }
      }
    }]).then(function (answer) {

      //display chosen product
      // var query = "SELECT product_name, price, stock_quantity FROM products WHERE ?";
      // connection.query(query, answer.item, function(err, res) {
      //     console.log("Product: " + res[answer.item - 1].product_name + " "
      //     + "Price: " + res[answer.item - 1].price + " "
      //     + "Quantity: " + res[answer.item - 1].stock_quantity);
      // });

      //check quantity
      var query = "SELECT stock_quantity FROM products WHERE ?"
      connection.query(query, answer.item, function (err, res) {
        if (res[answer.item - 1].stock_quantity === 0) {
          console.log("\nInsufficient quantity!\n");
          shop();
        }
        else {
          console.log("\nThank you for your purchase!\n");
          //update quantity amount
          var query = "UPDATE products SET stock_quantity = ? WHERE item_id = ? ";
          var query = connection.query(query, [res[answer.item].stock_quantity, answer.item], function (err, res) {
            if (err) throw err;
            console.log(query.sql);
          })

          shop();
        }
      })
    })
  })
}

shop();

