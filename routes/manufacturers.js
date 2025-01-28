const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const manufacturersController = require('../controllers/manufacturersController');

/**
 * @swagger
 * /v0/manufacturers:
 *   get:
 *     summary: Get all manufacturers
 *     tags: [Manufacturers]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of manufacturers
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, manufacturersController.getManufacturers);

/**
 * @swagger
 * /v0/manufacturers/{id}:
 *   get:
 *     summary: Get manufacturer by ID
 *     tags: [Manufacturers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Manufacturer ID
 *     responses:
 *       200:
 *         description: Manufacturer details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Manufacturer not found
 */
router.get('/:id', authenticateJWT, manufacturersController.getManufacturerById);

/**
 * @swagger
 * /v0/manufacturers:
 *   post:
 *     summary: Create a new manufacturer
 *     tags: [Manufacturers]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Manufacturer created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid input
 */
router.post('/', authenticateJWT, manufacturersController.createManufacturer);

/**
 * @swagger
 * /v0/manufacturers/{id}:
 *   put:
 *     summary: Update a manufacturer
 *     tags: [Manufacturers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Manufacturer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Manufacturer updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Manufacturer not found
 */
router.put('/:id', authenticateJWT, manufacturersController.updateManufacturer);

/**
 * @swagger
 * /v0/manufacturers/{id}:
 *   delete:
 *     summary: Delete a manufacturer
 *     tags: [Manufacturers]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Manufacturer ID
 *     responses:
 *       200:
 *         description: Manufacturer deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Manufacturer not found
 */
router.delete('/:id', authenticateJWT, manufacturersController.deleteManufacturer);

module.exports = router;