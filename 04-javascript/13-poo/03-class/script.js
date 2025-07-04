import Dev from "./Dev.js";
import H from "./Human.js";

const monHumain = new H("Maurice", "Dupont", 54);
const monHumain2 = new H("Pierre", "Fontaine", 78);
const monDev = new Dev("Jean", "Bernard", 34, ["html", "css", "javascript"]);

// Dev.description()
console.log(monDev);
monDev.salutation();

console.log(monHumain, monHumain.vivant, H.categorie, H.vivant);

// monHumain.description();
H.description();
monHumain.salutation();
monHumain2.anniversaire();

const maDate = new Date();
// now() est une méthode static, elle existe sur la classe Date
// now() は静的メソッドで、Date クラスに存在します
console.log(Date.now());
// Mais pas sur l'objet instancié par Date.
// ただし、Date によってインスタンス化されたオブジェクトでは適用されません。
// console.log(maDate.now());

