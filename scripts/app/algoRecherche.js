class algoRecherche{
    
    constructor(){
        this.recette = document.querySelectorAll('.recette')
        let messageErreur = new App()
        messageErreur.messageErreur()
    }

    // algo pour mettre à jour les recettes avec l'input filtre ingredient
    algoRechercheIngredient(filtrePrincipaleValue){

        //déclaration les variables
        let rexfiltreIngredientValue 
        let restElement = []
        let i = 0

        for(const element of this.recette){
            let testPrincipale = false

            // seulement parmis les recettes qui sont affiché
            if(window.getComputedStyle(element).display == 'block'){ 

                // verification ingredients recette
                const valueIngredientRecette = element.querySelectorAll(".recette_ingredient > ul> li")
                for(const ele of valueIngredientRecette){
                    rexfiltreIngredientValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(ele.getAttribute('name')))
                    if(filtrePrincipaleValue == ele.getAttribute('name')){
                        testPrincipale = true
                    }
                    
                    if( testPrincipale != true ){
                        element.style.display = 'none'
                    }      
                    if(testPrincipale == true){
                        element.style.display = 'block'
                        restElement[i] = element
                        i++
                    }                                    
                }  
            }
        }
        return restElement
    }

    // algo pour mettre à jour les recettes avec l'input filtre appareils
    algoRechercheAppareils(filtrePrincipaleValue){

        //déclaration les variables
        let restElement = []
        let i = 0

        for(const element of this.recette){
            let testPrincipale = false

            // seulement parmis les recettes qui sont affiché
            if(window.getComputedStyle(element).display == 'block'){ 

                // verification appareils recette
                const valueAppareilsRecette = element.querySelectorAll(".appliance_info")
                for(const ele of valueAppareilsRecette){
                    
                    if(filtrePrincipaleValue == ele.innerHTML){
                        testPrincipale = true
                    }   
                    
                    if( testPrincipale != true ){
                        element.style.display = 'none'
                    }      
                    if(testPrincipale == true){
                        element.style.display = 'block'
                        restElement[i] = element
                        i++
                    }                                    
                }  
            }
        }
        return restElement
    }

    // algo pour mettre à jour les recettes avec l'input filtre ustensils
    algoRechercheUstensils(filtrePrincipaleValue){

        //déclaration les variables
        let restElement = []
        let i = 0

        for(const element of this.recette){
            let testPrincipale = false
            
            // seulement parmis les recettes qui sont affiché
            if(window.getComputedStyle(element).display == 'block'){ 

                // verification ustensils recette
                const valueUstensilsRecette = element.querySelectorAll(".ustensils_info > p")
                for(const ele of valueUstensilsRecette){
                    
                    if(filtrePrincipaleValue == ele.innerHTML){
                        testPrincipale = true
                    }   
                    
                    if( testPrincipale != true ){
                        element.style.display = 'none'
                    }      
                    if(testPrincipale == true){
                        element.style.display = 'block'
                        restElement[i] = element
                        i++
                    }                                    
                }  
            }
        }
        return restElement
    }

    // algo pour mettre à jour les recettes avec l'input principale
    algoRecherchePrincipale(filtrePrincipaleValue){

        //déclare les variables
        let rexfiltrePrincipaleValue
        let rexfiltreIngredientValue 
        let rexfiltreDescriptionValue 
        let restElement = []
        let i = 0
        
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
            rexfiltreDescriptionValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(valueDescriptionRecette))
            if(rexfiltreDescriptionValue == true){
                testPrincipale = true
            } 

            //on cache les elements qui ne sont pas dans la recherche à partir de 3 entrées
            if(filtrePrincipaleValue.length >= 3 ){
                if( testPrincipale != true ){
                    element.style.display = 'none'
                }
            }            
             
            if(testPrincipale == true){
                element.style.display = 'block'
                restElement[i] = element
                i++
            }    
        }
        return restElement
    }

    // algo pour mettre à jour les filtres ingredients
    algoRechercheMajFiltreIngredients(restElement){  
        // creation du tableau de tout les ingredients des recettes restantes
        let tabIngredients = []
        let i = 0

        for(const ele of restElement){
            let ingredients = ele.querySelectorAll('li')
            for(const e of ingredients){
                tabIngredients[i] = e.getAttribute('name')
                i++
            }
        }

        // on enleve les doublons et on tris par ordre alphabetique
        let tabIngredientsFiltered = tabIngredients.filter(
            (ele, index) => tabIngredients.indexOf(ele) == index
        ).sort()
        
        new majFiltreRecherchePrincipale(tabIngredientsFiltered, '.ingredients')
        return tabIngredientsFiltered
    }

    // algo pour mettre à jour les filtres appareils
    algoRechercheMajFiltreAppareils(restElement){  
        
        //on cree le tableau des appareils des recettes restantes
        let tabAppareils = []
        let i = 0

        for(const ele of restElement){
            
            let appareils = ele.querySelectorAll('.appliance_info')
            for(const e of appareils){

                tabAppareils[i] = e.innerHTML
                i++
            }
        }
        
        // on enleve les doublons et on tris par ordre alphabetique
        let tabAppareilsFiltered = tabAppareils.filter(
            (ele, index) => tabAppareils.indexOf(ele) == index
        ).sort()
        
        new majFiltreRecherchePrincipale(tabAppareilsFiltered, '.appareils')
        return tabAppareilsFiltered
    }

    // algo pour mettre à jour les filtres ustensils
    algoRechercheMajFiltreUstensils(restElement){  
        
        //on cree le tableau des appareils
        let tabUstensils = []
        let i = 0

        for(const element of restElement){
            let ustensilsElement = element.querySelectorAll('.ustensils_info > p')
            for(const e of ustensilsElement){

                tabUstensils[i] = e.innerHTML
                i++
            }
        }

        // on enleve les doublons et on tris par ordre alphabetique
        let tabUstensilsFiltered = tabUstensils.filter(
            (ele, index) => tabUstensils.indexOf(ele) == index
        ).sort()
        
        new majFiltreRecherchePrincipale(tabUstensilsFiltered, '.ustensils')
        return tabUstensilsFiltered
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