import express, { Request, Response } from 'express';
import { useController } from './user.controller';

const router = express.Router()

// get all users 
router.get('/', useController.getUsersController)

// get user by id
router.get('/:id', useController.getUsersByIdController)

// create a new user
router.post('/', useController.createUserController)

export const userRoutes = router;