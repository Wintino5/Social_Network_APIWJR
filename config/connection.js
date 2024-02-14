const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/WJRSocial_Network_API');

module.exports = mongoose.connection;