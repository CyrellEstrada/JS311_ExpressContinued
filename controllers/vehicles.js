// Import the vehicles data
const vehicles = require('../data/vehicles');

// Define the list function to get all vehicles
const list = (req, res) => {
    return res.json(vehicles);
};

// Define the show function to get a specific vehicle by ID
const show = (req, res) => {
    const vehicle = vehicles.find(v => parseInt(req.params.id) === v._id);
    if (vehicle) {
        return res.json(vehicle);
    } else {
        return res.status(404).send('Vehicle not found');
    }
};

// Define the create function to add a new vehicle
const create = (req, res) => {
    req.body._id = vehicles.length + 1; // Simple ID increment
    vehicles.push(req.body); // Add to vehicles array
    res.status(201).send(req.body); // Respond with the new vehicle
};

// Export the functions
module.exports = { list, show, create };
