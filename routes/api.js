const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');


// Définir la route pour les assets statiques
router.use('/asset', express.static(path.join(__dirname, '../asset')));

router.get('/socket', (req, res) => {
    res.sendFile(path.join(__dirname, '../SocketIO.html'));
});


// User routes
const usersController = require('../controllers/usersController');

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticate user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: Invalid credentials
 */
router.post('/login', usersController.login);


// Import all controllers
const cartItemsController = require('../controllers/cart_itemsController');
const deliveryController = require('../controllers/deliveryController');
const statusController = require('../controllers/statusController');

/**
 * @swagger
 * /api/cart_items:
 *   get:
 *     summary: Get all cart items
 *     tags: [Cart Items]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of cart items
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/cart_items', authenticateJWT, cartItemsController.getCartItems);

// Delivery routes
router.get('/delivery', authenticateJWT, deliveryController.getDelivery);
router.get('/delivery/:id', authenticateJWT, deliveryController.getDeliveryById);
router.post('/delivery', authenticateJWT, deliveryController.createDelivery);
router.put('/delivery/:id', authenticateJWT, deliveryController.updateDelivery);
router.delete('/delivery/:id', authenticateJWT, deliveryController.deleteDelivery);

// Status routes
router.get('/status', authenticateJWT, statusController.getStatuses);
router.get('/status/:id', authenticateJWT, statusController.getStatusById);
router.post('/status', authenticateJWT, statusController.createStatus);
router.put('/status/:id', authenticateJWT, statusController.updateStatus);
router.delete('/status/:id', authenticateJWT, statusController.deleteStatus);

module.exports = router;