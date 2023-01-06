class algoRecherche{
    static init(){
        let filtrePrincipale  = document.querySelector('.input_search_principal')
        filtrePrincipale.addEventListener('change', e=>{

            let filtrePrincipalevalue = filtrePrincipale.value
            new algoRecherche(filtrePrincipalevalue)
        })
    }
   
    constructor(filtrePrincipalevalue){
        this.algoRecherche(filtrePrincipalevalue)
    }

    algoRecherche(filtrePrincipalevalue){
        let recette = document.querySelectorAll('.recette')
        let rexfiltrePrincipaleValue
        let rexfiltreIngredientValue

        if(filtrePrincipalevalue.length >= 3 ){
            for(const element of recette){
                let testPrincipale = false
                const valuePrincipaleRecette = element.querySelector(".recette_entete > h2").innerHTML
                const valueIngredientRecette = element.querySelectorAll(".recette_ingredient > ul> li")
                rexfiltrePrincipaleValue = new RegExp( this.transformString(filtrePrincipalevalue) ).test(this.transformString(valuePrincipaleRecette))

                for(const ele of valueIngredientRecette){
                    rexfiltreIngredientValue = new RegExp( this.transformString(filtrePrincipalevalue) ).test(this.transformString(ele.getAttribute('name')))
                    if(rexfiltreIngredientValue == true || rexfiltrePrincipaleValue == true){
                        testPrincipale = true
                    }                       
                }
                if( testPrincipale != true ){
                    element.remove()
                }   
            }
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