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