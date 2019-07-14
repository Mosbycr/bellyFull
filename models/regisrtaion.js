const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const registraionSchema = new Schema ({
    email: { type: String, required: true },
    password: { type: String, required: true },
    oraganization: {type: String, required: true},
    firstName: {type: String, required:true},
    lastName: {type: String, required:true},
    phone: {type: String, required:true},
    adress: {type: String, required:true},
    city:{type: String, required:true},
    date: {type: Date, defualt: Date.now }
});

const Registration = mongoose.model("Registration", registraionSchema);

module.exports = Registration;