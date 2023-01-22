class filtre{
    constructor(tab,wrapperWrapper){
        this.creationContenuFiltre(tab,wrapperWrapper)
    }

    creationContenuFiltre(tab,wrapperWrapperContener){
        
        // affichage des elements dans du filtre 
        let wrapperWrapper = document.createElement('div')
        wrapperWrapper.setAttribute('class','ul_filtres_contener')
        let wrapperUl = document.createElement('ul')
        wrapperUl.setAttribute('class','ul_filtres')
        wrapperWrapper.appendChild(wrapperUl)
        wrapperWrapperContener.appendChild(wrapperWrapper)
        tab.forEach(element => {
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUl.appendChild(Template.createFilterCard())
        })     
    }
}