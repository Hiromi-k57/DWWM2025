"use strict";

//? Alias
/* 
    Les alias permettent de créer nos propres types afin de pouvoir les réutiliser à plusieurs endroits.
    Très pratique quand notre type est un long objet contenant des tas de propriété.
    エイリアスを使用すると、独自の型を作成して、複数の場所で再利用できるようになります。 
    型が多くのプロパティを含む長いオブジェクトの場合に非常に便利です。
*/
type Fruit = {nom: string, couleur: string};

let f: Fruit ={nom: "Pomme", couleur:"rouge"};
let af:Fruit[] = [f, {nom:"Banane", couleur:"Jaune"}];

type Age = number|string;
// On peut utiliser un alia dans un autre
type Person = {nom: string, age: Age};

let p = {nom: "Maurice", age:54};

// Ici j'indique que le type "Name" a le même type que la propriété "nom" dans "Fruit".
//ここでは、「名前」型が「果物」のプロパティ「名前」と同じ型であることを示します。
type Name = Fruit["nom"];

let n : Name ="George" ;

// Ici j'indique que le type Full n'accepte que des string qui son les noms des propriété de Person.(age ou nom)
//ここで、Full型はPersonプロパティの名前（年齢または名前）である文字列のみを受け入れることを示します。
type Full = keyof Person;

let fp: Full =  "nom";

//La dernière possibilité est de créer un type à partir d'un élément déjà existant:
//最後の可能性は、既存の要素から型を作成することです。
let objet = {vieux: true, nom: "chaise", age:78};
type Item = typeof objet;

// ? Generics

function useless(arg: any): any
{
    return arg;
}

let machine = useless("Salut")
/* 
    Par défaut, typescript ne connaît pqs la logique interne d'une fonction.
    Si on lui dit que la valeur de retour est "any" , alors ça sera "any" et rien d'autre.

    Mais on peut lui indiquer grâce aux generics que la valeur de l'argument est le même que celui de la valeur de retour.
    デフォルトでは、TypeScript は関数の内部ロジックを認識しません。 
    戻り値が「any」であると伝えると、戻り値は「any」のみになります。 

    しかし、ジェネリックを使用すると、引数の値が戻り値と同じであることを伝えることができます。
*/

function usefull<MonType>(arg: MonType): MonType
{
    return arg;
}
let machine2 = usefull("Salut");
let machine3 = usefull(12);

function lastOf<TypeArr>(tab: TypeArr[]): TypeArr|undefined
{
    return tab.at(-1);
}
let last =lastOf([1,2,3,4,5]);

// On peut préciser que notre type possède certaines propriétés avec "extends"
//「extends」で型に特定のプロパティを持たせることを指定できます。
function logSize<Type2 extends {length: number}>(arg:Type2):Type2
{
    console.log(arg.length);
    return arg;
}
// Ici ma fonction n'accepte que des élément qui on une propriété "length"
// ここで私の関数は「長さ」プロパティを持つ要素のみを受け入れます
logSize([45]);
logSize("chaussette");
// logSize(100);

