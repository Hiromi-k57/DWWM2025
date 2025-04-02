"use strict"

const a1 = [3,12, 45, 4, 70]; 
const a2 = [3,"12", 45, 4, 70]; 

console.log(a1,a2);


// Le code suivant affichera [3, 4, 12, 45, 70] 
function compareFunc(a, b) {
    return a - b;
}

  a1.sort(compareFunc);
  
  console.log(a1);
  
  a2.sort();
  console.table(a2);
 
  

// tri(a1).then(tableau=>console.log(tableau)).catch(e=>console.error(e)); 
// Le code suivant affichera "Erreur, type incompatible." 
// tri(a2).then(tableau=>console.log(tableau)).catch(e=>console.error(e)); 
