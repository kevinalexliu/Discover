const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authorizationRouter = require('./routes/authorization.js');

const PORT = 4000;
const app = express();
const static = express.static(`client/dist`)

app.use(express.json());

app.use('/home', express.static('client/dist/home.html'));

app.use(static)

app.use('/login', authorizationRouter);


app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`)
});
