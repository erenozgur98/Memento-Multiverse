const sequelize = require('../config/connection');

const { Product, Franchise }  = require('../models');

const productSeedData = require('./productsDataSeed.json');
const franchiseSeed = require('./franchiseDataSeed.json');

// const librarySeedData = require('./librarySeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await Franchise.bulkCreate(franchiseSeed);
  await Product.bulkCreate(productSeedData);
  
  process.exit(0);
};

seedDatabase();
