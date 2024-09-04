const express = require('express');
const router = express.Router();

// Import the products controller
const productsController = require('../controllers/products');

// Define routes and use controller methods
router.get('/', productsController.list);        // Corrected from `app.get` to `router.get`
router.get('/:id', productsController.show);     // Corrected from `app.get` to `router.get`
router.post('/', productsController.create);     // Corrected from `app.post` to `router.post`

// Export the router
module.exports = router;