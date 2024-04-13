CREATE TABLE products (    
   id SERIAL PRIMARY KEY,
   image TEXT[] NOT NULL, 
   title VARCHAR(150) NOT NULL,
   description TEXT NOT NULL,
   type VARCHAR(50) NOT NULL
);