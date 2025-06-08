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
  const h2 = document.querySelector('h2');
  let guessCount = 1;
  let resetButton;

 
  function checkGuess() {
    const userGuess = Number(guessField.value);
     if (userGuess === randomNumber) {
      lastResult.textContent = 'Bravo ! Vous avez gagné !';
      lastResult.style.color = 'blue';

      lastResult.style.fontWeight = 'bold';
      lastResult.style.padding = '0.3rem 0.5rem';
      lastResult.style.borderRadius = '5px';
      h2.style.color = 'blue';

      lowOrHi.textContent = '';
      def.textContent = '';
      card.style.backgroundImage = 'none';
      card.style.backgroundColor = 'lightblue';
      setGameOver();
     } 
     
     else if (guessCount === 7) {
      lastResult.textContent = 'C\'est perdu !';
      lastResult.style.color = 'red';
      lastResult.style.fontWeight = 'bold';
      lastResult.style.padding = '0.3rem 0.5rem';
      lastResult.style.borderRadius = '5px';
      h2.style.color = 'red';

      lowOrHi.textContent = '';
      def.textContent = '';
      card.style.backgroundImage = 'none';
      card.style.backgroundColor = 'lightpink';
      lastResult2.style.backgroundColor ='red';
      lastResult2.style.color='lightpink';
      setGameOver();
     } 
     else {
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
      resetButton.style.backgroundColor = 'azure';
      resetButton.style.color = 'darkgreen';
      resetButton.style.fontWeight = 'bold';
      resetButton.style.padding = '0.1rem 0.5rem';
      resetButton.style.borderColor = 'lightgreen';
      resetButton.style.borderRadius = '2px';

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
    lastResult2.style.backgroundColor ='';
    lastResult2.style.color='';
    lastResult2.style.display = '';

    def.textContent = 'Veuillez choisir un nombre entre 1 et 100, vous avez 7 essais.';
    lastResult.style.backgroundColor = 'antiquewhite';
    card.style.backgroundImage = '';
    card.style.backgroundColor = '';
    h2.style.color = '';
    randomNumber = Math.floor(Math.random() * 100) + 1;
  }