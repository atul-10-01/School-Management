-- SQL schema for the 'schools' table
CREATE TABLE IF NOT EXISTS schools (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(500),
  latitude FLOAT NOT NULL,
  longitude FLOAT NOT NULL
); 