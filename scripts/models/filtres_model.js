// recuperation des differents elements de la base de donnée
//et renvoie les elements nécessaire pour les utiliser 
// pour afficher les differentes info des recettes
class Filtres_Model {
    constructor(data){
        this._ingredient = data
    }

    get ingredient(){ 
        return this._ingredient
    }    
   
}
    