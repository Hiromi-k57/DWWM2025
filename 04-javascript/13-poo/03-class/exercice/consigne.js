/* 
    
Créons des classes
Nous avons vu comment créer des classes en JS.

Vous allez maintenant devoir créer les votres. Chaque exercice est indépendant (sauf indication contraire).
Ils peuvent donc avoir chacun leur propre HTML et/ou CSS. Mais chacune des classes doit être dans un fichier à part importé par module.

"Balles rebondissantes"
Créons un canvas qui au clique fera apparaître une balle rebondissant sur les bords du canvas, de taille, de couleur, de vitesse et à une position aléatoire.
Chaque balles est créer à partir du classe, qui contiendra les propriétés susmentionné.
Elles auront aussi une méthode permettant de gérer la leur déplacement et une autre gérant leur dessin dans le canvas.
le script général ne s'occupera que de la création des balles et l'appelle de leur méthode dans une animation.

"Calculatrice"
Créer une calculatrice permettant les opérations les plus simple.
L'objet doit générer une calculatrice comportant les boutons pour les chiffres et les 4 opérations basiques (addition, soustraction, division et multiplication). Elle doit aussi contenir une touche "égale", une touche "virgule", une touche "delete" et une touche "clear".

La zone d'affichage doit être sur deux lignes, celle du bas affichera le nombre actuel, celle du haut affichera le nombre précédent et l'opération choisi.
Pour des raisons de lisibilité, il serait bon que la calculatrice affiche un espace entre chaque suite de 3 chiffres.

"Slider"
Nous avons vu que notre Slider construit en objet fonctionnait bien jusqu'à ce qu'on lui demande d'en créer un second. Ils entrent alors en conflit.
Avec une classe nous allons pouvoir arranger cela et avoir autant de Slider que voulu.
Transformez le slider en classe et créez deux slider différents.

"Easy Dom"
Créons une classe "EasyDom" qui aura pour rôle de faciliter notre manipulation du DOM.
Elle contiendra les méthodes suivantes :

・ "tag" Cette méthode facilitera la création d'élément HTML, elle prendra en argument :
- Un string contenant le nom d'une balise HTML

- Optionnellement un objet pouvant contenir les attributs ou texte que l'on souhaite ajouter.

・"select" Cette méthode facilitera le querySelector en effectuant à la fois le querySelector et le querySelectorAll, elle prendra en argument :

- Un string contenant le selecteur css souhaité.
- Optionnellement un parent autre que le document.

・"event" Cette méthode facilitera l'ajout d'évènement en pouvant accepter une collection d'élément html comme argument, elle prendra en argument :

- l'élément HTML (ou la collection) sur lequel on souhaite ajouter un évènement.
- l'évènement sous forme de string.
- la fonction à lancer lors de l'évènement.

Exemple d'utilisation :

const ed = new EasyDom();  
// Je crée une div avec 3 classes, un id et du html.
const div = ed.tag("div", { 
    class: "truc bidule machin",  
    id: "chaussette",  
    html: "test" 
    }); 
// Je récupère un élément html
const span = ed.select("span#specialSpan"); 
// Je récupère une collection d'élément html.
const spans = ed.select("span"); 
// J'ajoute un évènement sur une collection d'élément html 
ed.event(spans, "click", (e)=>console.log("collection")); 
// J'ajoute un évènement sur un seul élément html. 
ed.event(span, "click", (e)=>console.log("unique")); 

Bonus

Faites une seconde version du slider qui hérite de EasyDom et se sert de ses nouvelles méthodes.

*/

/* 
    クラスを作ろう
JS でクラスを作成する方法を見てきました。

今度は自分で作成する必要があります。各演習は独立しています（特に明記されていない限り）。
したがって、それぞれ独自の HTML や CSS を持つことができます。ただし、各クラスはモジュールによってインポートされた個別のファイルに存在する必要があります。

「バウンドボール」
クリックすると、ランダムなサイズ、色、速度、位置でキャンバスの端に跳ねるボールが表示されるキャンバスを作成しましょう。
各ボールは、前述のプロパティを含むクラスから作成されます。
また、動きを管理するための方法とキャンバスでの描画を管理するための方法も用意されます。
一般的なスクリプトは、ボールの作成とアニメーションでのメソッドの呼び出しのみを処理します。

"電卓"
最も簡単な演算が可能な計算機を作成します。
オブジェクトは、数字と 4 つの基本演算 (加算、減算、除算、乗算) 用のボタンを備えた計算機を生成する必要があります。また、「equals」キー、「comma」キー、「delete」キー、および「clear」キーも含まれている必要があります。

表示領域は 2 行になり、下の行には現在の番号が表示され、上の行には前の番号と選択された操作が表示されます。
読みやすさを考慮して、計算機では 3 桁の数字の間にスペースを入れて表示すると良いでしょう。

"スライダー"
オブジェクトで構築されたスライダーは、2 つ目のスライダーを作成するように要求するまでは正常に動作していることがわかりました。その後、彼らは衝突することになります。
クラスを使用すると、これを配置して、必要な数のスライダーを持つことができます。
スライダーをクラスに変換し、2 つの異なるスライダーを作成します。

「イージー・ドム」
DOM の操作を容易にする「EasyDom」クラスを作成しましょう。
以下のメソッドが含まれます。

・「タグ」このメソッドは HTML 要素の作成を容易にし、引数として以下を受け取ります。
- HTMLタグの名前を含む文字列

- オプションで、追加する属性またはテキストを含むことができるオブジェクト。

・「select」このメソッドは、querySelector と querySelectorAll の両方を実行することで querySelector を容易にし、引数として以下を受け取ります。

- 必要な CSS セレクターを含む文字列。
- オプションでドキュメント以外の親。

・「event」このメソッドは、HTML 要素のコレクションを引数として受け入れることができるため、イベントの追加が容易になります。引数として以下を受け取ります。

- イベントを追加する HTML 要素 (またはコレクション)。
- 文字列形式のイベント。
- イベント中に起動する機能。

使用例:

const ed = new EasyDom();
// 3 つのクラス、ID、および HTML を持つ div を作成します。
const div = ed.tag("div", {
クラス: "thingy thingamajig",
id: "靴下",
html: "テスト"
});
// HTML要素を取得します
const span = ed.select("span#specialSpan");
// HTML 要素のコレクションを取得します。
const spans = ed.select("span");
// HTML要素のコレクションにイベントを追加します
ed.event(spans, "click", (e)=>console.log("collection"));
// 単一の HTML 要素にイベントを追加します。
ed.event(span, "click", (e)=>console.log("unique"));

ボーナス

EasyDom から継承し、新しいメソッドを使用するスライダーの 2 番目のバージョンを作成します。
*/