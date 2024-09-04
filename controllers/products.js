// Import the products data
const products = require('../data/products');

// Define the list function to get all products
const list = (req, res) => {
    return res.json(products);
};

// Define the show function to get a specific products by ID
const show = (req, res) => {
    const products = products.find(v => parseInt(req.params.id) === v._id);
    if (products) {
        return res.json(products);
    } else {
        return res.status(404).send('Product not found');
    }
};

// Define the create function to add a new products
const create = (req, res) => {
    req.body._id = products.length + 1; // Simple ID increment
    products.push(req.body); // Add to products array
    res.status(201).send(req.body); // Respond with the new products
};

// Export the functions
module.exports = { list, show, create };
