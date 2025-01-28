const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const customerCartsController = require('../controllers/customer_cartsController');

/**
 * @swagger
 * /v0/customer-carts:
 *   get:
 *     summary: Get all customer carts
 *     tags: [Customer Carts]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of customer carts
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, customerCartsController.getCustomerCarts);

/**
 * @swagger
 * /v0/customer-carts/{id}:
 *   get:
 *     summary: Get customer cart by ID
 *     tags: [Customer Carts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Cart ID
 *     responses:
 *       200:
 *         description: Customer cart details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Customer cart not found
 */
router.get('/:id', authenticateJWT, customerCartsController.getCustomerCartById);

/**
 * @swagger
 * /v0/customer-carts:
 *   post:
 *     summary: Create a new customer cart
 *     tags: [Customer Carts]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerId
 *               - gpuModelId
 *             properties:
 *               customerId:
 *                 type: integer
 *               gpuModelId:
 *                 type: integer
 *               quantity:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Customer cart created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid input
 */
router.post('/', authenticateJWT, customerCartsController.createCustomerCart);

/**
 * @swagger
 * /v0/customer-carts/{id}:
 *   put:
 *     summary: Update a customer cart
 *     tags: [Customer Carts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Customer cart updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Customer cart not found
 */
router.put('/:id', authenticateJWT, customerCartsController.updateCustomerCart);

/**
 * @swagger
 * /v0/customer-carts/{id}:
 *   delete:
 *     summary: Delete a customer cart
 *     tags: [Customer Carts]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Customer Cart ID
 *     responses:
 *       200:
 *         description: Customer cart deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Customer cart not found
 */
router.delete('/:id', authenticateJWT, customerCartsController.deleteCustomerCart);

module.exports = router;