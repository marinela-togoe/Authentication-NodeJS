const Product = require('../models/product');

function getAddProduct(req, res, next) {
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

function postAddProduct(req, res, next) {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
};

async function getProducts(req, res, next) {
    const products = await Product.fetchAll();
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
  });
};

module.exports = {
    getAddProduct,
    postAddProduct,
    getProducts,
}
