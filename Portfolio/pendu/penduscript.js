"use strict"
const MOT_FACILE = "JAVASCRIPT"; 
const MAX_ERREURS = 6;   

let motActuel = MOT_FACILE;        
let lettresTrouvees = [];      // 正解済み文字の配列（true/false）
let erreurs = 0;                         
let mode = "facile";    

const lettresSpans = document.querySelectorAll(".lettre");       
const boutons = document.querySelectorAll(".keyBtn");             
const erreursTexte = document.getElementById("erreursTexte");    
const boutonRejouer = document.getElementById("rejouerBtn");     
const imagePendu = document.querySelector(".manImg");             
const btnFacile = document.getElementById("btnFacile");           
const btnDifficile = document.getElementById("btnDifficile");     
const hintFacile = document.querySelector(".hintFacile");         
const hintDifficile = document.querySelector(".hintDifficile");   
const message = document.getElementById("message");            

function initialiserJeu() {
    lettresTrouvees = new Array(motActuel.length).fill(false);
    erreurs = 0;
    erreursTexte.textContent = `Erreurs : ${erreurs} / ${MAX_ERREURS}`; // エラー数表示を初期化
    boutonRejouer.style.display = "none";
    imagePendu.src = `./penduImages/hangman-0.svg`;  
    message.textContent = ""; 
    message.className = "";

    lettresSpans.forEach((span, i) => {
        span.textContent = "";
        span.style.display = i < motActuel.length ? "inline-block" : "none";
        span.style.color = "black";
    });

    boutons.forEach(btn => {
        btn.disabled = false;
    });


    hintFacile.style.display = mode === "facile" ? "block" : "none";
    hintDifficile.style.display = mode === "difficile" ? "block" : "none";
}

// Difficileモード時：JSONから
async function chargerMotDifficile() {
    try {
        const res = await fetch("./mots.json"); 
        const mots = await res.json();    
        const index = Math.floor(Math.random() * mots.length);
        motActuel = mots[index].toUpperCase(); 
        initialiserJeu();
    } catch (err) {
        alert("Échec du chargement de mots.json");
        console.error(err);
    }
}

function verifierLettre(lettre) {
    let trouve = false;

    for (let i = 0; i < motActuel.length; i++) {
        if (motActuel[i] === lettre && !lettresTrouvees[i]) {
            lettresTrouvees[i] = true;
            lettresSpans[i].textContent = lettre;
            lettresSpans[i].style.display = "inline-block";
            trouve = true;
        }
    }

    if (!trouve) {
        erreurs++;
        erreursTexte.textContent = `Erreurs : ${erreurs} / ${MAX_ERREURS}`;
        if (erreurs <= MAX_ERREURS) {
            imagePendu.src = `./penduImages/hangman-${erreurs}.svg`;
        }
        if (erreurs >= MAX_ERREURS) {
            finDePartie(false); 
        }
    } else {
        verifierVictoire(); 
    }
}


function verifierVictoire() {
    if (lettresTrouvees.every(val => val)) {
        finDePartie(true);  
    }
}

function finDePartie(gagne) {
    boutons.forEach(b => b.disabled = true);      // 全ボタンを無効化
    boutonRejouer.style.display = "inline-block";

    if (gagne) {
        message.textContent = "Bravo ! Vous avez gagné !";
        message.className = "win";
    } else {
        
        for (let i = 0; i < motActuel.length; i++) {
            lettresSpans[i].textContent = motActuel[i];
            lettresSpans[i].style.display = "inline-block";
            lettresSpans[i].style.color = "red";
        }
        message.textContent = `Dommage... Le mot était : ${motActuel}`;
        message.className = "lose";
    }
}

boutons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lettre = btn.value;
        btn.disabled = true;
        verifierLettre(lettre);
    });
});

boutonRejouer.addEventListener("click", () => {
    mode = "facile";
    motActuel = MOT_FACILE;
    initialiserJeu();
});


btnDifficile.addEventListener("click", () => {
    mode = "difficile";
    chargerMotDifficile();
});

initialiserJeu();
