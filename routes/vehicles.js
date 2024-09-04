const express = require('express');
const router = express.Router();

// Import the vehicles controller
const vehiclesController = require('../controllers/vehicles');

// Define routes and use controller methods
router.get('/', vehiclesController.list);        // Corrected from `app.get` to `router.get`
router.get('/:id', vehiclesController.show);     // Corrected from `app.get` to `router.get`
router.post('/', vehiclesController.create);     // Corrected from `app.post` to `router.post`

// Export the router
module.exports = router;