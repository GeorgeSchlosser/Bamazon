-- database = bamazon
CREATE DATABASE bamazon;

USE bamazon;

    -- table inside = products
    CREATE TABLE products (
        item_id INT NOT NULL AUTO_INCREMENT,
        product_name VARCHAR(50) NULL,
        department_name VARCHAR(25) NULL,
        price DECIMAL(65,2) NULL,
        stock_quantity INT NULL,
        PRIMARY KEY (item_id)
    );
        -- products contains following columns:
        -- item_id (unique id for each product)
        -- product_name (Name of product)
        -- department_name
        -- price (cost to customer)
        -- stock_quantity (how much of the product is  available in stores)

-- Seeds?: Create 10 mock products
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Star Wars: Original Trilogy", "Movies(Blu-Ray)", 54.99, 999), ("Funko POP!:MARVEL:Winter Soldier", "Collectibles", 25.00, 3), ("Picture Frame (5x6)", "Home Goods", 9.99, 800), ("Desk Speakers 2.1", "A/V", 59.99, 808), ("Sharpie-Black", "Office Supplies", 1.49, 1654), ("Walk Among Us", "Music(Digital)", 7.99, 9999), ("A Night At The Opera", "Music(Vinyl)", 14.99, 333), ("Goblin", "Music(Vinyl)", 22.99, 666), ("Badlands", "Music(Cassette)", 12.99, 23), ("Guardians Of The Galaxy", "Movies(Blu-Ray)", 24.99, 3000);

-- show data in products table
SELECT * FROM products;