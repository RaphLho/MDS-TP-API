const Utilisateur = require('../models/utilisateurs');
const jwt = require('jsonwebtoken');
const secretKey = "ddrace";

const getUtilisateurs = async (req, res) => {
    try {
        const utilisateurs = await Utilisateur.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(utilisateurs);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getUtilisateurById = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (utilisateur) {
            res.json(utilisateur);
        } else {
            res.status(404).send({ message: 'Utilisateur not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.create(req.body);
        res.status(201).json(utilisateur);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (utilisateur) {
            await utilisateur.update(req.body);
            res.json(utilisateur);
        } else {
            res.status(404).send({ message: 'Utilisateur not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteUtilisateur = async (req, res) => {
    try {
        const utilisateur = await Utilisateur.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (utilisateur) {
            await utilisateur.update({ is_deleted: true });
            res.json({ message: 'Utilisateur deleted successfully' });
        } else {
            res.status(404).send({ message: 'Utilisateur not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const utilisateur = await Utilisateur.findOne({ 
            where: { 
                email: email, 
                password_hash: password,
                is_deleted: false 
            } 
        });
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

module.exports = { 
    getUtilisateurs, 
    getUtilisateurById, 
    createUtilisateur,
    updateUtilisateur,
    deleteUtilisateur,
    login 
};