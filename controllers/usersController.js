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
        const user = await User.create({
            ...req.body,
            created_at: new Date()
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
                modified_at: new Date()
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
            await user.update({ 
                is_deleted: true,
                modified_at: new Date()
            });
            res.status(204).send();
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