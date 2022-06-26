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
    res.render('admin/products', {
      prods: products,
      pageTitle: 'Admin Products',
      path: '/admin/products'
       
    });
  };


module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
}