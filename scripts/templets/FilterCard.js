//creation des Portraits de chaque Photographes dans l'index
class FilterCard {
    constructor(filtres) {
        this.filtres = filtres.ingredient
    }

    createFilterCard() {
        const $wrapper = document.createElement('li')

        const filtresCard = `
            ${this.filtres}              
        `
        
        $wrapper.innerHTML = filtresCard
        return $wrapper
    }
}
