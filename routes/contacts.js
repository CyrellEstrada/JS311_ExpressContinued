const express = require('express');
const router = express.Router();

// Import the contacts controller
const contactsController = require('../controllers/contacts');

// Define routes and use controller methods
router.get('/', contactsController.list);        // Corrected from `app.get` to `router.get`
router.get('/:id', contactsController.show);     // Corrected from `app.get` to `router.get`
router.post('/', contactsController.create);     // Corrected from `app.post` to `router.post`

// Export the router
module.exports = router;