class App {
    static init(){

    }
    
    constructor() {
        
       console.log(this.tabApplience())
        // tabMedia.forEach(
        //     element => {
        //         // affichage des medias (image et vidéo)
        //         const selectedMedia = new Media(element)
        //         const Template = new MediaCard(selectedMedia)
        //         this.$mediaWrapper.appendChild(Template.createMediaCard())
        //     }
        // )
              
    }

    tabApplience(){
        let tab =[]
        let compt = 0
        let filteredTab
        recipes.forEach(element => {
            
            element.ingredients.forEach(e => {
                tab[compt] = e.ingredient
                compt++
            })
            filteredTab = tab.filter(
                (ele, index) => tab.indexOf(ele) === index
            );

        })
        const similarElements = filteredTab.filter(element1 => {
            return filteredTab.some(element2 => {
              // utilisez la méthode split() pour séparer les chaînes en tableaux de caractères
              const chars1 = element1.split("");
              const chars2 = element2.split("");
              // utilisez la méthode reduce() pour compter le nombre de différences entre les tableaux de caractères
              const differenceCount = chars1.reduce((acc, char, index) => {
                return char === chars2[index] ? acc : acc + 1;
              }, 0);
              // retournez vrai si le nombre de différences est égal à 1
              return differenceCount === 1;
            });
          });
        return similarElements
    }
    
}
const app = new App()
