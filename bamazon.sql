DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  id INT NOT NULL AUTO_INCREMENT,
  item_id INT default 0,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INT,
  PRIMARY KEY (id)
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (749378, "Cutting Board", "Kitchen", 29.95, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (734849, "Ninja Blender", "Kitchen", 89.50, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (456937, "Apple AirPods", "Electronics", 139.98, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (409235, "FitBit Watch", "Electronics", 79.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (839909, "Ray-Ban Erika Sunglasses", "Accessories", 119.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (878900, "Michael Kors Voyager Tote", "Accessories", 149.00, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (127765, "File Organizer", "Office", 32.95, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (147365, "Stand-Up Desk", "Office", 115.50, 40);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (339856, "Standing Lamp", "Home Decor", 59.98, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES (349122, "Wall Clock", "Home Decor", 159.99, 50);