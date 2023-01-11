class algoRecherche{
    static init(){
        let filtrePrincipale  = document.querySelector('.input_search_principal')
        filtrePrincipale.addEventListener('keyup', e=>{

            let filtrePrincipaleValue = filtrePrincipale.value
            new algoRecherche(filtrePrincipaleValue)
        })
    }
   
    constructor(filtrePrincipaleValue){
        this.recette = document.querySelectorAll('.recette')
        this.filterWrapperIngredient = document.querySelector('.ingredients')
        this.filterWrapperAppareil = document.querySelector('.appareils')
        this.filterWrapperUstensils = document.querySelector('.ustensiles')
        this.algoRecherchePrincipale(filtrePrincipaleValue)
        this.algoRechercheMajFiltreIngredients()
        this.algoRechercheMajFiltreAppareils()
        this.algoRechercheMajFiltreUstensils()
    }

    algoRecherchePrincipale(filtrePrincipaleValue){
        let rexfiltrePrincipaleValue
        let rexfiltreIngredientValue

        if(filtrePrincipaleValue.length >= 3 ){
            for(const element of this.recette){
                let testPrincipale = false
                // verification titre recette
                const valuePrincipaleRecette = element.querySelector(".recette_entete > h2").innerHTML
                rexfiltrePrincipaleValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(valuePrincipaleRecette))
                if(rexfiltrePrincipaleValue == true){
                    testPrincipale = true
                }

                // verification ingredients recette
                const valueIngredientRecette = element.querySelectorAll(".recette_ingredient > ul> li")
                for(const ele of valueIngredientRecette){
                    rexfiltreIngredientValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(ele.getAttribute('name')))
                    if(rexfiltreIngredientValue == true){
                        testPrincipale = true
                    }    
                                       
                }                
                
                // verification descriptions recette
                const valueDescriptionRecette = element.querySelector(".recette_info > p").innerHTML    
                rexfiltreIngredientValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(valueDescriptionRecette))
                if(rexfiltreIngredientValue == true){
                    testPrincipale = true
                } 

                //on enleve les elements qui ne sont pas dans la recherche
                if( testPrincipale != true ){
                    element.remove()
                }  
                 
            }
        }
        // on enleve tout les info du filtre ingredient, appareil et ustensils
        const ingredientsRemove = document.querySelector('.ingredients > ul')        
        const appareilsRemove = document.querySelector('.appareils > ul')        
        const ustensilsRemove = document.querySelector('.ustensiles > ul')        
        ingredientsRemove.remove()
        appareilsRemove.remove()
        ustensilsRemove.remove()
    }

    // algo pour mettre à jour les filtres ingredients appareils et ustensils
    algoRechercheMajFiltreIngredients(){  
        
        //on cree le tableau des ingredients
        let ingredientsElement = document.querySelectorAll('.recette_ingredient > ul >li ')
        let tabIngredients = []
        let i = 0
        for(const element of ingredientsElement){
            tabIngredients[i] = element.getAttribute('name')
            i++
        }
        let tabIngredientsFiltered = tabIngredients.filter(
            (ele, index) => tabIngredients.indexOf(ele) == index
        ).sort()
        
        let wrapperUlIngredient = document.createElement('ul')
        wrapperUlIngredient.setAttribute('class','ul_filtres')
        this.filterWrapperIngredient.appendChild(wrapperUlIngredient)
        for(const element of tabIngredientsFiltered){
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlIngredient.appendChild(Template.createFilterCard())
        }
    }

    algoRechercheMajFiltreAppareils(){  
        
        //on cree le tableau des appareils
        let appareilsElement = document.querySelectorAll('.appliance_info')

        let tabAppareils = []
        let i = 0
        for(const element of appareilsElement){
            tabAppareils[i] = element.innerHTML
            i++
        }
        let tabAppareilsFiltered = tabAppareils.filter(
            (ele, index) => tabAppareils.indexOf(ele) == index
        ).sort()
        
        let wrapperUlAppareil = document.createElement('ul')
        wrapperUlAppareil.setAttribute('class','ul_filtres')
        this.filterWrapperAppareil.appendChild(wrapperUlAppareil)
        for(const element of tabAppareilsFiltered){
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlAppareil.appendChild(Template.createFilterCard())
        }
    }

    algoRechercheMajFiltreUstensils(){  
        
        //on cree le tableau des appareils
        let ustensilsElement = document.querySelectorAll('.ustensils_info > p')
        let tabUstensils = []
        let i = 0
        for(const element of ustensilsElement){
            tabUstensils[i] = element.innerHTML
            i++
        }
        let tabUstensilsFiltered = tabUstensils.filter(
            (ele, index) => tabUstensils.indexOf(ele) == index
        ).sort()
        
        let wrapperUlUstensils = document.createElement('ul')
        wrapperUlUstensils.setAttribute('class','ul_filtres')
        this.filterWrapperUstensils.appendChild(wrapperUlUstensils)
        for(const element of tabUstensilsFiltered){
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUlUstensils.appendChild(Template.createFilterCard())
        }
    }
    
    //transfrom une chaine de charactère pour quel soit en minuscule et sans accent
    transformString(e){
        let transformString = 
        e
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
        return transformString
    }
}