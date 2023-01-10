class algoRechercheFiltre{
    // static init(tabIngredient,tabAppareil,tabUstensile){
    //     let filtreIngredient  = document.querySelector('.ingredient_input')
    //     let filtreAppareil  = document.querySelector('.appareils_intput')
    //     let filtreUstensils  = document.querySelector('.ustensils_intput')
    //     let tabfiltre = [filtreIngredient,filtreAppareil,filtreUstensils]
    //     for(const element of tabfiltre){
    //         element.addEventListener('keyup', e=>{

    //             let filtreValue = element.value
    //             new algoRechercheFiltre(filtreValue,tabIngredient,tabAppareil,tabUstensile)
    //         })
    //     }
       
    // }

    constructor(tabfiltre,filtreInput,infofiltre){
        filtreInput.addEventListener('keyup', e=>{

            let filtreValue = filtreInput.value
            this.algoRechercheFiltreIngredient(filtreValue,tabfiltre,infofiltre)
        })

    }

    algoRechercheFiltreIngredient(filtreValue,tabfiltre,infofiltre){
       
        //  suppression des ingredients du tableau
        const filtresElementsToRemove = document.querySelector(`${infofiltre} > .ul_filtres`)
        filtresElementsToRemove.remove()
        
        // creation du tableau des ingredients qui correspond à l'input
        let i = 0
        let majTab = []
        for(const element of tabfiltre){
            let rexfiltreValue = new RegExp( this.transformString(filtreValue) ).test(this.transformString(element))            
           
            if(rexfiltreValue == true){
                majTab[i] = element
                i++
            }    
        } 
        // affichage des elements du nouveau tableau 
        let wrapperUl = document.createElement('ul')
        wrapperUl.setAttribute('class','ul_filtres')
        let $wrapper = document.querySelector(infofiltre)
        $wrapper.appendChild(wrapperUl)
        for(const element of majTab){
            let data = new Filtres_Model(element)
            let Template = new FilterCard(data)            
            wrapperUl.appendChild(Template.createFilterCard())
        } 
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