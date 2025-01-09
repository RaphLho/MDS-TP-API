const express = require('express');
const UtilisateurController = require('../controllers/UtilisateurController');
const router = express.Router();
const authenticateJWT = require('../middleware/authentification');

router.get('/utilisateurs', authenticateJWT, UtilisateurController.getUtilisateurs);
router.get('/utilisateurs/:id', authenticateJWT, UtilisateurController.getUtilisateurById);
router.post('/login', UtilisateurController.login);


module.exports = router;
