const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const supplierProductsController = require('../controllers/supplier_productsController');

/**
 * @swagger
 * /v0/supplier-products:
 *   get:
 *     summary: Get all supplier products
 *     tags: [Supplier Products]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of supplier products
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, supplierProductsController.getSupplierProducts);

/**
 * @swagger
 * /v0/supplier-products/{id}:
 *   get:
 *     summary: Get supplier product by ID
 *     tags: [Supplier Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Supplier Product ID
 *     responses:
 *       200:
 *         description: Supplier product details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Supplier product not found
 */
router.get('/:id', authenticateJWT, supplierProductsController.getSupplierProductById);

/**
 * @swagger
 * /v0/supplier-products:
 *   post:
 *     summary: Create a new supplier product
 *     tags: [Supplier Products]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - supplier_id
 *               - product_id
 *               - price
 *             properties:
 *               supplier_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Supplier product created successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 */
router.post('/', authenticateJWT, supplierProductsController.createSupplierProduct);

/**
 * @swagger
 * /v0/supplier-products/{id}:
 *   put:
 *     summary: Update supplier product
 *     tags: [Supplier Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Supplier Product ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               supplier_id:
 *                 type: integer
 *               product_id:
 *                 type: integer
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Supplier product updated successfully
 *       400:
 *         description: Invalid input
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Supplier product not found
 */
router.put('/:id', authenticateJWT, supplierProductsController.updateSupplierProduct);

/**
 * @swagger
 * /v0/supplier-products/{id}:
 *   delete:
 *     summary: Delete supplier product
 *     tags: [Supplier Products]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Supplier Product ID
 *     responses:
 *       200:
 *         description: Supplier product deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Supplier product not found
 */
router.delete('/:id', authenticateJWT, supplierProductsController.deleteSupplierProduct);

module.exports = router;
