const sequelize = require('../config/connection');

const { Product, Transaction, User }  = require('../models');

const productSeedData = require('./productsDataSeed.json');
const transactionsDataSeed = require('./transactionsDataSeed.json');
const userDataSeed = require('./userDataSeed.json');

// const librarySeedData = require('./librarySeedData.json');

// Add the `async` keyword to the function `seedDatabase` to make Asynchronous.
const seedDatabase = async () => {

  // Add the `await` keyword infront of the expressions inside the `async` function.
  await sequelize.sync({ force: true });

  // Once JavaScript recogonizes the `await` keyword it waits for the promise to be fufilled before moving on.
  await Product.bulkCreate(productSeedData);
  await Transaction.bulkCreate(transactionsDataSeed);
  await User.bulkCreate(userDataSeed);

  process.exit(0);
};

seedDatabase();
