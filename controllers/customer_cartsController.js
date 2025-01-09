const CustomerCarts = require('../models/customer_carts');

const getCustomerCarts = async (req, res) => {
    try {
        const customerCarts = await CustomerCarts.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(customerCarts);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getCustomerCartById = async (req, res) => {
    try {
        const customerCart = await CustomerCarts.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (customerCart) {
            res.json(customerCart);
        } else {
            res.status(404).send({ message: 'Customer cart not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createCustomerCart = async (req, res) => {
    try {
        const customerCart = await CustomerCarts.create({
            ...req.body,
            created_at: new Date()
        });
        res.status(201).json(customerCart);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateCustomerCart = async (req, res) => {
    try {
        const customerCart = await CustomerCarts.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (customerCart) {
            await customerCart.update({
                ...req.body,
                modified_at: new Date()
            });
            res.json(customerCart);
        } else {
            res.status(404).send({ message: 'Customer cart not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteCustomerCart = async (req, res) => {
    try {
        const customerCart = await CustomerCarts.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (customerCart) {
            await customerCart.update({ 
                is_deleted: true,
                modified_at: new Date()
            });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Customer cart not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getCustomerCarts,
    getCustomerCartById,
    createCustomerCart,
    updateCustomerCart,
    deleteCustomerCart
};
