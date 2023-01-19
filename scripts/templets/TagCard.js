class TagCard{
    constructor(data,filtres){
        this.tagName = data
        this.filtres = filtres
    }

    createTagCard(){
        const $wrapper = document.createElement('div')
        $wrapper.setAttribute('class','petit_filtre display_flex_row')
        
        let nameTag = document.createElement('p')        
        nameTag.innerHTML = this.tagName
        
        let closeTag = document.createElement('i')
        closeTag.setAttribute('class','fa-regular fa-circle-xmark')
        closeTag.setAttribute('name',this.filtres)
        
        if(this.filtres == 'ingredients'){
            $wrapper.style.backgroundColor = '#3282F7';
        }
        else if(this.filtres == 'appareils'){
            $wrapper.style.backgroundColor = '#68D9A4';
        }
        else{
            $wrapper.style.backgroundColor = '#ED6454';
        }
        
        $wrapper.appendChild(nameTag)
        $wrapper.appendChild(closeTag)

        // retirer un tag
        closeTag.addEventListener('click', e =>{
            let alltag = document.querySelectorAll('.petit_filtre')
            let recette = document.querySelectorAll('.recette')

            let tabAllTag = []
            let i = 0
            // on recupère la valeur à l'interieur de la balise p
            for(const ele of alltag){
                tabAllTag[i] = {
                    key:ele.querySelector('i').getAttribute('name'), 
                    value:ele.querySelector('p').innerHTML
                }
                i++
            }
            
            // on enlève le tag selectioné du tableau
            for(let i = 0; i < tabAllTag.length; i++){
                if(tabAllTag[i].value === this.tagName){
                    tabAllTag.splice(i,1)
                }
            }
            for(let e of tabAllTag){
                console.log(e)
            }

            // on remet toute les recettes en display
            for(const e of recette){
                e.style.display = 'block'
            }
            let resetRecherche = new algoRecherche()
            let filtrePrincipaleValue = document.querySelector('.input_search_principal').value
            let recetteRecherchePrincipale = resetRecherche.algoRecherchePrincipale(filtrePrincipaleValue)
            let tabIngredients, tabAppareils, tabUstensils

            //on affine les recettes avec tout les tags sauf celui enlevé
            for(const element of tabAllTag){
                let resetMajTag
                if(element.key == 'ingredients'){
                    resetMajTag =  resetRecherche.algoRechercheIngredient(element.value)
                }
                else if(element.key == 'appareils'){
                    resetMajTag = resetRecherche.algoRechercheAppareils(element.value)
                }
                else{
                    resetMajTag =  resetRecherche.algoRechercheUstensils(element.value)
                }  
                tabIngredients = resetRecherche.algoRechercheMajFiltreIngredients(resetMajTag)
                tabAppareils = resetRecherche.algoRechercheMajFiltreAppareils(resetMajTag)
                tabUstensils = resetRecherche.algoRechercheMajFiltreUstensils(resetMajTag)
            
                
            }
            if(tabAllTag.length == '0'){
                tabIngredients = resetRecherche.algoRechercheMajFiltreIngredients(recetteRecherchePrincipale)
                tabAppareils = resetRecherche.algoRechercheMajFiltreAppareils(recetteRecherchePrincipale)
                tabUstensils = resetRecherche.algoRechercheMajFiltreUstensils(recetteRecherchePrincipale)
            }
            //recuperation des tableaux 
            let appPrincipal = new App()
            appPrincipal.algoRechercheFiltres(tabIngredients,tabAppareils,tabUstensils)
            
            $wrapper.remove()
        })
        return $wrapper
    }
}