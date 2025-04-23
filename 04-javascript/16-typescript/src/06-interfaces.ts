"use strict";

type chausette = string;
// type Chausette =string|number;
/* 
    L'interface est à moitié une classe abstraite et à moitié un type.
    Elle va servir de plan de construction à une classe.
    interfaceは半分は抽象クラスclassで、半分は型typeです。 
    classの建設計画として役立ちます。
*/
interface Point
{
    x: number;
    y: number;
    get(): number;
}
//on peut ajouter de nouveaux éléments à une interface.
//新しい要素をインターフェースに追加できます。
interface Point
{
    z: number;
}
interface Document
{
    chaussette: string;
}
document.chaussette
//Pour utiliser une interface, on utilisera "implements"
//インターフェースを使用するには、「implements」を使用します
class Point3D implements Point
{
    x = 0;
    y = 1;
    z = 2;
    get()
    {
        return this.x;
    }
}
function show(p: Point){}
show(new Point3D());