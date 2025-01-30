const CartItem = require('../models/cart_items');

const getCartItems = async (req, res) => {
  try {
    const cartItems = await CartItem.findAll({
      where: {
        is_deleted: false
      }
    });
    res.json(cartItems);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const getCartItemById = async (req, res) => {
  try {
    const cartItem = await CartItem.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (cartItem) {
      res.json(cartItem);
    } else {
      res.status(404).send({ message: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.create(req.body);
    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (cartItem) {
      await cartItem.update(req.body);
      res.json(cartItem);
    } else {
      res.status(404).send({ message: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const cartItem = await CartItem.findOne({
      where: {
        id: req.params.id,
        is_deleted: false
      }
    });
    if (cartItem) {
      await cartItem.update({ is_deleted: true });
      res.status(204).send();
    } else {
      res.status(404).send({ message: 'Cart item not found' });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = {
  getCartItems,
  getCartItemById,
  createCartItem,
  updateCartItem,
  deleteCartItem
};
