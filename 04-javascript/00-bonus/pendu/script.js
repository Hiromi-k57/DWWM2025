// === 定数定義 ===
const MOT_FACILE = "JAVASCRIPT";         // Facile モードの固定単語
const MAX_ERREURS = 6;                   // 最大間違い回数（6回）

// === ゲーム状態用変数 ===
let motActuel = MOT_FACILE;              // 現在の出題単語
let lettresTrouvees = [];                // 正解済み文字の配列（true/false）
let erreurs = 0;                         // 現在の間違い数
let mode = "facile";                     // 現在の難易度（"facile" または "difficile"）

// === DOM要素取得 ===
const lettresSpans = document.querySelectorAll(".lettre");        // 文字表示用の span 要素群
const boutons = document.querySelectorAll(".keyBtn");             // アルファベットボタン
const erreursTexte = document.getElementById("erreursTexte");     // エラーカウント表示エリア
const boutonRejouer = document.getElementById("rejouerBtn");      // Rejouer ボタン
const imagePendu = document.querySelector(".manImg");             // 絞首台画像
const btnFacile = document.getElementById("btnFacile");           // Facile ボタン
const btnDifficile = document.getElementById("btnDifficile");     // Difficile ボタン
const hintFacile = document.querySelector(".hintFacile");         // Facile用ヒント
const hintDifficile = document.querySelector(".hintDifficile");   // Difficile用ヒント
const message = document.getElementById("message");               // 勝敗メッセージ表示エリア

// === ゲーム初期化関数 ===
function initialiserJeu() {
    lettresTrouvees = new Array(motActuel.length).fill(false);    // 正解配列を false で初期化
    erreurs = 0;
    erreursTexte.textContent = `Erreurs : ${erreurs} / ${MAX_ERREURS}`; // エラー数表示を初期化
    boutonRejouer.style.display = "none";                         // Rejouer ボタン非表示
    imagePendu.src = `./images/hangman-0.svg`;                    // 初期画像に戻す
    message.textContent = "";                                     // メッセージ非表示
    message.className = "";

    // 各文字スロットを初期化（必要数のみ表示）
    lettresSpans.forEach((span, i) => {
        span.textContent = "";
        span.style.display = i < motActuel.length ? "inline-block" : "none";
        span.style.color = "black";
    });

    // ボタンを有効化
    boutons.forEach(btn => {
        btn.disabled = false;
    });

    // ヒント切り替え
    hintFacile.style.display = mode === "facile" ? "block" : "none";
    hintDifficile.style.display = mode === "difficile" ? "block" : "none";
}

// === Difficileモード時：JSONから単語取得 ===
async function chargerMotDifficile() {
    try {
        const res = await fetch("./mots.json");       // mots.json を取得
        const mots = await res.json();                // JSONとして解析
        const index = Math.floor(Math.random() * mots.length);
        motActuel = mots[index].toUpperCase();        // ランダムな単語を選び、すべて大文字に
        initialiserJeu();                             // 選ばれた単語で初期化
    } catch (err) {
        alert("mots.json の読み込みに失敗しました");
        console.error(err);
    }
}

// === 文字の正誤判定処理 ===
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
            imagePendu.src = `./images/hangman-${erreurs}.svg`;
        }
        if (erreurs >= MAX_ERREURS) {
            finDePartie(false);   // 敗北処理
        }
    } else {
        verifierVictoire();       // 勝利判定
    }
}

// === 勝利判定 ===
function verifierVictoire() {
    if (lettresTrouvees.every(val => val)) {
        finDePartie(true);        // 勝利処理
    }
}

// === 勝敗時の共通処理 ===
function finDePartie(gagne) {
    boutons.forEach(b => b.disabled = true);      // 全ボタンを無効化
    boutonRejouer.style.display = "inline-block"; // Rejouerボタンを表示

    if (gagne) {
        message.textContent = "Bravo ! Vous avez gagné !";
        message.className = "win";
    } else {
        // 敗北：単語全表示（赤）
        for (let i = 0; i < motActuel.length; i++) {
            lettresSpans[i].textContent = motActuel[i];
            lettresSpans[i].style.display = "inline-block";
            lettresSpans[i].style.color = "red";
        }
        message.textContent = `Dommage... Le mot était : ${motActuel}`;
        message.className = "lose";
    }
}

// === ボタンイベント登録 ===

// アルファベットボタン
boutons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lettre = btn.value;
        btn.disabled = true;
        verifierLettre(lettre);
    });
});

// Rejouerボタン：facileモードに戻して再初期化
boutonRejouer.addEventListener("click", () => {
    mode = "facile";
    motActuel = MOT_FACILE;
    initialiserJeu();
});

// Difficileボタン：モード変更＋単語読み込み
btnDifficile.addEventListener("click", () => {
    mode = "difficile";
    chargerMotDifficile();
});

// === 初回起動時処理 ===
initialiserJeu();
