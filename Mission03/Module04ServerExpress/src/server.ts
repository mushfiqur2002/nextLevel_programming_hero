import express, { Request, Response } from 'express';
import { config } from './config';
import { Pool } from 'pg';
import createTable from './config/db';
import { userRoutes } from './modules/user/user.routes';


const port = config.port
const connectionString = config.connectionString
const pool = new Pool({ connectionString: connectionString })

const app = express();
// parsers
app.use(express.json());

// create tables for user and todos list
createTable()


// --- routes ---
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/user', userRoutes)

// update user 
app.put('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    const { name, email } = req.body
    try {
        const result = await pool.query(
            `UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *`, [name, email, id]
        )
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'User updated successfully',
            user: result.rows[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error. Could not update user.'
        })
    }
})
// delete user
app.delete('/user/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const result = await pool.query(
            `DELETE FROM users WHERE id=$1 RETURNING *`, [id]
        )
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            })
        }
        res.status(200).json({
            success: true,
            message: 'User deleted successfully',
            user: result.rows[0]
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error. Could not delete user.'
        })
    }
})


// curd operations for todos

// insert user todo list
app.post('/user/todos', async (req: Request, res: Response) => {
    const { title, description, due_date, user_id } = req.body
    try {
        const result = await pool.query(
            'INSERT INTO todosList (title, description, due_date, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [title, description, due_date, user_id]
        )
        console.log(result.rows[0]);

        res.status(201).json({
            success: true,
            message: "User todo list created successfully",
            user: result.rows[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error
        })
    }
})

// get user todos list
app.get('/user/todos/:user_id', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM todosList WHERE user_id = $1', [req.params.user_id])
        console.log(result.rows);

        res.status(201).json({
            success: true,
            message: "User todo list FOUND successfully",
            user: result.rows
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error
        })
    }
})

// update user todo list
app.put('/user/todos/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { title, user_id } = req.body;

    if (!title || !user_id) {
        return res.status(400).json({
            success: false,
            message: 'title and user_id are required'
        });
    }

    try {
        const result = await pool.query(
            `UPDATE todosList 
       SET title = $1 
       WHERE id = $2 AND user_id = $3 
       RETURNING *`,
            [title, id, user_id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found for this user'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Todo updated successfully',
            todo: result.rows
        });
    } catch (error) {
        console.error('Update error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Could not update todo.'
        });
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port :- ${port}`);
});
