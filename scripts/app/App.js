class App {
    
    constructor() {
        this.filterWrapperIngredient = document.querySelector('.ingredients')
        this.filterWrapperAppareils = document.querySelector('.appareils')
        this.filterWrapperustensils = document.querySelector('.ustensils')
        this.filterWrapperRecettes = document.querySelector('.recettes_container')

        this.infoIngredients = '.ingredients'
        this.infoAppareils = '.appareils'
        this.infoUstensils = '.ustensils'
        this.tab
        this.liste = []
    }

     // on affiche les recettes
     recette(){

        // affichage des recette dans la section recette
        let affichage = new afficherRecette() 
        let metAffichage = affichage.creationAfficherRecette()

    }

    //recherche avec la barre de recherche principale
    algoRechercheInputPrincipale(){
        
        let filtrePrincipale  = document.querySelector('.input_search_principal')
        filtrePrincipale.addEventListener('keyup', e=>{
            let filtrePrincipaleValue = filtrePrincipale.value
            if(filtrePrincipaleValue != ''){
                let alltag = document.querySelector('.petit_filtre_container')
                alltag.innerHTML = ''
            }
            let newRecherche = new algoRecherche()
            let recetteRecherche = newRecherche.algoRecherchePrincipale(filtrePrincipaleValue)
            let tabIngredients = newRecherche.algoRechercheMajFiltreIngredients(recetteRecherche)
            let tabAppareils = newRecherche.algoRechercheMajFiltreAppareils(recetteRecherche)
            let tabUstensils = newRecherche.algoRechercheMajFiltreUstensils(recetteRecherche)
            
            //recuperation des tableaux 
            this.algoRechercheFiltres(tabIngredients,tabAppareils,tabUstensils)
            
        })
    }

    //recherche avec les tags au click des differents elements des filtres
    tag(){

        let tabfiltres =[
            document.querySelector('.ingredients > .ul_filtres_contener'),
            document.querySelector('.appareils > .ul_filtres_contener'),
            document.querySelector('.ustensils > .ul_filtres_contener')
        ] 
        const $wrapper = document.querySelector('.petit_filtre_container')
        

        for(const element of tabfiltres){
            element.addEventListener('click', e => {
                let alltag = document.querySelectorAll('.petit_filtre > p')
                let testTag = false
                for(const tagAfficher of alltag){
                    console.log(testTag,tagAfficher)
                    if(tagAfficher.innerHTML == e.target.innerHTML.trim()){
                        testTag = true
                    }
                    
                }

                let filtres = element.parentElement.classList[1]
                
                if(e.target.tagName == 'LI'){
                    let selectedElement = e.target.innerHTML.trim()
                    
                    if(testTag == false){                        

                        // filtre les recettes avec le tag choisi
                        let recetteRecherche
                        let newRecherche = new algoRecherche()
                        if(filtres == 'ingredients'){
                            recetteRecherche = newRecherche.algoRechercheIngredient(selectedElement)
                        }
                        else if(filtres == 'appareils'){
                            recetteRecherche = newRecherche.algoRechercheAppareils(selectedElement)
                        }
                        else{
                            recetteRecherche = newRecherche.algoRechercheUstensils(selectedElement)
                        }

                        let tabIngredients = newRecherche.algoRechercheMajFiltreIngredients(recetteRecherche)
                        let tabAppareils = newRecherche.algoRechercheMajFiltreAppareils(recetteRecherche)
                        let tabUstensils = newRecherche.algoRechercheMajFiltreUstensils(recetteRecherche)
                        
                        //recuperation des tableaux 
                        this.algoRechercheFiltres(tabIngredients,tabAppareils,tabUstensils)
            
                        // affichage du tag
                        let Template = new TagCard(selectedElement,filtres)
                        $wrapper.appendChild(Template.createTagCard())
                    }
                    
                }
            }            
        )}  
    }

    // on appelle la class filtre pour afficher les filtres
    filter(){

        // affichage des ingredient, des appareils et des ustensils dans les filtres
        new filtre(this.tabIngredient(),this.filterWrapperIngredient)
        new filtre(this.tabAppareil(),this.filterWrapperAppareils)
        new filtre(this.tabUstensile(),this.filterWrapperustensils)
    }
   
    // on mets à jour les elements des filtres (ingredients, appareils, ustensiles)
    algoRechercheFiltres(tabI,tabA,tabU){
        let tabIngredients,tabAppareils,tabUstensils
        if(tabI == undefined){
            tabIngredients = this.tabIngredient()
        }
        else{
            tabIngredients = tabI
        }

        if(tabA == undefined){
            tabAppareils = this.tabAppareil()
        }
        else{
            tabAppareils = tabA
        }

        if(tabU == undefined){
            tabUstensils = this.tabUstensile()
        }
        else{
            tabUstensils = tabU
        }
        //on recupère les inputs des differents filtres
        let filtreIngredientInput  = document.querySelector('.ingredients_input')
        let filtreAppareilInput  = document.querySelector('.appareils_input')
        let filtreUstensilInput  = document.querySelector('.ustensils_input')

        //on mets à jour les elements des differents filtres à chaque entre dans l'input
        new majFiltreRechercheFiltre(tabIngredients,this.infoIngredients,filtreIngredientInput)
        new majFiltreRechercheFiltre(tabAppareils,this.infoAppareils,filtreAppareilInput)
        new majFiltreRechercheFiltre(tabUstensils,this.infoUstensils,filtreUstensilInput)

    }

    //on appelle la fonction deroulementUpDown pour chaque filtre
    deroulementfiltre(){
        
        
        this.deroulementUpDown(this.infoIngredients)
        this.deroulementUpDown(this.infoAppareils)
        this.deroulementUpDown(this.infoUstensils)    
    }

    //on deroule et enroule au click des chevrons et à l'entre de l'input
    deroulementUpDown(data){
        //on recupère les chevrons du filtre selectioné
        const chevronDown = document.querySelector(`${data} .fa-chevron-down`)
        const chevronUp = document.querySelector(`${data} .fa-chevron-up`)

        //on recupère les container des filtres et des recettes pour modifier la position lors du click
        let filtre_container = document.querySelector('.filtre_container') 
        let container_recette = document.querySelector('.recettes_container')

        // on crée un tableau avec le nom des autres filtres 
        let otherfiltrescontainer = []

        if(data == '.ingredients'){
            otherfiltrescontainer = ['.appareils','.ustensils']
        }
        else if(data == '.appareils'){
            otherfiltrescontainer = ['.ingredients','.ustensils']
        }
        else{
            otherfiltrescontainer = ['.ingredients','.appareils']
        }

        // on déroule et enroule
        chevronDown.addEventListener('click', e =>{

            let ul_filtres_contener = document.querySelector(`${data} > .ul_filtres_contener`)             
            let ul_filtres_contener_children = document.querySelector(`${data} > .ul_filtres_contener > .ul_filtres`)             
            
            // on affiche le contener du filtre et on dispose le filtre en 'grid'
            ul_filtres_contener_children.style.display = "grid"
            container_recette.style.marginTop = "150px"
            filtre_container.style.position = "absolute"
            ul_filtres_contener.style.display = "block"

            // on enleve le chevron de déroulement et on affiche le chevron pour enrouler
            chevronUp.style.display = "block"
            chevronDown.style.display = "none"

            for(const element of otherfiltrescontainer){
                let filtres = document.querySelector(`${element} .ul_filtres_contener`)
                let otherChevronDown = document.querySelector(`${element} .fa-chevron-down`)
                let otherChevronUp = document.querySelector(`${element} .fa-chevron-up`)
                filtres.style.display = "none"
                otherChevronDown.style.display = "block"
                otherChevronUp.style.display = "none"
            }

        })
        chevronUp.addEventListener('click', e =>{

            let ul_filtres_contener = document.querySelector(`${data} > .ul_filtres_contener`) 
            
            // on cache le container du filtre pour masquer le container
            container_recette.style.marginTop = "0px"
            filtre_container.style.position = "relative"
            ul_filtres_contener.style.display = "none"

            // on enleve le chevron de déroulement et on affiche le chevron pour enrouler
            chevronUp.style.display = "none"
            chevronDown.style.display = "block"

        })

        // on affiche les elements en fonction de l'input
        let filtreInput  = document.querySelector(`${data}_input`)

        filtreInput.addEventListener('keyup',e => {

            let ul_filtres_contener = document.querySelector(`${data} > .ul_filtres_contener`)
            if(filtreInput.value != ''){
                chevronDown.style.display = "none"
                chevronUp.style.display = "block"
                ul_filtres_contener.style.display = "block"
                ul_filtres_contener.children[0].style.display = "block"
            }
            else{
                chevronDown.style.display = "block"
                chevronUp.style.display = "none"
                ul_filtres_contener.style.display = "none"
                ul_filtres_contener.children[0].style.display = "grid"
            }
            
        })
    }

    // on cree un tableau de tout les ingredients sans doublon
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

    // on cree un tableau de tout les appareils sans doublon
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

    // on cree un tableau de tout les ustensiles sans doublon
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