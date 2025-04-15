"use strict";
/* 
    Le second type d'élément personnalisé, est l'élément personnalisé intégré.
    Il héritera d'un élément HTML particulier, ici la DIV.

    De plus on devra ajouter un troisième paramètre au define.
    Celui ci sera un objet avec la propriété "extends" indiquant le nom de la balise à hérité:
        {extends: "div"}, {extends: "img"}...

    2 番目のタイプのカスタム要素は、組み込みカスタム要素です。
    特定の HTML 要素 (ここでは DIV) から継承します。

    さらに、定義に 3 番目のパラメータを追加する必要があります。
    これは、継承するタグの名前を示す "extends" プロパティを持つオブジェクトになります。
        {extends: "div"}、{extends: "img"}...
*/
export class SuperDiv extends HTMLDivElement
{
    constructor()
    {
        super();
        this.#setStyle();
        this.addEventListener("click", this.hide);
    }
    #setStyle()
    {
        this.style.display = "block";
        this.style.overflow = "hidden";
        this.style.backgroundColor = this.getAttribute("bg")??"red"; //"bg"が無ければ"red"にする
        this.style.transition = "height 0.3s linear";

        this.sizes = this.getBoundingClientRect();
        this.style.height = this.sizes.height +"px";
    }
    hide()
    {        
        if(this.style.height == "1lh")
            this.style.height = this.sizes.height +"px";
        else
            this.style.height = "1lh";
    };

    /* 
        On peut aussi ajouter à nos éléments personnalisées, intégré ou autonome, des cycles de vie.
        Ce sont des fonctions prédéfinie qui se lanceront automatiquement à certains moments un peu comme le constructor.

        On trouvera par exemple :
            connectedCallback qui se déclenchera quand notre élément integrera le DOM.

        統合型または自律型のパーソナライズされた要素にライフサイクルを追加することもできます。
        これらは、コンストラクターに少し似ており、特定の時間に自動的に起動される定義済み関数です。

        たとえば、次のようなことがわかります。
            要素が DOM に入ったときに発生する connectedCallback
    */
    connectedCallback()
    {
        console.log("Je viens d'arriver dans le DOM");        
    }
    /* 
        disconnectedCallback() 
        Il se déclenchera quand l'élément quittera le DOM.
        要素が DOM から抜けたときに発動します。
    */
    disconnectedCallback()
    {
        console.log("Je viens de quitter le DOM");        
    }
    /* 
        adoptedCallback()
        Il se déclenchera lorsque l'élément sera adopté par un DOM différent. 
        (Rarement utilisé, il a surtout son intéret si on joue avec des iframe)
        要素が別の DOM に採用されたときに発動します。
        (めったに使用されませんが、iframe を操作する場合に特に便利です)
    */
    adoptedCallback()
    {
        console.log("Je viens d'arriver depuis un DOM différent");        
    }
    /* 
        attributeChangedCallback()
        Il se déclenchera lorsque les attributs indiqué changeront.
        Il prendra 3 arguments :
            - le nom de l'attribut modifié
            - la valeur de l'attribut avant modification
            - la valeur de l'attribut après modification
        
        Pour lui indiqué quels attributs surveillés, on l'accompagnera d'un getter static appelé "observedAttributes" qui retournera un tableau contenant le nom des attributs à surveiller.

        attributeChangedCallback()
        指定された属性が変更されたときにトリガーされます。
        3 つの引数が必要です:
            - 変更された属性の名前
            - 変更前の属性の値
            - 変更後の属性の値

        どの属性を監視するかを指定するために、監視する属性の名前を含む配列を返す「observedAttributes」という静的ゲッターを使用します。
    */
    attributeChangedCallback(name, old, now)
    {
        console.log("On a changé l'attribut : ", name);
        console.log("avant : ", old);
        console.log("après : ", now);        
    }
    static get observedAttributes()
    {
        return ["style"];
    }
}

customElements.define("super-div", SuperDiv, {extends: "div"});