const Utilisateur = require('../models/utilisateurs');

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



module.exports = { getUtilisateurs,getUtilisateurById };
