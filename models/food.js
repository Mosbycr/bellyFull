const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const foodSchema = new Schema ({
    restaurant: { type: String, required: true },
    phone: { type: String, required: true },
    donations: {type: String, required: true},
    date: {type: Date, defualt: Date.now }
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;