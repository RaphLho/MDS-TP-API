const GpuModel = require('../models/gpu_models');

const getGpuModels = async (req, res) => {
    try {
        const gpuModels = await GpuModel.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(gpuModels);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getGpuModelById = async (req, res) => {
    try {
        const gpuModel = await GpuModel.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuModel) {
            res.json(gpuModel);
        } else {
            res.status(404).send({ message: 'GPU model not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createGpuModel = async (req, res) => {
    try {
        const gpuModel = await GpuModel.create(req.body);
        res.status(201).json(gpuModel);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateGpuModel = async (req, res) => {
    try {
        const gpuModel = await GpuModel.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuModel) {
            await gpuModel.update(req.body);
            res.json(gpuModel);
        } else {
            res.status(404).send({ message: 'GPU model not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteGpuModel = async (req, res) => {
    try {
        const gpuModel = await GpuModel.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuModel) {
            await gpuModel.update({ is_deleted: true });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'GPU model not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getGpuModels,
    getGpuModelById,
    createGpuModel,
    updateGpuModel,
    deleteGpuModel
};
