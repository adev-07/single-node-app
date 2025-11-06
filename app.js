const express = require('express');
const cors = require('cors');

// Starting App
const app = express();
app.use(cors());
app.use(express.json());


// Auth Routes
app.use('/login', require('./routes/login'));
app.use('/refresh-token', require('./routes/refresh-token'));
app.use('/signup', require('./routes/signup'));
app.use('/signout', require('./routes/signout'));

// Users Routes
app.use('/users', require('./routes/users'));

app.listen(3000, () => {
    console.log('App running in port 3000!');
});