const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/bellyfull");

const foodSeed = [
  {
    restaurant: "Lunch/Supper",
    phone: "(804) 353-0111",
    donations: "corn on the cob, ribs (uncooked), ground beef(uncooked), cranberry sauce",
    date: new Date(Date.now()),
    claimed: true
  },
  {
    restaurant: "Joes Inn",
    phone: "(804) 355-2282",
    donations: "Uncooked Pasta, pepperoni, bread, chicken fingers",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Belmont Pizzaria",
    phone: "(804) 888-9861",
    donations: "pepperoni, cheese, olives, tomato sauce",
    date: new Date(Date.now()),
    claimed: false
  },
  {
   restaurant: "Cava",
   phone: "(804) 214-3850",
   donations: "chickpeas, pita, rice, arugla, spinnach",
   date: new Date(Date.now()),
   claimed: false
  },
  {
    restaurant: "Lemon",
    phone: "(804) 204-1800",
    donations: "rice",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Panera",
    phone: "(804) 285-1777",
    donations: "3 bagels, 4 loaves of bread",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Olive Garden",
    phone: "(804) 672-6220",
    donations: "Pasta, Breadsticks, Chicken Fillet",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "J Kogi",
    phone: "(804) 225-8734",
    donations: "Rice, Kimchi, Cooked Beef",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Chipotle",
    phone: "(804) 288-2129",
    donations: "rice, corn, tortillas",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Grape Vine",
    phone: "(804) 440-9100",
    donations: "uncooked pasta, bread sticks, olive oil",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Texas Roadhouse",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Break",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Cafe Rio",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Break",
    date: new Date(Date.now()),
    claimed: false
  },
  {
    restaurant: "Starbucks",
    phone: "(804) 897-7427",
    donations: "Steak, Salad, Break",
    date: new Date(Date.now()),
    claimed: false
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