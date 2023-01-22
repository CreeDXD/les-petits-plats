class algoRecherche{
    
    constructor(){
        this.recette = document.querySelectorAll('.recette')
        let messageErreur = new App()
        messageErreur.messageErreur()
    }

    // algo pour mettre à jour les recettes avec l'input filtre ingredient
    algoRechercheIngredient(filtrePrincipaleValue){
        


        //déclaration les variables
        let rexfiltreIngredientValue;
        let restElement = [];
        let i = 0;

        // Pour chaque élément de la recette
        this.recette.forEach(element => {
            let testPrincipale = false
            // Vérifie si l'élément est affiché
            if (window.getComputedStyle(element).display === 'block') {
                const valueIngredientRecette = element.querySelectorAll(".recette_ingredient > ul> li")
                // Pour chaque ingrédient de la recette
                valueIngredientRecette.forEach(ele => {
                    rexfiltreIngredientValue = new RegExp(this.transformString(filtrePrincipaleValue)).test(this.transformString(ele.getAttribute('name')))
                    if (filtrePrincipaleValue == ele.getAttribute('name')) {
                        testPrincipale = true
                    }

                    // Si l'ingrédient principal n'est pas trouvé
                    if (testPrincipale != true) {
                        element.style.display = 'none'
                    }
                    // Si l'ingrédient principal est trouvé
                    if (testPrincipale == true) {
                        element.style.display = 'block'
                        restElement[i] = element
                        i++
                    }
                })
            }
        })
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

        // déclaration des variables
        let restElement = []
        let i = 0

        this.recette.forEach(element => {
            let testPrincipale = false

            // seulement parmi les recettes qui sont affichées
            if(window.getComputedStyle(element).display == 'block'){ 

                // vérification ustensils recette
                element.querySelectorAll(".ustensils_info > p").forEach(ele => {

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
                })  
            }
        })
        return restElement

    }

    // algo pour mettre à jour les recettes avec l'input principale
    algoRecherchePrincipale(filtrePrincipaleValue){

        // déclare les variables
        let rexfiltrePrincipaleValue
        let rexfiltreIngredientValue 
        let rexfiltreDescriptionValue 
        let restElement = []
        let i = 0

        this.recette.forEach(element => {
            let testPrincipale = false

            // vérification titre recette
            const valuePrincipaleRecette = element.querySelector(".recette_entete > h2").innerHTML
            rexfiltrePrincipaleValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(valuePrincipaleRecette))
            if(rexfiltrePrincipaleValue == true){
                testPrincipale = true
            }

            // vérification ingrédients recette
            element.querySelectorAll(".recette_ingredient > ul> li").forEach(ele => {
                rexfiltreIngredientValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(ele.getAttribute('name')))
                if(rexfiltreIngredientValue == true){
                    testPrincipale = true
                }                                           
            })                

            // vérification descriptions recette
            const valueDescriptionRecette = element.querySelector(".recette_info > p").innerHTML    
            rexfiltreDescriptionValue = new RegExp( this.transformString(filtrePrincipaleValue) ).test(this.transformString(valueDescriptionRecette))
            if(rexfiltreDescriptionValue == true){
                testPrincipale = true
                console.log(testPrincipale)
            } 

            //on cache les éléments qui ne sont pas dans la recherche à partir de 3 entrées
            if(filtrePrincipaleValue.length >= 3 ){
                if( testPrincipale != true ){
                    element.style.display = 'none'
                }
            }            

            if(testPrincipale == true){
                element.style.display = 'block'
                restElement[i] = element
                i++
                console.log(i)
            }    
        })
        return restElement

    }

    // algo pour mettre à jour les filtres ingredients
    algoRechercheMajFiltreIngredients(restElement){  
        // création du tableau de tous les ingrédients des recettes restantes
        let tabIngredients = []
        let i = 0

        restElement.forEach(ele => {
            let ingredients = ele.querySelectorAll('li')
            ingredients.forEach(e => {
                tabIngredients[i] = e.getAttribute('name')
                i++
            })
        })

        // on enlève les doublons et on trie par ordre alphabétique
        let tabIngredientsFiltered = [...new Set(tabIngredients)].sort()

        new majFiltreRecherchePrincipale(tabIngredientsFiltered, '.ingredients')
        return tabIngredientsFiltered

    }

    // algo pour mettre à jour les filtres appareils
    algoRechercheMajFiltreAppareils(restElement){  
        // on crée le tableau des appareils des recettes restantes
        let tabAppareils = []
        let i = 0

        restElement.forEach(ele => {
            let appareils = ele.querySelectorAll('.appliance_info')
            appareils.forEach(e => {
                tabAppareils[i] = e.innerHTML
                i++
            })
        })

        // on enlève les doublons et on trie par ordre alphabetique
        let tabAppareilsFiltered = [...new Set(tabAppareils)].sort()

        new majFiltreRecherchePrincipale(tabAppareilsFiltered, '.appareils')
        return tabAppareilsFiltered

    }

    // algo pour mettre à jour les filtres ustensils
    algoRechercheMajFiltreUstensils(restElement){  
        
        // on cree une liste pour les utensils
        let tabUstensils = []
        let i = 0
    
        restElement.forEach(element => {
            let ustensilsElement = element.querySelectorAll('.ustensils_info > p')
            ustensilsElement.forEach(e => {
                tabUstensils[i] = e.innerHTML
                i++
            })
        })
    
        // on enleve les doublons et on tri par ordre alphabetique
        let tabUstensilsFiltered = [...new Set(tabUstensils)].sort()
    
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