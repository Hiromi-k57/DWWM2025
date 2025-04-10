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