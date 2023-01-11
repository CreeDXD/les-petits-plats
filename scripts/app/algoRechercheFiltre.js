class algoRechercheFiltre{

    constructor(tabfiltre,filtreInput,infofiltre){
        filtreInput.addEventListener('keyup', e=>{

            let filtreValue = filtreInput.value
            this.algoRechercheFiltreIngredient(filtreValue,tabfiltre,infofiltre)
        })

    }

    algoRechercheFiltreIngredient(filtreValue,tabfiltre,infofiltre){
       
        //  suppression des ingredients du tableau
        const filtresElementsToRemove = document.querySelector(`${infofiltre} > .ul_filtres_contener > .ul_filtres`)
        console.log(filtresElementsToRemove)
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
        let $wrapper = document.querySelector(`${infofiltre} > .ul_filtres_contener`)
        console.log($wrapper)
        let wrapperUl = document.createElement('ul')
        wrapperUl.setAttribute('class','ul_filtres')
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