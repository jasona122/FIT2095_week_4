const express = require("express");
const router = express.Router();
const Warehouse = require("./objectClass.js")

let database = new Warehouse.Database()


router.get("/", function(req, res){
    res.send("Welcome to the Warehouse Management System");
})


router.get("/newItem/:itemName/:quantity/:price", function(req, res){
    let itemName = req.params.itemName;
    let itemQuantity = req.params.quantity;
    let itemPrice = req.params.price;

    let itemToAdd = new Warehouse.Item(itemName, itemQuantity, itemPrice);
    database.addItem(itemToAdd);
    res.send(database.generateList());
});


router.get("/listItems/", function(req, res){
    res.send(database.generateList());
});


router.get("/deleteItem/:itemID", function(req, res){
    itemID = req.params.itemID;
    try{
        database.deleteItem(itemID);
        res.send(database.generateList());
    }
    catch(err){
        res.send(err.message);
    }
});


router.get("/totalValue/", function(req, res){
    let totalValue = database.getWarehouseValue();
    res.send("Total value: " + totalValue);
});


router.get("*", function(req, res){
    res.send("Error 404: Function not found");
})

module.exports = router;