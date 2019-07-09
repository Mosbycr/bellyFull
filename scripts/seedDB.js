const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || 
  "mongodb://localhost/bellyfull");

const foodSeed = [
  {
    restaurant: "Panera",
    phone: "904-863-3383",
    donations: "3 bagels, 4 loaves of bread",
    date: new Date(Date.now())
  },
  {
    restaurant: "Olive Garden",
    phone: "904-863-3383",
    donations: "Pasta, Breadsticks, Chicken Fillet",
    date: new Date(Date.now())
  },
  {
    restaurant: "J Kogi",
    phone: "904-863-3383",
    donations: "Rice, Kimchi, Cooked Beef",
    date: new Date(Date.now())
  }
];

db.Food
  .remove({})
  .then(() => db.Food.collection.insertMany(foodSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
