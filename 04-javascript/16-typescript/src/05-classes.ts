"use strict";

class Truc
{
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 54
}
const t = new Truc();
t.prenom;
//t.nom;
//t.age;

class Machine extends Truc
{
    constructor()
    {
        /* 
        Les propriétés "protected" sont au même titre que les "private" inutilisable en dehors de la classe.
        Mais comme les "public" sont héritées.
        「protected」プロパティは、「private」プロパティと同様に、クラス外で使用することはできません。 
        しかし「public」は継承されるのです。
        */
        super();
        this.prenom;
        this.nom;
        // this.age;
    }

// il est possible d'indiquer le type de "this", cella n'est pas considéré comme un paramètre de la méthode.
//「this」の型を示すことは可能ですが、これはメソッドのパラメータとはみなされません。
    faireUnTruc(this: HTMLElement)
    {
        console.log(this);  
    }
}

class Collection<T>
{
    /*  
    Indiauer le type de propriété directement en paramètre du constructor
    Est un raccourci pour lui indiquer de sauvegarder ce paramètre en tant que propriété de la class.
    プロパティの型をコンストラクタパラメータとして直接指定する
    この設定をクラスのプロパティとして保存するように指示するショートカットです。 
*/
    

    constructor(private items: T[]){}

    addOne(arg: T): this
    {
        this.items.push(arg);
        return this;
    }
}
const c = new Collection([42,13,89,32]);

c.addOne(12).addOne(90).addOne(67);
//.addOne(90)
//.addOne(67);

class Triangle
{
    c1 = 5;
    c2 =9;
    c3 = 2;
}
class Rectangle
{
    c1 = 12;
    c2 = 24;
}
function getC1(arg: Rectangle)
{
    return arg.c1;
}
/* 
    Lorsque TS vérifie que le type du paramètre d'une fonction correspond.
    Il ne vérifi pas le nom de celui ci.
    Il vérifi si les propriétés de l'élément sont bien présents
    TS が関数のパラメータの型が一致するかどうかを確認するとき。 
    彼はこの人の名前をチェックしません。 
    要素のプロパティが存在するかどうかを確認します
*/

getC1(new Rectangle());
getC1(new Triangle());
getC1({c1: 34, c2: 43});

/* 
    Une classe abstraite ne peut pas être instancié.
    Elle a pour rôle uniquement d'être hérité à d'autres classes
    抽象クラスはインスタンス化できません。 
    その役割は他のクラスに継承されるだけです
*/
abstract class Polygone
{
    sides: {[key: string]: number}={}
    abstract surface(): number
    constSide()
    {
        return Object.keys(this.sides).length
    }
}
// new Polygone();
class Carre extends Polygone
{
    constructor(c: number)
    {
        super();
        this.sides.c =c;
    }
    /* 
        Une méthode abstraite, indique les paramètres et valeur de retour mais pas le corps de la fonction.
        Ce sera au rôle des héritiés de déclarer comment fonctionne la méthode.

        Dans notre xemple on indique que tous nos polygones ont une méthode "surface" qyu retourne un nombre.
        Mais le calcul de cette surface diffèreentre un Carré, un Triangle...

        抽象メソッドは、パラメータと戻り値を指定しますが、関数の本体は指定しません。 
        相続人がその方法を宣言することになります。 

        この例では、すべてのポリゴンに数値を返す「サーフェス」メソッドがあることを示します。 
        しかし、この表面の計算は正方形と三角形では異なります...
    */
    surface(): number
    {
        return this.sides.c * this.sides.c;
    }
}

