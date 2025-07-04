"use strict";

/* 
    Les classes sont des plans de construction pour des objets.
    Certaines classes sont déjà intégré par défaut à JS:
        "Date", "FormData", "IntersectionObserver"...

    Mais on peut aussi créer les notres.
        Pour cela on utilisera le mot clef "class" suivi du nom que l'on aura choisi puis d'accolades "{}"
            * class MaSuperClass{}
    
    Quelques conventions de développement orienté objet :
        - Une classe par fichier.
        - Le nom de la classe qui commence par une majuscule.
        - Le nom du fichier qui est le même ou semblable à celui de la classe.

    Pour créer un nouvel objet à partir d'une classe (on parle d'instancier), 
        On appellera le nom de la classe suivi de parenthèse et précédé du mot clef "new"
    
    classはオブジェクトの構築計画です。
    いくつかのclassはすでにデフォルトで JS に統合されています。
        "Date", "FormData", "IntersectionObserver"...

    しかし、私たち自身で作成することもできます。
    これを行うには、キーワード「class」に続けて選択した名前を使用し、最後に中括弧「{}」を使用します。
        * class MySuperClass{}

    オブジェクト指向開発の規則をいくつか紹介します。
        - ファイルごとに 1 つの class
        - 大文字で始まるクラス名。
        - クラス名と同じか類似するファイルの名前。

    classから新しいオブジェクトを作成するには（インスタンス化instancierと呼ばれます）、
        クラス名の後に括弧を付け、先頭にキーワード「new」を付けて呼び出します。
*/


export default class Human
{
    /* 
        Dans une classe Javascript, nous allons trouver 3 types de propriétés (ou methods) :
            - La propriété ou méthode public,
            - La propriété ou méthode privée (précédé d'un "#"),
            - La propriété ou méthode static (précédé du mot clef "static")
        Javascript クラスには、次の 3 種類のプロパティ (またはメソッド) があります。
            - パブリック プロパティまたはméthode、
            - プライベート プロパティまたはméthode（先頭に「#」が付く）
            - 静的プロパティまたはméthode（先頭にキーワード「static」が付く）
                *メソッドとは「オブジェクトの中にある関数」のこと
    */
    // Les propriétés public sont accessible n'importe où sur l'objet instancié par la classe.   
        // パブリック プロパティは、クラスによってインスタンス化されたオブジェクトのどこからでもアクセスできます。
    vivant = true;
    // Les propriétés privées sont accessible uniquement à l'interieur de la classe
        // プライベートプロパティはクラス内でのみアクセス可能です
    #name = {};
    #age;
    // Les propriétés statics sont accessible uniquement sur la classe et non sur l'objet instancié.
        // 静的プロパティはクラス上でのみアクセス可能であり、インスタンス化されたオブジェクト上ではアクセスできません。
    static categorie = "Mammifère";
    /**
     * La méthode "constructor" est une méthode particulière qui est appelée automatiquement à chaque fois que l'on instancie un nouvel objet
     * 
     * "constructor" メソッドは、新しいオブジェクトがインスタンス化されるたびに自動的に呼び出される特別なメソッドです。
     */
    constructor(prenom, nom, age)
    {
        console.log("Coucou !", prenom, nom, age);
        // this.#age = age;
        // this.#name.prenom = prenom;
        // this.#name.nom = nom;

        // ? je passe mes propriétés à mes setters pour les filtrer
        // ?プロパティをセッターに渡してフィルタリングします
        this.#setAge = age;
        this.setPrenom = prenom;
        this.setNom = nom;
        /* 
            Les propriétés privées doivent être déclarées à l'avance.
            Mais on peut créer une nouvelle propriété public à tout moment :

            プライベートプロパティは事前に申告しなければなりません。
            ただし、いつでも新しいパブリック プロパティを作成できます。
        */
        this.naissance = new Date();
    }
    // exemple de méthode static :
    static description()
    {
        console.log(`Un humain est un ${this.categorie}, a généralement une tête, un buste, deux bras et deux jambes`);        
    }
    set setPrenom(p)
    {
        this.#name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    }
    set setNom(n)
    {
        this.#name.nom = n.toUpperCase();
    }
    // les setters peuvent aussi être privées :
    // セッターはプライベートにすることもできます:
    set #setAge(a)
    {
        this.#age = parseInt(a);
    }
    get getFullname()
    {
        return this.#name.prenom + " " + this.#name.nom;
    }
    get getAge()
    {
        return this.#age+ " ans";
    }
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullname} et j'ai ${this.getAge}.`);        
    }
    anniversaire()
    {
        this.#age++;
        this.salutation();
    }
}