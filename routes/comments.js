const express = require('express');
const router = express.Router();

// Import the comments controller
const commentsController = require('../controllers/comments');

// Define routes and use controller methods
router.get('/', commentsController.list);        // Corrected from `app.get` to `router.get`
router.get('/:id', commentsController.show);     // Corrected from `app.get` to `router.get`
router.post('/', commentsController.create);     // Corrected from `app.post` to `router.post`

// Export the router
module.exports = router;