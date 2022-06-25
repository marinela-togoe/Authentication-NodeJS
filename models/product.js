const fs =  require('fs');
const utils = require('../util/path');
const path = require('path');
const p = path.join(utils, 'data', 'products.json');

function getproductsLists() {
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
  constructor(title) {
    this.title = title;
  }

  async save() {
    const products = await getproductsLists();
    products.push(this);
    fs.writeFile(p, JSON.stringify(products), (err, data) => {
      if (err) console.log(err, data);
    });
  }
  static async fetchAll() {
    return await getproductsLists();
  }
}

module.exports = Product;

 