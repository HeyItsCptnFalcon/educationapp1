const express       = require('express');

const usersRoutes   = require('./backend/routes/users');


const app = express();
const port = 5000;

// require .env and db.js
require('dotenv').load();
require('./backend/config/db')

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.use('/users', usersRoutes);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;