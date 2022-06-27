const fs =  require('fs');
const utils = require('../util/path');
const path = require('path');
const p = path.join(utils, 'data', 'products.json');

function getProductsFromFile() {
  return new Promise((resolve, reject) => {
    fs.readFile(p, 'utf-8', (err, data) => {
      if (err) {
        fs.mkdir('data', () => {
          const data = '';
          fs.writeFileSync(p, data);
          resolve([]);
        });
      } else if (data === '') {
        resolve([]);
      } else resolve(JSON.parse(data));
    });
  });
}

class Product {
  constructor(title, imageUrl, price, description) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.price = price;
    this.description = description;
  }

  async save() {
    this.id = Math.random().toString();
    const products = await getProductsFromFile();
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err, data) => {
      if (err) console.log(err, data);
    });
  }
  static async fetchAll() {
    return await getProductsFromFile();
  }
}

module.exports = Product;

 