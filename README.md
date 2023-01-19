<!-- projet 7 openclassrooms: Développez un algorithme de recherche en JavaScript -->
étapes:
-structures et css
-crées les differentes parties du sites (filtres,recettes,filtres_tags)
    --filtres{
        _tableau des ingrediants en elevant des doublons
        _modification de recipes.js pour enlever les doublons écris differaments
        _creation de la carte filtres pour les 3 filtres
        _affichage de toute les recettes
    } 

prepa-algo:
-
-crées l'algo 1 et l'implémenter{
    --les boucles natives (while, for...)
    --utiliser regex pour trier les elements à partir du filtre
    <!-- je ne suis pas sense trier les recettes depuis les inputes filtres  -->

}
-crées l'algo 2 et l'implémenter  {
    programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map, reduce)
}


<!-- Où j'en suis: 
    --changer les sort() et index() pour des boucles natives
    --lors de la fermeture d'un tag l'interface doit se mettre à jour
    --lors de la creation d'un tag l'interface doit se mettre à jour 
        *ajouter rechercheAlgo class avec addevent au clique du tag*
    --mettre a jour les filtres lors de recherche principale
    --ajouter carte tag au click 
    --utilisation input_filtres sans dérouler afficher element correspondant
    --déroulement des filtres
    --algo recherche principale mettre à jour les filtres
    --plus ou moins fini le css 
-->

<!-- problèmes:
    -- la maj des filtres pour la recherche avec input principale ne fonctionne plus(ajout d'un container)/elle se mets à jour avec 1 temps de retard
        -x- solution recuperaction des elements restants avec un tab
    -- quand je déroule filtre et que je commence une recherche le filtre se    reenroule 
    --les cartes recettes on pas toutes les mêmes dimentions
    -- quand on reduit la taille de l'ecran le texte dépasse de la carte
-->
 
<!-- Question: 
    --est-ce que j'ai le droit de mettre des infos caché pour les utilisés en js après
    --est-ce que je peux utilisé index et sort pour trier mon tableau
-->

<!-- à ajouter
    algo pour trier à la place de sort()
        function triAlphabetique(mots) {
            for (let i = 1; i < mots.length; i++) {
                let motATrier = mots[i];
                let j = i - 1;
                while (j >= 0 && mots[j] > motATrier) {
                mots[j + 1] = mots[j];
                j--;
                }
                mots[j + 1] = motATrier;
            }
            return mots;
        }

    algo pour enlever les doublons à la place de filter()
        function enleverDoublons(mots) {
            let resultat = [];
            for (let i = 0; i < mots.length; i++) {
                if (!resultat.includes(mots[i])) {
                resultat.push(mots[i]);
                }
            }
            return resultat;
        }
 -->