const http = require('http'); // Node specific module

const express = require('express'); // third party package;


const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
})

app.use('/add-product', (req, res, next) => {
  console.log('In a middleware!');
  res.send('<h1>The "Add Product" Page</h1>');
});

app.use('/', (req, res, next) => {
  console.log('In a second middleware!');
  res.send('<h1>Hello form Express!</h1>');
});

app.listen(3000);