const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// const cookieParser = require('cookie-parser');
const session = require('express-session');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const authRoutes = require('./routes/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
// app.use(cookieParser());
app.use(
  session({ secret: 'my secret', resave: false, saveUninitialized: false })
);


app.use((req, res, next) => {
  User.findById('62c85aaea17e7e6de249f7fe')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(authRoutes);

app.use(errorController.get404);




mongoose
.connect(
  'mongodb+srv://marinela:ObQTp8q68yAdP0qq@cluster0.udspa.mongodb.net/shop?retryWrites=true&w=majority')
.then(result => {
  User.findOne().then(user => {
    if (!user) {

      const user = new User({
        name: 'Mari',
        email: 'mari@test.com',
        cart: {
          items: []
        }
      });
      user.save();
    }
  });
  app.listen(3000);
})
.catch(err => {
  console.log(err);
})

