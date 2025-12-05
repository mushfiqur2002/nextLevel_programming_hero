import { config } from '../../config';
import { Pool } from 'pg'

const connectionString = config.connectionString
const pool = new Pool({ connectionString: connectionString });

// get user from database
const getUsersFromDB = async () => {
    const result = await pool.query('SELECT * FROM users')
    return result
}

// get user by id from database
const getUserByIdFromDB = async (id: any) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
    return result
}
// create a user in database
const createUserInDB = async (name: string, email: string, age: number) => {
    const result = await pool.query(
        'INSERT INTO users (name, email, age) VALUES ($1, $2, $3) RETURNING *',
        [name, email, age]
    )
    return result
}

export const userService = {
    getUsersFromDB,
    getUserByIdFromDB,
    createUserInDB,
}