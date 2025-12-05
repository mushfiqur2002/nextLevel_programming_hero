import { config } from '.';
import { Pool } from 'pg'

const port = config.port
const connectionString = config.connectionString

const pool = new Pool({ connectionString: connectionString });

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

export default createTable;