"use strict";

import Human from "./Human.js";

/* 
    le mot clef "extends" permet l'héritage d'une classe.
    Cela permet à ma nouvelle classe d'obtenir presque toute les propriétés et méthodes de son parent.

    Seul les propriétés et méthodes privées ne sont pas héritées.

        「extends」キーワードはクラスからの継承を許可します。
        これにより、新しいクラスは親のほぼすべてのプロパティとメソッドを取得できるようになります。
        継承されないのはプライベート プロパティとメソッドのみです。
*/

export default class Dev extends Human
{
    constructor(prenom, nom, age, techniques)
    {
        /* 
            Si l'on modifie le constructor d'une classe qui a hérité,
            Il faut appeler la fonction "super()".
            Elle appellera le constructor du parent, de ce fait, il faudra lui donner les paramètres attendu par le parent.
                継承したクラスのコンストラクタを変更すると「super()」関数を呼び出す必要があります。
                親のコンストラクターを呼び出すので、親が期待するパラメーターを指定する必要があります。
        */
        super(prenom, nom, age);
        // console.log(this.#age);
        this.setTechniques = techniques;
    }
    set setTechniques(t)
    {
        if(Array.isArray(t))
        {
            this.tech = t;
        }else
        {
            this.tech = [t];
        }
    }
    get getTechniques()
    {
        return this.tech.join(", ");
    }

    /* 
        Si je nomme une méthode comme celle du parent.
        Celle du parent sera oubliée et il prendra la nouvelle méthode définie :
            !親と同じメソッドに名前を付けるとします。
             親のメソッドは忘れられ、新しく定義されたメソッドが採用されます。
    */
    salutation()
    {
        // Optionnellement je pourrais choisir d'appeler aussi la méthode du parent avant de la réécrire :
        // オプションで、書き換える前に親メソッドを呼び出すこともできます。
        super.salutation();
        console.log(`Je maîtrise ${this.getTechniques}.`);        
    }
}