const express = require('express');
const UtilisateurController = require('../controllers/UtilisateurController');
const router = express.Router();

router.get('/utilisateurs', UtilisateurController.getUtilisateurs);
router.get('/utilisateur/:id', UtilisateurController.getUtilisateurById);

module.exports = router;
