//creation des different ingredients dans les recette
class RecetteIngredientCard {
    constructor(data) {
        this._ingredient = data.ingredient
        this._quantity = data.quantity
        this._unit = data.unit
    }

    createRecetteIngredientCard() {
        let containerIngredient = document.createElement('li')
        containerIngredient.setAttribute('name',this._ingredient)
        containerIngredient.innerHTML = this._ingredient
                    

        containerIngredient.textContent += ' '

        if(this._quantity != undefined){
            containerIngredient.textContent += this._quantity+' '
        }       


        if(this._unit != undefined){
            if(this._unit == 'grammes'){
                this._unit = 'g'
            }
            containerIngredient.textContent += this._unit
        }
        return containerIngredient
    }
}