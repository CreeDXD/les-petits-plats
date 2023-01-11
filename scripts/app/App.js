class App {
    
    constructor() {
        this.filterWrapperIngredient = document.querySelector('.ingredients')
        this.filterWrapperAppareils = document.querySelector('.appareils')
        this.filterWrapperUstensiles = document.querySelector('.ustensiles')
        this.filterWrapperRecettes = document.querySelector('.recettes_container')

        this.infoIngredients = '.ingredients'
        this.infoAppareils = '.appareils'
        this.infoUstensils = '.ustensiles'
        
    }

    filter(){
        // affichage des ingredient, des appareils et des ustensils dans les filtres

        new filtre(this.tabIngredient(),this.filterWrapperIngredient)
        new filtre(this.tabAppareil(),this.filterWrapperAppareils)
        new filtre(this.tabUstensile(),this.filterWrapperUstensiles)
       
        algoRecherche.init()

    }
   
    majFiltres(){
        
        let filtreIngredientInput  = document.querySelector('.ingredient_input')
        let filtreAppareilInput  = document.querySelector('.appareils_input')
        let filtreUstensilInput  = document.querySelector('.ustensils_input')

        new algoRechercheFiltre(this.tabIngredient(),filtreIngredientInput,this.infoIngredients)
        new algoRechercheFiltre(this.tabAppareil(),filtreAppareilInput,this.infoAppareils)
        new algoRechercheFiltre(this.tabUstensile(),filtreUstensilInput,this.infoUstensils)
    }

    deroulementfiltre(){
        
        
        this.deroulementUpDown(this.infoIngredients)
        this.deroulementUpDown(this.infoAppareils)
        this.deroulementUpDown(this.infoUstensils)    
    }

    deroulementUpDown(data){
        const chevronDown = document.querySelector(`${data} .fa-chevron-down`)
        const chevronUp = document.querySelector(`${data} .fa-chevron-up`)
        chevronDown.addEventListener('click', e =>{

            let ul_filtres_contener = document.querySelector(`${data} > .ul_filtres_contener`)            
            ul_filtres_contener.style.display = "block"
            chevronUp.style.display = "block"
            chevronDown.style.display = "none"

        })
        chevronUp.addEventListener('click', e =>{
            let ul_filtres_contener = document.querySelector(`${data} > .ul_filtres_contener`)            

            ul_filtres_contener.style.display = "none"
            chevronUp.style.display = "none"
            chevronDown.style.display = "block"

        })
    }

    recette(){

        // affichage des recette dans la section recette
        
        recipes.forEach(element =>{
            let data = new Recette_Model(element)
            let dataIngredient = element.ingredients            
            let Template = new RecetteCard(data,dataIngredient)
            this.filterWrapperRecettes.appendChild(Template.createRecetteCard())
            
        })

    }

    tabIngredient(){
        let tab =[]
        let compt = 0
        let filteredTab
        recipes.forEach(element => {
            element.ingredients.forEach(e => {
                tab[compt] = e.ingredient
                compt++
            })
            filteredTab = tab.filter(
                (ele, index) => tab.indexOf(ele) == index
            );

        })
        
        return filteredTab.sort()
    }

    tabAppareil(){
        let tab = []
        let compt = 0
        let filteredTab
        recipes.forEach(element => {
            tab[compt] = element.appliance
            compt++
            
            filteredTab = tab.filter(
                (ele, index) => tab.indexOf(ele) == index
            );

        })
        return filteredTab.sort()
    }

    tabUstensile(){
        let tab =[]
        let compt = 0
        let filteredTab
        recipes.forEach(element => {
            element.ustensils.forEach(e => {
                tab[compt] = e
                compt++
            })
            filteredTab = tab.filter(
                (ele, index) => tab.indexOf(ele) == index
            );

        })
        
        return filteredTab.sort()
    }

    
    
    
}