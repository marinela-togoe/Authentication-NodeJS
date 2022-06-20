const http = require('http'); // Node specific module

const express = require('express'); // third party package;
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin'); // Own file;
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(shopRoutes);



app.listen(3000);