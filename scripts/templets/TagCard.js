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
            let alltag = document.querySelectorAll('.petit_filtre > p')
            for(const element of alltag){
                let recette = document.querySelectorAll('.recette')
                for(const e of recette){
                    e.style.display = 'block'
                }

                let resetRecherche = new algoRecherche()

                let filtrePrincipaleValue = document.querySelector('.input_search_principal').value
                let recetteRecherchePrincipale = resetRecherche.algoRecherchePrincipale(filtrePrincipaleValue)

                let resetMajTag
                if(element.innerHTML != this.tagName){
                    

                    if(this.filtres == 'ingredients'){
                        resetMajTag =  resetRecherche.algoRechercheIngredient(element.innerHTML)
                    }
                    else if(this.filtres == 'appareils'){
                        resetMajTag = resetRecherche.algoRechercheAppareils(element.innerHTML)
                    }
                    else{
                        resetMajTag =  resetRecherche.algoRechercheUstensils(element.innerHTML)
                    }
                    
                }
                if(alltag.length == 1){
                    let tabIngredients = resetRecherche.algoRechercheMajFiltreIngredients(recetteRecherchePrincipale)
                    let tabAppareils = resetRecherche.algoRechercheMajFiltreAppareils(recetteRecherchePrincipale)
                    let tabUstensils = resetRecherche.algoRechercheMajFiltreUstensils(recetteRecherchePrincipale)
                }
                else{
                    let tabIngredients = resetRecherche.algoRechercheMajFiltreIngredients(resetMajTag)
                    let tabAppareils = resetRecherche.algoRechercheMajFiltreAppareils(resetMajTag)
                    let tabUstensils = resetRecherche.algoRechercheMajFiltreUstensils(resetMajTag)
                }
                
            }
            $wrapper.remove()
        })
        return $wrapper
    }
}