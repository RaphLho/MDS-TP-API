const Delivery = require('../models/delivery');

const getDelivery = async (req, res) => {
    try {
        const deliveries = await Delivery.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(deliveries);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getDeliveryById = async (req, res) => {
    try {
        const delivery = await Delivery.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (delivery) {
            res.json(delivery);
        } else {
            res.status(404).send({ message: 'Delivery not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.create({
            ...req.body,
            created_at: new Date()
        });
        res.status(201).json(delivery);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (delivery) {
            await delivery.update({
                ...req.body,
                modified_at: new Date()
            });
            res.json(delivery);
        } else {
            res.status(404).send({ message: 'Delivery not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteDelivery = async (req, res) => {
    try {
        const delivery = await Delivery.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (delivery) {
            await delivery.update({ 
                is_deleted: true,
                modified_at: new Date()
            });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Delivery not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getDelivery,
    getDeliveryById,
    createDelivery,
    updateDelivery,
    deleteDelivery
};
