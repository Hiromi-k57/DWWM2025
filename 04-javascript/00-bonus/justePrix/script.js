"use strict"
/* 
1. Faire un jeu du plus ou moins, javascript va choisir un nombre aléatoire entre 1 et 100 et l'utilisateur va devoir le deviner, à chaque essai le jeu indique si le nombre cible est plus grand ou plus petit.
Cette version peut être faite en console.log et prompt.

2. Ajouter un nombre limité de coup (7) à l'utilisateur.

3. Proposer à l'utilisateur de recommencer (par exemple avec un confirm).

4. Vérifier que l'utilisateur entre bien un nombre et qu'il soit entre 1 et 100.

5. Créer une interface pour le jeu. Il devra contenir :
une zone affichant les messages du jeu.
un input pour rentrer la proposition.
un bouton pour valider la proposition.
On doit pouvoir valider avec la touche "entrée" ou le bouton.
Lorsque c'est terminé, le résultat ainsi qu'un bouton recommencer doit apparaître.
Lorsque le jeu commence ou que l'on appui sur un bouton, le focus doit revenir sur l'input.
Lorsque le jeu est terminé, les boutons et input doivent être désactivé.

6. (bonus) Le jeu serait plus vivant si il est animé avec par exemple une carte qui se retourne pour afficher le résultat et le bouton recommencer.
*/

const cardInner = document.getElementsByClassName("card-inner");
const result = document.querySelector("p");
const input = document.querySelector("input");
const submitBtn = document.querySelector("#submit");
const resetBtn = document.querySelector("#reset");
let guessCount = 1;

console.log(cardInner,result,input,submitBtn,resetBtn);

cardInner.addEventListener('click', function() {
    turnover();
  });
  function turnover() {
    if(card.className = card.className === ''){
      card.className = 'card-inner';
    }else{
      card.className = '';
    }
  }


let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkAnswer(){
    const userAnswer = Number(input.value);
    if (guessCount === 1) {
      result.textContent = 'Vouillez choisir un nombre entre 1 et 100, vous avez 7 essais ';
    }

    let message;
    if (userAnswer === randomNumber) {
        result.textContent = "Bien joué ! Vous avez trouvé en 7 tours"
        input.disabled = true;    
    } 
    else{
        message ="";
        if(userAnswer >randomNumber){
            message = "C'est plus petit que" + userAnswer + "!";
        }
        if(userAnswer < randomNumber){
            message = "C'est plus grand que" + userAnswer + "!";
        }
    }
    
}












