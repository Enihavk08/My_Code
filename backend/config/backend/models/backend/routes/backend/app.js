const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/properties', require('./routes/properties'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
