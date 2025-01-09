const express = require('express');
const UtilisateurController = require('../controllers/UtilisateurController');
const router = express.Router();
const authenticateJWT = require('../middleware/authentification');

router.get('/utilisateurs', authenticateJWT, UtilisateurController.getUtilisateurs);
router.get('/utilisateurs/:id', authenticateJWT, UtilisateurController.getUtilisateurById);
router.post('/login', UtilisateurController.login);

router.get('/gpu_models', authenticateJWT, GpuModelController.getGpuModels);
router.get('/gpu_models/:id', authenticateJWT, GpuModelController.getGpuModelById);
router.post('/gpu_models', authenticateJWT, GpuModelController.createGpuModel);
router.put('/gpu_models/:id', authenticateJWT, GpuModelController.updateGpuModel);
router.delete('/gpu_models/:id', authenticateJWT, GpuModelController.deleteGpuModel);

router.get('/suppliers', authenticateJWT, SupplierController.getSuppliers);
router.get('/suppliers/:id', authenticateJWT, SupplierController.getSupplierById);
router.post('/suppliers', authenticateJWT, SupplierController.createSupplier);
router.put('/suppliers/:id', authenticateJWT, SupplierController.updateSupplier);
router.delete('/suppliers/:id', authenticateJWT, SupplierController.deleteSupplier);

router.get('/supplier_products', authenticateJWT, SupplierProductController.getSupplierProducts);
router.get('/supplier_products/:id', authenticateJWT, SupplierProductController.getSupplierProductById);
router.post('/supplier_products', authenticateJWT, SupplierProductController.createSupplierProduct);
router.put('/supplier_products/:id', authenticateJWT, SupplierProductController.updateSupplierProduct);
router.delete('/supplier_products/:id', authenticateJWT, SupplierProductController.deleteSupplierProduct);

router.get('/cart_items', authenticateJWT, CartItemController.getCartItems);
router.get('/cart_items/:id', authenticateJWT, CartItemController.getCartItemById);
router.post('/cart_items', authenticateJWT, CartItemController.createCartItem);
router.put('/cart_items/:id', authenticateJWT, CartItemController.updateCartItem);
router.delete('/cart_items/:id', authenticateJWT, CartItemController.deleteCartItem);

router.get('/messages', authenticateJWT, MessageController.getMessages);
router.get('/messages/:id', authenticateJWT, MessageController.getMessageById);
router.post('/messages', authenticateJWT, MessageController.createMessage);
router.put('/messages/:id', authenticateJWT, MessageController.updateMessage);
router.delete('/messages/:id', authenticateJWT, MessageController.deleteMessage);

router.get('/comments', authenticateJWT, CommentController.getComments);
router.get('/comments/:id', authenticateJWT, CommentController.getCommentById);
router.post('/comments', authenticateJWT, CommentController.createComment);
router.put('/comments/:id', authenticateJWT, CommentController.updateComment);
router.delete('/comments/:id', authenticateJWT, CommentController.deleteComment);

router.get('/orders', authenticateJWT, OrderController.getOrders);
router.get('/orders/:id', authenticateJWT, OrderController.getOrderById);
router.post('/orders', authenticateJWT, OrderController.createOrder);
router.put('/orders/:id', authenticateJWT, OrderController.updateOrder);
router.delete('/orders/:id', authenticateJWT, OrderController.deleteOrder);

router.get('/series', authenticateJWT, SeriesController.getSeries);
router.get('/series/:id', authenticateJWT, SeriesController.getSeriesById);
router.post('/series', authenticateJWT, SeriesController.createSeries);
router.put('/series/:id', authenticateJWT, SeriesController.updateSeries);
router.delete('/series/:id', authenticateJWT, SeriesController.deleteSeries);

router.get('/customers_carts', authenticateJWT, CustomersCartController.getCustomersCarts);
router.get('/customers_carts/:id', authenticateJWT, CustomersCartController.getCustomersCartById);
router.post('/customers_carts', authenticateJWT, CustomersCartController.createCustomersCart);
router.put('/customers_carts/:id', authenticateJWT, CustomersCartController.updateCustomersCart);
router.delete('/customers_carts/:id', authenticateJWT, CustomersCartController.deleteCustomersCart);

router.get('/delivery', authenticateJWT, DeliveryController.getDelivery);
router.get('/delivery/:id', authenticateJWT, DeliveryController.getDeliveryById);
router.post('/delivery', authenticateJWT, DeliveryController.createDelivery);
router.put('/delivery/:id', authenticateJWT, DeliveryController.updateDelivery);
router.delete('/delivery/:id', authenticateJWT, DeliveryController.deleteDelivery);

router.get('/gpu_series', authenticateJWT, GpuSeriesController.getGpuSeries);
router.get('/gpu_series/:id', authenticateJWT, GpuSeriesController.getGpuSeriesById);
router.post('/gpu_series', authenticateJWT, GpuSeriesController.createGpuSeries);
router.put('/gpu_series/:id', authenticateJWT, GpuSeriesController.updateGpuSeries);
router.delete('/gpu_series/:id', authenticateJWT, GpuSeriesController.deleteGpuSeries);

router.get('/manufacturers', authenticateJWT, ManufacturerController.getManufacturers);
router.get('/manufacturers/:id', authenticateJWT, ManufacturerController.getManufacturerById);
router.post('/manufacturers', authenticateJWT, ManufacturerController.createManufacturer);
router.put('/manufacturers/:id', authenticateJWT, ManufacturerController.updateManufacturer);
router.delete('/manufacturers/:id', authenticateJWT, ManufacturerController.deleteManufacturer);

router.get('/status', authenticateJWT, StatusController.getStatus);
router.get('/status/:id', authenticateJWT, StatusController.getStatusById);
router.post('/status', authenticateJWT, StatusController.createStatus);
router.put('/status/:id', authenticateJWT, StatusController.updateStatus);
router.delete('/status/:id', authenticateJWT, StatusController.deleteStatus);

router.get('/stocks', authenticateJWT, StockController.getStocks);
router.get('/stocks/:id', authenticateJWT, StockController.getStockById);
router.post('/stocks', authenticateJWT, StockController.createStock);
router.put('/stocks/:id', authenticateJWT, StockController.updateStock);
router.delete('/stocks/:id', authenticateJWT, StockController.deleteStock);

module.exports = router;
