"use strict";
import { Person } from "./person.js";


Person.age = "chaussette";
// ! ne fonctionne pas comme une fonction:
// Person.setAge("chaussette") //これは機能しないやり方
Person.setAge = "chaussette";// ここのchaussetteに意味は無くただコードが機能してるか見るために使っているだけ
Person.setNom = "foNtaIne";
Person.setPrenom = "pIeRrE";
// console.log(Person);
console.log(Person.getFullName);
// ! Et non pas :
// console.log(Person.getFullName());
Person.setAge = 54;
Person.salutation();
Person.anniversaire();

