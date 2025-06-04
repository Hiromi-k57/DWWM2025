"use strict";

let motChoisi = "";
let erreurs = 0;
let lettresTrouvées = [];
let modeDifficile = false;

let boutons = document.querySelectorAll('.keyBtn');
let lettres = document.querySelectorAll('.lettres');

const manImg = document.querySelector('.manImg');
const compteur = document.getElementById('erreursCompteur');
const rejouerBtn = document.getElementById('rejouerBtn');
const btnFacile = document.getElementById('btnFacile');
const btnDifficile = document.getElementById('btnDifficile');
const hintFacile = document.querySelector('.hintFacile');
const hintDifficile = document.querySelector('.hintDifficile');

// mots.jsonからランダムに単語を選ぶ
async function choisirMot() {
    const response = await fetch('mots.json');
    const mots = await response.json();
    return mots[Math.floor(Math.random() * mots.length)].toUpperCase();
}

// ゲーム初期化
async function demarrerPartie(difficile = false) {
    motChoisi = await choisirMot();
    erreurs = 0;
    modeDifficile = difficile;
    lettresTrouvées = Array(motChoisi.length).fill("");

    lettres = document.querySelectorAll('.lettres');
    boutons = document.querySelectorAll('.keyBtn');

    // spanをリセット
    lettres.forEach((span, i) => {
        if (difficile && i === 0) {
            span.textContent = motChoisi[0];
            lettresTrouvées[0] = motChoisi[0];
        } else {
            span.textContent = "";
        }
    });

    // ヒント切り替え
    hintFacile.style.display = difficile ? "none" : "block";
    hintDifficile.style.display = difficile ? "block" : "none";

    // ボタン有効化
    boutons.forEach(btn => btn.disabled = false);

    // 状態初期化
    compteur.textContent = erreurs;
    manImg.src = "./images/hangman-0.svg";
    rejouerBtn.style.display = "none";
}

// 文字ボタンのクリック処理
function activerBoutons() {
    boutons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lettre = btn.value;
            btn.disabled = true;

            if (motChoisi.includes(lettre)) {
                for (let i = 0; i < motChoisi.length; i++) {
                    if (motChoisi[i] === lettre) {
                        lettres[i].textContent = lettre;
                        lettresTrouvées[i] = lettre;
                    }
                }
            } else {
                erreurs++;
                compteur.textContent = erreurs;
                manImg.src = `./images/hangman-${erreurs}.svg`;
            }

            // 勝利判定：空欄がなく、文字列が一致している
            if (!lettresTrouvées.includes("") && lettresTrouvées.join('') === motChoisi) {
                setTimeout(() => {
                    alert("Bravo, vous avez gagné !");
                    rejouerBtn.style.display = "inline-block";
                }, 100);
            }

            // 敗北判定
            if (erreurs >= 6) {
                setTimeout(() => {
                    alert(`Perdu ! Le mot était : ${motChoisi}`);
                    rejouerBtn.style.display = "inline-block";
                }, 100);
            }
        });
    });
}

// 難易度選択ボタン
btnFacile.addEventListener('click', () => {
    demarrerPartie(false); // Facile
});
btnDifficile.addEventListener('click', () => {
    demarrerPartie(true); // Difficile
});

// 再挑戦（常に facile で再開）
rejouerBtn.addEventListener('click', () => {
    demarrerPartie(false);
});

// 初期化（最初の起動時にFacileでスタート）
activerBoutons();
demarrerPartie(false);
