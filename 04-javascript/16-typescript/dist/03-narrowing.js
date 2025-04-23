"use strict";
function birthday(age) {
    // age++;
    // Le narrowing est le fait de resserrer les possibilités
    // narrowing とは可能性を狭める行為である
    if (typeof age === "number") {
        // Ici age ne peut être qu'un nombre
        // ここで年齢は数値のみとなります
        age++;
    }
    else {
        // Ici il ne peut être qu'un string
        // ここでは文字列のみ使用可能
        age = parseInt(age) + 1;
    }
    return age + " ans";
}
function chaussette(droite, gauche) {
    if (droite === gauche) {
        // Ici la seule possibilité pour que ce soit égale, c'est que les deux soit de type string
        // ここで等しい唯一の可能性は、両方が文字列型である場合です
        console.log("Vous avez une paire !", droite, gauche);
    }
}
function clavier(e) {
    if (typeof e === "number") {
        // le type "never" indique que selon typescript, il est impossible d'arriver ici.
        // 「never」型は、TypeScript によれば、ここに到達することは不可能であることを示します。
        console.log(e);
    }
}
/*
    "a is Date" indique que la valeur de retour sera un boolean,
    et que ce boolean indiquera si le paramètre "a" est un objet "Date" ou non.
    
    「a is Date」は戻り値がブール値になることを示します。
    このブール値は、パラメータ「a」が「Date」オブジェクトであるかどうかを示します。
*/
// function isDate(a: any): boolean
function isDate(a) {
    return a instanceof Date;
}
function check(a) {
    if (isDate(a)) {
        a.getDate();
    }
}
