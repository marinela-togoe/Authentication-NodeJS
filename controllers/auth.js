const User = require('../models/user');

exports.getLogin = (req, res, next) => {
    // const isLoggedIn = req
    // .get('Cookie')
    // .split(';')[1]
    // .trim()
    // .split('=')[1] === 'true';
    // console.log(req.session.isLoggedIn);
    res.render('auth/login', {
    path: '/login',
    pageTitle: 'Login',
    isAuthenticated: false
    });
};

exports.getSignup = (req, res, next) => {
  res.render('auth/signup', {
    path: '/signup',
    pageTitle: 'Signup',
    isAuthenticated: false
  });
};

exports.postLogin = (req, res, next) => {
    User.findById('62c85aaea17e7e6de249f7fe')
    .then(user => {
      req.session.isLoggedIn = true;
      req.session.user = user;
      req.session.save((err) => {
        console.log(err);
        res.redirect('/');
      });
    })
    .catch(err => console.log(err));
};

exports.postSignup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  const confirmPassword = req.body.confirmPassword;
  User.findOne({email: email})
  .then(userDoc => {
    if (userDoc) {
      return res.redirect('/signup');
    }
    const user = new User({
      email: email,
      password: password,
      cart: { items: [] }
    });
    return user.save();
  })
  .then(result => {
    res.redirect('/login');
  })
  .catch(err => {
    console.log(err);
  });
};

exports.postLogout = (req, res, next) => {
    req.session.destroy((err) => {
      console.log(err);
      res.redirect('/');
    });
}