const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authorizationRouter = require('./routes/authorization.js');

const PORT = 4000;
const app = express();
const static = express.static(`client/dist`)

dotenv.config({
  path: 'config.env'
});

// app.use(cors());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "*")
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
//   next();
// })

app.use(express.json());

app.use('/home', express.static('client/dist/home.html'));

app.use(static)

app.use('/login', authorizationRouter);

// app.use('/home', (req, res) => {
//   console.log('test')
// })



app.listen(PORT, () => {
  console.log(`Connected to port: ${PORT}`)
});
