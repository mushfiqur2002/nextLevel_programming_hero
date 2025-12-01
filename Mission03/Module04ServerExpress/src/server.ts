import express, { Request, Response } from 'express';
import { Pool } from 'pg'
import path from 'path';
import * as dotenv from "dotenv";
import { config } from 'process';

dotenv.config({ path: path.join(process.cwd(), '.env') })

const app = express();

// parsers
app.use(express.json());

// Database
const pool = new Pool({ connectionString: process.env.CONNECTION_STRING });

// database create table
async function createTable() {
    // create user table 
    await pool.query(`
        CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            name VARCHAR(50) NOT NULL,
            email VARCHAR(100) NOT NULL UNIQUE,
            age INT NOT NULL,
            created_at TIMESTAMP DEFAULT NOW()
        )
        `)

    // create todos table
    await pool.query(`
        CREATE TABLE IF NOT EXISTS todosList(
            id SERIAL PRIMARY KEY,
            user_id INT REFERENCES users(id) ON DELETE CASCADE,
            title VARCHAR(50) NOT NULL,
            description TEXT,
            completed BOOLEAN DEFAULT FALSE,
            created_at TIMESTAMP DEFAULT NOW(),
            due_date DATE
            )
        `)
}
createTable();


// --- routes ---
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/post', (req: Request, res: Response) => {
    res.json({
        success: true,
        message: "User data received successfully",
        userData: req.body
    });
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port :- ${process.env.PORT}`);
});
