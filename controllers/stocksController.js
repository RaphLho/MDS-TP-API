const Stock = require('../models/stocks');

const getStocks = async (req, res) => {
    try {
        const stocks = await Stock.findAll();
        res.json(stocks);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const getStockById = async (req, res) => {
    try {
        const stock = await Stock.findByPk(req.params.id);
        if (stock) {
            res.json(stock);
        } else {
            res.status(404).send({ message: 'Stock not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const createStock = async (req, res) => {
    try {
        const stock = await Stock.create(req.body);
        res.status(201).json(stock);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const updateStock = async (req, res) => {
    try {
        const stock = await Stock.findByPk(req.params.id);
        if (stock) {
            await stock.update(req.body);
            res.json(stock);
        } else {
            res.status(404).send({ message: 'Stock not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

const deleteStock = async (req, res) => {
    try {
        const stock = await Stock.findByPk(req.params.id);
        if (stock) {
            await stock.destroy();
            res.status(204).send();
        } else {
            res.status(404).send({ message: 'Stock not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}

module.exports = {
    getStocks,
    getStockById,
    createStock,
    updateStock,
    deleteStock
};