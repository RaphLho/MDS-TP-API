const express = require('express');
const router = express.Router();
const path = require('path');
const authenticateJWT = require('../middleware/authentification');
const gpuModelsController = require('../controllers/gpu_modelsController'); 

/**
 * @swagger
 * /v0/gpu-models:
 *   get:
 *     summary: Get all GPU models
 *     tags: [GPU Models]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of GPU models
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 */
router.get('/', authenticateJWT, gpuModelsController.getGpuModels);

/**
 * @swagger
 * /v0/gpu-models/{id}:
 *   get:
 *     summary: Get GPU model by ID
 *     tags: [GPU Models]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Model ID
 *     responses:
 *       200:
 *         description: GPU model details
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU model not found
 */
router.get('/:id', authenticateJWT, gpuModelsController.getGpuModelById);

/**
 * @swagger
 * /v0/gpu-models:
 *   post:
 *     summary: Create a new GPU model
 *     tags: [GPU Models]
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
 *               - gpuSeriesId
 *             properties:
 *               name:
 *                 type: string
 *               gpuSeriesId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: GPU model created successfully
 *       401:
 *         description: Unauthorized
 *       400:
 *         description: Invalid input
 */
router.post('/', authenticateJWT, gpuModelsController.createGpuModel);

/**
 * @swagger
 * /v0/gpu-models/{id}:
 *   put:
 *     summary: Update a GPU model
 *     tags: [GPU Models]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Model ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               gpuSeriesId:
 *                 type: integer
 *     responses:
 *       200:
 *         description: GPU model updated successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU model not found
 *       400:
 *         description: Invalid input
 */
router.put('/:id', authenticateJWT, gpuModelsController.updateGpuModel);

/**
 * @swagger
 * /v0/gpu-models/{id}:
 *   delete:
 *     summary: Delete a GPU model
 *     tags: [GPU Models]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: GPU Model ID
 *     responses:
 *       200:
 *         description: GPU model deleted successfully
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: GPU model not found
 */
router.delete('/:id', authenticateJWT, gpuModelsController.deleteGpuModel);

module.exports = router;
