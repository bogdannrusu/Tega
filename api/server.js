const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 3000;

// Updated connection string without deprecated options
mongoose.connect('mongodb://localhost:27017/cash_register', { useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(cors());
app.use(express.json());

//const userRoutes = require('./routes/userRoutes');
//const productRoutes = require('./routes/productRoutes');
//const transactionRoutes = require('./routes/transactionRoutes');
const movieRoutes = require('./routes/movieRoutes');

//app.use('/users', userRoutes);
//app.use('/products', productRoutes);
//app.use('/transactions', transactionRoutes);
app.use('/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
