class majFiltreRecherchePrincipale{

    constructor(tabfiltre,infofiltre){
        
        this.algoRecherchePrincipale(tabfiltre,infofiltre)
    }    

    algoRecherchePrincipale(tabfiltre,infofiltre){

        // suppression des ingredients du tableau
        const filtresElementsToRemove = document.querySelector(`${infofiltre} > .ul_filtres_contener > .ul_filtres`)
        filtresElementsToRemove.remove()
        
        // affichage des elements du nouveau tableau 
        let $wrapper = document.querySelector(`${infofiltre} > .ul_filtres_contener`)
        let wrapperUl = document.createElement('ul')
        wrapperUl.setAttribute('class','ul_filtres')
        $wrapper.appendChild(wrapperUl)
        for(const element of tabfiltre){
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUl.appendChild(Template.createFilterCard())
        }
    }
    
}