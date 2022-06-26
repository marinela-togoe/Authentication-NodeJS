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
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title, imageUrl, price, description);
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