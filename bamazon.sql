DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cutting Board", "Kitchen", 30, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ninja Blender", "Kitchen", 90, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apple AirPods", "Electronics", 140, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("FitBit Watch", "Electronics", 80, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ray-Ban Erika Sunglasses", "Accessories", 120, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Michael Kors Voyager Tote", "Accessories", 150, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("File Organizer", "Office", 30, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Stand-Up Desk", "Office", 115, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Standing Lamp", "Home Decor", 60, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wall Clock", "Home Decor", 160, 50);