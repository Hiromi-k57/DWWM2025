"use strict";

/* 
    La balise canvas n'a aucune utilisé sans JS.
    Mais avec, elle peut servire pour dessiner, aniùer, faire des jeux, des outils ou autre.
        キャンバス タグは JS なしでは役に立ちません。
        しかし、これを使えば、絵を描いたり、工作したり、ゲームやツールを作ったり、その他のことに使うことができます。
*/
const canvas = document.querySelector('canvas');
/* 
    Pour interagire avec le canvas, nous allons avoir besoin de récupérer son "contexte".
    Pou cela on va utiliser la méthode "getContext()" avec en paramètre, le contexte voulu:

    Ici nous allons lui indiquer "2d", Mais il est aussi possible de faire de la 3D avec "webgl" par exemple.
    Pour se faciliter la tâche, les dévloppeurs voulant faire de la 3D, utilisent souvent la bibliothèque "three.js".

        キャンバスと対話するには、その「コンテキスト」を取得する必要があります。
        これを行うには、目的のコンテキストをパラメータとして指定した「getContext()」メソッドを使用します。

        ここでは「2D」と記載しますが、例えば「webgl」で3Dにすることも可能です。
        3D を作成したい開発者は、作業を容易にするために、「three.js」ライブラリをよく使用します。
*/
const ctx= canvas.getContext("2d");
// ? Resize
function resize()
{
    /* 
        le canvas est comme une image, changer sa taille en CSS, ne fera que l'étiré.
        Il faudra changer sa taille avec les propriétés "width" et "height".
            キャンバスは画像のようなもので、CSS でサイズを変更すると、キャンバスは引き伸ばされるだけです。
            「幅」と「高さ」のプロパティを使用してサイズを変更する必要があります。
        getImageData, permet de récupérer les données de l'image. car une fois la taille changé, le context est reset.
        Il prendra en paramètre "position x à partir de laquelle prendre les données, position y, largeur, hauteur".
            getImageData を使用すると、画像データを取得できます。サイズが変更されるとコンテキストがリセットされるためです。
            パラメータとして「データを取得する x 位置、y 位置、幅、高さ」を受け取ります。
    */
    const snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);
    // console.log(snapshot);
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // permet d'afficher les données de l'image, avec en paramètre, "données à afficher, position x, position y".
        // パラメータ「表示するデータ、x 位置、y 位置」を使用して画像データを表示できます。
    ctx.putImageData(snapshot, 0,0);
}
resize();
// ?Canvas
// permet de dessiner un rectangle avec "position x, position y, larger , hauteur".
    // 「x 位置、y 位置、大きい方、高さ」で四角形を描画できます。

ctx.strokeRect(50,50,150,25);
// dessiner un rectangle rempli
//  塗りつぶされた四角形を描画する
ctx.fillRect(150, 250, 350, 55);

ctx.fillStyle = "#987654";
ctx.strokeStyle = "chartreuse";
//lineWidth gère l'épaisseur (en pixel) des traits.
ctx.lineWidth =8;
// ils ne changent la couleur que de ce qui suis :
// 以下の色のみを変更します:
ctx.strokeRect(50, 300, 34, 270);
ctx.fillRect(50,300,34, 270);

//? forme plus complexe :
//Je lui indique que l'on commence un chemin.
//私は彼に、私たちが道を歩み始めていることを伝えます。
ctx.beginPath();
// Je lui indique un point de départ.
// 私は彼に出発点を示します。
ctx.moveTo(400, 300);
// Je lui indique jusqu'où je souhaite tracer mon trait :
// どのくらいまで線を引きたいかを伝えます:
ctx.lineTo(500, 200);
// Je trace mon trait 
// 線を引く 

ctx.stroke();
ctx.moveTo(700, 100);
ctx.lineTo(800,600);
ctx.lineTo(100, 500);

ctx.strokeStyle = "purple";
ctx.fillStyle ="lightblue";
ctx.lineWidth = 10;
//closePath permet de fermer la forme dessiné
//closePathを使用すると、描画した図形を閉じることができます。
ctx.closePath();
ctx.stroke();
//fill permet de remplir la forme dessiné
//fill は描画した図形を塗りつぶします
ctx.fill();

//? cercle et arc de cercle

ctx.beginPath();
/* 
    Pour dessiner un arc de cercle ( ou un cercle complet)
    On utilisera "arc" avec en paramètre 
        position x et y (indiquant le centre du cercle) rayon du cercle
        Position de départ de l'arc de cercle
        Position de fin (avec pour un cercle complet, au moins 2*Math.PI )
            円弧（または完全な円）を描く
            パラメータ「arc」を使用します
                x と y の位置（円の中心を示す）円の半径
                円弧の開始位置
                終了位置（完全な円の場合は少なくとも 2*Math.PI）
*/
ctx.arc(1000, 500, 82, 0,2*Math.PI); 
ctx.stroke();

// ? Animation
ctx.strokeStyle = "pink";
ctx.fillStyle = "fuchsia";
let x = 100, y= 100, vitesseX =5, vitesseY =5, r= 100;
// todo snapshot
let snapshot = ctx.getImageData(0,0,canvas.width, canvas.height);
AnimeCercle();
function AnimeCercle()
{
    //TODO clear
    // clearReact permet d'effacer en forme rectangulaire.
    //clearReact を使用すると、長方形の形で消去できます。
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(snapshot, 0,0);
    ctx.beginPath();
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.fill();
    ctx.stroke();
    // Si la position x de mon cercle atteint un bord du canvas, alors j'inverse son déplacement
    //円のx位置がキャンバスの端に到達したら、その動きを反転します
    if(x + r > canvas.width || x < 0)
    {
        vitesseX = - vitesseX;
    }
    if(y > canvas.height || y <0)
    {
        vitesseY = - vitesseY;
    }
    x += vitesseX;
    y += vitesseY;
    // setTimeout(AnimeCercle,20);
    // requestAnimationFrame est un timeout qui s'adapte au taux de rafraichissent de l'écran pour avoir une animation fluide.
    requestAnimationFrame(AnimeCercle);
}

// ? Ajouter une image
const img = new Image();
img.src = "./html.png";
//J'attends que l'image ai changée
img.onload = function()
{
    //Je dessine mon image avec en paramètre (l'image, la position x et y, largeur, hauteur).
    ctx.drawImage(img, 50, 250, 100,100);
    //Mon animation effecant tout, je met à jour la snapshot.
    snapshot = ctx.getImageData(0,0, canvas.width,canvas.height);
};
//? afficher du text:
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
// Permet de changer la taille et la police d'écriture
ctx.font= "82px serif";
// Afficie un texte à la position x et y donnée
ctx.strokeText("Coucou en Stroke", 500, 500);
ctx.fillText("Coucou en fill", 500, 400);
// change l'alignement du texte
ctx.textAlign = "center";
ctx.fillText("Coutou en center", 500, 300);
// On peut ajouter une valeur supplémentaire pour limiter la largeur du text
ctx.fillText("Coucou en 200px", 500, 200, 200);

//pour éviter l'effacement venant de l'animation
snapshot = ctx.getImageData(0,0,canvas.width,canvas.height);

ctx.lineCap = "round";
ctx.moveTo(700,40);
ctx.lineTo(700,40);
ctx.stroke();

ctx.lineCap = "square";
ctx.moveTo(750,40);
ctx.lineTo(750,40);
ctx.stroke();

ctx.lineCap = "butt";
ctx.moveTo(800,40);
ctx.lineTo(800,40);
ctx.stroke();


