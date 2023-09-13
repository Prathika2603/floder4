const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;


const url = 'mongodb://localhost:27017/Social';
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});