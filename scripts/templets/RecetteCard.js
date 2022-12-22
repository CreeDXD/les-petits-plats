class RecetteCard{
    constructor(data, dataIngredient){
        this.name = data.name
        this.time = data.time
        this.description = data.description
        this.dataIngredient = dataIngredient        
    }
    createRecetteCard(){
        const $wrapper = document.createElement('article')
        $wrapper.setAttribute('class','recette')

        const filtresCard = `
        <img src="assets/image_recette.png" alt="fond_gris">
        <div class="recette_entete display_flex_row">
            <h2>${this.name}</h2>
            <div class="recette_entete_time display_flex_row">
                <i class="fa-regular fa-clock"></i>
                <p>${this.time} min</p>
            </div>            
        </div>
                         
        `     
        $wrapper.innerHTML = filtresCard
   
        let containerRecette_info_ingredient = document.createElement('div')
        containerRecette_info_ingredient.setAttribute('class','recette_info_ingredient display_flex_row')
        let containerRecette_ingredient = document.createElement('div')
        containerRecette_ingredient.setAttribute('class','recette_ingredient')
        let containerRecette_info = document.createElement('div')
        containerRecette_info.setAttribute('class','recette_info')
        let contentRecette_info = document.createElement('p')
        contentRecette_info.textContent = this.description

        containerRecette_info.appendChild(contentRecette_info)
        containerRecette_info_ingredient.appendChild(containerRecette_ingredient)
        containerRecette_info_ingredient.appendChild(containerRecette_info)

        this.dataIngredient.forEach(element => {
            let Template = new RecetteIngredientCard(element)
            containerRecette_ingredient.appendChild(Template.createRecetteIngredientCard())
        })
        $wrapper.appendChild(containerRecette_info_ingredient)
        return $wrapper
    }
    
}