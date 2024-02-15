const express = require('express');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3001;

const connection = require('./config/connection');

const { user_routes } = require('./routes/api/user-routes')


// Middleware
app.use(express.json())

// Load Routes
app.use('/api', [
    user_routes
])



connection.on('open', () => {
    app.listen(PORT, () => console.log('Server started on port', PORT));
})
