const express = require('express');
const path = require('path');
const store = require('./store/datastore');
const initialStoreData = require('./store/data');
const Metal = require('./models/metal');
const metalRoutes = require('./routes/metal');

const app = express();
const port = process.env.PORT || 3001;

// include routes
app.use('/metal', metalRoutes);

app.use(express.static('public')); // 2nd-to-latest-build

// Index route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// initialize store
const metal = new Metal(store);
metal.initStore(initialStoreData);
app.locals.metal = metal;

// start server
const server = app.listen(port, () => {
    console.log("Server started on port " + port);
});

module.exports = server;