// Import the comments data
const comments = require('../data/comments');

// Define the list function to get all comments
const list = (req, res) => {
    return res.json(comments);
};

// Define the show function to get a specific comments by ID
const show = (req, res) => {
    const comments = comments.find(v => parseInt(req.params.id) === v._id);
    if (comments) {
        return res.json(comments);
    } else {
        return res.status(404).send('comments not found');
    }
};

// Define the create function to add a new comments
const create = (req, res) => {
    req.body._id = comments.length + 1; // Simple ID increment
    comments.push(req.body); // Add to comments array
    res.status(201).send(req.body); // Respond with the new comments
};

// Export the functions
module.exports = { list, show, create };
