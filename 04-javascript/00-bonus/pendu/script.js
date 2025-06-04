"use strict";

let motChoisi = "";
let erreurs = 0;
let lettresTrouvées = [];
let boutons = document.querySelectorAll('.keyBtn');
let lettres = document.querySelectorAll('.lettres');

const manImg = document.querySelector('.manImg');
const compteur = document.getElementById('erreursCompteur');
const rejouerBtn = document.getElementById('rejouerBtn');
const hintDiv = document.querySelector('.hint');
const btnFacile = document.getElementById('btnFacile');
const btnDifficile = document.getElementById('btnDifficile');

let modeDifficile = false;

// mots.jsonから単語をランダムに選ぶ
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

    // スパンを更新（難易度高なら最初の文字だけ表示）
    lettres.forEach((span, i) => {
        if (difficile && i === 0) {
            span.textContent = motChoisi[0];
            lettresTrouvées[0] = motChoisi[0];
        } else {
            span.textContent = "";
        }
    });

    // ヒント表示切替
    const hintFacile = document.querySelector('.hintFacile');
    const hintDifficile = document.querySelector('.hintDifficile');

    if (difficile) {
        hintFacile.style.display = "none";
        hintDifficile.style.display = "block";
    } else {
        hintFacile.style.display = "block";
        hintDifficile.style.display = "none";
    }

    // ボタン有効化
    boutons.forEach(btn => btn.disabled = false);

    // カウンターと画像初期化
    compteur.textContent = erreurs;
    manImg.src = "./images/hangman-0.svg";
    rejouerBtn.style.display = "none";
}

// クリック処理（共通）
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

            // 勝利判定
            if (lettresTrouvées.join('') === motChoisi) {
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

// 再挑戦
rejouerBtn.addEventListener('click', () => {
    demarrerPartie(modeFacile);
});

// 難易度選択
btnFacile.addEventListener('click', () => {
    demarrerPartie(true);
});
btnDifficile.addEventListener('click', () => {
    demarrerPartie(false);
});

// イベント初期化
activerBoutons();
