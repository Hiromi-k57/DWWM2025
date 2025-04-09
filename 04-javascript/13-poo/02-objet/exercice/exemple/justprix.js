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

"use strict"

  let randomNumber = Math.floor(Math.random() * 100) + 1;
  const def = document.querySelector('.default');
  const guesses = document.querySelector('.guesses');
  const lastResult = document.querySelector('.lastResult');
  const lastResult2 = document.querySelector('.lastResult2');
  const lowOrHi = document.querySelector('.lowOrHi');
  const guessSubmit = document.querySelector('.guessSubmit');
  const guessField = document.querySelector('.guessField');
  const card = document.querySelector('.card');
  let guessCount = 1;
  let resetButton;

 
  function checkGuess() {
    const userGuess = Number(guessField.value);
     if (userGuess === randomNumber) {
      lastResult.textContent = 'Bien joué ! Vous avez trouvé en 7 tours';
      lastResult.style.backgroundColor = 'green';
      lowOrHi.textContent = '';
      def.textContent = '';
      setGameOver();
     } 
     
     else if (guessCount === 7) {
      lastResult.textContent = 'C\'est perdu !';
      lastResult.style.backgroundColor = 'red';
      lowOrHi.textContent = '';
      def.textContent = '';
      setGameOver();
     } else {
      if(userGuess < randomNumber) {
        lowOrHi.textContent = `C\'est plus grand que ${userGuess} !` ;
        def.textContent = '';
      } else if(userGuess > randomNumber) {
        lowOrHi.textContent = `C\'est plus petit que ${userGuess} !` ;
        def.textContent = '';
      }
    }
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
  }

   guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      lastResult2.style.display = 'block';
      lastResult2.append(randomNumber);
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Recommencer';
      card.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    

  }

  function resetGame() {
   guessCount = 1;
   const resetParas = document.querySelectorAll('.resultP p');
    for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    lastResult2.textContent = "";
    def.textContent = 'Vouillez choisir un nombre entre 1 et 100, vous avez 7 essais';
    lastResult.style.backgroundColor = 'white';
    // lastResult.textContent = 'Vouillez choisir un nombre entre 1 et 100, vous avez 7 essais';
    // lastResult.style.fontColor = 'black';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }