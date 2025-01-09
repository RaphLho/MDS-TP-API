const express = require('express');
const router = express.Router();
const Utilisateurs = require('../models/users');
const authenticateJWT = require('../middleware/authentification');


// GET all users
router.get('/users', authenticateJWT, async (req, res) => {
    try {
        const users = await Utilisateurs.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;