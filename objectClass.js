class WarehouseItem{
    constructor(name, quantity, price){
        this.id = Math.round(Math.random() * 1000);
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }

    get cost(){
        return this.quantity * this.price;
    }
}


class WarehouseDatabase{
    constructor(){
        this.database = [];
    }

    addItem(warehouseItem){
        this.database.push(warehouseItem);
    }

    deleteItem(itemID){
        //linear search
        for(let i = 0; i < this.database.length; i++){
            let item = this.database[i];
            if(item.id == itemID){
                this.database.splice(i, 1);
                return item;
            }
        }
        throw new RangeError("Item is not in the database"); //handle accordingly (could be 404 or redirect to homepage)
    }

    getWarehouseValue(){
        let total = 0;
        for(let i = 0; i < this.database.length; i++){
            let item = this.database[i]
            total += item.cost;
        }
        return total;
    }

    itemsList(){
        return this.database;
    }

    generateList(){
        if(this.database.length == 0){
            return "Database is currently empty";
        }
        
        let dataString = "ID | Name | Quantity | Price | Cost</br>";
        for(let i = 0; i < this.database.length; i++){
            let item = this.database[i];
            dataString += item.id + " | " + item.name + " | " + item.quantity + " | " + item.price + " | " + 
            item.cost + "</br>";
        }
        return dataString;
    }
}

module.exports = {
    Database: WarehouseDatabase,
    Item: WarehouseItem
}