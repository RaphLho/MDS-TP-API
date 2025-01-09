const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/authentification');
const usersController = require('../controllers/usersController');

router.get('/users', authenticateJWT, usersController.getUsers);
router.get('/users/:id', authenticateJWT, usersController.getUserById);
router.post('/login', usersController.login);

// Import all controllers
const gpuSeriesController = require('../controllers/gpu_seriesController');
const gpuModelsController = require('../controllers/gpu_modelsController');
const manufacturersController = require('../controllers/manufacturersController');
const supplierProductsController = require('../controllers/supplier_productsController');
const cartItemsController = require('../controllers/cart_itemsController');
const customerCartsController = require('../controllers/customer_cartsController');
const deliveryController = require('../controllers/deliveryController');
const statusController = require('../controllers/statusController');

// GPU Series routes
router.get('/gpu_series', authenticateJWT, gpuSeriesController.getGpuSeries);
router.get('/gpu_series/:id', authenticateJWT, gpuSeriesController.getGpuSeriesById);
router.post('/gpu_series', authenticateJWT, gpuSeriesController.createGpuSeries);
router.put('/gpu_series/:id', authenticateJWT, gpuSeriesController.updateGpuSeries);
router.delete('/gpu_series/:id', authenticateJWT, gpuSeriesController.deleteGpuSeries);

// GPU Models routes
router.get('/gpu_models', authenticateJWT, gpuModelsController.getGpuModels);
router.get('/gpu_models/:id', authenticateJWT, gpuModelsController.getGpuModelById);
router.post('/gpu_models', authenticateJWT, gpuModelsController.createGpuModel);
router.put('/gpu_models/:id', authenticateJWT, gpuModelsController.updateGpuModel);
router.delete('/gpu_models/:id', authenticateJWT, gpuModelsController.deleteGpuModel);

// Manufacturers routes
router.get('/manufacturers', authenticateJWT, manufacturersController.getManufacturers);
router.get('/manufacturers/:id', authenticateJWT, manufacturersController.getManufacturerById);
router.post('/manufacturers', authenticateJWT, manufacturersController.createManufacturer);
router.put('/manufacturers/:id', authenticateJWT, manufacturersController.updateManufacturer);
router.delete('/manufacturers/:id', authenticateJWT, manufacturersController.deleteManufacturer);

// Supplier Products routes
router.get('/supplier_products', authenticateJWT, supplierProductsController.getSupplierProducts);
router.get('/supplier_products/:id', authenticateJWT, supplierProductsController.getSupplierProductById);
router.post('/supplier_products', authenticateJWT, supplierProductsController.createSupplierProduct);
router.put('/supplier_products/:id', authenticateJWT, supplierProductsController.updateSupplierProduct);
router.delete('/supplier_products/:id', authenticateJWT, supplierProductsController.deleteSupplierProduct);

// Cart Items routes
router.get('/cart_items', authenticateJWT, cartItemsController.getCartItems);
router.get('/cart_items/:id', authenticateJWT, cartItemsController.getCartItemById);
router.post('/cart_items', authenticateJWT, cartItemsController.createCartItem);
router.put('/cart_items/:id', authenticateJWT, cartItemsController.updateCartItem);
router.delete('/cart_items/:id', authenticateJWT, cartItemsController.deleteCartItem);

// Customer Carts routes
router.get('/customer_carts', authenticateJWT, customerCartsController.getCustomerCarts);
router.get('/customer_carts/:id', authenticateJWT, customerCartsController.getCustomerCartById);
router.post('/customer_carts', authenticateJWT, customerCartsController.createCustomerCart);
router.put('/customer_carts/:id', authenticateJWT, customerCartsController.updateCustomerCart);
router.delete('/customer_carts/:id', authenticateJWT, customerCartsController.deleteCustomerCart);

// Delivery routes
router.get('/delivery', authenticateJWT, deliveryController.getDelivery);
router.get('/delivery/:id', authenticateJWT, deliveryController.getDeliveryById);
router.post('/delivery', authenticateJWT, deliveryController.createDelivery);
router.put('/delivery/:id', authenticateJWT, deliveryController.updateDelivery);
router.delete('/delivery/:id', authenticateJWT, deliveryController.deleteDelivery);

// Status routes
router.get('/status', authenticateJWT, statusController.getStatuses);
router.get('/status/:id', authenticateJWT, statusController.getStatusById);
router.post('/status', authenticateJWT, statusController.createStatus);
router.put('/status/:id', authenticateJWT, statusController.updateStatus);
router.delete('/status/:id', authenticateJWT, statusController.deleteStatus);

module.exports = router;