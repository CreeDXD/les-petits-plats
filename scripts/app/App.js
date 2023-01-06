class App {
    
    constructor() {
        this.filterWrapperIngredient = document.querySelector('.ingredients')
        this.filterWrapperAppareils = document.querySelector('.appareils')
        this.filterWrapperUstensiles = document.querySelector('.ustensiles')
        this.filterWrapperRecettes = document.querySelector('.recettes_container')
    }

    filter(){

        // affichage des ingredient dans le filtre ingredient
        const tabIngredient = this.tabIngredient()
        let wrapperUlIngredient = document.createElement('ul')
        wrapperUlIngredient.setAttribute('class','ul_filtres')
        this.filterWrapperIngredient.appendChild(wrapperUlIngredient)
        tabIngredient.forEach(element => {
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlIngredient.appendChild(Template.createFilterCard())
        })     
        
        // affichage des appareils dans le filtre appareils Appareil
        const tabAppareil = this.tabAppareil()
        let wrapperUlAppareil = document.createElement('ul')
        wrapperUlAppareil.setAttribute('class','ul_filtres')
        this.filterWrapperAppareils.appendChild(wrapperUlAppareil)
        tabAppareil.forEach(element => {
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlAppareil.appendChild(Template.createFilterCard())
        }) 

        // affichage des ustensiles dans le filtre ustensiles
        const tabUstensile = this.tabUstensile()
        let wrapperUlUstensile = document.createElement('ul')
        wrapperUlUstensile.setAttribute('class','ul_filtres')
        this.filterWrapperUstensiles.appendChild(wrapperUlUstensile)
        tabUstensile.forEach(element => {
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlUstensile.appendChild(Template.createFilterCard())
        })  
        algoRecherche.init()
        
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