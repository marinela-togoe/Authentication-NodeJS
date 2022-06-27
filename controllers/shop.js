const Product = require('../models/product');



async function getProducts(req, res, next) {
  const products = await Product.fetchAll();
  res.render('shop/product-list', {
    prods: products,
    pageTitle: 'All Products',
    path: '/products'
     
  });
};

function getProduct(req, res, next) {
  const prodId = req.params.productId;
  console.log(prodId);
  res.redirect('/');
}

async function getIndex(req, res, next) {
  const products = await Product.fetchAll();
  res.render('shop/index', {
    prods: products,
    pageTitle: 'Shop',
    path: '/'
  
  });
};

function getCart(req, res, next) {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};

function getOrders(req, res, next) {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};

function getCheckout(req, res, next) {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};





module.exports = {
  getProducts,
  getProduct,
  getIndex,
  getCart,
  getOrders,
  getCheckout,
}
