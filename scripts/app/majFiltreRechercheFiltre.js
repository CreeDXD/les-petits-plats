class majFiltreRechercheFiltre{

    constructor(tabfiltre,infofiltre,filtreInput){

        this.algoRechercheFiltre(filtreInput,tabfiltre,infofiltre)       
    }

    // Fonction pour filtrer les éléments d'un tableau en fonction de l'input de l'utilisateur
    algoRechercheFiltre(filtreInput, tabfiltre, infofiltre) {
        filtreInput.addEventListener('keyup', e => {
            let liTabFiltre = Array.from(document.querySelectorAll(`${infofiltre} > .ul_filtres_contener > .ul_filtres > li`))
            let tabFiltre = liTabFiltre.map(element => element.innerHTML.trim())
            let filtreValue = filtreInput.value
    
            const filtresElementsToRemove = document.querySelector(`${infofiltre} > .ul_filtres_contener > .ul_filtres`)
            filtresElementsToRemove.remove()
    
            let majTab = tabfiltre.filter(element => new RegExp(this.transformString(filtreValue)).test(this.transformString(element)))
    
            let $wrapper = document.querySelector(`${infofiltre} > .ul_filtres_contener`)
            let wrapperUl = document.createElement('ul')
            wrapperUl.setAttribute('class', 'ul_filtres')
            wrapperUl.style.display = 'block'
            $wrapper.appendChild(wrapperUl)
            majTab.forEach(element => {
                let data = new Filtres_Model(element)
                let Template = new FilterCard(data)
                wrapperUl.appendChild(Template.createFilterCard())
            })
        })
    }
    

    
    transformString(e){
        let transformString = 
        e
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
        return transformString
    }
}