import express, { Request, Response } from "express";
import path from 'path';
import dotenv from "dotenv";
import { Pool } from "pg";
import { migrate } from 'postgres-migrations';
import { API_ERRORS, API_ERROR_MESSAGES } from './const';
import { VehicleData } from './types';

const app = express();
dotenv.config(); 

// Setting up pool to establish the client instance
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432")
});

// This will run all migrations written under db/migrations/sql
const connectToDB = async () => {
let client; 
  try {
     client = await pool.connect();
    await migrate({ client }, path.resolve(__dirname, 'migrations/sql'))
  } catch (err) {
    console.log(err);
    client?.release();
  }
};

connectToDB();

// API endpoint to fetch data based on request parameter and return the response
app.get("/getVehiclesData", async (request: Request, response: Response) => {
    const { id } = request.query;

    let data : VehicleData[] = [];

  if (!id) {
    return response.status(400).json({ name: API_ERRORS.ParametersMissing, error: API_ERROR_MESSAGES.ParametersMissing });
  }

  try {
   const client = await pool.connect();

    const query = `SELECT * from vehicles
     WHERE vehcile_id = ${id}`;

     client.query(query, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }

        let coordinates = [];

        for (let row of res.rows){
            coordinates.push({
                lat : row.lat,
                long : row.long
            })
        }

        data.push({
            id: res.rows[0].vehcile_id,
            name: res.rows[0].vehicle_name,
            plateNum: res.rows[0].plate_num,
            driverName : res.rows[0].driver_name,
            driverPhoneNum: res.rows[0].driver_phone_num,
            coordinates: coordinates
        });

        client.release();
    });
    
    return response.status(200).json({
        id : data[0].id,
        location: data[0].coordinates
    });
  } catch (error) {
    return response.status(500).json({ name: API_ERRORS.UnableToRetreiveData, error: API_ERROR_MESSAGES.UnableToRetreiveData });
  }
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});