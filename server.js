require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const Sequelize = require('sequelize');
// Import our db connection
const db = require('./db/db.json');



// const index_route = require('./routes/apiRoutes/index_route');
// const notes_route = require('./routes/apiRoutes/notes_route');
// const index = require('./routes/htmlRoutes/index');


const app = express();
const PORT = process.env.PORT || 3333;

// Middleware
app.use(express.json()); // Allows the client/browser to send json in a request
app.use(express.urlencoded({extended:true})); //allws std encoded form data submission
app.use(express.static('public')); // Allows the client/browser to access any folders or files in public - opens this folder at the root





// Load Routes

const indexRoutes = require('./routes/apiRoutes/index_route');
app.use('/api', indexRoutes);

const notesRoutes = require('./routes/apiRoutes/notes_route');
app.use('/api', notesRoutes);

// Load HTML Routes
const htmlRoutes = require('./routes/htmlRoutes/index');
app.use('/', htmlRoutes);

    // Start server
    app.listen(PORT, () => console.log('Server started on port %s', PORT));

