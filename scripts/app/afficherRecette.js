class afficherRecette{
    constructor(){
    }

    creationAfficherRecette(){
        let filterWrapperRecettes = document.querySelector('.recettes_container') 

        recipes.forEach(element =>{
            let data = new Recette_Model(element)
            let dataIngredient = element.ingredients            
            let Template = new RecetteCard(data,dataIngredient)
            filterWrapperRecettes.appendChild(Template.createRecetteCard()) 
        })
    }
}