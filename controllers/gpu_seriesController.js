const GpuSeries = require('../models/gpu_series');

const getGpuSeries = async (req, res) => {
    try {
        const gpuSeries = await GpuSeries.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(gpuSeries);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getGpuSeriesById = async (req, res) => {
    try {
        const gpuSeries = await GpuSeries.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuSeries) {
            res.json(gpuSeries);
        } else {
            res.status(404).send({ message: 'GPU series not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createGpuSeries = async (req, res) => {
    try {
        const gpuSeries = await GpuSeries.create(req.body);
        res.status(201).json(gpuSeries);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateGpuSeries = async (req, res) => {
    try {
        const gpuSeries = await GpuSeries.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuSeries) {
            await gpuSeries.update(req.body);
            res.json(gpuSeries);
        } else {
            res.status(404).send({ message: 'GPU series not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteGpuSeries = async (req, res) => {
    try {
        const gpuSeries = await GpuSeries.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (gpuSeries) {
            await gpuSeries.update({ is_deleted: true });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'GPU series not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getGpuSeries,
    getGpuSeriesById,
    createGpuSeries,
    updateGpuSeries,
    deleteGpuSeries
};
