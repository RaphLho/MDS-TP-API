const Status = require('../models/status');

const getStatuses = async (req, res) => {
    try {
        const statuses = await Status.findAll();
        res.json(statuses);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getStatusById = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (status) {
            res.json(status);
        } else {
            res.status(404).send({ message: 'Status not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createStatus = async (req, res) => {
    try {
        const status = await Status.create(req.body);
        res.status(201).json(status);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (status) {
            await status.update(req.body);
            res.json(status);
        } else {
            res.status(404).send({ message: 'Status not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteStatus = async (req, res) => {
    try {
        const status = await Status.findByPk(req.params.id);
        if (status) {
            await status.destroy();
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Status not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getStatuses,
    getStatusById, 
    createStatus,
    updateStatus,
    deleteStatus
};