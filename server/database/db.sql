CREATE TABLE products (    
   id SERIAL PRIMARY KEY,
   image TEXT[] NOT NULL,
   price INTEGER,
   discountedPrice INTEGER,
   title VARCHAR(150) NOT NULL,
   description TEXT NOT NULL,
   type VARCHAR(50) NOT NULL
);

ALTER TABLE products ADD COLUMN sold INT NOT NULL DEFAULT 0;
ALTER TABLE products ADD COLUMN rating INT[];   

UPDATE products SET sold = sold + 1 WHERE id < 15;
UPDATE products SET type = 'Shorts & Jeans' WHERE type = 'Shirts & Jeans';
ALTER TABLE products ADD COLUMN date DATE DEFAULT NOW();

ALTER TABLE products ADD COLUMN gender VARCHAR(15);
UPDATE products SET gender = 'men';
UPDATE products SET gender = 'Men' WHERE gender = 'men';
UPDATE products SET rating = '{}'::INT[];
ALTER TABLE products ALTER COLUMN gender SET NOT NULL;


CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   picture TEXT,
   email VARCHAR(100) NOT NULL,
   username VARCHAR(50) NOT NULL,
   password VARCHAR(60) NOT NULL
);

ALTER TABLE users ADD COLUMN role VARCHAR(30) NOT NULL DEFAULT 'user';
UPDATE users SET role = 'vendor' WHERE email = 'lasha@gmail.com';
UPDATE users SET role = 'user' WHERE email = 'lasha@gmail.com';

CREATE TABLE reviews (
   id SERIAL PRIMARY KEY,
   product_id INT NOT NULL REFERENCES products (id),
   comment TEXT NOT NULL,
   author VARCHAR(50) NOT NULL,
   review INT NOT NULL
);

ALTER TABLE reviews ADD COLUMN title VARCHAR(100) NOT NULL,
ALTER TABLE reviews ADD COLUMN date DATE;
UPDATE reviews SET date = NOW();
ALTER TABLE reviews ALTER COLUMN date SET NOT NULL;

ALTER TABLE users ADD CONSTRAINT unique_email UNIQUE(email);
DELETE FROM reviews WHERE product_id = 18;