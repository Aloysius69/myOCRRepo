/* 
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web


// Affichage initial : on fait une boucle sur tous les liens pour les afficher
listeLiens.forEach(function (l)
{
    ajoutLien(l.titre, l.auteur, l.url);
});

// Si le bouton "Ajouter un lien" est cliqué, le formulaire apparaît
document.getElementById("ajouterUnLien").addEventListener("click", function () 
{
    document.getElementById("ajouterUnLien").style.display = "none";
    document.getElementById("ajouter").style.display = "block";
});

// Si le bouton de submit est cliqué, l'url saisie est testée et complétée par http:// si besoin
document.getElementById("validerAjouter").addEventListener("click", function () 
{   
    var url = document.getElementById("url").value;
    document.getElementById("url").value = testUrl(url);
});

// test de la validité de l'url
function testUrl(url)
{
    var regexp = new RegExp("^(http:\/\/).+");
    console.log(url);
    if (regexp.test(url))
    {
        return url;
    } else {
        return "http://" + url;
    }
}


/*
* Si le formulaire est soumis (bouton "Ajouter" cliqué et saisie valide) : 
**** Le formulaire disparaît
**** Le nouveau lien est ajouté
**** La soumission du formulaire est bloquée (pour que la page ne soit pas rafraîchie)
*/
document.getElementById("formulaireAjout").addEventListener("submit", function (event) 
{
    
    document.getElementById("ajouter").style.display = "none";
    document.getElementById("ajouterUnLien").style.display = "block";
    
    var titre = document.getElementById("titre").value;
    var auteur = document.getElementById("auteur").value;
    var url = document.getElementById("url").value;
    console.log(titre);
    ajoutLien(titre, auteur, url);
    
    event.preventDefault();

});

// Fonction d'affichage d'un lien
function ajoutLien(titre, auteur, url)
{
    var lienEltContainer = document.createElement("p");             // Création d'un élément <p> qui va englober tout le bloc
    var lienEltLien = document.createElement("a");                  // Création d'un élément <a> qui va accueillir le lien
    var lienEltInfos = document.createElement("span");              // Création d'un élément <span> qui va accueillir les autres informations
    
    // Mise en forme du lien
    lienEltLien.textContent = titre;                                // Contenu = titre du site
    lienEltLien.href = url;                                         // url = lien cliquable
    lienEltLien.style.color = "#428bca";                            // Couleur du lien
    lienEltLien.style.fontWeight = "bold";                          // Mise en gras
    lienEltLien.style.textDecoration = "none";                      // Suppression du soulignage
   
   // Initialisation des informations supplémentaires
    lienEltInfos.innerHTML = "&nbsp;" + url + "<br />" + "Ajouté par " + auteur;
    
    // Ajout de la classe "lien" à la balise <p>
    lienEltContainer.className = "lien";

    // Ajout des éléments
    document.getElementById("contenu").appendChild(lienEltContainer).appendChild(lienEltLien)           // Ajout de <p> et de <a>
    document.getElementById("contenu").appendChild(lienEltContainer).appendChild(lienEltInfos);    
}
