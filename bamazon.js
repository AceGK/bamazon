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
    console.log("Available Products:");
    for (var i = 0; i < res.length; i++) {
      console.log([res[i].item_id, res[i].product_name, res[i].department_name, res[i].price, res[i].stock_quantity]);
    }

    inquirer.prompt([{
      name: "itemId",
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
      name: "Quantity",
      type: "input",
      message: "How many of this item would you like to buy?",
      validate: function (value) {
        if (isNaN(value) == false) {
          return true;
        } else {
          return false;
        }
      }
    }]).then(function (res) {
      console.log("test");
    })
  })
}

shop();

