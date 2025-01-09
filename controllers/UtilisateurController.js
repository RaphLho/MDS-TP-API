const Utilisateur = require('../models/utilisateurs');
const jwt = require('jsonwebtoken');
const secretKey = "ddrace";

const getUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll();
        res.json(utilisateurs);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findByPk(req.params.id);
        res.json(utilisateur);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({ where: { email: email, password_hash: password } });
        if (utilisateur) {
            const token = jwt.sign({ id: utilisateur.id }, secretKey, { expiresIn: '1800s' });
            res.json({ token });
        } else {
            res.status(401).send({ message: 'Email ou mot de passe incorrect' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = { getUtilisateurs, getUtilisateurById, login };