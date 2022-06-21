const http = require('http'); // Node specific module
const path = require('path'); // Makes it work in all operating systems;

const express = require('express'); // third party package;
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin'); // Own file;
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
   res.status(404).render('404'); 
});

app.listen(3000);