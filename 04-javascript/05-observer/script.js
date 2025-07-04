"use strict";

const 
    indicator = document.querySelector(".scroll-indicator"),
    main = document.querySelector("main"),
    options = {
        /* 
            Indique sur quel défilement l'observer se base.
            Par défaut celui du viewport, mais on pourrait lui indiquer de se baser le défilement d'un élément HTML.
             オブザーバーがどのスクロールに基づいているかを示します。デフォルトではビューポートのスクロールですが、HTML 要素に基づいてスクロールするように指示することもできます。
        */
        // root: main
        /* 
            Permet de déplacer où se fait la détection.
            Par défaut c'est le bord du viewport qui sert de détecteur.
            Mais en indiquant une valeur positive, la détection se fera avant d'être dans le viewport.
            Et une valeur négative poussera la détection à l'interieur du viewport.
        検出が行われる場所を移動できます。
        デフォルトでは、ビューポートの端が検出器として使用されます。
        ただし、正の値を指定すると、ビューポートに入る前に検出が行われます。
        負の値を指定すると、検出がビューポート内にプッシュされます。
        */
        // rootMargin: "-150px"
        /* 
            Permet d'indiquer un pourcentage (sous forme 0 à 1) de l'élément observé qui doit être visible pour déclencher la détection.
            検出をトリガーするために表示する必要がある観察対象要素のパーセンテージ (0 ～ 1 の形式) を指定できます。
        */
        // threshold: 0.02 //しきい値
    };

/* 
    L'intersection observer permet de détecter l'entrée ou la sortie d'un élément HTML du viewport (typiquement, au scroll)
    Il prendra deux arguments, une fonction callback et un objet contenant ses options.

    Ici nous allons l'utiliser pour activer ou désactiver un écouteur d'évènement.
    lorsque le main sera visible, nous activerons l'écouteur.
    lorsqu'il ne sera plus visible, nous désactiveront l'écouteur.

    交差オブザーバーを使用すると、HTML要素がビューポートに入ったり出たりしたことを検出できます（通常はスクロール時）。
    コールバック関数とそのオプションを含むオブジェクトの 2つの引数を取ります。

    ここでは、イベント リスナーを有効または無効にするためにこれを使用します。
    mainが見えたら、リスナーをアクティブにします。
    表示されなくなったら、リスナーを非アクティブ化します。
*/
const observer = new IntersectionObserver(setIndicator, options);
/* 
    Après avoir déclaré notre observer, nous devons lui indiquer quel élément html il doit observer.
    Ici je lui indique d'observer le main sélectionné précédement.
    オブザーバーを宣言した後、どの HTML 要素を観察するかをオブザーバーに伝える必要があります。
    ここで私は彼に、前に選択したmainを観察するように伝えます。
*/
observer.observe(main);

function setIndicator(entries)
{
    // console.log(entries);    
    /* 
        l'intersection observer m'envoi un tableau contenant les éléments observés qui viennent d'être détecté.
        Au chargement de l'observer, il envoi un premier tableau contenant tous les éléments afin d'indiquer si ils sont détecté ou non.
        * Ici je n'observe qu'un seul élément, donc pour ne pas à avoir à traiter avec un tableau, je vais récupérer son premier élément :

        交差点オブザーバーは、検出されたばかりの観測要素を含む配列を送信します。
        オブザーバーをロードすると、検出されたかどうかを示すために、すべての要素を含む最初のテーブルが送信されます。
        * ここでは 1 つの要素のみを観察しているため、配列を処理する必要がないように、最初の要素を取得します。
    */
    const entry = entries[0];
    /* 
        L'objet "entry" contient plusieurs informations liées à la détection.
        "entry"オブジェクトには、検出に関連するいくつかの情報が含まれています。
            target : l'élément détecté 検出された要素

            isIntersecting : Un boolean indiquant si l'élément est visible ou non 要素が表示されているかどうかを示すboolean

            intersectingRatio : un pourcentage (Entre 0 et 1) de l'élément visible lors de la détection 検出時に表示される要素の割合（0～1）

            boundingClientRect: la position et la taille de l'élément observé 観測された要素の位置と大きさ

            intersectionRect: la position et la taille visible de l'élément observé 観察対象要素の位置と可視サイズ

            rootBounds : la position et la taille de l'élément racine (par défaut le viewport) ルート要素の位置とサイズ（デフォルトはビューポート）
    */
    // console.log(entry);
    if(entry.isIntersecting)
    {
        // console.log("main est visible");  
        window.addEventListener("scroll", indicatorAnimation);      
    }else
    {
        // console.log("main est caché");  
        window.removeEventListener("scroll", indicatorAnimation);       
    }
    
}
// Cette fonction est juste liée à l'animation au scroll.
// この関数はスクロールアニメーションにのみ関連します
function indicatorAnimation() 
{
    // console.log("SCROOOOLLLLL!!!", window.scrollY);
    /* 
        scrollY représente le nombre de pixel qui ont été défillé.
        offsetTop représente le nombre de pixel entre le haut de la page et mon élément.
        scrollY はスクロールされたピクセル数を表します。
        offsetTop は、ページの上部と要素間のピクセル数を表します。
    */
    if(window.scrollY > main.offsetTop)
    {
        // console.log("true");
        /* 
            scrollHeight représente la hauteur total de l'élément incluant sont padding vertical.
            .toFixed(n) retourne le nombre le précédent, sous forme de string avec "n" chiffres après la virgule.

            Notre calcul permet d'obtenir le pourcentage du main ayant été scrollé.
            
            scrollHeight は、垂直方向のパディングを含む要素の合計の高さを表します。
            .toFixed(n) は、小数点以下が「n」桁の文字列として前の数値を返します。この計算により、スクロールされたメインの割合を取得できます。
        */
        const prc = ((window.scrollY - main.offsetTop)/main.scrollHeight).toFixed(2);
        // console.log(prc);
        indicator.style.transform = `scaleX(${prc})`;        
    }else
    {
        indicator.style.transform = "scaleX(0)";
    }
}

// Si on souhaite arrêter d'observer un élément :要素の監視を停止する場合:
// observer.unobserve(main);

// On peut aussi arrêter toute les observations d'un coup:
//一度にすべての観測を停止することもできます:
// observer.disconnect()

// On trouvera un autre objet ressemblant, le "MutationObserver" qui lui détecte les changements dans le DOM
// DOMの変更を検出する「MutationObserver」という同様のオブジェクトも見つかります。