"use strict";

function test(event) // test ha namae
{
    console.log("coucou", event);
}

const h1 = document.querySelector('header > h1');
/* 
    POur ajouter un écouteur d'évènement, nous avons deux possibilités :
    SOit element HTML.addEvenetListener("nomEvent", fonction)
    Soit element HTML.onNomEvent = function

    Le nom des évènement, on toujours en minuscule.

    Pour retirer un évènement, on pourra utiliser :
        elementHTML.removeEventListener("nomEvent",fonction):
        elementHTML.onNOmEvent = "";
    
    Les écouteurs d'evènement passent toujours en paramètre de la 
    fonction callback, un objet correspondant à l'évènement écouté.
    On pourra y récupérer plusieurs informations correspondant à cet
    évènement.
    Par exemple sur un clique, la position de la souris, l'élément 
    cliqué...
*/
h1.addEventListener("click",test); //click ha event , komoji, ","noato naniwoshitaika(test)

h1.onclick = test;

h1.removeEventListener("click",test);

h1.onclick ="";