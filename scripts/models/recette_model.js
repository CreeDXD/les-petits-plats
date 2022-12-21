// recuperation des differents elements de la base de donnée
//et renvoie les elements nécessaire pour les utiliser 
// pour afficher les differentes info des recettes
class Recette_Model {
    constructor(data){
        this._id = data.id
        this._name = data.name
        this._servings = data.servings
        this._time = data.time
        this._description = data.description
        this._appliance = data.appliance
        this._ingredients = data.ingredients
        this._ustensils = data.ustensils
    }

    get id(){ 
        return this._id
    }
    get name(){
        return this._name
    }
    get servings(){
        return this._servings
    }

    get time(){
        return this._time
    }
    
    get description(){
        return this._description
    }
    
    get appliance(){
        return this._appliance
    }

    get ingredients(){
        return this._ingredients
    }
    
    get ustensils(){
        return this._ustensils
    }
   
}
    