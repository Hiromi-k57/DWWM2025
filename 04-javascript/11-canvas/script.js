"use strict";
/* 
    La balise canvas n'a aucune utilisé sans JS.
    Mais avec, elle peut servire pour dessiner, animer, faire des jeux, des outils ou autre.
        キャンバス タグは JS なしでは役に立ちません。
        しかし、これを使えば、描画、アニメーション、ゲーム、ツールの作成などに使用できます。
*/
const canvas = document.querySelector('canvas');
/* 
    Pour interagire avec le canvas, nous allons avoir besoin de récupérer son "contexte".
    Pour cela on va utiliser la méthode "getContext()" avec en paramètre, le contexte voulu:

    Ici nous allons lui indiquer "2d"; Mais il est aussi possible de faire de la 3D avec "webgl" par exemple.
    Pour se faciliter la tâche, les développeurs voulant faire de la 3D, utilisent souvent la bibliothèque "three.js". 

        キャンバスと対話するには、その「コンテキスト」を取得する必要があります。
        これを行うには、目的のコンテキストをパラメータとして指定した「getContext()」メソッドを使用します。

        ここでは「2d」と伝えます。しかし、例えば「webgl」を使って3Dを作ることも可能です。
        3D を作成したい開発者は、作業を容易にするために、「three.js」ライブラリをよく使用します。
*/
const ctx = canvas.getContext("2d");
// ? Resize
function resize()
{
    /* 
        le canvas est comme une image, changer sa taille en CSS, ne fera que l'étiré.
        Il faudra changer sa taille avec les propriétés "width" et "height".

        getImageData, permet de récupérer les données de l'image. car une fois la taille changé, le context est reset.
        Il prendra en paramètre "position x à partir de laquelle prendre les données, position y, largeur, hauteur"

            キャンバスは画像のようなもので、CSS でサイズを変更すると、キャンバスは引き伸ばされるだけです。
            「幅」と「高さ」のプロパティを使用してサイズを変更する必要があります。

            getImageData を使用すると、画像データを取得できます。サイズが変更されるとコンテキストがリセットされるためです。
            パラメータとして「データを取得するx位置、y位置、幅、高さ」を取ります。
    */
    const snapshot = ctx.getImageData(0,0,canvas.width, canvas.height);
    // console.log(snapshot);    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // permet d'afficher les données de l'image, avec en paramètre, "données à afficher, position x, position y"
        // パラメータ「表示するデータ、x 位置、y 位置」を使用して画像データを表示できます
    ctx.putImageData(snapshot, 0,0);
}
resize();
window.addEventListener("resize", resize);
//? Canvas
// permet de dessiner un rectangle avec "position x, position y, largeur, hauteur".
// 「x 位置、y 位置、幅、高さ」で四角形を描画できます。
ctx.strokeRect(50, 50, 150, 25);
// dessiner un rectangle rempli
// 塗りつぶされた四角形を描画する
ctx.fillRect(150, 250, 350, 55);

// fillStyle et strokeStyle permettent de changer la couleur.
// fillStyle とstrokeStyle を使用すると色を変更できます。
ctx.fillStyle = "#987654";
ctx.strokeStyle = "chartreuse";
// lineWidth gère l'épaisseur (en pixel) des traits.
// lineWidth は線の太さ (ピクセル単位) を管理します。
ctx.lineWidth = 8;
// ils ne changent la couleur que de ce qui suis :
// 以下の色のみを変更します:
ctx.strokeRect(50, 300, 34, 270);
ctx.fillRect(50, 300, 34, 270);

// ? forme plus complexe :
// Je lui indique que l'on commence un chemin.
// 私は彼に、私たちが道を歩み始めていることを伝えます。
ctx.beginPath();
// Je lui indique un point de départ.
// 私は彼に出発点を示します。
ctx.moveTo(400, 300);
// Je lui indique jusqu'où je souhaite tracer mon trait :
// どのくらいまで線を引きたいかを伝えます:
ctx.lineTo(500, 200);
// je trace mon trait :
// 線を描きます:
ctx.stroke();

ctx.beginPath();
ctx.moveTo(700, 100);
ctx.lineTo(800, 600);
ctx.lineTo(100, 500);

ctx.strokeStyle = "purple";
ctx.fillStyle = "lightblue";
ctx.lineWidth = 10;
// closePath permet de fermer la forme dessiné
// closePath は描画した図形を閉じることができます
ctx.closePath();
ctx.stroke();
// fill permet de remplir la forme dessiné
// fill は描画した図形を塗りつぶします
ctx.fill();

// ? cercle et arc de cercle

ctx.beginPath();
/* 
    Pour dessiner un arc de cercle (ou un cercle complet)
    On utilisera "arc" avec en paramètre 
        position x et y (indiquant le centre du cercle)
        rayon du cercle
        Position de départ de l'arc de cercle
        Position de fin (avec pour un cercle complet, au moins 2*Math.PI)
    円弧（または完全な円）を描くには
        パラメータ「arc」を使用します
        x と y の位置 (円の中心を示す)
        円の半径
        円弧の開始位置
        終了位置（完全な円の場合は少なくとも 2*Math.PI）
*/
ctx.arc(1000, 500, 82,0,2*Math.PI);
ctx.stroke();


// ? Animation
ctx.strokeStyle = "pink";
ctx.fillStyle = "fuchsia";
let x = 100, y = 100, vitesseX = 5, vitesseY = 5, r = 80;
// Je sauvegarde mon dessin avant de lancer l'animation.
// アニメーションを起動する前に描画を保存します。
let snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
AnimeCercle();
function AnimeCercle()
{
    // clearReact permet d'effacer en forme rectangulaire.
    // clearReact を使用すると、長方形の形で消去できます。
    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.putImageData(snapshot, 0,0);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    // Si la position x ou y de mon cercle atteint un bord du canvas, alors j'inverse son déplacement
    // 円のxまたはy位置がキャンバスの端に到達した場合、その動きを反転します
    if(x + r > canvas.width || x - r < 0)
    {
        vitesseX = -vitesseX;
    }
    if(y + r > canvas.height || y - r < 0)
    {
        vitesseY = -vitesseY;
    }
    x += vitesseX;
    y += vitesseY;
    // setTimeout(AnimeCercle, 20)
    // requestAnimationFrame est un timeout qui s'adapte au taux de rafraichissement de l'écran pour avoir une animation fluide.
        // requestAnimationFrame は、スムーズなアニメーションを実現するために画面のリフレッシュ レートに適応するタイムアウトです。
    requestAnimationFrame(AnimeCercle);
}

// ? Ajouter une image

//Je crée une nouvelle image.
const img = new Image();
img.src = "./HTML5_logo.svg";
// J'attends que l'image ai chargée
// 画像が読み込まれるのを待ちます
img.onload = function()
{
    // Je dessine mon image avec en paramètre (l'image, la position x et y, largeur, hauteur).
    // パラメータ (画像、x 位置と y 位置、幅、高さ) を使用して画像を描画します。
    ctx.drawImage(img, 50, 250, 100, 100);
    // Mon animation effaçant tout, je met à jour la snapshot.
    // アニメーションですべてを消去し、スナップショットを更新します。
    snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);
};
// ? afficher du texte :
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
// Permet de changer la taille et la police d'écriture
// サイズとフォントを変更できます
ctx.font = "82px serif";
// Affiche un texte à la position x et y donnée
// 指定されたxとyの位置にテキストを表示します
ctx.strokeText("Coucou en Stroke", 500, 500);
ctx.fillText("Coucou en fill", 500, 400);
// Change l'alignement du texte
// テキストの配置を変更する
ctx.textAlign = "center";
ctx.fillText("Coucou en center", 500, 300);
// On peut ajouter une valeur supplémentaire pour limiter la largeur du texte
// テキスト幅を制限するために追加の値を追加できます
ctx.fillText("Coucou en 200px", 500, 200, 200);

// ? forme des traits 線の形状

ctx.lineWidth = 20;

ctx.beginPath();
ctx.lineCap = "round";
ctx.moveTo(700, 40);
ctx.lineTo(700, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "square";
ctx.moveTo(750, 40);
ctx.lineTo(750, 400);
ctx.stroke();

ctx.beginPath();
ctx.lineCap = "butt";
ctx.moveTo(800, 40);
ctx.lineTo(800, 400);
ctx.stroke();

// pour éviter l'effacement venant de l'animation
// アニメーションから消去されないようにする
snapshot = ctx.getImageData(0,0, canvas.width, canvas.height);