const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const stocksController = require('../controllers/stocksController');

/**
 * @swagger
 * /v0/stocks:
 *   get:
 *     summary: Get all stocks
 *     tags: [Stocks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of stocks
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, stocksController.getStocks);

/**
 * @swagger
 * /v0/stocks/{id}:
 *   get:
 *     summary: Get stock by ID
 *     tags: [Stocks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Stock ID
 *     responses:
 *       200:
 *         description: Stock details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 */
router.get('/:id', authenticateJWT, stocksController.getStockById);

/**
 * @swagger
 * /v0/stocks:
 *   post:
 *     summary: Create a new stock
 *     tags: [Stocks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - quantity
 *               - product_id
 *             properties:
 *               quantity:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Stock created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid input
 */
router.post('/', authenticateJWT, stocksController.createStock);

/**
 * @swagger
 * /v0/stocks/{id}:
 *   put:
 *     summary: Update a stock
 *     tags: [Stocks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Stock ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               quantity:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Stock updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 */
router.put('/:id', authenticateJWT, stocksController.updateStock);

/**
 * @swagger
 * /v0/stocks/{id}:
 *   delete:
 *     summary: Delete a stock
 *     tags: [Stocks]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Stock ID
 *     responses:
 *       200:
 *         description: Stock deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Stock not found
 */
router.delete('/:id', authenticateJWT, stocksController.deleteStock);

module.exports = router;