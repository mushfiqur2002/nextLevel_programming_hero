import { userService } from './user.service';
import { Request, Response } from 'express';

const getUsersController = async (req: Request, res: Response) => {
    try {
        const result = await userService.getUsersFromDB()
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            users: result.rows
        })
        console.log(result.rows);
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching users",
            error
        })
    }
}

const getUsersByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const result = await userService.getUserByIdFromDB(id)
        if (result.rowCount === 0) {
            return res.status(404).json({
                success: false,
                message: 'User not found'
            });
        }

        res.status(200).json({
            success: true,
            user: result.rows[0]
        });
    } catch (error) {
        console.error('DB Error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error. Could not fetch user.'
        });
    }
}

const createUserController = async (req: Request, res: Response) => {
    const { name, email, age } = req.body
    const result = await userService.createUserInDB(name, email, age)
    try {
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: result.rows[0]
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating user",
            error
        })
    }
}

export const useController = {
    getUsersController,
    createUserController,
    getUsersByIdController
}