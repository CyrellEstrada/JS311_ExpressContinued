// Import the contacts data
const contacts = require('../data/contacts');

// Define the list function to get all contacts
const list = (req, res) => {
    return res.json(contacts);
};

// Define the show function to get a specific contacts by ID
const show = (req, res) => {
    const contacts = contacts.find(v => parseInt(req.params.id) === v._id);
    if (contacts) {
        return res.json(contacts);
    } else {
        return res.status(404).send('contacts not found');
    }
};

// Define the create function to add a new contacts
const create = (req, res) => {
    req.body._id = contacts.length + 1; // Simple ID increment
    contacts.push(req.body); // Add to contacts array
    res.status(201).send(req.body); // Respond with the new contacts
};

// Export the functions
module.exports = { list, show, create };
