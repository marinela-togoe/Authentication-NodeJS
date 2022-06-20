const http = require('http'); // Node specific module

const express = require('express'); // third party package;
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  console.log('In a middleware!');
  res.send('<form action="/product" method="POST"><input type="text" name="title"></input><button type="submit">Add Product</button></form>');
});

app.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Hello form Express!</h1>');
});

app.listen(3000);