import express from "express";
import { getUsers, createUser, updateUser, deleteUser, activateUser, login } from "../controllers/userController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /api/users/all:
 *  get:
 *    summary: Get all Users
 *    tags: [Users]
 *    responses:
 *      '200':
 *        description: A successful response     
 */
router.get('/all', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Update a user by ID
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The user ID
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              phone:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '200':
 *        description: User updated successfully
 */
router.put('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *  patch:
 *    summary: Delete a user by ID
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The user ID
 *    responses:
 *      '200':
 *        description: User deleted successfully
 */
router.patch('/:id', deleteUser);
router.patch('/activate/:id', activateUser);

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Create a new user
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              username:
 *                type: string
 *              phone:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *      '201':
 *        description: User created successfully
 */
router.post('/', createUser);

router.post('/login', login);

export default router;