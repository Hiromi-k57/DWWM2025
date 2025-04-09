"use strict";

/* 
    La programmation orienté objet consiste à développer notre code sous formes d'objets.
    La plupart des langages demander à passer par des constructeurs que l'on nomme "class", mais en JS, nous allons pouvoir créer notre objet manuellement.
        オブジェクト指向プログラミングとは、オブジェクトの形式でコードを開発することです。
        ほとんどの言語では「class」と呼ばれるコンストラクターを使用する必要がありますが、JS ではオブジェクトを手動で作成できます。
*/
const Person = {
    name: {
        prenom: "Maurice",
        nom: "Dupont"
    },
    age: 54,
    /* 
        Le setter permet de filtré une donnée avant de la sauvegarder dans l'objet.
        Sa déclaration ressemble à une fonction, mais avec le mot "set", et il prend forcément un paramètre.
        Mais son utilisation est faite comme une propriété normale "monObjet.monSetter = maValeur"
        Et non comme une fonction.
            setを使用すると、データをオブジェクトに保存する前にフィルタリングできます。
            その宣言は関数のように見えますが「set」という単語が付いており、必ずパラメータを取ります。
            しかし、その使用は通常のプロパティ「myObject.mySetter = myValue」として行われます。 そして関数としてではありません。
    */
    set setAge(a)
    {
        // this vaut l'objet englobant, donc ici "Person"
        // これは囲んでいるオブジェクトなので、ここでは「Person」
        this.age = parseInt(a);
    },
    set setNom(n)
    {
        this.name.nom = n.toUpperCase();
    },
    set setPrenom(p)
    {
        this.name.prenom = p[0].toUpperCase() + p.slice(1).toLowerCase();
    },
    /* 
        Nous avons aussi les getter qui permettent de récupérer une valeur.
        Là aussi la syntaxe ressemble à une fonction mais avec le mot clef "get"
        Ils ne prendrons PAS de paramètre.
        Mais ils DEVRONT retourner une valeur.
        Là aussi, ils s'utiliseront comme des propriétés et non des fonctions.
            値を取得できるgetもあります。
            ここでも構文は関数に似ていますが、キーワード「get」が付きます。
            パラメータは一切取りません。 ただし、値を返す必要があります。
            ここでも、関数ではなくプロパティとして使用されます。
    */
    get getFullName()
    {
        return `${this.name.prenom} ${this.name.nom}`;
    },
    /* 
        Nos objets peuvent aussi contenir des fonctions.
        Pour les déclarer, nous n'avons pas besoin du mot clef "function".
        ? Pour plus de précision, en POO on ne parle pas de "fonctions" d'un objet, mais de "methode" d'un objet.
        De la même manière qu'on ne parle pas de "variable" d'un objet mais de "propriété" d'un objet.
            オブジェクトには関数を含めることもできます。
            これらを宣言するには「function」キーワードは必要ありません。
            ?より正確に言うと、OOP ではオブジェクトの「関数」ではなく、オブジェクトの「メソッド」について話します。
            同様に、オブジェクトの「変数」ではなく、オブジェクトの「プロパティ」について話します。
    */
    salutation()
    {
        console.log(`Bonjour, je suis ${this.getFullName} et j'ai ${this.age} ans.`);        
    },
    anniversaire()
    {
        this.age++;
        this.salutation();
    }
};
export {Person};