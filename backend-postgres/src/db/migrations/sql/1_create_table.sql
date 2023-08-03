CREATE TABLE vehicles (
	id VARCHAR(50) PRIMARY KEY,
    vehicle_id VARCHAR (50),
	vehicle_name VARCHAR (255),
	plate_num VARCHAR (255),
	driver_name VARCHAR (255),
    driver_phone_num VARCHAR (255),
    coordinates jsonb DEFAULT '{}' ::jsonb,
	created_at TIMESTAMP NOT NULL
);