const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const gpuSeriesController = require('../controllers/gpu_seriesController');

/**
 * @swagger
 * /v0/gpu-series:
 *   get:
 *     summary: Get all GPU series
 *     tags: [GPU Series]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of GPU series
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, gpuSeriesController.getGpuSeries);

/**
 * @swagger
 * /v0/gpu-series/{id}:
 *   get:
 *     summary: Get GPU series by ID
 *     tags: [GPU Series]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Series ID
 *     responses:
 *       200:
 *         description: GPU series details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU series not found
 */
router.get('/:id', authenticateJWT, gpuSeriesController.getGpuSeriesById);

/**
 * @swagger
 * /v0/gpu-series:
 *   post:
 *     summary: Create a new GPU series
 *     tags: [GPU Series]
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
 *               - manufacturerId
 *             properties:
 *               name:
 *                 type: string
 *               manufacturerId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: GPU series created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid input
 */
router.post('/', authenticateJWT, gpuSeriesController.createGpuSeries);

/**
 * @swagger
 * /v0/gpu-series/{id}:
 *   put:
 *     summary: Update a GPU series
 *     tags: [GPU Series]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Series ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               manufacturerId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: GPU series updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU series not found
 */
router.put('/:id', authenticateJWT, gpuSeriesController.updateGpuSeries);

/**
 * @swagger
 * /v0/gpu-series/{id}:
 *   delete:
 *     summary: Delete a GPU series
 *     tags: [GPU Series]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Series ID
 *     responses:
 *       200:
 *         description: GPU series deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU series not found
 */
router.delete('/:id', authenticateJWT, gpuSeriesController.deleteGpuSeries);

module.exports = router;
