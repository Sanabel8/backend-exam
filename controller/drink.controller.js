const drinkModel = require("../models/drink.model")

const getData=(req, res) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`;
    axios.get(url).then(results => {
        const drinksArr = results.data.map(drink => {
            return (new Drink(drink));
        })
        res.send(drinksArr)
    })
    
}
const createDrink = (req, res) => {
    const { strDrink, strDrinkThumb, idDrink } = req.body;
    drinkModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            const newDrink = new drinkModel({
                strDrink:strDrink,
                strDrinkThumb:strDrinkThumb,
                idDrink:idDrink
            })
            newDrink.save();
            res.send(newDrink)
        }
    })
}
const getDrink = (req, res) => {
    drinkModel.find({}, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    })
}
const updateDrink = (req, res) => {
    const id = req.params.id;
    const { strDrink, strDrinkThumb, idDrink } = req.body;
    drinkModel.find({ _id: id}, (error, data) => {

        drinkModel.find({}, (error, updateData) => {
            if (error) {
                res.send(error)
            } else {
                updateData.strDrink = drinkStrDrink
                updateData.strDrinkThumb = drinkStrDrinkThumb
                updateData.idDrink = drinkIdDrink
            }
            updateData.save().then(() => {
                res.send(data)
    
            })
        })
        
    }) 
}
const deleteDrink = (req, res) => {
    const id = req.params.id;
    drinkModel.remove({ _id: id }, (error, data) => {
        
        drinkModel.find({},(error, deleteData) => {
            if (error) {
                res.send(error)
            } else {
                res.send(deleteData)
            }
        })
    })
}
module.exports = {
    getData,
    createDrink,
    getDrink,
    updateDrink,
    deleteDrink
}