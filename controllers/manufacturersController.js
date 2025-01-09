const Manufacturers = require('../models/manufacturers');

const getManufacturers = async (req, res) => {
    try {
        const manufacturers = await Manufacturers.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(manufacturers);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getManufacturerById = async (req, res) => {
    try {
        const manufacturer = await Manufacturers.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (manufacturer) {
            res.json(manufacturer);
        } else {
            res.status(404).send({ message: 'Manufacturer not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createManufacturer = async (req, res) => {
    try {
        const manufacturer = await Manufacturers.create(req.body);
        res.status(201).json(manufacturer);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateManufacturer = async (req, res) => {
    try {
        const manufacturer = await Manufacturers.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (manufacturer) {
            await manufacturer.update(req.body);
            res.json(manufacturer);
        } else {
            res.status(404).send({ message: 'Manufacturer not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteManufacturer = async (req, res) => {
    try {
        const manufacturer = await Manufacturers.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (manufacturer) {
            await manufacturer.update({ is_deleted: true });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Manufacturer not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getManufacturers,
    getManufacturerById,
    createManufacturer,
    updateManufacturer,
    deleteManufacturer
};
