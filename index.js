const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static('./public'))
app.use(bodyParser.json())

// Import routers
const contactsRouter = require('./routes/contacts');
const vehiclesRouter = require('./routes/vehicles');
const commentsRouter = require('./routes/comments');
const productsRouter = require('./routes/products');

// Use the routers
app.use('/contacts', contactsRouter);
app.use('/vehicles', vehiclesRouter);  // Note: Base path '/vehicles'
app.use('/comments', commentsRouter);
app.use('/products', productsRouter);

const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Web server is listening on port ${port}!`);
});