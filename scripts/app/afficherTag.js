class tag{
    constructor(){

    }
    createTag(){
        let tabfiltres =[
            document.querySelector('.ingredients > .ul_filtres_contener'),
            document.querySelector('.appareils > .ul_filtres_contener'),
            document.querySelector('.ustensils > .ul_filtres_contener')
        ] 
        const $wrapper = document.querySelector('.petit_filtre_container')
        let testTag = false

        for(const element of tabfiltres){
            element.addEventListener('click', e => {
                let alltag = document.querySelectorAll('.petit_filtre > p')
                for(const tagAfficher of alltag){
                    if(tagAfficher.innerHTML == e.target.innerHTML.trim()){
                        testTag = true
                    }
                    else{
                        testTag = false
                    }
                }

                console.log(element.parentElement.classList[1])
                if(e.target.tagName == 'LI'){
                    let selectedElement = e.target.innerHTML.trim()
                    
                    if(testTag == false){
                        let Template = new TagCard(selectedElement)
                        $wrapper.appendChild(Template.createTagCard())
                        let newRecherche = new algoRecherche()
                        
                    }
                    
                }
            }            
        )}  
    }
}