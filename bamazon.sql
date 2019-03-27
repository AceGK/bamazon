DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(30) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(10) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Nintendo Switch', 'Games', 299.99, 10),
		('PS4', 'Games', 299.99, 50),
        ('Xbox One', 'Games', 499.99, 50),
        ('The Hobbit', 'Books', 299.99, 500),
        ('The Winds of Winter', 'Books', 10.00, 0),
        ('A Dream of Spring', 'Books', 10.00, 0),
        ('Hellboy: Vol 1', 'Comics', 15.00, 666),
        ('Batman: Year One', 'Comics', 10.19, 77),
        ('Spider-Man: Birth of Venom', 'Comics', 12.99, 38),
        ('Spawn: Hell on Earth', 'Comics', 10.16, 666);