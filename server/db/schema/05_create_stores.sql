DROP TABLE IF EXISTS stores CASCADE;
CREATE TABLE stores (
  id SERIAL PRIMARY KEY,
  -- products_id integer REFERENCES products(id) ON DELETE CASCADE NOT NULL,
  store_name VARCHAR(255) NOT NULL,
  rating DATETIME
);