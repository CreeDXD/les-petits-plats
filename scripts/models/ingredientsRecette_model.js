class IngredientRecette_Model {
    constructor(data){
        this._ingredient = data.ingredient
        this._quantity = data.quantity
        this._unit = data.unit
    }

    get ingredient(){ 
        return this._ingredient
    }    
   
    get quantity(){ 
        return this._quantity
    } 

    get unit(){ 
        return this._unit
    } 
}
   