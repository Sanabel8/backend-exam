const mongoose = require('mongoose');

const drinkSchema = new mongoose.Schema({
    strDrink: { type: String },
    strDrinkThumb: { type: string },
    idDrink:{type:Number}
})

const drinkModel = new mongoose.model("drink", drinkSchema)
module.exports=drinkModel