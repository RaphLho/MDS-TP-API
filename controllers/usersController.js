const User = require('../models/users');
const jwt = require('jsonwebtoken');
const secretKey = "ddrace";

const getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const createUser = async (req, res) => {
    try {
        // Validate required fields
        const { email, password_hash, first_name, last_name, user_type, created_at } = req.body;
        if (!email || !password_hash || !first_name || !last_name || !user_type || !created_at) {
            return res.status(400).send({ message: 'Missing required fields' });
        }

        // Check if user with this email already exists
        const existingUser = await User.findOne({
            where: {
                email: email,
                is_deleted: false
            }
        });

        if (existingUser) {
            return res.status(409).send({ message: 'User with this email already exists' });
        }

        // Create new user
        const user = await User.create({
            email,
            password_hash,
            first_name,
            last_name,
            phone: req.body.phone || null,
            user_type,
            created_at,
            is_deleted: false
        });

        res.status(201).json(user);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (user) {
            // Extract only the allowed fields from request body
            const {
                email,
                password_hash,
                first_name,
                last_name,
                phone,
                user_type
            } = req.body;

            await user.update({
                email,
                password_hash,
                first_name,
                last_name,
                phone,
                user_type,
            });
            res.json(user);
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (user) {
            await user.update({ is_deleted: true });
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ 
            where: { 
                email: email, 
                password_hash: password,
                is_deleted: false 
            } 
        });
        if (user) {
            const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1800s' });
            res.json({ token });
        } else {
            res.status(401).send({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    login
};