const SupplierProduct = require('../models/supplier_products');

const getSupplierProducts = async (req, res) => {
    try {
        const supplierProducts = await SupplierProduct.findAll({
            where: {
                is_deleted: false
            }
        });
        res.json(supplierProducts);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getSupplierProductById = async (req, res) => {
    try {
        const supplierProduct = await SupplierProduct.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (supplierProduct) {
            res.json(supplierProduct);
        } else {
            res.status(404).send({ message: 'Supplier product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createSupplierProduct = async (req, res) => {
    try {
        // Validate price
        if (req.body.price && (req.body.price < 0 || req.body.price > 999999999.99)) {
            return res.status(400).send({ 
                message: 'Price must be between 0 and 999,999,999.99' 
            });
        }

        const supplierProduct = await SupplierProduct.create(req.body);
        res.status(201).json(supplierProduct);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateSupplierProduct = async (req, res) => {
    try {
        // Validate price
        if (req.body.price && (req.body.price < 0 || req.body.price > 999999999.99)) {
            return res.status(400).send({ 
                message: 'Price must be between 0 and 999,999,999.99' 
            });
        }

        const supplierProduct = await SupplierProduct.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (supplierProduct) {
            await supplierProduct.update(req.body);
            res.json(supplierProduct);
        } else {
            res.status(404).send({ message: 'Supplier product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteSupplierProduct = async (req, res) => {
    try {
        const supplierProduct = await SupplierProduct.findOne({
            where: {
                id: req.params.id,
                is_deleted: false
            }
        });
        if (supplierProduct) {
            await supplierProduct.update({ is_deleted: true });
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Supplier product not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getSupplierProducts,
    getSupplierProductById,
    createSupplierProduct,
    updateSupplierProduct,
    deleteSupplierProduct
};